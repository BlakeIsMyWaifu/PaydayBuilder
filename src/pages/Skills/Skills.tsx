import { changeEquipment } from 'actions/characterAction'
import { resetSkills, resetTree } from 'actions/skillsAction'
import Container from 'components/Container'
import data, { treeData, treeNames } from 'data/abilities/skills'
import { skillData } from 'data/abilities/skills'
import equipmentData from 'data/character/equipment'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useEffect, useState } from 'react'

import Info from './Info'
import Points from './Points'
import Reset from './Reset'
import { SubtreeLabel, SubtreeLabelWrapper, Tree, TreeName, TreeNamesWrapper } from './Skills-Elements'
import Subtree from './Subtree'

const Skills: React.FC = () => {

	const dispatch = useAppDispatch()

	const [currentTree, setCurrentTree] = useState<treeData>(data.mastermind)

	const [skillHovered, setSkillHovered] = useState<skillData | null>(null)

	const scrollTrees = (event: React.WheelEvent) => {
		const direction = event.deltaY < 0 ? -1 : 1
		const order: treeNames[] = ['mastermind', 'enforcer', 'technician', 'ghost', 'fugitive']
		let index = order.indexOf(currentTree.name)
		index += direction
		index = index < 0 ? 0 : index > 4 ? 4 : index
		setCurrentTree(data[order[index]])
	}

	const jackOfAllTrades = useAppSelector(state => state.skills.trees.technician.engineer.upgrades['Jack of All Trades'])
	const engineering = useAppSelector(state => state.skills.trees.technician.engineer.upgrades.Engineering)
	const equippedEquipment = useAppSelector(state => state.character.equipment)

	useEffect(() => {
		const handleKeys = (event: KeyboardEvent) => {
			if (event.key === 'f') {
				dispatch(resetTree(currentTree.name))
			} else if (event.key === 'r') {
				dispatch(resetSkills())
			}
		}
		window.addEventListener('keydown', handleKeys)
		if (jackOfAllTrades !== 'aced') dispatch(changeEquipment([null, 'secondary']))
		if (engineering !== 'basic' && engineering !== 'aced') {
			if (equippedEquipment.primary.name === 'Silenced Sentry Gun') dispatch(changeEquipment([equipmentData[0], 'primary']))
			if (equippedEquipment.secondary?.name === 'Silenced Sentry Gun') dispatch(changeEquipment([null, 'secondary']))
		}
		return () => {
			window.removeEventListener('keydown', handleKeys)
		}
	}, [currentTree, jackOfAllTrades, engineering])

	return (
		<Container rows='4rem 2rem 7fr 4rem' areas='"title reset" "treenames points" "skills info" "subtreelabels back"' title='Skills'>

			<TreeNamesWrapper onWheel={scrollTrees}>
				<TreeName onClick={() => setCurrentTree(data.mastermind)}>Mastermind</TreeName>
				<TreeName onClick={() => setCurrentTree(data.enforcer)}>Enforcer</TreeName>
				<TreeName onClick={() => setCurrentTree(data.technician)}>Technician</TreeName>
				<TreeName onClick={() => setCurrentTree(data.ghost)}>Ghost</TreeName>
				<TreeName onClick={() => setCurrentTree(data.fugitive)}>Fugitive</TreeName>
			</TreeNamesWrapper>

			<Tree onWheel={scrollTrees}>
				<Subtree tree={currentTree} subtree={currentTree.subtrees[0]} setSkillHovered={setSkillHovered}/>
				<Subtree tree={currentTree} subtree={currentTree.subtrees[1]} setSkillHovered={setSkillHovered}/>
				<Subtree tree={currentTree} subtree={currentTree.subtrees[2]} setSkillHovered={setSkillHovered}/>
			</Tree>

			<SubtreeLabelWrapper>
				<SubtreeLabel>{currentTree.subtrees[0].name.replaceAll('_', ' ')}</SubtreeLabel>
				<SubtreeLabel>{currentTree.subtrees[1].name.replaceAll('_', ' ')}</SubtreeLabel>
				<SubtreeLabel>{currentTree.subtrees[2].name.replaceAll('_', ' ')}</SubtreeLabel>
			</SubtreeLabelWrapper>

			<Reset tree={currentTree.name}/>

			<Points />

			<Info skill={skillHovered}/>

		</Container>
	)
}

export default Skills
