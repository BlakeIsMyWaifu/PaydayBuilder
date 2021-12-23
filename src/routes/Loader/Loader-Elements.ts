import styled, { css, keyframes } from 'styled-components'

const rotation = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`

export const Container = styled.div`
	width: 8rem;
	height: 12rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const Spinner = styled.div`
	width: 8rem;
	height: 8rem;
	border-top: 8px solid rgba(255, 255, 255, 0.5);
	border-right: 8px solid transparent;
	border-radius: 50%;
	animation: ${css`${rotation}`} .8s linear infinite;
`

export const Text = styled.h1`
	text-align: center;
	font-size: 2rem;
`