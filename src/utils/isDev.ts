import React from 'react'

export const isDev = (): boolean => {
	return '_self' in React.createElement('div')
}