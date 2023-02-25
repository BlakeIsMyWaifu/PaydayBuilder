import styled from 'styled-components'
import { raisinBlack } from 'utils/colours'

export interface ContainerProps {
	toggle: boolean;
}

export const Container = styled.div<ContainerProps>`
	grid-area: settings;
	position: absolute;
	width: ${props => props.theme.isMobile ? '100vw' : 'calc(40% - 8px)'};
	height: 100vh;
	left: ${props => props.toggle ? 0 : (props.theme.isMobile ? '-100vw' : 'calc(-40% - 8px)')};
	transition: left 0.5s ease-in-out;
	background-color: ${raisinBlack};
	z-index: 10;
	padding: 16px;
	box-sizing: border-box;
	overflow-y: auto;
	overflow-x: hidden;
`

export const PanelContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`

export const TopWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`

export const Title = styled.h1`
	font-size: 3rem;
	align-self: center;
`

export const ClosePanel = styled.button`
	width: 32px;
	height: 32px;
	margin-top: -24px;
	color: white;
	&:hover {
		color: #023E8A;
	}
	&:before {
		content: "╳";
		font-size: 32px;
	}
`