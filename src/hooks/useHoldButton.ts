import { type MouseEvent, type MouseEventHandler, useEffect, useMemo, useRef, useState } from 'react'

import useMountEffect from './useMountEffect'

interface ButtonEvents {
	onMouseDown: MouseEventHandler;
	onMouseUp: MouseEventHandler;
	onMouseLeave: MouseEventHandler;
}

interface UseHoldButton {
	/**
	 * time in milliseconds to use count as a hold
	 */
	threshold?: number;
	holdCallback: () => void;
	clickCallback: (event: MouseEvent) => void;
}

const useHoldButton = ({ threshold = 500, holdCallback, clickCallback }: UseHoldButton): ButtonEvents => {

	const thresholdMs = useMemo(() => threshold / 10, [threshold])

	const [counter, setCounter] = useState(0)
	const intervalRef = useRef<NodeJS.Timer | null>(null)

	const startCounter = (): void => {
		if (intervalRef.current) return
		intervalRef.current = setInterval(() => {
			setCounter(prevCounter => prevCounter + 1)
		}, 10)
	}

	const stopCounter = (): void => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current)
			intervalRef.current = null
		}
	}

	const handleCallback = (event: MouseEvent): void => {

		stopCounter()
		setCounter(0)
		event.preventDefault()

		if (counter === -1) return

		if (thresholdMs <= counter) {
			holdCallback()
		} else {
			clickCallback(event)
		}

	}

	useMountEffect(() => {
		return stopCounter
	})

	useEffect(() => {
		if (thresholdMs > counter) return
		holdCallback()
		stopCounter()
		setCounter(-1)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [counter, thresholdMs])

	return {
		onMouseDown: startCounter,
		onMouseUp: handleCallback,
		onMouseLeave: stopCounter
	}
}

export default useHoldButton