import React, { useState } from 'react'

import { Container, Icon, Label } from './Skill-Elements'

export interface skillData {
	name: string;
	description: string;
	pos: number[];
	tier: number;
}

interface skillComponent {
	data: skillData;
}

type skillState = 'locked' | 'available' | 'basic' | 'aced'

const Skill: React.FC<skillComponent> = ({ data }: skillComponent) => {

	const [skillState, setSkillState] = useState<skillState>(data.tier === 1 ? 'available' : 'locked')

	return (
		<Container>
			<Icon x={data.pos[0]} y={data.pos[1]} state={skillState}/>
			<Label>{data.name}</Label>
		</Container>
	)
}

export default Skill
