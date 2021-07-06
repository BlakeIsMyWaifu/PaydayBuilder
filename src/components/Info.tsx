import React, { useState } from 'react'
import styled from 'styled-components'
import corner from 'utils/corner'

export const InfoContainer = styled.div`
	grid-area: info;
	display: flex;
	flex-direction: column;
	padding: 8px 16px;
	overflow-y: auto;
	${corner};
`

interface infoText {
	uppercase?: boolean;
}

export const InfoTitle = styled.h1<infoText>`
	text-transform: ${props => props.uppercase ? 'uppercase ' : 'none'};
	font-size: 2rem;
`

export const InfoSubtitle = styled.h1<infoText>`
	text-transform: ${props => props.uppercase ? 'uppercase ' : 'none'};
	font-size: 1rem;
`

export const InfoDescription = styled.h1<infoText>`
	text-transform: ${props => props.uppercase ? 'uppercase ' : 'none'};
	font-size: 1.2rem;
	padding-top: 16px;
	padding-bottom: 8px;
	white-space: pre-line;
`

export const InfoUnlock = styled.h1`
	text-transform: none;
	color: ${props => props.color};
`

export const InfoTabTitles = styled.div`
	grid-area: infotabs;
	display: flex;
	justify-content: space-evenly;
`

interface infoTabTitle {
	selected: boolean;
}

export const InfoTabTitle = styled.h1<infoTabTitle>`
	font-size: 2rem;
	cursor: pointer;
	padding: 0 6px;
	margin-bottom: -10px;
	background-color: ${props => props.selected && 'white'};
`

interface InfoComponent {
	tabs: {
		[key: string]: React.ReactNode;
	}
}

export const Info: React.FC<InfoComponent> = ({ tabs }) => {

	const [currentTab, setCurrentTab] = useState<string>(Object.keys(tabs)[0])

	return (
		<>
			<InfoTabTitles>
				{
					Object.keys(tabs).map(title => {
						return <InfoTabTitle
							key={title}
							onClick={() => setCurrentTab(title)}
							selected={currentTab === title}
						>{title}</InfoTabTitle>
					})
				}
			</InfoTabTitles>

			{ tabs[currentTab] }
		</>
	)
}

export default Info
