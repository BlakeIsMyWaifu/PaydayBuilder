import perkDecks, { PerkDeckList } from 'data/abilities/perks'
import skills, { TreeNames } from 'data/abilities/skills'
import armours, { ArmourList } from 'data/character/armours'
import characters, { CharacterList } from 'data/character/characters'
import equipments, { EquipmentList } from 'data/character/equipment'
import { MaskList } from 'data/character/masks'
import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { AllWeaponList, Modification, ModificationSlot, WeaponData, WeaponFind, WeaponType } from 'data/weapons/guns/weaponTypes'
import melees, { MeleeList } from 'data/weapons/melees'
import throwables, { ThrowableData, ThrowableList } from 'data/weapons/throwables'
import { useAppDispatch } from 'hooks/reduxHooks'
import { getCollectionList } from 'pages/Mask/Mask'
import { SetStateAction, useCallback, useEffect, useState } from 'react'
import { Dispatch } from 'react'
import { changePerkDeck } from 'slices/abilitiesSlice'
import { AddWeaponAction, addWeapon, resetArmoury } from 'slices/armourySlice'
import { addBuild } from 'slices/buildsSlice'
import { changeArmour, changeCharacter, changeEquipment, changeMask } from 'slices/characterSlice'
import { changeSkillState, resetSkills } from 'slices/skillsSlice'
import { changeMelee, changeThrowable, changeWeapon } from 'slices/weaponsSlice'
import findWeapon from 'utils/findWeapon'

export const charString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,@'

const decodeValues = (value: string): number => {
	if (value.length === 2) {
		const [firstValue, secondValue] = value.split('')
		return (decodeValues(firstValue) * charString.length) + decodeValues(secondValue)
	}
	return charString.indexOf(value)
}

const decompressData = (data: string): string => {
	let decompressed = ''
	for (let i = 0; i < data.length; i++) {
		if (data.charAt(i + 1) === '-') {
			decompressed += data.charAt(i).repeat(parseInt(data.charAt(i + 2)))
			i += 2
			continue
		}
		decompressed += data.charAt(i)
	}
	return decompressed
}

const decodePerkDeck = (value: string): PerkDeckList => {
	const perkIndex = decodeValues(value)
	return Object.values(perkDecks)[perkIndex].name
}

const decodeArmour = (value: string): ArmourList => {
	const armourIndex = decodeValues(value)
	const armoursList = Object.values(armours);
	[armoursList[1], armoursList[2]] = [armoursList[2], armoursList[1]]
	return armoursList[armourIndex].name
}

const decodeThrowable = (value: string): ThrowableList => {
	const throwableIndex = decodeValues(value)
	let sortedThrowables: Record<string, ThrowableData> = { ...throwables }
	delete sortedThrowables['X1-ZAPer']
	sortedThrowables = {
		...sortedThrowables,
		'X1-ZAPer': throwables['X1-ZAPer']
	}
	return Object.keys(sortedThrowables)[throwableIndex] as ThrowableList
}

const decodeEquipment = (value: string): [EquipmentList, EquipmentList | null] => {
	const primaryIndex = decodeValues(value.substring(0, 1))
	const secondaryIndex = value.length > 1 ? decodeValues(value.substring(1, 2)) : null
	const equipmentList = Object.keys(equipments)
	return [equipmentList[primaryIndex], secondaryIndex ? equipmentList[secondaryIndex] : null]
}

const decodeMelee = (value: string): MeleeList => {
	const meleeIndex = decodeValues(value)
	return Object.keys(melees)[meleeIndex]
}

const decodeMask = (value: string): MaskList => {
	return 'Cyber Monkey'
	// const collections = getCollectionList()
	// const [maskValue, ...collectionValue] = value.split('').reverse()
	// const collectionIndex = decodeValues(collectionValue.reverse().join(''))
	// const mask = Object.values(collections)[collectionIndex][decodeValues(maskValue)].name
	// return mask
}

const decodeCharacter = (value: string): CharacterList => {
	const characterIndex = decodeValues(value)
	return Object.keys(characters)[characterIndex]
}

export const decodeArmoury = (value: string, data: Record<string, Record<string, WeaponData>>): AddWeaponAction[] => {
	if (value === '_') return []

	const slot = Object.values(Object.values(data)[0])[0].inventorySlot
	const weaponBytes = decompressData(value).split('_')

	const weapons: AddWeaponAction[] = weaponBytes.map(weaponValues => {
		const [typeValue, gunValue, ...modsValue] = weaponValues.split('')
		const type = Object.keys(data)[decodeValues(typeValue)]
		const weaponName = Object.keys(data[type as keyof typeof data])[decodeValues(gunValue)]
		const weaponFind: WeaponFind = {
			slot,
			type: type as WeaponType,
			name: weaponName as AllWeaponList
		}
		const weaponData = findWeapon(weaponFind)

		const mods: Partial<Record<ModificationSlot, string>> = Object.fromEntries(modsValue.map((modValue, i): [string, string] => {
			if (modValue === '0') return ['', '']
			const weaponMods = Object.entries(weaponData.modifications)
			const modType = weaponMods[i][0]
			const modData = weaponMods[i][1][decodeValues(modValue) - 1]
			return [modType, (modData as Modification<string>).name]
		}).filter(v => v[0].length))

		return {
			slot,
			weapon: weaponData,
			mods
		}
	})

	return weapons
}

const decodeWeapons = (value: string): [number, number] => {
	const [primaryValue, secondaryValue] = value.split('-')
	return [decodeValues(primaryValue), decodeValues(secondaryValue)]
}

export interface LoadedBuild {
	data: string;
	addNewBuild: boolean;
}

const useBuildURLImport = (): Dispatch<SetStateAction<LoadedBuild>> => {

	const [{ data, addNewBuild }, setData] = useState<LoadedBuild>({ data: '', addNewBuild: false })

	const dispatch = useAppDispatch()

	const loadSkills = useCallback((skillsValue: string): void => {

		dispatch(resetSkills())

		const trees: TreeNames[] = ['mastermind', 'enforcer', 'technician', 'ghost', 'fugitive']

		trees.forEach(treeName => {
			Object.values(skills[treeName].subtrees).forEach(subtree => {

				const subtreeBasicChar = decodeValues(skillsValue.substring(0, 1))
				const subtreeAcedChar = decodeValues(skillsValue.substring(1, 2))
				let mask = 1

				const upgrades = [...Object.values(subtree.upgrades)];
				[upgrades[1], upgrades[2]] = [upgrades[2], upgrades[1]]; // semicolons needed
				[upgrades[3], upgrades[4]] = [upgrades[4], upgrades[3]]

				upgrades.forEach(skill => {

					const skillBasicBit = subtreeBasicChar & mask
					const skillAcedBit = subtreeAcedChar & mask

					if (skillBasicBit !== 0 || skillAcedBit !== 0) {
						dispatch(changeSkillState({
							tree: treeName,
							subtree: subtree.name,
							skill,
							oldLevel: 'available',
							direction: 'upgrade'
						}))

						if (skillAcedBit !== 0) {
							dispatch(changeSkillState({
								tree: treeName,
								subtree: subtree.name,
								skill,
								oldLevel: 'basic',
								direction: 'upgrade'
							}))
						}
					}
					mask <<= 1
				})

				skillsValue = skillsValue.slice(2)
			})
		})
	}, [dispatch])

	const loadBuildFromIterable = useCallback((input: string): void => {
		if (!input) return

		const split = input.split('/?')
		const parameters = new URLSearchParams(split[split.length - 1])
		if (!parameters.toString().length) return

		if (addNewBuild) {
			dispatch(addBuild({ changeToNewBuild: true }))
		}

		const decodeAndDispatch: Record<string, (value: string) => void> = {
			s: value => loadSkills(decompressData(value)),
			p: value => {
				const perkDeck = decodePerkDeck(value)
				dispatch(changePerkDeck(perkDeck))
			},
			a: value => {
				const armour = decodeArmour(value)
				dispatch(changeArmour(armour))
			},
			t: value => {
				const throwable = decodeThrowable(value)
				dispatch(changeThrowable(throwable))
			},
			d: value => {
				const [primary, secondary] = decodeEquipment(value)
				dispatch(changeEquipment({ slot: 'primary', equipment: primary }))
				dispatch(changeEquipment({ slot: 'secondary', equipment: secondary }))
			},
			m: value => {
				const melee = decodeMelee(value)
				dispatch(changeMelee(melee))
			},
			k: value => {
				const mask = decodeMask(value)
				dispatch(changeMask(mask))
			},
			c: value => {
				const character = decodeCharacter(value)
				dispatch(changeCharacter(character))
			},
			ap: value => {
				const weapons = decodeArmoury(value, primary)
				dispatch(resetArmoury('primary'))
				dispatch(changeWeapon({
					slot: 'primary',
					weapon: 0
				}))
				weapons.forEach(weapon => {
					dispatch(addWeapon(weapon))
				})
			},
			as: value => {
				const weapons = decodeArmoury(value, secondary)
				dispatch(resetArmoury('secondary'))
				dispatch(changeWeapon({
					slot: 'secondary',
					weapon: 0
				}))
				weapons.forEach(weapon => {
					dispatch(addWeapon(weapon))
				})
			},
			w: value => {
				const [primaryIndex, secondaryIndex] = decodeWeapons(value)
				dispatch(changeWeapon({
					slot: 'primary',
					weapon: primaryIndex
				}))
				dispatch(changeWeapon({
					slot: 'secondary',
					weapon: secondaryIndex
				}))
			}
		}

		parameters.forEach((value, key) => decodeAndDispatch[key](value))
	}, [addNewBuild, dispatch, loadSkills])

	useEffect(() => {
		loadBuildFromIterable(data)
	}, [data, loadBuildFromIterable])

	return setData
}

export default useBuildURLImport