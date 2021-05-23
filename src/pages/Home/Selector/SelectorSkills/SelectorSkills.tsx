import skillData from 'data/abilities/skills'
import React from 'react'
import { grey } from 'utils/colours'
import skillTreePoints from 'utils/skillTreePoints'

import Selector from '../Selector'
import { SkillWrapper, SkillsAmount, SkillsCard, SkillsContainer } from './SelectorSkills-Elements'

const SelectorSkills: React.FC = () => {
	return (
		<Selector title='skills'>
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
