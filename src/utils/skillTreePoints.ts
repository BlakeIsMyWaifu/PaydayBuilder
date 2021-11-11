import { Subtrees } from 'defaultStates/skillsDefaultState'
import { useAppSelector } from 'hooks'

const SkillTreePoints = (tree: string, trees?: Record<string, Subtrees>): number => {

	const currentTrees = useAppSelector(state => state.skills.trees)

	trees = trees || currentTrees

	let treePoints = 0
	for (const subtree in trees[tree]) {
		treePoints += trees[tree][subtree].points
	}

	return treePoints
}

export default SkillTreePoints