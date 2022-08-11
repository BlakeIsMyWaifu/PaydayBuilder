import { FC } from 'react'
import { useSkillsStore } from 'state/useSkillsStore'
import { red } from 'utils/colours'

import { Container, PointsNumber, PointsText } from './Points-Elements'

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
