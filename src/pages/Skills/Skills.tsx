import Back from 'components/Back'
import Container from 'components/Container'
import { Title } from 'components/Content'
import data, { treeData, treeNames } from 'data/abilities/skills'
import { skillData } from 'data/abilities/skills'
import React, { useState } from 'react'

import Info from './Info'
import Points from './Points'
import Reset from './Reset'
import { SubtreeLabel, SubtreeLabelWrapper, Tree, TreeName, TreeNamesWrapper } from './Skills-Elements'
import Subtree from './Subtree'

const Skills: React.FC = () => {

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

	return (
		<Container columns='3fr 1fr' rows='4rem 2rem 7fr 4rem' areas='"title reset" "treenames points" "skills info" "subtreelabels back"'>

			<Title>Skills</Title>

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

			<Back />

		</Container>
	)
}

export default Skills
