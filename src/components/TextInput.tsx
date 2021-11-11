import React, { useRef } from 'react'
import styled, { css, keyframes } from 'styled-components'

const background = 'rgba(57, 63, 84, 0.8)'
const inactive = '#7881A1'
const active = '#BFD2FF'

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

const Container = styled.div`
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

const Input = styled.input`
	user-select: text !important;
	border-style: none;
	background: transparent;
	outline: none;
	flex-grow: 1;
	color: ${active};
	font-size: 16px;
	line-height: 2.4rem;
	vertical-align: middle;
	&::placeholder {
		color: ${inactive}
	}
`

const Button = styled.button`
	padding: 0;
	background: none;
	border: none;
	outline: none;
	color:  ${inactive};
	font-size: 2.4rem;
	line-height: 2.4rem;
	vertical-align: middle;
	transform: color .25s;
	&:hover {
		color: ${active};
	}
`

interface TextInputProps {
	placeholder: string;
	callback: (input: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, callback }) => {

	const inputRef = useRef<HTMLInputElement>(null)

	const onInputEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			callback(event.currentTarget.value)
			event.currentTarget.value = ''
		}
	}

	const inputOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		const input = inputRef.current
		if (!input) return
		callback(input.value)
		input.value = ''
	}

	return (
		<Container>
			<Input type='text' placeholder={placeholder} onKeyDown={onInputEnter} ref={inputRef} />
			<Button type='submit' onClick={inputOnClick}>➜</Button>
		</Container>
	)
}

export default TextInput
