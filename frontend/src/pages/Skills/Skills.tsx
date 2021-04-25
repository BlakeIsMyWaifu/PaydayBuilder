import Back from 'components/Back'
import Container from 'components/Container'
import React from 'react'

import { Info, Points, PointsNumber, PointsText, Reset, ResetText, SubtreeSkills, Title, TreeName, TreeNamesWrapper, Trees } from './Skills-Elements'

const Skills: React.FC = () => {
	return (
		<Container columns='3fr 1fr' rows='1fr 2rem 7fr 1fr' areas='"title reset" "treenames points" "skills info" "skills back"'>
			
			<Title>Skills</Title>

			<TreeNamesWrapper>
				<TreeName>Mastermind</TreeName>
				<TreeName>Enforcer</TreeName>
				<TreeName>Technician</TreeName>
				<TreeName>Ghost</TreeName>
				<TreeName>Fugitive</TreeName>
			</TreeNamesWrapper>

			<Trees>
				<SubtreeSkills></SubtreeSkills>
				<SubtreeSkills></SubtreeSkills>
				<SubtreeSkills></SubtreeSkills>
			</Trees>

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
