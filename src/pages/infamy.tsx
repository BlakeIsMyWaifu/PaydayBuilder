import Container from 'components/Container'
import { NextPage } from 'next'
import styled from 'styled-components'

const Text = styled.h1`
	font-size: 2rem;
`

const Infamy: NextPage = () => {
	return (
		<Container title='Infamy'>
			<Text>
				Work in progress
			</Text>
		</Container>
	)
}

export default Infamy
