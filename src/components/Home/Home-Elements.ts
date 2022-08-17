import styled from 'styled-components'

export const ConfigContainer = styled.div`
	grid-area: config;
	display: flex;
	justify-content: right;
	align-items: center;
`

export const ControlPanelButton = styled.button`
	height: 2.5rem;
	font-size: 2.5rem;
`

export const VersionContainer = styled.div`
	grid-area: version;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-end;
	gap: 1vw;
`

export const VersionText = styled.p`
	font-size: 1.2rem;
`