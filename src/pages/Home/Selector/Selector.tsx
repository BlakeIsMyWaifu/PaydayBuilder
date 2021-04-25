import React from 'react'

import { Container, Link, Title } from './Selector-Elements'

interface type {
	path: string,
	title: string
}

const Selector: React.FC<type> = ({ path, title }) => {
	return (
		<Link to={path}>
			<Container>
				<Title>{title}</Title>
			</Container>
		</Link>
	)
}

export default Selector