import { trees } from 'defualtStates/skillsDefaultState'
import { useAppSelector } from 'hooks'

export default (tree: string, trees?: trees) => {

	trees = trees || useAppSelector(state => state.skills.trees)

	let treePoints = 0
	for (let subtree in trees[tree]) {
		treePoints += trees[tree][subtree].points
	}

	return treePoints
}