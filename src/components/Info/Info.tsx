import React, { useState } from 'react'

import { InfoTabTitle, InfoTabTitles } from './Info-Elements'

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
