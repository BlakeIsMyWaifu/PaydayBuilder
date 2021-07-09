import { CHANGELEFTFACING, RESETSETTINGS } from 'constants/settingsConstant'
import { createAction } from 'typesafe-actions'

export const changeLeftFacing = createAction(CHANGELEFTFACING)<boolean>()

export const resetSettings = createAction(RESETSETTINGS)<void>()

export default { changeLeftFacing, resetSettings }