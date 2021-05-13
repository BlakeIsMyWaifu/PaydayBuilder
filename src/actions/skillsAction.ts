import { DOWNGRADESKILL, RESETALL, RESETTREE, UPGRADESKILL } from 'constants/skillsConstant'
import { skillData } from 'data/abilities/skills'
import { skillUpgradeTypes } from 'states/skillsDefaultState'
import { createAction } from 'typesafe-actions'

export interface skillChangeAction {
	tree: string;
	subtree: string;
	skill: skillData;
	oldLevel: skillUpgradeTypes;
	direction: 'upgrade' | 'downgrade';
}

export const changeSkillState = createAction(DOWNGRADESKILL)<skillChangeAction>()
export const resetAll = createAction(RESETALL)<void>()
export const resetTree = createAction(RESETTREE)<string>()

export default { changeSkillState, resetAll, resetTree }