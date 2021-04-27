import Back from 'components/Back'
import Container from 'components/Container'
import data from 'data/abilities/skills'
import { skillsData } from 'data/abilities/skills'
import React, { useState } from 'react'

import { Info, InfoName, InfoSkill, Points, PointsNumber, PointsText, Reset, ResetText, SubtreeLabel, SubtreeLabelWrapper, Title, Tree, TreeName, TreeNamesWrapper } from './Skills-Elements'
import Subtree from './Subtree'

type tree = 'mastermind' | 'enforcer' | 'technician' | 'ghost' | 'fugitive';

const Skills: React.FC = () => {

	const getClassData = (key: tree, obj: skillsData) => obj[key]

	const [currentClass, setCurrentClass] = useState<tree>('mastermind')

	const currentClassSkills = Object.values(getClassData(currentClass, data))
	const currentClassLabels = Object.keys(getClassData(currentClass, data))

	const [skillHovered, setSkillHovered] = useState<string>('')

	return (
		<Container columns='3fr 1fr' rows='4rem 2rem 7fr 4rem' areas='"title reset" "treenames points" "skills info" "subtreelabels back"'>

			<Title>Skills</Title>

			<TreeNamesWrapper>
				<TreeName onClick={() => setCurrentClass('mastermind')}>Mastermind</TreeName>
				<TreeName onClick={() => setCurrentClass('enforcer')}>Enforcer</TreeName>
				<TreeName onClick={() => setCurrentClass('technician')}>Technician</TreeName>
				<TreeName onClick={() => setCurrentClass('ghost')}>Ghost</TreeName>
				<TreeName onClick={() => setCurrentClass('fugitive')}>Fugitive</TreeName>
			</TreeNamesWrapper>

			<Tree>
				<Subtree skills={currentClassSkills[0]} setSkillHovered={setSkillHovered}/>
				<Subtree skills={currentClassSkills[1]} setSkillHovered={setSkillHovered}/>
				<Subtree skills={currentClassSkills[2]} setSkillHovered={setSkillHovered}/>
			</Tree>

			<SubtreeLabelWrapper>
				<SubtreeLabel>{currentClassLabels[0]}</SubtreeLabel>
				<SubtreeLabel>{currentClassLabels[1]}</SubtreeLabel>
				<SubtreeLabel>{currentClassLabels[2]}</SubtreeLabel>
			</SubtreeLabelWrapper>

			<Reset>
				<ResetText>Reset this tree</ResetText>
				<ResetText>Reset all trees</ResetText>
			</Reset>

			<Points>
				<PointsText>Remaining Skill Points</PointsText>
				<PointsNumber>0</PointsNumber>
			</Points>

			<Info>
				<InfoName>{skillHovered}</InfoName>
				<InfoSkill></InfoSkill>
				<InfoSkill></InfoSkill>
			</Info>

			<Back />

		</Container>
	)
}

export default Skills
