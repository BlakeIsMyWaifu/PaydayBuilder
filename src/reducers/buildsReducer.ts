import actions, { ChangeBuild, UpdateData, UpdateName } from 'actions/buildsAction'
import defaultState, { BuildsState } from 'defaultStates/buildsDefaultState'
import { getType } from 'typesafe-actions'
import { findNextNum } from 'utils/maths'

const buildsReducer = (state = defaultState, action: Record<'type' | 'payload', any>): BuildsState => {

	const addBuild = (): BuildsState => {
		const nextNum = findNextNum(state.builds)
		return {
			...state,
			builds: {
				...state.builds,
				[nextNum]: {
					id: nextNum,
					name: '',
					data: 's=0-90-90-9000&p=0&a=0&t=5&d=0'
				}
			}
		}
	}

	const removeBuild = (id: number): BuildsState => {
		const newState = { ...state.builds }
		delete newState[id]
		return {
			...state,
			builds: newState
		}
	}

	const updateName = ({ id, name }: UpdateName): BuildsState => {
		return {
			...state,
			builds: {
				...state.builds,
				[id]: {
					...state.builds[id],
					name
				}
			}
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const updateData = ({ id, data }: UpdateData): BuildsState => {
		return state
	}

	const changeBuild = ({ id, currentData }: ChangeBuild): BuildsState => {
		const current = state.current
		return {
			current: id,
			builds: {
				...state.builds,
				[current]: {
					...state.builds[current],
					data: currentData
				}
			}
		}
	}

	switch (action.type) {
		case getType(actions.addBuild):
			return addBuild()
		case getType(actions.removeBuild):
			return removeBuild(action.payload)
		case getType(actions.updateName):
			return updateName(action.payload)
		case getType(actions.updateData):
			return updateData(action.payload)
		case getType(actions.changeBuild):
			return changeBuild(action.payload)
		default:
			return state
	}
}

export default buildsReducer