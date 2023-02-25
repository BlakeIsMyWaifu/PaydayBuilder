import { FC } from 'react'
import { useSkillsStore } from 'state/useSkillsStore'
import styled from 'styled-components'
import { red } from 'utils/colours'

interface ContainerProps {
	colour: string;
}

const Container = styled.div<ContainerProps>`
	grid-area: points;
	color: ${props => props.colour};
	font-size: ${props => props.theme.isMobile ? '1.4rem' : '1.8rem'};
	display: flex;
	justify-content: space-between;
`

const PointsText = styled.p`
	color: inherit;
	font-size: inherit;
`

const PointsNumber = styled.p`
	color: inherit;
	font-size: inherit;
	direction: rtl;
`

const Points: FC = () => {

	const points = useSkillsStore(state => state.points)

	const colour = points ? '#fff' : red

	return (
		<Container colour={colour}>
			<PointsText>Remaining Skill Points</PointsText>
			<PointsNumber>{points}</PointsNumber>
		</Container>
	)
}

export default Points
