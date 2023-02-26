import { type Subtrees } from 'state/useSkillsStore'

const SkillTreePoints = (tree: string, trees: Record<string, Subtrees>): number => {
	let treePoints = 0

	for (const subtree in trees[tree]) {
		treePoints += trees[tree][subtree].points
	}

	return treePoints
}

export default SkillTreePoints