import { HoverInfo } from 'components/Home'
import skills from 'data/abilities/skills'
import { Dispatch, FC, SetStateAction } from 'react'
import { useSkillsStore } from 'state/useSkillsStore'
import { grey } from 'utils/colours'
import skillTreePoints from 'utils/skillTreePoints'

import Selector from '../Selector'
import { SkillWrapper, SkillsAmount, SkillsCard, SkillsContainer } from './SelectorSkills-Elements'

interface SelectorSkillProps {
	infoData: HoverInfo | null;
	setHoverInfo: Dispatch<SetStateAction<HoverInfo | null>>;
}

const SelectorSkills: FC<SelectorSkillProps> = ({ infoData, setHoverInfo }) => {

	const currentTrees = useSkillsStore(state => state.trees)

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
