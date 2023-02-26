import { InfoContainer, InfoTitle } from 'components/elements/infoElements'
import { type SkillData } from 'data/abilities/skills'
import { type FC } from 'react'
import styled from 'styled-components'
import { blue } from 'utils/colours'

const InfoCost = styled.div`
	font-size: 1.5rem;
	padding-top: 24px;
`

const InfoCostText = styled.span`
	font-size: inherit;
	text-transform: uppercase;
	color: #fff;
`

const InfoCostNumber = styled.span`
	font-size: inherit;
	text-transform: lowercase;
	color: ${blue};
`

const InfoSkill = styled.h1`
	font-size: 1.2rem;
	text-transform: none;
`

interface InfoProps {
	skill: SkillData | null;
}

const Info: FC<InfoProps> = ({ skill }) => {

	const acedCost = {
		1: 3,
		2: 4,
		3: 6,
		4: 8
	}

	return skill ? (
		<InfoContainer>
			<InfoTitle uppercase={true}>{skill.name}</InfoTitle>

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
	) : <InfoContainer />
}

export default Info
