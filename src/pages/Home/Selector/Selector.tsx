import React from 'react'

import { HoverInfo } from '../Home'
import { Container, Link, Title } from './Selector-Elements'

interface SelectorProps {
	title: string;
	children?: React.ReactNode;
	infoData: HoverInfo | null;
	setHoverInfo: React.Dispatch<React.SetStateAction<HoverInfo | null>>;
}

const Selector: React.FC<SelectorProps> = ({ title, children, infoData, setHoverInfo }) => {
	return (
		<Link to={`/${title.replaceAll(' ', '')}`} onMouseDown={event => event.preventDefault()} onMouseEnter={() => setHoverInfo(infoData)} onMouseLeave={() => setHoverInfo(null)}>
			<Container>
				<Title>{title}</Title>
				{children}
			</Container>
		</Link>
	)
}

export default Selector