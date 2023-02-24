import styled from 'styled-components'
import { blue } from 'utils/colours'

export const ActionsContainer = styled.div`
	grid-area: actions;
	display: flex;
	flex-direction: column;
	justify-content: end;
`

export const ActionText = styled.p`
	font-size: ${props => props.theme.isMobile ? '1.2rem' : '1.6rem'};
	text-align: end;
	color: ${blue};
	cursor: pointer;
	&:hover {
		color: #fff;
	}
`