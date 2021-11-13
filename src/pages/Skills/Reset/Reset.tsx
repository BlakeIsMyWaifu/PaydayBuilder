import { resetSkills, resetTree } from 'actions/skillsAction'
import { TreeNames } from 'data/abilities/skills'
import { useAppDispatch } from 'hooks'
import React from 'react'

import { Container, ResetText } from './Reset-Elements'

interface ResetProps {
	tree: TreeNames
}

const Reset: React.FC<ResetProps> = ({ tree }) => {

	const dispatch = useAppDispatch()

	return (
		<Container>
			<ResetText onClick={() => dispatch(resetTree(tree))}>[F] Reset this tree</ResetText>
			<ResetText onClick={() => dispatch(resetSkills())}>[R] Reset all trees</ResetText>
		</Container>
	)
}

export default Reset
