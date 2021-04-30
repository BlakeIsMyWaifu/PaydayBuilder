import { DOWNGRADEACED, DOWNGRADEBASIC, RESETALL, RESETTREE, UPGRADEAVAILABLE, UPGRADEBASIC } from 'constants/skills'
import { createAction } from 'typesafe-actions'

export const downgradeAced = createAction(DOWNGRADEACED)<void>()
export const downgradeBasic = createAction(DOWNGRADEBASIC)<void>()

export const resetAll = createAction(RESETALL)<void>()
export const resetTree = createAction(RESETTREE)<void>()

export const upgradeAvailable = createAction(UPGRADEAVAILABLE)<void>()
export const upgradeBasic = createAction(UPGRADEBASIC)<void>()

