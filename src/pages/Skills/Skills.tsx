import { changeEquipment } from 'actions/characterAction'
import { resetSkills, resetTree } from 'actions/skillsAction'
import Container from 'components/Container'
import { HorizontalBar } from 'components/HorizontalActionBar'
import { ResetContainer, ResetText } from 'components/Reset'
import skills, { SkillData, TreeData, TreeNames } from 'data/abilities/skills'
import equipments from 'data/character/equipment'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useEffect, useState } from 'react'

import Info from './Info'
import Points from './Points'
import { SubtreeLabel, SubtreeLabelWrapper, Tree, TreeName } from './Skills-Elements'
import Subtree from './Subtree'

const Skills: React.FC = () => {

	const dispatch = useAppDispatch()

	const [currentTree, setCurrentTree] = useState<TreeData>(skills.mastermind)

	const [skillHovered, setSkillHovered] = useState<SkillData | null>(null)

	const treeNameOrder: TreeNames[] = ['mastermind', 'enforcer', 'technician', 'ghost', 'fugitive']

	const scrollTrees = (event: React.WheelEvent) => {
		const direction = event.deltaY < 0 ? -1 : 1
		let index = treeNameOrder.indexOf(currentTree.name)
		index += direction
		index = index < 0 ? 0 : index > 4 ? 4 : index
		setCurrentTree(skills[treeNameOrder[index]])
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
		if (jackOfAllTrades !== 'aced' && equippedEquipment.secondary) {
			dispatch(changeEquipment({ equipment: null, slot: 'secondary' }))
		}
		if (engineering !== 'basic' && engineering !== 'aced') {
			if (equippedEquipment.primary === 'Silenced Sentry Gun') dispatch(changeEquipment({ equipment: Object.keys(equipments)[0], slot: 'primary' }))
			if (equippedEquipment.secondary === 'Silenced Sentry Gun') dispatch(changeEquipment({ equipment: null, slot: 'secondary' }))
		}
		return () => {
			window.removeEventListener('keydown', handleKeys)
		}
	}, [currentTree, jackOfAllTrades, engineering, equippedEquipment, dispatch])

	return (
		<Container rows='4rem 2rem 7fr 4rem' areas='"title reset" "horizontalbar points" "skills info" "subtreelabels back"' title='Skills'>

			<HorizontalBar onWheel={scrollTrees}>
				{
					treeNameOrder.map(treeName => {
						return <TreeName
							key={treeName}
							onClick={() => setCurrentTree(skills[treeName])}
							active={treeName === currentTree.name}
						>{treeName}</TreeName>
					})
				}
			</HorizontalBar>

			<Tree onWheel={scrollTrees}>
				{
					currentTree.subtrees.map(subtree => {
						return <Subtree
							key={subtree.name}
							tree={currentTree}
							subtree={subtree}
							setSkillHovered={setSkillHovered}
						/>
					})
				}
			</Tree>

			<SubtreeLabelWrapper>
				{
					currentTree.subtrees.map(subtree => {
						return <SubtreeLabel key={subtree.name}>{subtree.name.replaceAll('_', ' ')}</SubtreeLabel>
					})
				}
			</SubtreeLabelWrapper>

			<ResetContainer>
				<ResetText onClick={() => dispatch(resetTree(currentTree.name))}>[F] Reset this tree</ResetText>
				<ResetText onClick={() => dispatch(resetSkills())}>[R] Reset all trees</ResetText>
			</ResetContainer>

			<Points />

			<Info skill={skillHovered} />

		</Container>
	)
}

export default Skills
