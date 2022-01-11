import perkDecks from 'data/abilities/perks'
import { TreeNames } from 'data/abilities/skills'
import armours, { ArmourData } from 'data/character/armours'
import characters from 'data/character/characters'
import equipments from 'data/character/equipment'
import masks from 'data/character/masks'
import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { ModificationSlot, Slot } from 'data/weapons/guns/weaponTypes'
import melees from 'data/weapons/melees'
import throwables, { ThrowableData } from 'data/weapons/throwables'
import { useAppSelector } from 'hooks/reduxHooks'
import { getCollectionList } from 'pages/Mask/Mask'
import findWeapon from 'utils/findWeapon'

import { charString } from './useBuildURLImport'

interface UseBuildURLExportProps {
	simple: boolean;
}

const useBuildURLExport = ({ simple }: UseBuildURLExportProps): string => {

	const state = useAppSelector(state => state)

	const encodeNumber = (index: number): string => {
		if (index <= charString.length) return charString[index]
		const overflow = ~~(index / charString.length)
		const remainder = index - (charString.length * overflow)
		return charString[overflow] + charString[remainder]
	}

	const buildToString = (): string => {
		const parameters = new URLSearchParams()
		parameters.set('s', encodeSkills())
		parameters.set('p', encodeString(perkDecks, state.abilities.perkdeck))
		parameters.set('a', encodeString(sortedArmour(), state.character.armour))
		parameters.set('t', encodeString(sortedThrowables(), state.weapons.throwable))
		parameters.set('d', encodeEquipment())
		if (!simple) {
			parameters.set('m', encodeMelee())
			parameters.set('k', encodeMask())
			parameters.set('c', encodeString(characters, state.character.character))
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
			Object.values(state.skills.trees[treeNames]).forEach(subtree => {
				let subtreeBasicChar = 0
				let subtreeAcedChar = 0

				const upgrades = [...Object.values(subtree.upgrades)];
				[upgrades[1], upgrades[2]] = [upgrades[2], upgrades[1]]; // semicolons needed
				[upgrades[3], upgrades[4]] = [upgrades[4], upgrades[3]]

				upgrades.reverse().forEach((skill, i) => {
					if (skill === 'basic') {
						subtreeBasicChar = subtreeBasicChar | 1
					}
					else if (skill === 'aced') {
						subtreeAcedChar = subtreeAcedChar | 1
					}
					if (i !== 5) {
						subtreeBasicChar = subtreeBasicChar << 1
						subtreeAcedChar = subtreeAcedChar << 1
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
		let newData = { ...throwables }
		delete newData['X1-ZAPer']
		newData = {
			...newData,
			'X1-ZAPer': throwables['X1-ZAPer']
		}
		return newData
	}

	const encodeEquipment = (): string => {
		const primaryValue = encodeString(equipments, state.character.equipment.primary)
		const equippedSecondary = state.character.equipment.secondary
		return equippedSecondary ? primaryValue + encodeString(equipments, equippedSecondary) : primaryValue
	}

	const encodeMelee = (): string => {
		const index = Object.keys(melees).findIndex(value => value === state.weapons.melee)
		return encodeNumber(index)
	}

	const encodeMask = (): string => {
		const collections = getCollectionList(),
			maskCollection = masks[state.character.mask].collection,
			collectionIndex = Object.keys(collections).findIndex(value => value === maskCollection),
			collectionValue = encodeNumber(collectionIndex),
			maskValue = collections[maskCollection].findIndex(value => value.name === state.character.mask)
		return collectionValue + charString[maskValue]
	}

	const encodeArmoury = (slot: Slot): string => {
		const data = slot === 'primary' ? primary : secondary
		const weapons = Object.values(state.armoury[slot]).slice(1).map(weapon => {
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
		const primaryIndex = Object.keys(state.armoury.primary).findIndex(value => +value === state.weapons.primary)
		const primaryValue = encodeNumber(primaryIndex)
		const secondaryIndex = Object.keys(state.armoury.secondary).findIndex(value => +value === state.weapons.secondary)
		const secondaryValue = encodeNumber(secondaryIndex)
		return `${primaryValue}-${secondaryValue}`
	}

	return buildToString()
}

export default useBuildURLExport