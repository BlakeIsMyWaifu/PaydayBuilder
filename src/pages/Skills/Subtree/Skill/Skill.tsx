import React from 'react'

import { Container } from './Skill-Elements'

export interface skillData {
	name: string;
	description: string;
	pos: number[];
	tier: number;
}

interface skillComponent {
	data: skillData;
}

const Skill: React.FC<skillComponent> = ({ data }: skillComponent) => {
	return (
		<Container>
			{data.name}
		</Container>
	)
}

export default Skill
