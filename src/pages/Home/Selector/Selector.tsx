import React from 'react'

import { hoverInfo } from '../Home'
import { Container, Link, Title } from './Selector-Elements'

interface selectorComponent {
	title: string;
	children?: React.ReactNode;
	infoData: hoverInfo | null;
	setHoverInfo: React.Dispatch<React.SetStateAction<hoverInfo | null>>;
}

const Selector: React.FC<selectorComponent> = ({ title, children, infoData, setHoverInfo }) => {
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