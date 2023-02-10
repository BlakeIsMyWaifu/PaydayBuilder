import styled from 'styled-components'

const background = 'rgba(57, 63, 84, 0.8)'

export const Container = styled.div`
	height: 100%;
	width: 100%;
`

export const Input = styled.input`
	height: 100%;
	width: 100%;
	font-size: 1.2rem;
	text-transform: none;
	background: ${background};
	color: #fff;
	transition: background 250ms ease-in-out, transform 150ms ease;
	&:hover {
		background: #023E8A;
	}
	&:active {
		transform: scale(0.95);
	}
`
