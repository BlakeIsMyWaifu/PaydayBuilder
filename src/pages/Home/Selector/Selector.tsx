import React from 'react'

import { HoverInfo } from '../Home'
import { Container, SelectorLink, Title } from './Selector-Elements'

interface SelectorProps {
	title: string;
	children?: React.ReactNode;
	infoData?: HoverInfo | null;
	setHoverInfo: React.Dispatch<React.SetStateAction<HoverInfo | null>>;
}

const Selector: React.FC<SelectorProps> = ({ title, children, infoData, setHoverInfo }) => {
	return (
		<SelectorLink
			to={`/${title.replaceAll(' ', '')}`}
			onMouseDown={event => event.preventDefault()}
			onMouseEnter={() => setHoverInfo(infoData || null)}
			onMouseLeave={() => setHoverInfo(null)}
		>
			<Container>
				<Title>{title}</Title>
				{children}
			</Container>
		</SelectorLink>
	)
}

export default Selector