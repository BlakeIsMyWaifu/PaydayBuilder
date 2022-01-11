import React, { useEffect } from 'react'

const useMountEffect = (func: React.EffectCallback) => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(func, [])
}

export default useMountEffect