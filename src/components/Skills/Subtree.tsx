import { SkillData, SubtreeData, TreeNames } from 'data/abilities/skills'
import { Dispatch, FC, SetStateAction } from 'react'
import { useSkillsStore } from 'state/useSkillsStore'
import styled from 'styled-components'
import corner from 'utils/corner'

import Skill, { SkillProps } from './Skill'

const Container = styled(corner)`
	position: relative;
	height: 100%;
	width: calc((100% / 3) - 6px);
`

const TierWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`

const Tier = styled.div`
	color: #fff;
	height: 25%;
	width: 100%;
	display: flex;
	flex-direction: row-reverse;
	justify-content: center;
`

const Background = styled.img`
	position: absolute;
	width: 100%;
	height: ${props => props.height}%;
	transition: height 0.5s;
	bottom: 0;
`

interface SubtreeProps {
	treeName: TreeNames;
	subtree: SubtreeData;
	setSkillHovered: Dispatch<SetStateAction<SkillData | null>>;
}

const Subtree: FC<SubtreeProps> = ({ treeName, subtree, setSkillHovered }) => {

	const { points, tier } = useSkillsStore(state => state.trees[treeName][subtree.name])

	const skills = Object.values(subtree.upgrades)

	const backgroundBarHeight = (): number => {
		return tier === 3 ? (25 * tier) + (points / 16 * 25) : 25 * tier
	}

	const skillProps = (i: number): SkillProps => ({
		treeName,
		subtree,
		skill: skills[i],
		setSkillHovered
	})

	return (
		<Container>

			<Background src='/images/skills/background.png' onMouseDown={event => event.preventDefault()} height={backgroundBarHeight()} />

			<TierWrapper>
				<Tier>
					<Skill {...skillProps(5)} />
				</Tier>

				<Tier>
					<Skill {...skillProps(4)} />
					<Skill {...skillProps(3)} />
				</Tier>

				<Tier>
					<Skill {...skillProps(2)} />
					<Skill {...skillProps(1)} />
				</Tier>

				<Tier>
					<Skill {...skillProps(0)} />
				</Tier>
			</TierWrapper>

		</Container>
	)
}

export default Subtree
