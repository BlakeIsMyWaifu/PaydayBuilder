import { type SkillData, type SubtreeData, type TreeNames } from 'data/abilities/skills'
import useHoldButton from 'hooks/useHoldButton'
import { type Dispatch, type FC, type MouseEvent, type SetStateAction, useCallback, useState } from 'react'
import { useSkillsStore } from 'state/useSkillsStore'
import styled, { css, keyframes } from 'styled-components'
import { grey } from 'utils/colours'
import { red } from 'utils/colours'

const Container = styled.div`
	width: ${props => props.theme.isMobile ? '100%' : '50%'};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Icon = styled.div`
	padding-bottom: 50%;
	height: 0;
	width: 50%;
	position: relative;
`

const Locked = styled.div`
	background: url('/images/skills/locked.png') 0 0 no-repeat;
	background-size: 50% 50%;
	height: 100%;
	width: 100%;
	top: 25%;
	left: 25%;
	position: absolute;
`

const Aced = styled.div`
	background: url('/images/skills/ace.png') 0 0 no-repeat;
	background-size: 100% 100%;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	position: absolute;
	padding: 20px;
	margin: -20px;
`

interface SkillIconProps {
	x: number;
	y: number;
	state: string;
	redFlash: boolean;
}

const redFlash = keyframes`
	25% {
		transform: rotate(3deg);
		filter: hue-rotate(180deg);
	}
	50% {
		transform: rotate(-6deg);
		filter: hue-rotate(180deg);
	}
	75% {
		transform: rotate(1deg);
		filter: hue-rotate(180deg);
	}
	100% {
		transform: rotate(0deg);
		filter: hue-rotate(180deg);
	}
`

const SkillIcon = styled.div<SkillIconProps>`
	background-position-x: calc((${props => props.x}% / 880) * 100) !important;
	background-position-y: calc((${props => props.y}% / 960) * 100) !important;
	background: url('/images/skills/skills.png') 0 0 no-repeat;
	background-size: 1200% 1300%;
	opacity: ${props => props.state === 'locked' || props.state === 'available' ? 0.3 : 1};
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	position: absolute;
	&:hover {
		transform: scale(1.1);
	}
	animation: ${props => props.redFlash ? css`${redFlash} 0.25s 1` : ''};
`

interface LabelProps {
	redFlash: boolean;
	colour: string;
}

const Label = styled.p<LabelProps>`
	color: ${props => props.redFlash ? red : props.colour};
	text-align: center;
`

export interface SkillProps {
	treeName: TreeNames;
	subtree: SubtreeData;
	skill: SkillData;
	setSkillHovered: Dispatch<SetStateAction<SkillData | null>>;
}

const Skill: FC<SkillProps> = ({ treeName, subtree, skill, setSkillHovered }) => {

	const subtreeState = useSkillsStore(state => state.trees[treeName][subtree.name])

	const skillState = subtreeState.upgrades[skill.name]

	const [redFlash, setRedFlash] = useState(false)

	const points = useSkillsStore(state => state.points)
	const changeSkillState = useSkillsStore(state => state.changeSkillState)

	const clickSkills = useCallback((button: MouseEvent['button']): void => {
		if (button !== 0 && button !== 2) return

		const isLeftClick = !button

		const leftClickDecline = isLeftClick && (skillState !== 'available' && skillState !== 'basic')
		const rightClickDecline = !isLeftClick && (skillState !== 'aced' && skillState !== 'basic')
		if (leftClickDecline || rightClickDecline) {
			setRedFlash(true)
			return
		}

		const tierCost = [0, 1, 3, 16]
		const acedCost = {
			1: 3,
			2: 4,
			3: 6,
			4: 8
		}

		if (!isLeftClick) {
			const highestTier = Math.max.apply(null, Object.entries(subtreeState.upgrades)
				.filter(([_skillName, skillState]) => skillState === 'basic' || skillState === 'aced')
				.map(([skillName, _skillState]) => subtree.upgrades[skillName].tier || 1))

			if ((skill.tier === 1 && highestTier > 1) && skillState === 'basic') {
				setRedFlash(true)
				return
			}

			if (skill.tier !== highestTier) {
				const reduceThing = (arr: number[]): number => arr.length ? arr.reduce((a, b) => a + b) : 0
				const highestTierPointsTotal = reduceThing(Object.entries(subtreeState.upgrades)
					.filter((_, i) => Object.values(subtree.upgrades)[i].tier === highestTier)
					.map(([skillName, skillState]) => {
						const skillTier = subtree.upgrades[skillName].tier || 1
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
		} else {
			const cost = skillState === 'available' ? skill.tier : acedCost[skill.tier]
			if ((points - cost) < 0) {
				setRedFlash(true)
				return
			}
		}

		changeSkillState({
			tree: treeName,
			subtree: subtree.name,
			skill,
			oldLevel: skillState,
			direction: isLeftClick ? 'upgrade' : 'downgrade'
		})
	}, [changeSkillState, points, skill, skillState, subtree.name, subtree.upgrades, subtreeState.points, subtreeState.upgrades, treeName])

	return (
		<Container
			onMouseOver={() => setSkillHovered(skill)}
			onMouseLeave={() => setSkillHovered(null)}
			onContextMenu={event => event.preventDefault()}
		>
			<Icon {...useHoldButton({
				holdCallback: () => clickSkills(2),
				clickCallback: event => clickSkills(event.button)
			})}>
				{skillState === 'locked' && <Locked />}
				{skillState === 'aced' && <Aced />}
				<SkillIcon x={skill.pos[0]} y={skill.pos[1]}
					state={skillState} redFlash={redFlash}
					onAnimationEnd={() => setRedFlash(false)} />
			</Icon>
			<Label redFlash={redFlash} colour={skillState === 'locked' ? grey : '#fff'}>{skill.name}</Label>
		</Container>
	)
}

export default Skill
