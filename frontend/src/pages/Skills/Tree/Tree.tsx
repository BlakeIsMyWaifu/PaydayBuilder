import React from 'react'

import { Container } from './Tree-Elements'

interface tree { 
	tree: 'mastermind' | 'enforcer' | 'technician' | 'ghost' | 'fugitive'
}

const Tree: React.FC<tree> = ({tree}: tree) => {
	return (
		<Container>
			{tree}
		</Container>
	)
}

export default Tree
