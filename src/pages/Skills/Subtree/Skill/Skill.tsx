import { skillData } from 'data/abilities/skills'
import React, { useState } from 'react'

import { Aced, Container, Icon, Label, Locked, SkillIcon } from './Skill-Elements'

interface skillComponent {
	skill: skillData;
	setSkillHovered: React.Dispatch<React.SetStateAction<string | undefined>>;
}

type skillState = 'locked' | 'available' | 'basic' | 'aced'

const Skill: React.FC<skillComponent> = ({ skill, setSkillHovered }: skillComponent) => {

	const [skillState, setSkillState] = useState<skillState>(skill.tier === 1 ? 'available' : 'locked')

	const clickSkills = (e: React.MouseEvent) => {
		e.preventDefault()
		if (e.button !== 0 && e.button !== 2) return;
		e.button ? downgradeSkill() : upgradeSkill()
	}

	const upgradeSkill = () => {
		if (skillState === 'available') {
			setSkillState('basic')
		} else if (skillState === 'basic') {
			setSkillState('aced')
		}
	}

	const downgradeSkill = () => {
		if (skillState === 'aced') {
			setSkillState('basic')
		} else if (skillState === 'basic') {
			setSkillState('available')
		}
	}

	return (
		<Container
			onMouseOver={() => setSkillHovered(skill.name)}
			onMouseLeave={() => setSkillHovered(undefined)}
			onContextMenu={e => e.preventDefault()}
			onMouseDown={e => clickSkills(e)}>
			<Icon>
				{ skillState === 'locked' ? <Locked /> : <></> }
				{ skillState === 'aced' ? <Aced /> : <></> }
				<SkillIcon x={skill.pos[0]} y={skill.pos[1]} state={skillState}/>
			</Icon>
			<Label>{skill.name}</Label>
		</Container>
	)
}

export default Skill
