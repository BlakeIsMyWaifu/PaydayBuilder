import styled from 'styled-components'
import { blue } from 'utils/colours'

export const ActionsContainer = styled.div`
	grid-area: actions;
`

export const ActionText = styled.p`
	font-size: 1.6rem;
	text-align: end;
	color: ${blue};
	cursor: pointer;
	&:hover {
		color: #fff;
	}
`