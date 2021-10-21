import { CHANGESKILLSTATE, RESETSKILLS, RESETTREE } from 'constants/skillsConstant'
import { skillData } from 'data/abilities/skills'
import { skillUpgradeTypes } from 'defaultStates/skillsDefaultState'
import { createAction } from 'typesafe-actions'

export interface skillChangeAction {
	tree: string;
	subtree: string;
	skill: skillData;
	oldLevel: skillUpgradeTypes;
	direction: 'upgrade' | 'downgrade';
}

export const changeSkillState = createAction(CHANGESKILLSTATE)<skillChangeAction>()
export const resetSkills = createAction(RESETSKILLS)<void>()
export const resetTree = createAction(RESETTREE)<string>()

const skillsActions = {
	changeSkillState,
	resetSkills,
	resetTree
}

export default skillsActions