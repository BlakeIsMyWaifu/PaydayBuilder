import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.25);
`

const Image = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;
`

const Background: React.FC = () => {
	return (
		<Container>
			<Image src='/images/loading_bg.png'/>
		</Container>
	)
}

export default Background
