import React from 'react'

import Skill, { skillData } from './Skill'
import { Container, Tier } from './Subtree-Elements'

interface subtreeComponent {
	skills: skillData[]
}

const Subtree: React.FC<subtreeComponent> = ({ skills }: subtreeComponent) => {
	return (
		<Container>
			<Tier>
				<Skill data={skills[5]}/>
			</Tier>
			<Tier>
				<Skill data={skills[4]}/>
				<Skill data={skills[3]}/>
			</Tier>
			<Tier>
				<Skill data={skills[2]}/>
				<Skill data={skills[1]}/>
			</Tier>
			<Tier>
				<Skill data={skills[0]}/>
			</Tier>
		</Container>
	)
}

export default Subtree
