import React from 'react'

import { Container, Tier } from './Subtree-Elements'

interface skills {
	name: string;
		description: string;
		pos: number[];
		tier: number;
}

interface subtree {
	skills: skills[]
}

const Subtree: React.FC<subtree> = ({ skills }: subtree) => {
	return (
		<Container>
			<Tier>{skills[5].name}</Tier>
			<Tier>{skills[3].name} + {skills[4].name}</Tier>
			<Tier>{skills[1].name} + {skills[2].name}</Tier>
			<Tier>{skills[0].name}</Tier>
		</Container>
	)
}

export default Subtree
