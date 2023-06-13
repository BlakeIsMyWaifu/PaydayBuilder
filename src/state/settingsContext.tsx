import useWindowSize, { type WindowSize } from 'hooks/useWindow.size'
import { createContext, type FC, type ReactNode, type Reducer, useContext, useEffect, useReducer } from 'react'

import { useSettingsStore } from './useSettingsStore'

const SettingsContext = createContext<UseSettingsContext | null>(null)

type Action =
	| { type: 'ChangeLeftFacing'; isLeftFacing: boolean }
	| { type: 'UpdateSize'; size: WindowSize }
type State = typeof initialState

const initialState = {
	isLeftFacing: false,
	isMobile: false
}

const settingsReducer: Reducer<State, Action> = (state, action) => {
	switch (action.type) {
		case 'ChangeLeftFacing': {
			const { isLeftFacing } = action
			return {
				...state,
				isLeftFacing
			}
		}
		case 'UpdateSize': {
			const { size } = action
			return {
				...state,
				isMobile: size.width < 768
			}
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
			isLeftFacing: leftFacing
		})
	}, [dispatch, leftFacing])

	const size = useWindowSize()
	useEffect(() => {
		dispatch({
			type: 'UpdateSize',
			size
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, size.width])

	return null
}

export const useIsLeftFacing = (): boolean => useSettingsContext().state.isLeftFacing

export const useIsMobile = (): boolean => useSettingsContext().state.isMobile