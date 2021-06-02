import { changePerkdeck } from 'actions/abilitiesAction'
import { changeArmour, changeEquipment } from 'actions/characterAction'
import { changeSkillState } from 'actions/skillsAction'
import { changeThrowable } from 'actions/weaponsAction'
import perkData from 'data/abilities/perks'
import skillsData, { treeNames } from 'data/abilities/skills'
import armourData from 'data/character/armours'
import equipmentData from 'data/character/equipment'
import throwableData from 'data/weapons/throwables'
import { useAppDispatch } from 'hooks'
import React from 'react'
import styled from 'styled-components'

const BuildInput = styled.input`
	width: 600px;
	height: 2rem;
	font-size: 2rem;
	margin-left: 20px;
	user-select: text !important;
	background-color: transparent;
	color: #fff;
`

const BuildIO: React.FC = () => {

	const dispatch = useAppDispatch()

	const charString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,@'

	const decodeByte = (char: string): number => {
		return charString.indexOf(char)
	}

	const decompressData = (data: string) => {
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

	const loadBuildFromIterable = (input: URLSearchParams) => {
		const parameters = new URLSearchParams(input)
		dispatch({type: 'RESET'})
		for (const [key, value] of parameters) {
			const decompressed = decompressData(value)
			switch(key) {
				case 's':
					loadSkills(decompressed)
					break
				case 'p':
					loadPerkDeck(decodeByte(decompressed))
					break
				case 'a':
					loadArmour(+decompressed)
					break
				case 't':
					loadThrowable(+decodeByte(decompressed))
					break
				case 'd':
					loadEquipment(decompressed)
			}
		}
	}

	const loadSkills = (skills: string) => {

		const trees: treeNames[] = ['mastermind', 'enforcer', 'technician', 'ghost', 'fugitive']

		trees.forEach((treeName) => {
			Object.values(skillsData[treeName].subtrees).forEach(subtree => {

				const subtreeBasicChar = decodeByte(skills.substr(0, 1))
				const subtreeAcedChar = decodeByte(skills.substr(1, 1))
				let mask = 1

				const upgrades = [...subtree.upgrades];
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
				skills = skills.substr(2)
			})
		})
	}

	const loadPerkDeck = (perkIndex: number) => {
		dispatch(changePerkdeck(perkData[perkIndex]))
	}

	const loadArmour = (armourIndex: number) => {
		const armours = [...armourData];
		[armours[1], armours[2]] = [armours[2], armours[1]]
		dispatch(changeArmour(armours[armourIndex]))
	}

	const loadThrowable = (throwableIndex: number) => {
		const shockerIndex = throwableData.findIndex(throwable => throwable.name === 'X1-ZAPer')
		throwableData.splice(shockerIndex, 1)
		dispatch(changeThrowable(throwableData[throwableIndex]))
	}

	const loadEquipment = (equipment: string) => {
		const primaryEquipment = parseInt(equipment.substr(0, 1))
		const secondaryEquipment = parseInt(equipment.length > 1 ? equipment.substr(1, 1) : '0')
		
		dispatch(changeEquipment([equipmentData[primaryEquipment], 'primary']))
		if (secondaryEquipment) dispatch(changeEquipment([equipmentData[secondaryEquipment], 'secondary']))
	}

	const onInputEnter = (event: any) => {
		if (event.key === 'Enter') {
			loadBuildFromIterable(event.currentTarget.value?.replace('https://pd2builder.netlify.app/?', ''))
			event.currentTarget.value = ''
		}
	}

	return (
		<BuildInput type={'text'} placeholder={'temp pd2builder input'} onKeyDown={onInputEnter} />
	)
}

export default BuildIO