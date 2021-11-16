import { CHANGESKILLSTATE, RESETSKILLS, RESETTREE } from 'constants/skillsConstant'
import { SkillData } from 'data/abilities/skills'
import { SkillUpgradeTypes } from 'defaultStates/skillsDefaultState'
import { createAction } from 'typesafe-actions'

export interface ChangeSkillStateAction {
	tree: string;
	subtree: string;
	skill: SkillData;
	oldLevel: SkillUpgradeTypes;
	direction: 'upgrade' | 'downgrade';
}

export const changeSkillState = createAction(CHANGESKILLSTATE)<ChangeSkillStateAction>()
export const resetSkills = createAction(RESETSKILLS)<void>()
export const resetTree = createAction(RESETTREE)<string>()

const skillsActions = {
	changeSkillState,
	resetSkills,
	resetTree
}

export default skillsActions