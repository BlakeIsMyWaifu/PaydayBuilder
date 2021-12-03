import skills from 'data/abilities/skills'
import { useAppSelector } from 'hooks'
import { HoverInfo } from 'pages/Home/Home'
import React from 'react'
import { grey } from 'utils/colours'
import skillTreePoints from 'utils/skillTreePoints'

import Selector from '../Selector'
import { SkillWrapper, SkillsAmount, SkillsCard, SkillsContainer } from './SelectorSkills-Elements'

interface SelectorSkillProps {
	infoData: HoverInfo | null;
	setHoverInfo: React.Dispatch<React.SetStateAction<HoverInfo | null>>;
}

const SelectorSkills: React.FC<SelectorSkillProps> = ({ infoData, setHoverInfo }) => {

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
