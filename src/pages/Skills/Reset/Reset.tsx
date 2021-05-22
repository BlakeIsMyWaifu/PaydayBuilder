import { resetAll, resetTree } from 'actions/skillsAction'
import { treeData } from 'data/abilities/skills'
import { useAppDispatch } from 'hooks'
import React from 'react'

import { Container, ResetText } from './Reset-Elements'

interface reset {
	tree: string
}

const Reset: React.FC<reset> = ({ tree }: reset) => {

	const dispatch = useAppDispatch()

	return (
		<Container>
			<ResetText onClick={() => dispatch(resetTree(tree))}>Reset this tree</ResetText>
			<ResetText onClick={() => dispatch(resetAll())}>Reset all trees</ResetText>
		</Container>
	)
}

export default Reset
