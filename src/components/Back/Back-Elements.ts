import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'
import { blue } from 'utils/colours'

export const Container = styled.div`
	grid-area: back;
`

export const Link = styled(LinkR)`
	text-decoration: none;
`

export const Text = styled.p`
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