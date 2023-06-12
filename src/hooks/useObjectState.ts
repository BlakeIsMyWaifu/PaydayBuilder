import { useCallback, useState } from 'react'

type InitialState<T extends object> = T | (() => T)

const useObjectState = <T extends object>(initialState: InitialState<T>): [T, (newState: Partial<T>) => void] => {
	const [state, setState] = useState(initialState)

	const setObjectState = useCallback((newState: Partial<T>): void => {
		setState(prevState => ({
			...prevState,
			...newState
		}))
	}, [])

	return [state, setObjectState]
}

export default useObjectState