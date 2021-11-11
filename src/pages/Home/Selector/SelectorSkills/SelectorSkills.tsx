import skillData from 'data/abilities/skills'
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
	return (
		<Selector title='skills' setHoverInfo={setHoverInfo} infoData={infoData} >
			{
				<SkillsContainer>
					{
						Object.keys(skillData).map(tree => {
							const treePoints = skillTreePoints(tree)
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
