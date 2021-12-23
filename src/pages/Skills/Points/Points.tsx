import { useAppSelector } from 'hooks/reduxHooks'
import React from 'react'
import { red } from 'utils/colours'

import { Container, PointsNumber, PointsText } from './Points-Elements'

const Points: React.FC = () => {

	const points = useAppSelector(state => state.skills.points)

	const colour = points ? '#fff' : red

	return (
		<Container colour={colour}>
			<PointsText>Remaining Skill Points</PointsText>
			<PointsNumber>{points}</PointsNumber>
		</Container>
	)
}

export default Points
