import { DOWNGRADESKILL, RESETALL, RESETTREE, UPGRADESKILL } from 'constants/skillsConstant'
import { skillData } from 'data/abilities/skills'
import { skillUpgradeTypes } from 'states/skillsDefaultState'
import { createAction } from 'typesafe-actions'

export interface skillChangeAction {
	tree: string;
	subtree: string;
	skill: skillData;
	oldLevel: skillUpgradeTypes;
}

export const downgradeSkill = createAction(DOWNGRADESKILL)<skillChangeAction>()
export const resetAll = createAction(RESETALL)<void>()
export const resetTree = createAction(RESETTREE)<string>()
export const upgradeSkill = createAction(UPGRADESKILL)<skillChangeAction>()

export default { downgradeSkill, resetAll, resetTree, upgradeSkill }