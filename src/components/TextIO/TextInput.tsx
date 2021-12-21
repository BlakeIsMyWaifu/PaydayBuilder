import React, { useRef } from 'react'

import { Button, Container, Input } from './TextIO-Elements'

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
			<Input
				type='text'
				placeholder={placeholder}
				onKeyDown={onInputEnter}
				ref={inputRef}
			/>
			<Button type='submit' onClick={inputOnClick}>➜</Button>
		</Container>
	)
}

export default TextInput
