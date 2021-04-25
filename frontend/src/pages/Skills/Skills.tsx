import React from 'react'

import Back from '../../components/Back'
import Container from '../../components/Container'
import { Info, Points, Reset, Title, Trees } from './Skills-Elements'

const Skills: React.FC = () => {
	return (
		<Container columns='3fr 1fr' rows='1fr 1fr 7fr 1fr' areas='"title reset" "skills points" "skills info" "skills back"'>
			
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
