import { changePerkdeck } from 'actions/abilitiesAction'
import { changeArmour, changeCharacter, changeEquipment, changeMask } from 'actions/characterAction'
import { changeSkillState, resetSkills } from 'actions/skillsAction'
import { changeMelee, changeThrowable } from 'actions/weaponsAction'
import perkDecks from 'data/abilities/perks'
import skills, { TreeNames } from 'data/abilities/skills'
import armours from 'data/character/armours'
import characters from 'data/character/characters'
import equipments from 'data/character/equipment'
import melees from 'data/weapons/melees'
import throwables from 'data/weapons/throwables'
import { useAppDispatch } from 'hooks/reduxHooks'
import { getCollectionList } from 'pages/Mask/Mask'
import { useEffect } from 'react'

const useBuildURLImport = (data: string): void => {

	useEffect(() => {
		loadBuildFromIterable(data)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data])

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
		const split = input.split('/?')
		const parameters = new URLSearchParams(split[split.length - 1])
		for (const [key, value] of parameters) {
			switch (key) {
				case 's':
					loadSkills(decompressData(value))
					break
				case 'p':
					loadPerkDeck(decodeByte(value))
					break
				case 'a':
					loadArmour(decodeByte(value))
					break
				case 't':
					loadThrowable(decodeByte(value))
					break
				case 'd':
					loadEquipment(value)
					break
				case 'm':
					loadMelee(value)
					break
				case 'k':
					loadMask(value)
					break
				case 'c':
					loadCharacter(decodeByte(value))
					break
			}
		}
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
		let sortedThrowables = { ...throwables }
		delete sortedThrowables['X1-ZAPer']
		sortedThrowables = {
			...sortedThrowables,
			'X1-ZAPer': throwables['X1-ZAPer']
		}
		dispatch(changeThrowable(Object.keys(sortedThrowables)[throwableIndex]))
	}

	const loadEquipment = (equipmentBytes: string): void => {
		const primaryEquipment = parseInt(equipmentBytes.substring(0, 1))
		const secondaryEquipment = parseInt(equipmentBytes.length > 1 ? equipmentBytes.substring(1, 2) : '0')

		dispatch(changeEquipment({ equipment: Object.keys(equipments)[primaryEquipment], slot: 'primary' }))
		if (secondaryEquipment) dispatch(changeEquipment({ equipment: Object.keys(equipments)[secondaryEquipment], slot: 'secondary' }))
	}

	const loadMelee = (meleeBytes: string): void => {
		const index = meleeBytes.length === 1 ? decodeByte(meleeBytes) : decodeByte(meleeBytes.substring(1, 2)) + charString.length
		dispatch(changeMelee(Object.values(melees)[index].name))
	}

	const loadMask = (maskBytes: string): void => {
		const collections = getCollectionList(),
			[first, second, third] = maskBytes,
			collectionIndex = decodeByte(second) + (decodeByte(first) * charString.length),
			mask = Object.values(collections)[collectionIndex][decodeByte(third)].name
		dispatch(changeMask(mask))
	}

	const loadCharacter = (characterIndex: number) => {
		dispatch(changeCharacter(Object.keys(characters)[characterIndex]))
	}
}

export default useBuildURLImport