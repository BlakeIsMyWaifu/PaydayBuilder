import { EffectCallback, useEffect } from 'react'

const useMountEffect = (func: EffectCallback): void => {
	useEffect(func, [])
}

export default useMountEffect