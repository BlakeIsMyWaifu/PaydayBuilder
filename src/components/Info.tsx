import React, { useState } from 'react'
import styled from 'styled-components'
import { red } from 'utils/colours'
import corner from 'utils/corner'

export const InfoContainer = styled.div`
	grid-area: info;
	display: flex;
	flex-direction: column;
	padding: 8px 16px;
	overflow-y: auto;
	${corner};
`

interface InfoTextProps {
	uppercase?: boolean;
}

export const InfoTitle = styled.h1<InfoTextProps>`
	text-transform: ${props => props.uppercase ? 'uppercase ' : 'none'};
	font-size: 2rem;
`

export const InfoSubtitle = styled.h1<InfoTextProps>`
	text-transform: ${props => props.uppercase ? 'uppercase ' : 'none'};
	font-size: 1rem;
`

export const InfoDescription = styled.h1<InfoTextProps>`
	text-transform: ${props => props.uppercase ? 'uppercase ' : 'none'};
	font-size: 1.2rem;
	padding-top: 16px;
	padding-bottom: 8px;
	white-space: pre-line;
`

export const InfoRequirement = styled.h1`
	color: ${red};
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

interface InfoTabTitleProps {
	selected: boolean;
}

export const InfoTabTitle = styled.h1<InfoTabTitleProps>`
	font-size: 2rem;
	cursor: pointer;
	padding: 0 6px;
	margin-bottom: -10px;
	background-color: ${props => props.selected && 'white'};
`

interface InfoProps {
	tabs: Record<string, React.ReactNode>;
}

export const Info: React.FC<InfoProps> = ({ tabs }) => {

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

			{tabs[currentTab]}
		</>
	)
}

export default Info
