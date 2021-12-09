import { changePerkdeck } from 'actions/abilitiesAction'
import { addWeapon } from 'actions/armouryAction'
import { changeArmour, changeCharacter, changeEquipment, changeMask } from 'actions/characterAction'
import { changeSkillState, resetSkills } from 'actions/skillsAction'
import { changeMelee, changeThrowable, changeWeapon } from 'actions/weaponsAction'
import Button from 'components/Button'
import skillsData, { TreeNames } from 'data/abilities/skills'
import { Slot, Weapon } from 'data/weapons/guns/weaponTypes'
import { AbilitiesState } from 'defaultStates/abilitiesDefaultState'
import { ArmouryState } from 'defaultStates/armouryDefaultState'
import { CharacterState } from 'defaultStates/characterDefaultState'
import { SkillsState } from 'defaultStates/skillsDefaultState'
import { WeaponsState } from 'defaultStates/weaponsDefaultState'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useRef } from 'react'
import findWeapon from 'utils/findWeapon'
import { validateAbilities, validateArmoury, validateCharacter, validateSchema, validateSkills, validateWeapons } from 'utils/validateData'

import { Container, DownloadAnchor, FileInput } from './JsonIO-Elements'

interface JsonIOProps {
	setToggleSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DataToJson {
	abilities: AbilitiesState;
	armoury: ArmouryState;
	character: CharacterState;
	skills: SkillsState;
	weapons: WeaponsState;
}

export interface BuildJson {
	version: string;
	abilities: AbilitiesState;
	armoury: ArmouryState;
	character: CharacterState;
	skills: SkillsState;
	weapons: WeaponsState;
}

const JsonIO: React.FC<JsonIOProps> = ({ setToggleSettings }) => {

	const dispatch = useAppDispatch()

	const fileInputRef = useRef<HTMLInputElement>(null)
	const downloadAnchorRef = useRef<HTMLAnchorElement>(null)

	const { abilities, armoury, character, skills, weapons } = useAppSelector(state => state)

	const dataToJson = ({ abilities, armoury, character, skills, weapons }: DataToJson): BuildJson => {
		const filterBaseWeapon = (weapons: Record<number, Weapon>): Record<number, Weapon> => Object.fromEntries(Object.entries(weapons).filter(([id, _data]) => +id !== 0))
		const filtedArmoury: ArmouryState = {
			primary: filterBaseWeapon(armoury.primary),
			secondary: filterBaseWeapon(armoury.secondary)
		}

		const out = {
			version: '0.1.0',
			abilities,
			armoury: filtedArmoury,
			character,
			skills,
			weapons
		}
		return out
	}

	const jsonToData = (data: BuildJson): void => {
		if (!validateSchema(data)) return console.error('invalid import schema')

		const validAbilities = validateAbilities(data.abilities)
		dispatch(changePerkdeck(validAbilities.perkdeck))

		const validArmoury = validateArmoury(data.armoury)
		Object.entries(validArmoury).forEach(([slot, weapons]: [string, Record<number, Weapon>]) => {
			Object.values(weapons).forEach(weapon => {
				dispatch(addWeapon({
					slot: (slot as Slot),
					weapon: findWeapon(weapon.weaponFind),
					mods: weapon.modifications
				}))
			})
		})

		const validCharacter = validateCharacter(data.character)
		dispatch(changeMask(validCharacter.mask))
		dispatch(changeCharacter(validCharacter.character))
		dispatch(changeArmour(validCharacter.armour))
		dispatch(changeEquipment({
			slot: 'primary',
			equipment: validCharacter.equipment.primary
		}))
		dispatch(changeEquipment({
			slot: 'secondary',
			equipment: validCharacter.equipment.secondary
		}))

		const validSkills = validateSkills(data.skills)
		dispatch(resetSkills())
		Object.entries(validSkills.trees).forEach(([treeName, subtrees]) => {
			Object.entries(subtrees).forEach(([subtreeName, subree]) => {
				Object.entries(subree.upgrades).forEach(([skill, value]) => {
					if (value === 'locked' || value === 'available') return
					const treeData = skillsData[(treeName as TreeNames)]
					const subtreeData = treeData.subtrees.find(subtreeData => subtreeData.name === subtreeName) || treeData.subtrees[0]
					const skillData = subtreeData.upgrades.find(skillData => skillData.name === skill) || subtreeData.upgrades[0]
					dispatch(changeSkillState({
						tree: treeName,
						subtree: subtreeName,
						skill: skillData,
						oldLevel: value === 'basic' ? 'available' : 'basic',
						direction: 'upgrade'
					}))
				})
			})
		})

		const validWeapons = validateWeapons(data.weapons)
		dispatch(changeWeapon({
			slot: 'primary',
			weapon: Object.keys(armoury.primary).length + Object.keys(data.armoury.primary).indexOf(validWeapons.primary.toString())
		}))
		dispatch(changeWeapon({
			slot: 'secondary',
			weapon: Object.keys(armoury.secondary).length + Object.keys(data.armoury.secondary).indexOf(validWeapons.secondary.toString())
		}))
		dispatch(changeThrowable(validWeapons.throwable))
		dispatch(changeMelee(validWeapons.melee))

		setToggleSettings(false)
	}

	return (
		<Container>
			<Button text='Import' callback={() => {
				const node = fileInputRef.current
				node?.click()
			}} />
			<Button text='Export' callback={() => {
				const data = encodeURIComponent(JSON.stringify(dataToJson({ abilities, armoury, character, skills, weapons }), null, 2))
				const node = downloadAnchorRef.current
				node?.setAttribute('href', 'data:text/json;charset=utf-8,' + data)
				node?.click()
			}} />

			<FileInput ref={fileInputRef} type='file' accept='application/json' hidden onInput={event => {
				const reader = new FileReader()
				reader.onload = event => {
					if (typeof event.target?.result !== 'string') return
					const json = JSON.parse(event.target.result)
					jsonToData(json)
				}
				const files = (event.target as HTMLInputElement).files
				if (files) {
					reader.readAsText((files as FileList)[0])
				}
			}} />
			<DownloadAnchor ref={downloadAnchorRef} download='Build.json' hidden />
		</Container>
	)
}

export default JsonIO
