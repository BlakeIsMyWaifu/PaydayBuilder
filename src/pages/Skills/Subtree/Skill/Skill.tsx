import { changeSkillState } from 'actions/skillsAction'
import { skillData, subtreeData, treeData } from 'data/abilities/skills'
import { skillUpgradeTypes } from 'defualtStates/skillsDefaultState'
import { useAppDispatch, useAppSelector } from 'hooks'
import React from 'react'

import { Aced, Container, Icon, Label, Locked, SkillIcon } from './Skill-Elements'

interface skillComponent {
	tree: treeData;
	subtree: subtreeData;
	skill: skillData;
	setSkillHovered: React.Dispatch<React.SetStateAction<skillData | null>>;
}

const Skill: React.FC<skillComponent> = ({ tree, subtree, skill, setSkillHovered }: skillComponent) => {

	const skillState = useAppSelector<skillUpgradeTypes>(state => state.skills.trees[tree.name][subtree.name].upgrades[skill.name])

	const dispatch = useAppDispatch()

	const clickSkills = (event: React.MouseEvent) => {
		event.preventDefault()
		if (event.button !== 0 && event.button !== 2) return
		if (!event.button && (skillState !== 'available' && skillState !== 'basic')) return
		if (event.button && (skillState !== 'aced' && skillState !== 'basic')) return
		dispatch(changeSkillState({
			tree: tree.name,
			subtree: subtree.name,
			skill: skill,
			oldLevel: skillState,
			direction: event.button ? 'downgrade' : 'upgrade'
		}))
	}

	return (
		<Container
			onMouseOver={() => setSkillHovered(skill)}
			onMouseLeave={() => setSkillHovered(null)}
			onContextMenu={event => event.preventDefault()}
			onMouseDown={event => clickSkills(event)}>
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
