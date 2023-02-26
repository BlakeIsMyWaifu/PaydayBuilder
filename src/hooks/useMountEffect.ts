import { type EffectCallback, useEffect } from 'react'

const useMountEffect = (func: EffectCallback): void => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(func, [])
}

export default useMountEffect