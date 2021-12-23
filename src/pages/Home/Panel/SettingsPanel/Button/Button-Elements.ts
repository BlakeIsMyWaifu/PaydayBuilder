import styled from 'styled-components'

const background = 'rgba(57, 63, 84, 0.8)'

export const Container = styled.div`
	height: 100%;
	width: 100%;
`

export const Input = styled.input`
	height: 100%;
	width: 100%;
	border: none;
	padding: 1rem 2rem;
	text-decoration: none;
	background: ${background};
	color: #fff;
	line-height: 1;
	cursor: pointer;
	text-align: center;
	transition: background 250ms ease-in-out, transform 150ms ease;
	border-radius: 2px;
	&:hover {
		background: #023E8A;
	}
	&:active {
		transform: scale(0.95);
	}
`

