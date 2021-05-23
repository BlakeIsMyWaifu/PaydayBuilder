import React from 'react'

import { Container, Link, Title } from './Selector-Elements'

interface selectorComponent {
	title: string;
	imagePath?: string;
	children?: React.ReactNode;
}

const Selector: React.FC<selectorComponent> = ({ title, imagePath, children }) => {

	return (
		<Link to={`/${title.replaceAll(' ', '')}`}>
			<Container>
				<Title>{title}</Title>
				{children}
			</Container>
		</Link>
	)
}

export default Selector