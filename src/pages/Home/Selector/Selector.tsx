import React from 'react'

import { Container, Image, Link, Title } from './Selector-Elements'

interface type {
	path: string;
	title: string;
	imagePath?: string;
}

const Selector: React.FC<type> = ({ path, title, imagePath }) => {

	return (
		<Link to={path}>
			<Container>
				<Title>{title}</Title>
				<Image src={imagePath}/>
			</Container>
		</Link>
	)
}

export default Selector