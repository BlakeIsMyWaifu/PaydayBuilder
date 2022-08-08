import { HoverInfo } from 'components/Home'
import skills from 'data/abilities/skills'
import { useAppSelector } from 'hooks/reduxHooks'
import { Dispatch, FC, SetStateAction } from 'react'
import { grey } from 'utils/colours'
import skillTreePoints from 'utils/skillTreePoints'

import Selector from '../Selector'
import { SkillWrapper, SkillsAmount, SkillsCard, SkillsContainer } from './SelectorSkills-Elements'

interface SelectorSkillProps {
	infoData: HoverInfo | null;
	setHoverInfo: Dispatch<SetStateAction<HoverInfo | null>>;
}

const SelectorSkills: FC<SelectorSkillProps> = ({ infoData, setHoverInfo }) => {

	const currentTrees = useAppSelector(state => state.skills.trees)

	return (
		<Selector title='skills' setHoverInfo={setHoverInfo} infoData={infoData} >
			{
				<SkillsContainer>
					{
						Object.keys(skills).map(tree => {
							const treePoints = skillTreePoints(tree, currentTrees)
							return <SkillWrapper key={tree}>
								<SkillsCard />
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
