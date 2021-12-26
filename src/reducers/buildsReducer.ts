import actions, { AddBuild, SelectBuild, UpdateData, UpdateName } from 'actions/buildsAction'
import defaultState, { BuildsState, defaultBuild } from 'defaultStates/buildsDefaultState'
import { getType } from 'typesafe-actions'
import { findNextNum } from 'utils/maths'

const buildsReducer = (state = defaultState, action: Record<'type' | 'payload', any>): BuildsState => {

	const addBuild = ({ changeToNewBuild }: AddBuild): BuildsState => {
		const nextNum = findNextNum(state.builds)
		const id = changeToNewBuild ? nextNum : state.current
		return {
			current: id,
			builds: {
				...state.builds,
				[nextNum]: {
					id: nextNum,
					name: '',
					data: defaultBuild
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

	const updateData = ({ id, data }: UpdateData): BuildsState => {
		return {
			...state,
			builds: {
				...state.builds,
				[id]: {
					...state.builds[id],
					data
				}
			}
		}
	}

	const changeBuild = ({ id }: SelectBuild): BuildsState => {
		return {
			...state,
			current: id
		}
	}

	switch (action.type) {
		case getType(actions.addBuild):
			return addBuild(action.payload)
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