import React from 'react'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'
import { blue } from 'utils/colours'

const Container = styled.div`
	grid-area: back;
`

const Link = styled(LinkR)`
	text-decoration: none;
`

const Text = styled.p`
	direction: rtl;
	color: ${blue};
	position: absolute;
	bottom: 0;
	right: 8px;
	font-size: calc(4rem - 8px);
	&:hover {
		color: #fff;
	}
`

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
