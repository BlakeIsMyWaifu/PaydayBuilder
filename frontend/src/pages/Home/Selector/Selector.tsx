import React from 'react'
import { Link } from 'react-router-dom'

interface type {
	path: string
}

const Selector: React.FC<type> = ({ path }) => {
	return (
		<Link to={path}>
			
		</Link>
	)
}

export default Selector