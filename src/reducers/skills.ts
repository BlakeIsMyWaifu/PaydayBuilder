import * as actions from 'actions/skills'
import defaultstate from 'states/skills'
import { ActionType, getType } from 'typesafe-actions'

type skillsAction = ActionType<typeof actions>

const skills = (state = defaultstate, action: skillsAction) => {
	return state
	// switch (action.type) {
	// 	case getType(actions.downgradeAced):
	// 		return state
	// 	case getType(actions.downgradeBasic):
	// 		return state
	// 	case getType(actions.resetAll):
	// 		return state
	// 	case getType(actions.resetTree):
	// 		return state
	// 	case getType(actions.upgradeAvailable):
	// 		return state
	// 	case getType(actions.upgradeBasic):
	// 		return state
	// 	default:
	// 		return state
	// }
}

export default skills