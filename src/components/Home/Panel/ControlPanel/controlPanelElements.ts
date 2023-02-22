import styled from 'styled-components'

import { Container, PanelContent } from '../panelElements'

export const ControlPanelContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const Section = styled.div`
	margin-top: 2.5rem;
`

export const SectionTitle = styled.h2`
	font-size: 1.2rem;
`

export const Setting = styled.div`
	padding-top: 16px;
`

export const SettingsSingleLine = styled.div`
	padding-top: 16px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const SettingTitle = styled.h1`
	font-size: 1.5rem;
	margin-left: 2.5rem;
`

export const ControlPanelContent = styled(PanelContent)`
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	overflow-x: hidden;
`

export const ContactLink = styled.a`
	height: 3rem;
	color: white;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-content: flex-start;
	text-decoration: none;
`

export const ContactIconWrapper = styled.div`
	height: 3rem;
	width: 3rem;
	padding-right: 4px;
`

export const ContactText = styled.p`
	font-size: 1.2rem;
`