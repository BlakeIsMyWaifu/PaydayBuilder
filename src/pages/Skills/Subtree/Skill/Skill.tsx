import { changeSkillState } from 'actions/skillsAction'
import { skillData, subtreeData, treeData } from 'data/abilities/skills'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'

import { Aced, Container, Icon, Label, Locked, SkillIcon } from './Skill-Elements'

interface skillComponent {
	tree: treeData;
	subtree: subtreeData;
	skill: skillData;
	setSkillHovered: React.Dispatch<React.SetStateAction<skillData | null>>;
}

const Skill: React.FC<skillComponent> = ({ tree, subtree, skill, setSkillHovered }: skillComponent) => {

	const dispatch = useAppDispatch()

	const subtreeState = useAppSelector(state => state.skills.trees[tree.name][subtree.name])

	const skillState = subtreeState.upgrades[skill.name]

	const [redFlash, setRedFlash] = useState(false)

	const acedCost = {
		1: 3,
		2: 4,
		3: 6,
		4: 8
	}

	const tierCost = [0, 1, 3, 16]

	const clickSkills = (event: React.MouseEvent) => {
		event.preventDefault()
		if (event.button !== 0 && event.button !== 2) return
		if (!event.button && (skillState !== 'available' && skillState !== 'basic')) return
		if (event.button && (skillState !== 'aced' && skillState !== 'basic')) return

		if (event.button) {
			const highestTier = Math.max.apply(null, Object.entries(subtreeState.upgrades)
				.filter(([skillName, skillState]) => skillState === 'basic' || skillState === 'aced')
				.map(([skillName, skillState]) => subtree.upgrades.find(skill => skill.name === skillName)?.tier || 1))

			if ((skill.tier === 1 && highestTier > 1) && skillState === 'basic') {
				setRedFlash(true)
				return
			}

			if (skill.tier !== highestTier) {
				const reduceThing = (arr: number[]) => arr.length ? arr.reduce((a, b) => a + b) : 0
				const highestTierPointsTotal = reduceThing(Object.entries(subtreeState.upgrades)
					.filter((_, i) => subtree.upgrades[i].tier === highestTier)
					.map(([skillName, skillState], i) => {
						const skillTier = subtree.upgrades.find(skill => skill.name === skillName)?.tier || 1
						return skillState === 'basic' ? skillTier : (skillState === 'aced' ? skillTier + acedCost[skillTier] : 0)
					})
				)
	
				const notHighestTierPointsTotal = subtreeState.points - highestTierPointsTotal
				const removeSkillCost = skillState === 'basic' ? skill.tier : acedCost[skill.tier]

				if ((notHighestTierPointsTotal - removeSkillCost) < tierCost[highestTier - 1]) {
					setRedFlash(true)
					return
				}
			}
		}

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
			onMouseDown={clickSkills}>
			<Icon>
				{ skillState === 'locked' && <Locked /> }
				{ skillState === 'aced' && <Aced /> }
				<SkillIcon x={skill.pos[0]} y={skill.pos[1]} state={skillState} redFlash={redFlash} onAnimationEnd={() => setRedFlash(false)} />
			</Icon>
			<Label>{skill.name}</Label>
		</Container>
	)
}

export default Skill
