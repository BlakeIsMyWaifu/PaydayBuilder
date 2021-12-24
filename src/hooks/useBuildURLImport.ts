import { changePerkdeck } from 'actions/abilitiesAction'
import { addWeapon, resetArmoury } from 'actions/armouryAction'
import { changeArmour, changeCharacter, changeEquipment, changeMask } from 'actions/characterAction'
import { changeSkillState, resetSkills } from 'actions/skillsAction'
import { changeMelee, changeThrowable, changeWeapon } from 'actions/weaponsAction'
import perkDecks from 'data/abilities/perks'
import skills, { TreeNames } from 'data/abilities/skills'
import armours from 'data/character/armours'
import characters from 'data/character/characters'
import equipments from 'data/character/equipment'
import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { AllWeaponList, Modification, ModificationSlot, Slot, WeaponFind, WeaponType } from 'data/weapons/guns/weaponTypes'
import melees from 'data/weapons/melees'
import throwables from 'data/weapons/throwables'
import { useAppDispatch } from 'hooks/reduxHooks'
import { getCollectionList } from 'pages/Mask/Mask'
import { useEffect } from 'react'
import findWeapon from 'utils/findWeapon'

const useBuildURLImport = (data: string): void => {

	useEffect(() => {
		loadBuildFromIterable(data)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data])

	const dispatch = useAppDispatch()

	const charString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,@'

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

	const loadBuildFromIterable = (input: string): void => {
		const split = input.split('/?')
		const parameters = new URLSearchParams(split[split.length - 1])
		for (const [key, value] of parameters) {
			switch (key) {
				case 's':
					loadSkills(decompressData(value))
					break
				case 'p':
					loadPerkDeck(decodeValues(value))
					break
				case 'a':
					loadArmour(decodeValues(value))
					break
				case 't':
					loadThrowable(decodeValues(value))
					break
				case 'd':
					loadEquipment(value)
					break
				case 'm':
					loadMelee(decodeValues(value))
					break
				case 'k':
					loadMask(value)
					break
				case 'c':
					loadCharacter(decodeValues(value))
					break
				case 'ap':
					loadArmoury(decompressData(value), 'primary')
					break
				case 'as':
					loadArmoury(decompressData(value), 'secondary')
					break
				case 'w':
					loadWeapons(value)
			}
		}
	}

	const loadSkills = (skillsValue: string): void => {

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
							skill: skill,
							oldLevel: 'available',
							direction: 'upgrade'
						}))

						if (skillAcedBit !== 0) {
							dispatch(changeSkillState({
								tree: treeName,
								subtree: subtree.name,
								skill: skill,
								oldLevel: 'basic',
								direction: 'upgrade'
							}))
						}
					}
					mask = mask << 1
				})

				skillsValue = skillsValue.slice(2)
			})
		})
	}

	const loadPerkDeck = (perkIndex: number): void => {
		dispatch(changePerkdeck(Object.values(perkDecks)[perkIndex].name))
	}

	const loadArmour = (armourIndex: number): void => {
		const armoursList = Object.values(armours);
		[armoursList[1], armoursList[2]] = [armoursList[2], armoursList[1]]
		dispatch(changeArmour(armoursList[armourIndex].name))
	}

	const loadThrowable = (throwableIndex: number): void => {
		let sortedThrowables = { ...throwables }
		delete sortedThrowables['X1-ZAPer']
		sortedThrowables = {
			...sortedThrowables,
			'X1-ZAPer': throwables['X1-ZAPer']
		}
		dispatch(changeThrowable(Object.keys(sortedThrowables)[throwableIndex]))
	}

	const loadEquipment = (equipmentValues: string): void => {
		const primaryEquipment = parseInt(equipmentValues.substring(0, 1))
		const secondaryEquipment = parseInt(equipmentValues.length > 1 ? equipmentValues.substring(1, 2) : '0')

		dispatch(changeEquipment({ equipment: Object.keys(equipments)[primaryEquipment], slot: 'primary' }))
		if (secondaryEquipment) dispatch(changeEquipment({ equipment: Object.keys(equipments)[secondaryEquipment], slot: 'secondary' }))
	}

	const loadMelee = (meleeIndex: number): void => {
		dispatch(changeMelee(Object.values(melees)[meleeIndex].name))
	}

	const loadMask = (maskValues: string): void => {
		const collections = getCollectionList()
		const [maskValue, ...collectionValue] = maskValues.split('').reverse()
		const collectionIndex = decodeValues(collectionValue.reverse().join(''))
		const mask = Object.values(collections)[collectionIndex][decodeValues(maskValue)].name
		dispatch(changeMask(mask))
	}

	const loadCharacter = (characterIndex: number): void => {
		dispatch(changeCharacter(Object.keys(characters)[characterIndex]))
	}

	const loadArmoury = (armouryValues: string, slot: Slot): void => {
		dispatch(resetArmoury(slot))
		dispatch(changeWeapon({
			slot,
			weapon: 0
		}))
		if (armouryValues === '_') return
		const data = slot === 'primary' ? primary : secondary
		const weaponBytes = armouryValues.split('_')
		weaponBytes.forEach(weaponValues => {
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
			}).filter(value => value[0].length))
			dispatch(addWeapon({
				slot,
				weapon: weaponData,
				mods
			}))
		})
	}

	const loadWeapons = (weaponBytes: string): void => {
		const [primaryByte, secondaryByte] = weaponBytes.split('-')
		dispatch(changeWeapon({
			slot: 'primary',
			weapon: decodeValues(primaryByte)
		}))
		dispatch(changeWeapon({
			slot: 'secondary',
			weapon: decodeValues(secondaryByte)
		}))
	}
}

export default useBuildURLImport