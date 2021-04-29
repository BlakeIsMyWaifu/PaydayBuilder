import { skillData } from 'data/abilities/skills'
import React, { useState } from 'react'

import { Container, Icon, Label, Locked, SkillIcon } from './Skill-Elements'

interface skillComponent {
	data: skillData;
	setSkillHovered: React.Dispatch<React.SetStateAction<string | undefined>>;
}

type skillState = 'locked' | 'available' | 'basic' | 'aced'

const Skill: React.FC<skillComponent> = ({ data, setSkillHovered }: skillComponent) => {

	const [skillState, setSkillState] = useState<skillState>(data.tier === 1 ? 'available' : 'locked')

	return (
		<Container onMouseOver={() => setSkillHovered(data.name)} onMouseLeave={() => setSkillHovered(undefined)}>
			<Icon>
				{
					skillState === 'locked' ? <Locked /> : <></>
				}
				<SkillIcon x={data.pos[0]} y={data.pos[1]} state={skillState}/>
			</Icon>
			<Label>{data.name}</Label>
		</Container>
	)
}

export default Skill
