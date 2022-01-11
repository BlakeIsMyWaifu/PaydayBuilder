import styled from 'styled-components'
import { blue } from 'utils/colours'

export const StatusTitle = styled.h2`
	font-size: 2rem;
	margin-left: 2vw;
`

export const BuildTitle = styled.p`
	font-size: 1.6rem;
	cursor: pointer;
	color: ${blue};
	&:hover::before {
		content: '> ';
	}
`