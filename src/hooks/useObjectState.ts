import { useCallback, useState } from 'react'

type InitialState<T extends object> = T | (() => T)

export const useObjectState = <T extends object>(initialState: InitialState<T>): [T, (newState: T) => void] => {
	const [state, setState] = useState(initialState)

	const setObjectState = useCallback((newState: T): void => {
		setState(prevState => ({
			...prevState,
			...newState
		}))
	}, [])

	return [state, setObjectState]
}

export default useObjectState