import { FC } from 'react'

import { Container, Spinner, Text } from './Loader-Elements'

const Loader: FC = () => {
	return (
		<Container>
			<Spinner />
			<Text>Loading...</Text>
		</Container>
	)
}

export default Loader
