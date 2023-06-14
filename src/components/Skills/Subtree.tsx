import { type SkillData, type SubtreeData, type TreeNames } from 'data/abilities/skills'
import { type Dispatch, type FC, type SetStateAction } from 'react'
import { useIsMobile } from 'state/settingsContext'
import { useAbilityStore } from 'state/useAbilitiesStore'
import { useSkillsStore } from 'state/useSkillsStore'
import styled from 'styled-components'
import corner from 'utils/corner'

import Skill, { type SkillProps } from './Skill'

const Container = styled(corner)`
	position: relative;
	height: ${props => props.theme.isMobile ? '33%' : '100%'};
	width: ${props => props.theme.isMobile ? '100%' : '33%'};
`

const TierWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: ${props => props.theme.isMobile ? 'row-reverse' : 'column'};
`

const Tier = styled.div`
	color: #fff;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: ${props => props.theme.isMobile ? 'column-reverse' : 'row-reverse'};
	justify-content: center;
	align-items: ${props => props.theme.isMobile ? 'center' : 'normal'};;
`

interface BackgroundProps {
	size: number;
}

const Background = styled.img<BackgroundProps>`
	position: absolute;
	width: 100%;
	height: ${props => props.size}%;
	transition: height 0.5s;
	bottom: 0;
`

const MobileBackground = styled.img<BackgroundProps>`
	position: absolute;
	width: ${props => props.size}%;
	height: 100%;
	transition: width 0.5s;
	left: 0;
`

interface SubtreeProps {
	treeName: TreeNames;
	subtree: SubtreeData;
	setSkillHovered: Dispatch<SetStateAction<SkillData | null>>;
}

const Subtree: FC<SubtreeProps> = ({ treeName, subtree, setSkillHovered }) => {

	const { points, tier } = useSkillsStore(state => state.trees[treeName][subtree.name])

	const skills = Object.values(subtree.upgrades)

	const infamy = useAbilityStore(state => state.infamy)

	const backgroundBarHeight = () => {
		return tier === 3 ? (25 * tier) + (points / (infamy ? 16 : 18) * 25) : 25 * tier
	}

	const skillProps = (i: number): SkillProps => ({
		treeName,
		subtree,
		skill: skills[i],
		setSkillHovered
	})

	const isMobile = useIsMobile()

	return (
		<Container>

			{
				isMobile
					? <MobileBackground
						src='/images/skills/background.png'
						onMouseDown={event => event.preventDefault()}
						size={backgroundBarHeight()}
					/>
					: <Background
						src='/images/skills/background.png'
						onMouseDown={event => event.preventDefault()}
						size={backgroundBarHeight()}
					/>
			}

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
