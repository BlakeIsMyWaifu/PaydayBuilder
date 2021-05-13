import { changeSkillState } from 'actions/skillsAction'
import { skillData } from 'data/abilities/skills'
import { useAppDispatch, useAppSelector } from 'hooks'
import React from 'react'
import { skillUpgradeTypes } from 'states/skillsDefaultState'

import { Aced, Container, Icon, Label, Locked, SkillIcon } from './Skill-Elements'

interface skillComponent {
	skill: skillData;
	tree: string;
	subtree: string;
	setSkillHovered: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Skill: React.FC<skillComponent> = ({ skill, tree, subtree, setSkillHovered }: skillComponent) => {

	const skillState = useAppSelector<skillUpgradeTypes>(state => state.skills.trees[tree][subtree].upgrades[skill.name])

	const dispatch = useAppDispatch()

	const clickSkills = (e: React.MouseEvent) => {
		e.preventDefault()
		if (e.button !== 0 && e.button !== 2) return
		e.button ? downgradeSkillState() : upgradeSkillState()
	}

	const upgradeSkillState = () => {
		if (skillState !== 'available' && skillState !== 'basic') return
		dispatch(changeSkillState({
			tree,
			subtree,
			skill: skill,
			oldLevel: skillState,
			direction: 'upgrade'
		}))
	}

	const downgradeSkillState = () => {
		if (skillState !== 'aced' && skillState !== 'basic') return
		dispatch(changeSkillState({
			tree,
			subtree,
			skill: skill,
			oldLevel: skillState,
			direction: 'downgrade'
		}))
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
