import styled from 'styled-components'
import { raisinBlack } from 'utils/colours'

interface ContainerProps {
	toggle: boolean;
}

export const Container = styled.div<ContainerProps>`
	grid-area: settings;
	position: absolute;
	width: calc(40% - 40px);
	height: calc(100% - 32px);
	left: ${props => props.toggle ? 0 : 'calc(-40% - 40px)'};
	transition: 0.5s;
	background-color: ${raisinBlack};
	display: flex;
	flex-direction: column;
	padding: 16px;
	z-index: 10;
`

export const Title = styled.h1`
	font-size: 3rem;
	align-self: center;
`