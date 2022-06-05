import { createElement } from 'react'

export const isDev = (): boolean => {
	return '_self' in createElement('div')
}