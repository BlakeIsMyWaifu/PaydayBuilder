import { useState } from 'react'

import useMountEffect from './useMountEffect'

export interface WindowSize {
	width: number;
	height: number;
}

const useWindowSize = (): WindowSize => {

	const [size, setSize] = useState<[width: number, height: number]>([0, 0])

	useMountEffect(() => {
		const updateSize = (): void => {
			setSize([window.innerWidth, window.innerHeight])
		}

		updateSize()

		window.addEventListener('resize', updateSize)
		return () => window.removeEventListener('resize', updateSize)
	})

	return ({
		width: size[0],
		height: size[1]
	})
}

export default useWindowSize