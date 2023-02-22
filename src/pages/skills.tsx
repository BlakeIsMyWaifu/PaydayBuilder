import Container from 'components/Container'
import { ResetContainer, ResetText } from 'components/elements/resetElements'
import HorizontalBar from 'components/HorizontalBar'
import Info from 'components/Skills/Info'
import Points from 'components/Skills/Points'
import Subtree from 'components/Skills/Subtree'
import skills, { SkillData, TreeData, TreeNames } from 'data/abilities/skills'
import equipments from 'data/character/equipment'
import { FC, WheelEvent, useEffect, useState } from 'react'
import { useCharacterStore } from 'state/useCharacterStore'
import { useSkillsStore } from 'state/useSkillsStore'
import styled, { css } from 'styled-components'
import { blue } from 'utils/colours'

interface HighlightActiveProps {
	active: boolean;
}

const highlightActive = css<HighlightActiveProps>`
	color: ${props => props.active && 'black'};
	text-shadow: ${props => props.active && 'none'};
	background-color: ${props => props.active && 'white'};
	padding: 0 4px;
`

const Tree = styled.div`
	grid-area: skills;
	display: flex;
	justify-content: space-between;
`

const SubtreeLabelWrapper = styled.div`
	grid-area: subtreelabels;
	display: flex;
`

const SubtreeLabel = styled.p`
	color: ${blue};
	font-size: 2rem;
	width: calc(100% / 3);
	text-align: center;
`

const Skills: FC = () => {

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

	const jackOfAllTrades = useSkillsStore(state => state.trees.technician.Engineer.upgrades['Jack of All Trades'])
	const engineering = useSkillsStore(state => state.trees.technician.Engineer.upgrades.Engineering)
	const equippedEquipment = useCharacterStore(state => state.equipment)

	const ironMan = useSkillsStore(state => state.trees.enforcer.Tank.upgrades['Iron Man'])
	const equippedArmour = useCharacterStore(state => state.armour)

	const changeArmour = useCharacterStore(state => state.changeArmour)
	const changeEquipment = useCharacterStore(state => state.changeEquipment)
	const resetTree = useSkillsStore(state => state.resetTree)
	const resetSkills = useSkillsStore(state => state.resetSkills)

	useEffect(() => {
		const handleKeys = (event: KeyboardEvent): void => {
			if (event.key === 'f') {
				resetTree(currentTree.name)
			} else if (event.key === 'r') {
				resetSkills()
			}
		}

		window.addEventListener('keydown', handleKeys)

		return () => {
			window.removeEventListener('keydown', handleKeys)
		}
	}, [currentTree, resetSkills, resetTree])

	useEffect(() => {
		if (jackOfAllTrades !== 'aced' && equippedEquipment.secondary) {
			changeEquipment('secondary', null)
		}
	}, [changeEquipment, equippedEquipment.secondary, jackOfAllTrades])

	useEffect(() => {
		if (engineering !== 'basic' && engineering !== 'aced') {
			if (equippedEquipment.primary === 'Silenced Sentry Gun') changeEquipment('primary', Object.keys(equipments)[0])
			if (equippedEquipment.secondary === 'Silenced Sentry Gun') changeEquipment('secondary', null)
		}
	}, [changeEquipment, engineering, equippedEquipment])

	useEffect(() => {
		if (ironMan !== 'aced' && equippedArmour === 'Improved Combined Tactical Vest') changeArmour('Two-Piece Suit')
	}, [ironMan, equippedArmour, changeArmour])

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
				<ResetText onClick={() => resetTree(currentTree.name)}>[F] Reset this tree</ResetText>
				<ResetText onClick={() => resetSkills()}>[R] Reset all trees</ResetText>
			</ResetContainer>

			<Points />

			<Info skill={skillHovered} />

		</Container>
	)
}

export default Skills