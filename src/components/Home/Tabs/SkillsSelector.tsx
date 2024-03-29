import { type HoverInfo } from 'components/Home/Tabs'
import { type SkillTreeName, skillTreeNames } from 'data/abilities/skillsMinimised'
import { type Dispatch, type FC, type SetStateAction } from 'react'
import { useSkillsStore } from 'state/useSkillsStore'
import styled from 'styled-components'
import { grey } from 'utils/colours'
import skillTreePoints from 'utils/skillTreePoints'

import Selector from './Selector'
import SkillTable from './SkillTable'

const SkillsContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 32px 12px;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const SkillWrapper = styled.div`
	width: calc(20% - 12px);
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const SkillsCard = styled.div`
	width: 100%;
	height: clamp(64px, 50%, 128px);
	background-color: #fff;
	border-radius: 6px;
	display: flex;
	align-items: center;
`

interface SkillsAmountProps {
	colour: string;
}

const SkillsAmount = styled.h1<SkillsAmountProps>`
	font-size: 1.5rem;
	text-align: center;
	color: ${props => props.colour};
`

const MaskImage = styled.img`
	width: 100%;
`

interface SelectorSkillProps {
	setHoverInfo: Dispatch<SetStateAction<HoverInfo | null>>;
}

const SelectorSkills: FC<SelectorSkillProps> = ({ setHoverInfo }) => {

	const currentTrees = useSkillsStore(state => state.trees)

	const masks: Record<SkillTreeName, string> = {
		mastermind: 'dallas',
		enforcer: 'chains',
		technician: 'wolf',
		ghost: 'hoxton',
		fugitive: 'old_hoxton'
	}

	return (
		<Selector
			linkChildren
			title='skills'
			setHoverInfo={setHoverInfo}
			infoData={{
				title: 'Skills',
				table: <SkillTable />
			}}
		>
			{
				<SkillsContainer>
					{
						skillTreeNames.map(tree => {
							const treePoints = skillTreePoints(tree, currentTrees)
							return <SkillWrapper key={tree}>
								<SkillsCard>
									<MaskImage src={`/images/masks/${masks[tree]}.webp`} />
								</SkillsCard>
								<SkillsAmount colour={treePoints ? '#fff' : grey}>{treePoints}</SkillsAmount>
							</SkillWrapper>
						})
					}
				</SkillsContainer>
			}
		</Selector>
	)
}

export default SelectorSkills
