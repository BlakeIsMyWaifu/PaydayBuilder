import styled from 'styled-components'
import { blue } from 'utils/colours'

export const Container = styled.div`
	grid-area: reset;
`

export const ResetText = styled.p`
	color: ${blue};
	font-size: 1.6rem;
	text-align: end;
	cursor: pointer;
	&:hover {
		color: #fff;
	}
`