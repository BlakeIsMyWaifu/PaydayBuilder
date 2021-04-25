import React from 'react'
import styled from 'styled-components'

export const Image = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	z-index: -1;
	user-select: none;
`

const Background: React.FC = () => {
	return (
		<Image src='/images/background.jpg'/>
	)
}

export default Background
