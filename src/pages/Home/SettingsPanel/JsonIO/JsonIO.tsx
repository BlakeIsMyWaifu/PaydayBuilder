import Button from 'components/Button'
import { AbilitiesState } from 'defaultStates/abilitiesDefaultState'
import { ArmouryState } from 'defaultStates/armouryDefaultState'
import { CharacterState } from 'defaultStates/characterDefaultState'
import { SkillsState } from 'defaultStates/skillsDefaultState'
import { WeaponsState } from 'defaultStates/weaponsDefaultState'
import { useAppSelector } from 'hooks'
import React, { useRef } from 'react'
import { RootState } from 'store'

import { Container, DownloadAnchor, FileInput } from './JsonIO-Elements'

interface DataToJson {
	abilities: AbilitiesState;
	armoury: ArmouryState;
	character: CharacterState;
	skills: SkillsState;
	weapons: WeaponsState;
}

interface BuildJson {
	version: string;
	abilities: AbilitiesState;
	armoury: ArmouryState;
	character: CharacterState;
	skills: SkillsState;
	weapons: WeaponsState;
}

const JsonIO: React.FC = () => {

	const fileInputRef = useRef<HTMLInputElement>(null)
	const downloadAnchorRef = useRef<HTMLAnchorElement>(null)

	const { abilities, armoury, character, skills, weapons } = useAppSelector(state => state)

	const dataToJson = ({ abilities, armoury, character, skills, weapons }: DataToJson): BuildJson => {
		const out = {
			version: '0.1.0',
			abilities,
			armoury,
			character,
			skills,
			weapons
		}
		return out
	}

	const jsonToData = ({ abilities, armoury, character, skills, weapons }: BuildJson): void => {
		const serializedState = localStorage.getItem('persistantState') || ''
		const state: RootState = JSON.parse(serializedState)
		state.abilities = abilities
		state.armoury = armoury
		state.character = character
		state.skills = skills
		state.weapons = weapons
		localStorage.setItem('persistantState', JSON.stringify(state))
		window.location.reload()
		return
	}

	return (
		<Container>
			<Button text='Import' callback={() => {
				const node = fileInputRef.current
				node?.click()
			}} />
			<Button text='Export' callback={() => {
				const data = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(dataToJson({ abilities, armoury, character, skills, weapons })))
				const node = downloadAnchorRef.current
				node?.setAttribute('href', data)
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
