import styled from 'styled-components'
import { blue } from 'utils/colours'

export const ResetContainer = styled.div`
	grid-area: reset;
`

export const ResetText = styled.p`
	color: ${blue};
	font-size: ${props => props.theme.isMobile ? '1.2rem' : '1.6rem'};
	text-align: end;
	cursor: pointer;
	&:hover {
		color: #fff;
	}
`