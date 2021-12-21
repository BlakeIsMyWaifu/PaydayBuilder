import { changePerkdeck } from 'actions/abilitiesAction'
import { changeArmour, changeEquipment } from 'actions/characterAction'
import { changeSkillState, resetSkills } from 'actions/skillsAction'
import { changeThrowable } from 'actions/weaponsAction'
import TextInput from 'components/TextIO/TextInput'
import perkDecks from 'data/abilities/perks'
import skills, { TreeNames } from 'data/abilities/skills'
import armours from 'data/character/armours'
import equipments from 'data/character/equipment'
import throwables from 'data/weapons/throwables'
import { useAppDispatch } from 'hooks'
import React from 'react'

interface BuildIOProps {
	setToggleSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const BuildIO: React.FC<BuildIOProps> = ({ setToggleSettings }) => {

	const dispatch = useAppDispatch()

	const charString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,@'

	const decodeByte = (char: string): number => {
		return charString.indexOf(char)
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
		if (!input) return
		const parameters = new URLSearchParams(input.split('/?')[1])
		for (const [key, value] of parameters) {
			const decompressed = decompressData(value)
			switch (key) {
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

		setToggleSettings(false)
	}

	const loadSkills = (skillsString: string): void => {

		dispatch(resetSkills())

		const trees: TreeNames[] = ['mastermind', 'enforcer', 'technician', 'ghost', 'fugitive']

		trees.forEach(treeName => {
			Object.values(skills[treeName].subtrees).forEach(subtree => {

				const subtreeBasicChar = decodeByte(skillsString.substring(0, 1))
				const subtreeAcedChar = decodeByte(skillsString.substring(1, 2))
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

				skillsString = skillsString.slice(2)
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
		const throwablesFilted = Object.values(throwables).filter(throwable => throwable.name !== 'X1-ZAPer')
		dispatch(changeThrowable(throwablesFilted[throwableIndex].name))
	}

	const loadEquipment = (equipment: string): void => {
		const primaryEquipment = parseInt(equipment.substring(0, 1))
		const secondaryEquipment = parseInt(equipment.length > 1 ? equipment.substring(1, 2) : '0')

		dispatch(changeEquipment({ equipment: Object.keys(equipments)[primaryEquipment], slot: 'primary' }))
		if (secondaryEquipment) dispatch(changeEquipment({ equipment: Object.keys(equipments)[secondaryEquipment], slot: 'secondary' }))
	}

	return (
		<TextInput
			placeholder='Example: https://pd2builder.netlify.app/?s=10-90-90-900'
			callback={loadBuildFromIterable}
		/>
	)
}

export default BuildIO
