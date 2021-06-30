import styled from 'styled-components'
import { grey } from 'utils/colours'

export const Container = styled.div`
	grid-area: settings;
	background-color: ${grey};
	display: flex;
	flex-direction: column;
	padding: 16px;
	z-index: 10;
`

export const Title = styled.h1`
	font-size: 2.5rem;
	align-self: center;
`

export const Setting = styled.div`
	padding-top: 16px;
`

export const SettingsTitle = styled.h1`
	font-size: 1.5rem;
	margin-left: 20px;
`