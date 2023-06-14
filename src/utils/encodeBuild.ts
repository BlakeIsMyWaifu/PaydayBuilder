import perkDecks from 'data/abilities/perks'
import { skillTreeNames } from 'data/abilities/skillsMinimised'
import armours from 'data/character/armours'
import characters, { type CharacterList } from 'data/character/characters'
import equipments, { type EquipmentData } from 'data/character/equipment'
import { allMasks, type CategoryList } from 'data/character/masks'
import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { type Slot, type Weapon } from 'data/weapons/guns/weaponTypes'
import melees from 'data/weapons/melees'
import throwables, { type ThrowableData, type ThrowableList } from 'data/weapons/throwables'
import { type AbilityStateSlice } from 'state/useAbilitiesStore'
import { type ArmouryStateSlice } from 'state/useArmouryStore'
import { type CharacterStateSlice } from 'state/useCharacterStore'
import { type SkillsStateSlice } from 'state/useSkillsStore'
import { type WeaponsStateSlice } from 'state/useWeaponsStore'

import { charString, compressData, encodeNumber, encodeString } from './decodeEncodeUtils'
import findMask from './findMask'
import { findWeapon } from './findWeapon'
import { typedObject } from './typedObject'

export const encodeSkills = (trees: SkillsStateSlice['trees']): string => {
	let skillsString = ''

	skillTreeNames.forEach(treeNames => {
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

	return compressData(skillsString).replaceAll(',', '%2C').replaceAll('@', '%40')
}

export const encodePerkDeck = (perkDeck: AbilityStateSlice['perkDeck']): string => encodeString(perkDecks, perkDeck)

export const encodeCopycat = (copycatValues: AbilityStateSlice['copycat']): string => {
	const out = copycatValues.map(value => encodeNumber(value + 1))
	return compressData(out.join(''))
}

export const encodeArmour = (armour: CharacterStateSlice['armour']): string => {
	const sortedArmour = Object.fromEntries(Object.entries(armours).sort((a, b) => {
		return a[1].stats.armour - b[1].stats.armour
	}))
	return encodeString(sortedArmour, armour)
}

export const encodeThrowable = (throwable: WeaponsStateSlice['throwable']): string => {
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

export const encodeArmoury = (armoury: ArmouryStateSlice['primary']): string => {
	const { slot } = armoury[0].weaponFind
	const data = slot === 'primary' ? primary : secondary
	const weapons = Object.values(armoury).slice(1).map(weapon => {
		const weaponTypeValue = Object.keys(data).findIndex(value => value === weapon.weaponFind.type)
		const weaponValue = Object.keys(data[(weapon.weaponFind.type as keyof typeof data)]).findIndex(value => value === weapon.weaponFind.name)
		const weaponData = findWeapon(weapon.weaponFind)
		const modsValues = typedObject.keys(weaponData.modifications).map(modName => {
			if (!weapon.modifications[modName]) return '0'
			return charString[(weaponData.modifications[modName]?.findIndex(value => value.name === weapon.modifications[modName]) ?? -1) + 1]
		}).join('')
		return charString[weaponTypeValue] + charString[weaponValue] + modsValues
	}).map(compressData).join('_')
	return weapons.length ? weapons : '_'
}

export interface EncodeWeapons {
	primary: {
		id: number;
		armoury: Record<number, Weapon>;
	};
	secondary: {
		id: number;
		armoury: Record<number, Weapon>;
	};
}

export const encodeWeapons = (props: EncodeWeapons): string => {
	const encodeWeapon = (id: number, slot: Slot): string => {
		const { armoury } = props[slot]
		const index = Object.keys(armoury).findIndex(value => +value === id)
		return encodeNumber(index) ?? 0
	}
	return `${encodeWeapon(props.primary.id, 'primary')}-${encodeWeapon(props.secondary.id, 'secondary')}`
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

	const collectionId = Object.entries(allMasks[category]).find(([a]) => a === maskData.collection)?.[1].id ?? 0
	const encodedCollection = encodeNumber(collectionId)

	const collection = Object.values(allMasks[category]).find(collection => collection.id === collectionId)?.masks ?? {}
	const maskId = Object.keys(collection).findIndex(name => name === maskData.name)
	const encodedMaskId = encodeNumber(maskId)

	return `${categoryIndex}${encodedCollection}${encodedMaskId}`
}

export const encodeCharacter = (character: CharacterList): string => encodeString(characters, character)

export const encodeInfamy = (infamy: boolean): '0' | '1' => infamy ? '1' : '0'