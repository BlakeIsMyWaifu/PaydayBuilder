import styled from 'styled-components'
import { raisinBlack } from 'utils/colours'

export interface ContainerProps {
	toggle: boolean;
}

export const Container = styled.div<ContainerProps>`
	grid-area: settings;
	position: absolute;
	width: calc(40% - 8px);
	height: 100vh;
	left: ${props => props.toggle ? 0 : 'calc(-40% - 8px)'};
	transition: left 0.5s ease-in-out;
	background-color: ${raisinBlack};
	z-index: 10;
	padding: 16px;
	box-sizing: border-box;
`

export const PanelContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`

export const Title = styled.h1`
	font-size: 3rem;
	align-self: center;
`