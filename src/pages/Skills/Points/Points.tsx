import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { red } from 'utils/colours'

import { Container, PointsNumber, PointsText } from './Points-Elements'

const Points: React.FC = () => {

	const points = useSelector((state: RootState) => state.skills.points)

	const colour = points ? '#fff' : red

	return (
		<Container colour={colour}>
			<PointsText>Remaining Skill Points</PointsText>
			<PointsNumber>{points}</PointsNumber>
		</Container>
	)
}

export default Points
