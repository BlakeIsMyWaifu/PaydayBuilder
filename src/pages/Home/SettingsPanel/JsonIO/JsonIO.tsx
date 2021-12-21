import { changePerkdeck } from 'actions/abilitiesAction'
import { addWeapon } from 'actions/armouryAction'
import { changeArmour, changeCharacter, changeEquipment, changeMask } from 'actions/characterAction'
import { changeSkillState, resetSkills } from 'actions/skillsAction'
import { changeMelee, changeThrowable, changeWeapon } from 'actions/weaponsAction'
import Button from 'components/Button'
import { PerkDeckList } from 'data/abilities/perks'
import skillsData, { TreeNames } from 'data/abilities/skills'
import { Slot, Weapon } from 'data/weapons/guns/weaponTypes'
import abilitiesDefaultState, { AbilitiesState } from 'defaultStates/abilitiesDefaultState'
import { ArmouryState } from 'defaultStates/armouryDefaultState'
import characterDefaultState, { CharacterState } from 'defaultStates/characterDefaultState'
import { SkillsState } from 'defaultStates/skillsDefaultState'
import weaponsDefaultState, { WeaponsState } from 'defaultStates/weaponsDefaultState'
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

export type OptionalAbilitiesState = Partial<AbilitiesState>
export type OptionalArmouryState = Partial<ArmouryState>
export type OptionalCharacterState = Partial<CharacterState>
export type OptionalWeaponState = Partial<WeaponsState>

export interface BuildJson {
	version: string;
	abilities?: OptionalAbilitiesState;
	armoury?: OptionalArmouryState;
	character?: OptionalCharacterState;
	skills?: SkillsState;
	weapons?: OptionalWeaponState;
}

const JsonIO: React.FC<JsonIOProps> = ({ setToggleSettings }) => {

	const dispatch = useAppDispatch()

	const fileInputRef = useRef<HTMLInputElement>(null)
	const downloadAnchorRef = useRef<HTMLAnchorElement>(null)

	const state = useAppSelector(state => state)

	const dataToJson = (data: DataToJson): Partial<BuildJson> => {
		const filterObject = <T extends object>(obj: T): object => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v))
		const compareStates = (equipped: string, defaultState: string): string | undefined => equipped !== defaultState ? equipped : undefined

		const filtedAbilities: OptionalAbilitiesState = filterObject<OptionalAbilitiesState>({
			perkdeck: (compareStates(data.abilities.perkdeck, abilitiesDefaultState.perkdeck) as PerkDeckList)
		})

		const filterBaseWeapon = (weapons: Record<number, Weapon>): Record<number, Weapon> => Object.fromEntries(Object.entries(weapons).filter(([id, _data]) => +id !== 0))
		const filtedArmoury: OptionalArmouryState = filterObject<OptionalArmouryState>({
			primary: Object.keys(data.armoury.primary).length > 1 ? filterBaseWeapon(data.armoury.primary) : undefined,
			secondary: Object.keys(data.armoury.secondary).length > 1 ? filterBaseWeapon(data.armoury.secondary) : undefined
		})

		const filtedCharacter: OptionalCharacterState = filterObject<OptionalCharacterState>({
			mask: compareStates(data.character.mask, characterDefaultState.mask),
			character: compareStates(data.character.character, characterDefaultState.character),
			armour: compareStates(data.character.armour, characterDefaultState.armour)
		})
		if (data.character.equipment.primary !== characterDefaultState.equipment.primary || data.character.equipment.secondary) {
			filtedCharacter.equipment = data.character.equipment
		}

		const filtedWeapons: OptionalWeaponState = filterObject<OptionalWeaponState>({
			primary: data.weapons.primary,
			secondary: data.weapons.secondary,
			throwable: compareStates(data.weapons.throwable, weaponsDefaultState.throwable),
			melee: compareStates(data.weapons.melee, weaponsDefaultState.melee)
		})

		const out: Partial<BuildJson> = Object.fromEntries(Object.entries({
			version: '0.2.0',
			abilities: filtedAbilities,
			armoury: filtedArmoury,
			character: filtedCharacter,
			skills: data.skills.points !== 120 ? data.skills : {},
			weapons: filtedWeapons
		}).filter(([_, v]) => Object.keys(v).length))

		return out
	}

	const jsonToData = (data: BuildJson): void => {
		if (!validateSchema(data)) return console.error('invalid import schema')

		const validAbilities = validateAbilities(data.abilities || {})
		dispatch(changePerkdeck(validAbilities.perkdeck))

		const validArmoury = validateArmoury(data.armoury || {})
		Object.entries(validArmoury).forEach(([slot, weapons]: [string, Record<number, Weapon>]) => {
			Object.values(weapons).forEach(weapon => {
				dispatch(addWeapon({
					slot: (slot as Slot),
					weapon: findWeapon(weapon.weaponFind),
					mods: weapon.modifications
				}))
			})
		})

		const validCharacter = validateCharacter(data.character || {})
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

		if (data.skills) {
			const validSkills = validateSkills(data.skills)
			dispatch(resetSkills())
			Object.entries(validSkills.trees).forEach(([treeName, subtrees]) => {
				Object.entries(subtrees).forEach(([subtreeName, subree]) => {
					Object.entries(subree.upgrades).forEach(([skill, value]) => {
						if (value === 'locked' || value === 'available') return
						const treeData = skillsData[(treeName as TreeNames)]
						const subtreeData = treeData.subtrees[subtreeName] || treeData.subtrees[0]
						const skillData = subtreeData.upgrades[skill] || subtreeData.upgrades[0]
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
		}

		const validWeapons = validateWeapons(data.weapons || {})
		if (Object.keys(validArmoury.primary).length) {
			dispatch(changeWeapon({
				slot: 'primary',
				weapon: Object.keys(state.armoury.primary).length + Object.keys(validArmoury.primary).indexOf(validWeapons.primary.toString())
			}))
		}
		if (Object.keys(validArmoury.secondary).length) {
			dispatch(changeWeapon({
				slot: 'secondary',
				weapon: Object.keys(state.armoury.secondary).length + Object.keys(validArmoury.secondary).indexOf(validWeapons.secondary.toString())
			}))
		}
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
				const { abilities, armoury, character, skills, weapons } = state
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
