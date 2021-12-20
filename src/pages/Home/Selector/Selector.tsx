import React from 'react'

import { HoverInfo } from '../Home'
import { Container, SelectorLink, Title } from './Selector-Elements'

interface SelectorProps {
	title: string;
	children?: React.ReactNode;
	infoData?: HoverInfo | null;
	setHoverInfo: React.Dispatch<React.SetStateAction<HoverInfo | null>>;
	enableLink?: boolean;
}

const Selector: React.FC<SelectorProps> = ({ title, children, infoData, setHoverInfo, enableLink = true }) => {

	const inners = (
		<Container
			onMouseDown={event => event.preventDefault()}
			onMouseEnter={() => setHoverInfo(infoData || null)}
			onMouseLeave={() => setHoverInfo(null)}
		>
			{
				enableLink ? <Title>{title}</Title> : <SelectorLink to={`/${title.replaceAll(' ', '')}`}>
					<Title>{title}</Title>
				</SelectorLink>
			}

			{children}
		</Container>
	)

	return enableLink ? (
		<SelectorLink to={`/${title.replaceAll(' ', '')}`}>
			{inners}
		</SelectorLink>
	) : inners
}

export default Selector