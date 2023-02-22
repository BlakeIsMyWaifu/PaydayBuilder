import { FC, ReactNode, useState } from 'react'
import styled from 'styled-components'

const InfoTabTitles = styled.div`
	grid-area: infotabs;
	display: flex;
	justify-content: space-evenly;
`

interface InfoTabTitleProps {
	selected: boolean;
}

const InfoTabTitle = styled.h1<InfoTabTitleProps>`
	font-size: 2rem;
	cursor: pointer;
	padding: 0 6px;
	margin-bottom: -10px;
	background-color: ${props => props.selected && 'white'};
`

interface InfoProps {
	tabs: Record<string, ReactNode>;
}

const Info: FC<InfoProps> = ({ tabs }) => {

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
