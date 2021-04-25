import React from 'react'

import { Container, Link, Text } from './Back-Elements'

const Back: React.FC = () => {
	return (
		<Container>
			<Link to='/'>
				<Text>Back</Text>
			</Link>
		</Container>
	)
}

export default Back
