import { useEffect } from 'react'

const useHandleKey = (key: string, callback: () => void) => {

	useEffect(() => {
		const handleKey = (event: KeyboardEvent) => {
			if (event.key !== key) return
			callback()
		}
		window.addEventListener('keydown', handleKey)
		return () => {
			window.removeEventListener('keydown', handleKey)
		}
	}, [callback, key])
}

export default useHandleKey