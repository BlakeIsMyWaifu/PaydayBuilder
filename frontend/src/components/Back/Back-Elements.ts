import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'

import { blue } from '../../utils/colours'

export const Container = styled.div`
	grid-area: back;
`

export const Link = styled(LinkR)`
	text-decoration: none;
`

export const Text = styled.p`
	text-transform: uppercase;
	direction: rtl;
	color: ${blue};
	position: absolute;
	bottom: 0;
	right: 12px;
	font-size: 4rem;
`