import styled, { css, keyframes } from 'styled-components'

export const background = 'rgba(57, 63, 84, 0.8)'
export const inactive = '#7881A1'
export const active = '#BFD2FF'

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	width: auto;
	margin: 0 auto;
	border-radius: 2px;
	padding: 4px 1rem;
	background: ${background};
	&:after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		height: 2px;
		border-bottom-left-radius: 2px;
		border-bottom-right-radius: 2px;
		background-position: 0% 0%;
		background: linear-gradient(to right, #03045E, #023E8A, #0077B6, #0096C7, #00B4D8, #48CAE4, #90E0EF);
		background-size: 500% auto;
		animation: ${css`${gradient}`} 8s linear infinite;
	}
`

export const Input = styled.input`
	user-select: text !important;
	border-style: none;
	background: transparent;
	outline: none;
	flex-grow: 1;
	color: ${active};
	font-size: 16px;
	line-height: 2.4rem;
	vertical-align: middle;
	text-transform: none;
	&::placeholder {
		color: ${inactive}
	}
`

export const Button = styled.button`
	padding: 0;
	color:  ${inactive};
	font-size: 2rem;
	line-height: 2rem;
	vertical-align: middle;
	transform: color .25s;
	&:hover {
		color: ${active};
	}
`