import perkDecks, { PerkDeckList } from 'data/abilities/perks'
import { TreeNames } from 'data/abilities/skills'
import armours, { ArmourList } from 'data/character/armours'
import characters, { CharacterList } from 'data/character/characters'
import equipments, { EquipmentData } from 'data/character/equipment'
import { CategoryList, allMasks } from 'data/character/masks'
import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { ModificationSlot, Slot, Weapon } from 'data/weapons/guns/weaponTypes'
import melees from 'data/weapons/melees'
import throwables, { ThrowableData, ThrowableList } from 'data/weapons/throwables'
import { CopycatValues } from 'state/useAbilitiesStore'
import { useArmouryStore } from 'state/useArmouryStore'
import { CharacterStateSlice } from 'state/useCharacterStore'
import { SkillsStateSlice } from 'state/useSkillsStore'
import { WeaponsStateSlice } from 'state/useWeaponsStore'

import { charString } from './decodeBuild'
import findMask from './findMask'
import findWeapon from './findWeapon'

const encodeString = (data: object, equipped: string): string => {
	const index = Object.keys(data).findIndex(value => value === equipped)
	return charString[index]
}

const encodeNumber = (index: number): string => {
	if (index <= charString.length) return charString[index]
	const overflow = ~~(index / charString.length)
	const remainder = index - (charString.length * overflow)
	return charString[overflow] + charString[remainder]
}

const compressData = (data: string): string => {
	let count = 1
	let currentChar = data[0]
	let compressed = ''

	for (let i = 1; i < data.length + 1; i++) {
		const value = data[i]
		if (value === currentChar) {
			if (count > 8) {
				compressed += `${currentChar}-${count}`
				count = 0
			}
			count++
			continue
		}
		compressed += count > 3 ? `${currentChar}-${count}` : currentChar.repeat(count)
		currentChar = value
		count = 1
	}

	return compressed
}

export const encodeSkills = (trees: SkillsStateSlice['trees']): string => {
	let skillsString = ''

	const treeNames: TreeNames[] = ['mastermind', 'enforcer', 'technician', 'ghost', 'fugitive']

	treeNames.forEach(treeNames => {
		Object.values(trees[treeNames]).forEach(subtree => {
			let subtreeBasicChar = 0
			let subtreeAcedChar = 0

			const upgrades = [...Object.values(subtree.upgrades)];
			[upgrades[1], upgrades[2]] = [upgrades[2], upgrades[1]]; // semicolons needed
			[upgrades[3], upgrades[4]] = [upgrades[4], upgrades[3]]

			upgrades.reverse().forEach((skill, i) => {
				if (skill === 'basic') {
					subtreeBasicChar |= 1
				}
				else if (skill === 'aced') {
					subtreeAcedChar |= 1
				}
				if (i !== 5) {
					subtreeBasicChar <<= 1
					subtreeAcedChar <<= 1
				}
			})

			skillsString += charString[subtreeBasicChar] + charString[subtreeAcedChar]
		})
	})

	return compressData(skillsString)
}

export const encodePerkDeck = (perkDeck: PerkDeckList): string => encodeString(perkDecks, perkDeck)

export const encodeCopycat = (copycatValues: CopycatValues): string => {
	const out = copycatValues.map(value => encodeNumber(value + 1))
	return compressData(out.join(''))
}

export const encodeArmour = (armour: ArmourList): string => {
	const sortedArmour = Object.fromEntries(Object.entries(armours).sort((a, b) => {
		return a[1].stats.armour - b[1].stats.armour
	}))
	return encodeString(sortedArmour, armour)
}

export const encodeThrowable = (throwable: ThrowableList): string => {
	let sortedThrowables: Partial<Record<ThrowableList, ThrowableData>> = structuredClone(throwables)
	const removedThrowables: ThrowableList[] = ['X1-ZAPer', 'Leech Ampule', 'Viper Grenade', 'Adhesive Grenade', 'Snowball']
	removedThrowables.forEach(removedThrowable => {
		delete sortedThrowables[removedThrowable]
	})
	sortedThrowables = {
		...sortedThrowables,
		'X1-ZAPer': throwables['X1-ZAPer'],
		'Leech Ampule': throwables['Leech Ampule'],
		'Viper Grenade': throwables['Viper Grenade'],
		'Adhesive Grenade': throwables['Adhesive Grenade'],
		'Snowball': throwables.Snowball
	}
	return encodeString(sortedThrowables, throwable)
}

export const encodeEquipment = (equipment: CharacterStateSlice['equipment']): string => {
	let sortedEquipment: Record<string, EquipmentData> = structuredClone(equipments)
	delete sortedEquipment['Ordnance Bag']
	sortedEquipment = {
		...sortedEquipment,
		'Ordnance Bag': equipments['Ordnance Bag']
	}
	const primaryValue = encodeString(sortedEquipment, equipment.primary)
	const equippedSecondary = equipment.secondary
	return equippedSecondary ? primaryValue + encodeString(sortedEquipment, equippedSecondary) : primaryValue
}

export const encodeArmoury = (armoury: Record<number, Weapon>): string => {
	const { slot } = armoury[0].weaponFind
	const data = slot === 'primary' ? primary : secondary
	const weapons = Object.values(armoury).slice(1).map(weapon => {
		const weaponTypeValue = Object.keys(data).findIndex(value => value === weapon.weaponFind.type)
		const weaponValue = Object.keys(data[(weapon.weaponFind.type as keyof typeof data)]).findIndex(value => value === weapon.weaponFind.name)
		const weaponData = findWeapon(weapon.weaponFind)
		const modsValues = Object.keys(weaponData.modifications).map(modNameString => {
			const modName = modNameString as ModificationSlot
			if (!weapon.modifications[modName]) return '0'
			return charString[(weaponData.modifications[modName]?.findIndex(value => value.name === weapon.modifications[modName]) ?? -1) + 1]
		}).join('')
		return charString[weaponTypeValue] + charString[weaponValue] + modsValues
	}).map(compressData).join('_')
	return weapons.length ? weapons : '_'
}

export const encodeWeapons = (primaryId: number, secondaryId: number): string => {
	const encodeWeapon = (id: number, slot: Slot): string => {
		// This *might* cause problems later
		// This is the only encoder that loads from a store
		const armoury = useArmouryStore.getState()[slot]
		const index = Object.keys(armoury).findIndex(value => +value === id)
		return encodeNumber(index)
	}
	return `${encodeWeapon(primaryId, 'primary')}-${encodeWeapon(secondaryId, 'secondary')}`
}

export const encodeMelee = (melee: WeaponsStateSlice['melee']): string => {
	const index = Object.keys(melees).findIndex(value => value === melee)
	return encodeNumber(index)
}

export const encodeMask = (mask: CharacterStateSlice['mask']): string => {
	const maskData = findMask(mask)

	const rarity = maskData.rarity.toLowerCase()
	const category = rarity === 'paid' ? 'dlc' : (rarity === 'free' ? 'normal' : rarity) as CategoryList
	const categoryIndex = ['community', 'normal', 'dlc', 'event', 'collaboration', 'infamous'].findIndex(cat => cat === category)

	const collectionIndex = Object.entries(allMasks[category]).find(([a]) => a === maskData.collection)?.[1].id ?? 0
	const encodedCollection = encodeNumber(collectionIndex)

	const collection = Object.values(allMasks[category])[collectionIndex].masks
	const maskId = Object.keys(collection).findIndex(name => name === maskData.name)
	const encodedMaskId = encodeNumber(maskId)

	return `${categoryIndex}${encodedCollection}${encodedMaskId}`
}

export const encodeCharacter = (character: CharacterList): string => encodeString(characters, character)