import { type FC, type KeyboardEvent, type MouseEvent, useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'

import { Button, Container, Input } from './textIOElements'

interface TextInputProps {
	placeholder: string;
	callback: (input: string) => void;
}

const TextInput: FC<TextInputProps> = ({ placeholder, callback }) => {

	const inputRef = useRef<HTMLInputElement>(null)

	const onInputEnter = (event: KeyboardEvent<HTMLInputElement>): void => {
		if (event.key === 'Enter') {
			callback(event.currentTarget.value)
			event.currentTarget.value = ''
		}
	}

	const inputOnClick = (event: MouseEvent<HTMLButtonElement>): void => {
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
			<Button type='submit' onClick={inputOnClick}> <FaArrowRight /> </Button>
		</Container>
	)
}

export default TextInput
