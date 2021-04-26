import Back from 'components/Back'
import Container from 'components/Container'
import data from 'data/abilities/skills'
import React, { useState } from 'react'

import { Info, Points, PointsNumber, PointsText, Reset, ResetText, SubtreeLabel, SubtreeLabelWrapper, Title, Tree, TreeName, TreeNamesWrapper } from './Skills-Elements'
import Subtree from './Subtree'

type tree = 'mastermind' | 'enforcer' | 'technician' | 'ghost' | 'fugitive'

const Skills: React.FC = () => {

	const [currentClass, setCurrentClass] = useState<tree>('mastermind')

	const currentClassSkills = Object.values(data[currentClass])
	const currentClassLabels = Object.keys(data[currentClass])

	return (
		<Container columns='3fr 1fr' rows='1fr 2rem 7fr 4rem' areas='"title reset" "treenames points" "skills info" "subtreelabels back"'>

			<Title>Skills</Title>

			<TreeNamesWrapper>
				<TreeName onClick={() => setCurrentClass('mastermind')}>Mastermind</TreeName>
				<TreeName onClick={() => setCurrentClass('enforcer')}>Enforcer</TreeName>
				<TreeName onClick={() => setCurrentClass('technician')}>Technician</TreeName>
				<TreeName onClick={() => setCurrentClass('ghost')}>Ghost</TreeName>
				<TreeName onClick={() => setCurrentClass('fugitive')}>Fugitive</TreeName>
			</TreeNamesWrapper>

			<Tree>
				<Subtree skills={currentClassSkills[0]}/>
				<Subtree skills={currentClassSkills[1]}/>
				<Subtree skills={currentClassSkills[2]}/>
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

			<Info></Info>

			<Back />

		</Container>
	)
}

export default Skills
