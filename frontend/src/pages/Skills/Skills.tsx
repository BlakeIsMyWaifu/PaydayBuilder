import React from 'react'

import Back from '../../components/Back'
import { Container, Info, Points, Reset, Title, Trees } from './Skills-Elements'

const Skills: React.FC = () => {
	return (
		<Container>
			
			<Title>Skills</Title>

			<Trees>Trees</Trees>

			<Reset>Reset</Reset>

			<Points>Points</Points>

			<Info>Info</Info>

			<Back />

		</Container>
	)
}

export default Skills
