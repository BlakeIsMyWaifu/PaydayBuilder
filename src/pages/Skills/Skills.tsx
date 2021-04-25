import Back from 'components/Back'
import Container from 'components/Container'
import React, { useState } from 'react'

import { Info, Points, PointsNumber, PointsText, Reset, ResetText, Title, TreeName, TreeNamesWrapper } from './Skills-Elements'
import Tree from './Tree'

type tree = 'mastermind' | 'enforcer' | 'technician' | 'ghost' | 'fugitive'

const Skills: React.FC = () => {

	const [currentClass, setCurrentClass] = useState<tree>('mastermind')

	return (
		<Container columns='3fr 1fr' rows='1fr 2rem 7fr 1fr' areas='"title reset" "treenames points" "skills info" "skills back"'>
			
			<Title>Skills</Title>

			<TreeNamesWrapper>
				<TreeName onClick={() => setCurrentClass('mastermind')}>Mastermind</TreeName>
				<TreeName onClick={() => setCurrentClass('enforcer')}>Enforcer</TreeName>
				<TreeName onClick={() => setCurrentClass('technician')}>Technician</TreeName>
				<TreeName onClick={() => setCurrentClass('ghost')}>Ghost</TreeName>
				<TreeName onClick={() => setCurrentClass('fugitive')}>Fugitive</TreeName>
			</TreeNamesWrapper>

			<Tree tree={currentClass}/>

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
