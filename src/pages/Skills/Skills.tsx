import Container from 'components/Container'
import HorizontalBar from 'components/HorizontalBar'
import { ResetContainer, ResetText } from 'components/Reset-Elements'
import skills, { SkillData, TreeData, TreeNames } from 'data/abilities/skills'
import equipments from 'data/character/equipment'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import { FC, WheelEvent, useEffect, useState } from 'react'
import { changeArmour, changeEquipment } from 'slices/characterSlice'
import { resetSkills, resetTree } from 'slices/skillsSlice'

import Info from './Info'
import Points from './Points'
import { SubtreeLabel, SubtreeLabelWrapper, Tree, highlightActive } from './Skills-Elements'
import Subtree from './Subtree'

const Skills: FC = () => {

	const dispatch = useAppDispatch()

	const [currentTree, setCurrentTree] = useState<TreeData>(skills.mastermind)

	const [skillHovered, setSkillHovered] = useState<SkillData | null>(null)

	const treeNameOrder: TreeNames[] = ['mastermind', 'enforcer', 'technician', 'ghost', 'fugitive']

	const scrollTrees = (event: WheelEvent): void => {
		const direction = event.deltaY < 0 ? -1 : 1
		let index = treeNameOrder.indexOf(currentTree.name)
		index += direction
		index = index < 0 ? 0 : index > 4 ? 4 : index
		setCurrentTree(skills[treeNameOrder[index]])
	}

	const jackOfAllTrades = useAppSelector(state => state.skills.trees.technician.Engineer.upgrades['Jack of All Trades'])
	const engineering = useAppSelector(state => state.skills.trees.technician.Engineer.upgrades.Engineering)
	const equippedEquipment = useAppSelector(state => state.character.equipment)

	const ironMan = useAppSelector(state => state.skills.trees.enforcer.Tank.upgrades['Iron Man'])
	const equippedArmour = useAppSelector(state => state.character.armour)

	useEffect(() => {
		const handleKeys = (event: KeyboardEvent): void => {
			if (event.key === 'f') {
				dispatch(resetTree(currentTree.name))
			} else if (event.key === 'r') {
				dispatch(resetSkills())
			}
		}

		window.addEventListener('keydown', handleKeys)

		return () => {
			window.removeEventListener('keydown', handleKeys)
		}
	}, [currentTree, dispatch])

	useEffect(() => {
		if (jackOfAllTrades !== 'aced' && equippedEquipment.secondary) {
			dispatch(changeEquipment({ equipment: null, slot: 'secondary' }))
		}
	}, [dispatch, equippedEquipment.secondary, jackOfAllTrades])

	useEffect(() => {
		if (engineering !== 'basic' && engineering !== 'aced') {
			if (equippedEquipment.primary === 'Silenced Sentry Gun') dispatch(changeEquipment({ equipment: Object.keys(equipments)[0], slot: 'primary' }))
			if (equippedEquipment.secondary === 'Silenced Sentry Gun') dispatch(changeEquipment({ equipment: null, slot: 'secondary' }))
		}
	}, [dispatch, engineering, equippedEquipment])

	useEffect(() => {
		if (ironMan !== 'aced' && equippedArmour === 'Improved Combined Tactical Vest') dispatch(changeArmour('Two-Piece Suit'))
	}, [ironMan, equippedArmour, dispatch])

	return (
		<Container rows='4rem 2rem 7fr 4rem' areas='"title reset" "horizontalbar points" "skills info" "subtreelabels back"' title='Skills'>

			<HorizontalBar
				active={currentTree.name}
				items={treeNameOrder.map(treeName => ({
					label: treeName,
					callback: () => setCurrentTree(skills[treeName]),
					additionalStyling: highlightActive
				}))}
				scroll={scrollTrees}
			/>

			<Tree onWheel={scrollTrees}>
				{
					Object.values(currentTree.subtrees).map(subtree => {
						return <Subtree
							key={subtree.name}
							treeName={currentTree.name}
							subtree={subtree}
							setSkillHovered={setSkillHovered}
						/>
					})
				}
			</Tree>

			<SubtreeLabelWrapper>
				{
					Object.values(currentTree.subtrees).map(subtree => {
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
