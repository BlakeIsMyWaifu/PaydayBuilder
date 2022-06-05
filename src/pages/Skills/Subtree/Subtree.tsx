import { SkillData, SubtreeData, TreeNames } from 'data/abilities/skills'
import { useAppSelector } from 'hooks/reduxHooks'
import { Dispatch, FC, SetStateAction } from 'react'

import Skill, { SkillProps } from './Skill'
import { Background, Container, Tier, TierWrapper } from './Subtree-Elements'

interface SubtreeProps {
	treeName: TreeNames;
	subtree: SubtreeData;
	setSkillHovered: Dispatch<SetStateAction<SkillData | null>>;
}

const Subtree: FC<SubtreeProps> = ({ treeName, subtree, setSkillHovered }) => {

	const { points, tier } = useAppSelector(state => state.skills.trees[treeName][subtree.name])

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
