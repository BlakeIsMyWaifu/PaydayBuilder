import { subtrees } from 'defaultStates/skillsDefaultState'
import { useAppSelector } from 'hooks'

const SkillTreePoints = (tree: string, trees?: Record<string, subtrees>) => {

	const currentTrees = useAppSelector(state => state.skills.trees)

	trees = trees || currentTrees

	let treePoints = 0
	for (let subtree in trees[tree]) {
		treePoints += trees[tree][subtree].points
	}

	return treePoints
}

export default SkillTreePoints