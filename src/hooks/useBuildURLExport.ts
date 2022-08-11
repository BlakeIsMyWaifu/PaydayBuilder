import perkDecks from 'data/abilities/perks'
import { TreeNames } from 'data/abilities/skills'
import armours, { ArmourData } from 'data/character/armours'
import characters from 'data/character/characters'
import equipments from 'data/character/equipment'
import { CategoryList, allMasks } from 'data/character/masks'
import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { ModificationSlot, Slot } from 'data/weapons/guns/weaponTypes'
import melees from 'data/weapons/melees'
import throwables, { ThrowableData } from 'data/weapons/throwables'
import { useAbilityStore } from 'state/useAbilitiesStore'
import { useArmouryStore } from 'state/useArmouryStore'
import { useCharacterStore } from 'state/useCharacterStore'
import { useSkillsStore } from 'state/useSkillsStore'
import { useWeaponsStore } from 'state/useWeaponsStore'
import findMask from 'utils/findMask'
import findWeapon from 'utils/findWeapon'

import { charString } from './useBuildURLImport'

interface UseBuildURLExportProps {
	simple: boolean;
}

const useBuildURLExport = ({ simple }: UseBuildURLExportProps): string => {

	const abilities = useAbilityStore()
	const character = useCharacterStore()
	const weapons = useWeaponsStore()
	const skills = useSkillsStore()
	const armoury = useArmouryStore()

	const encodeNumber = (index: number): string => {
		if (index <= charString.length) return charString[index]
		const overflow = ~~(index / charString.length)
		const remainder = index - (charString.length * overflow)
		return charString[overflow] + charString[remainder]
	}

	const buildToString = (): string => {
		const parameters = new URLSearchParams()
		parameters.set('s', encodeSkills())
		parameters.set('p', encodeString(perkDecks, abilities.perkdeck))
		parameters.set('a', encodeString(sortedArmour(), character.armour))
		parameters.set('t', encodeString(sortedThrowables(), weapons.throwable))
		parameters.set('d', encodeEquipment())
		if (!simple) {
			parameters.set('m', encodeMelee())
			parameters.set('k', encodeMask())
			parameters.set('c', encodeString(characters, character.character))
			parameters.set('ap', encodeArmoury('primary'))
			parameters.set('as', encodeArmoury('secondary'))
			parameters.set('w', encodeWeapons())
		}
		return parameters.toString()
	}

	const encodeSkills = (): string => {
		let skillsString = ''

		const trees: TreeNames[] = ['mastermind', 'enforcer', 'technician', 'ghost', 'fugitive']

		trees.forEach(treeNames => {
			Object.values(skills.trees[treeNames]).forEach(subtree => {
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

	const encodeString = (data: object, equipped: string): string => {
		const index = Object.keys(data).findIndex(value => value === equipped)
		return charString[index]
	}

	const sortedArmour = (): Record<string, ArmourData> => {
		return Object.fromEntries(Object.entries(armours).sort((a, b) => {
			return a[1].stats.armour - b[1].stats.armour
		}))
	}

	const sortedThrowables = (): Record<string, ThrowableData> => {
		const newData: Record<string, ThrowableData> = { ...throwables }
		delete newData['X1-ZAPer']
		return {
			...newData,
			'X1-ZAPer': throwables['X1-ZAPer']
		}
	}

	const encodeEquipment = (): string => {
		const primaryValue = encodeString(equipments, character.equipment.primary)
		const equippedSecondary = character.equipment.secondary
		return equippedSecondary ? primaryValue + encodeString(equipments, equippedSecondary) : primaryValue
	}

	const encodeMelee = (): string => {
		const index = Object.keys(melees).findIndex(value => value === weapons.melee)
		return encodeNumber(index)
	}

	const encodeMask = (): string => {
		const mask = findMask(character.mask)

		const rarity = mask.rarity.toLowerCase()
		const category = rarity === 'paid' ? 'dlc' : (rarity === 'free' ? 'normal' : rarity) as CategoryList
		const categoryIndex = ['community', 'normal', 'dlc', 'event', 'collaboration', 'infamous'].findIndex(cat => cat === category)

		const collectionIndex = Object.entries(allMasks[category]).find(([a]) => a === mask.collection)?.[1].id ?? 0
		const encodedCollection = encodeNumber(collectionIndex)

		const collection = Object.values(allMasks[category])[collectionIndex].masks
		const maskId = Object.keys(collection).findIndex(name => name === mask.name)
		const encodedMaskId = encodeNumber(maskId)

		return `${categoryIndex}${encodedCollection}${encodedMaskId}`
	}

	const encodeArmoury = (slot: Slot): string => {
		const data = slot === 'primary' ? primary : secondary
		const weapons = Object.values(armoury[slot]).slice(1).map(weapon => {
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

	const encodeWeapons = (): string => {
		const primaryIndex = Object.keys(armoury.primary).findIndex(value => +value === weapons.primary)
		const primaryValue = encodeNumber(primaryIndex)
		const secondaryIndex = Object.keys(armoury.secondary).findIndex(value => +value === weapons.secondary)
		const secondaryValue = encodeNumber(secondaryIndex)
		return `${primaryValue}-${secondaryValue}`
	}

	return buildToString()
}

export default useBuildURLExport