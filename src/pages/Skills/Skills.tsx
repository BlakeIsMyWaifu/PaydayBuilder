import Back from 'components/Back'
import Container from 'components/Container'
import { Title } from 'components/Content'
import data from 'data/abilities/skills'
import { skillData } from 'data/abilities/skills'
import React, { useState } from 'react'

import Info from './Info'
import Points from './Points'
import Reset from './Reset'
import { SubtreeLabel, SubtreeLabelWrapper, Tree, TreeName, TreeNamesWrapper } from './Skills-Elements'
import Subtree from './Subtree'

type tree = 'mastermind' | 'enforcer' | 'technician' | 'ghost' | 'fugitive';

const Skills: React.FC = () => {

	const [currentTree, setCurrentTree] = useState<tree>('mastermind')

	const currentTreeSkills = Object.values(data[currentTree])
	const currentTreeLabels = Object.keys(data[currentTree])

	const [skillHovered, setSkillHovered] = useState<string | undefined>()

	const getSkillFromName = (name: string | undefined): skillData | undefined => currentTreeSkills.flat().find(skill => skill.name === name)

	return (
		<Container columns='3fr 1fr' rows='4rem 2rem 7fr 4rem' areas='"title reset" "treenames points" "skills info" "subtreelabels back"'>

			<Title>Skills</Title>

			<TreeNamesWrapper>
				<TreeName onClick={() => setCurrentTree('mastermind')}>Mastermind</TreeName>
				<TreeName onClick={() => setCurrentTree('enforcer')}>Enforcer</TreeName>
				<TreeName onClick={() => setCurrentTree('technician')}>Technician</TreeName>
				<TreeName onClick={() => setCurrentTree('ghost')}>Ghost</TreeName>
				<TreeName onClick={() => setCurrentTree('fugitive')}>Fugitive</TreeName>
			</TreeNamesWrapper>

			<Tree>
				<Subtree skills={currentTreeSkills[0]} tree={currentTree} subtree={currentTreeLabels[0]} setSkillHovered={setSkillHovered}/>
				<Subtree skills={currentTreeSkills[1]} tree={currentTree} subtree={currentTreeLabels[1]} setSkillHovered={setSkillHovered}/>
				<Subtree skills={currentTreeSkills[2]} tree={currentTree} subtree={currentTreeLabels[2]} setSkillHovered={setSkillHovered}/>
			</Tree>

			<SubtreeLabelWrapper>
				<SubtreeLabel>{currentTreeLabels[0].replaceAll('_', ' ')}</SubtreeLabel>
				<SubtreeLabel>{currentTreeLabels[1].replaceAll('_', ' ')}</SubtreeLabel>
				<SubtreeLabel>{currentTreeLabels[2].replaceAll('_', ' ')}</SubtreeLabel>
			</SubtreeLabelWrapper>

			<Reset tree={currentTree}/>

			<Points />

			<Info skillLabel={skillHovered} skill={getSkillFromName(skillHovered)}/>

			<Back />

		</Container>
	)
}

export default Skills
