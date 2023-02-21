import { isDev } from 'utils/isDev'

import useMountEffect from './useMountEffect'

const useErrorHandler = (): void => {
	useMountEffect(() => {
		if (!isDev) {
			const reset = (): void => {
				localStorage.clear()
				window.location.reload()
			}
			window.addEventListener('error', reset)
			return window.removeEventListener('error', reset)
		}
	})
}

export default useErrorHandler