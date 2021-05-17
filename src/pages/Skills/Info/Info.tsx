import { InfoContainer, InfoTitle } from 'components/Info'
import { skillData } from 'data/abilities/skills'
import React from 'react'

import { InfoCost, InfoCostNumber, InfoCostText, InfoSkill } from './Info-Elements'

interface info {
	skillLabel: string | undefined;
	skill: skillData | undefined;
}

const Info: React.FC<info> = ({skillLabel, skill}: info) => {

	const acedCost = {
		1: 3,
		2: 4,
		3: 6,
		4: 8
	}

	return skill ? (
		<InfoContainer>
			<InfoTitle uppercase={true}>{skillLabel}</InfoTitle>

			<InfoCost>
				<InfoCostText>Basic: </InfoCostText>
				<InfoCostNumber>{skill.tier} points</InfoCostNumber>
			</InfoCost>
			<InfoSkill>{skill.description[0]}</InfoSkill>

			<InfoCost>
				<InfoCostText>Aced: </InfoCostText>
				<InfoCostNumber>{acedCost[skill.tier]} points</InfoCostNumber>
			</InfoCost>
			<InfoSkill>{skill.description[1]}</InfoSkill>
		</InfoContainer>
	) : <InfoContainer></InfoContainer>
}

export default Info
