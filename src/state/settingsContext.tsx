import { FC, ReactNode, Reducer, createContext, useContext, useEffect, useReducer } from 'react'

import { useSettingsStore } from './useSettingsStore'

const SettingsContext = createContext<UseSettingsContext | null>(null)

type Action = { type: 'ChangeLeftFacing'; leftFacing: boolean }
type State = typeof initialState

const initialState = {
	leftFacing: false
}

const settingsReducer: Reducer<State, Action> = (state, action) => {
	switch (action.type) {
		case 'ChangeLeftFacing': {
			const { leftFacing } = action
			return {
				...state,
				leftFacing
			}
		}
		default: {
			throw new Error(`Unhandled action type ${action.type}`)
		}
	}
}

interface SettingsProviderProps {
	children: ReactNode;
}

export const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer(settingsReducer, initialState)
	const value = { state, dispatch }
	return (
		<SettingsContext.Provider value={value}>
			{children}
		</SettingsContext.Provider>
	)
}

interface UseSettingsContext {
	state: State;
	dispatch: (action: Action) => void;
}

export const useSettingsContext = (): UseSettingsContext => {
	const context = useContext(SettingsContext)
	if (!context) {
		throw new Error('useSettingsContext must be used within a SettingsProvider')
	}
	return context
}

export const UpdateSettingsContext: FC = () => {

	const { dispatch } = useSettingsContext()

	const leftFacing = useSettingsStore(state => state.leftFacing)

	useEffect(() => {
		dispatch({
			type: 'ChangeLeftFacing',
			leftFacing
		})
	}, [dispatch, leftFacing])

	return null
}