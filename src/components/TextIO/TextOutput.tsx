import React, { useRef } from 'react'

import { Button, Container, Input } from './TextIO-Elements'

interface TextOutputProps {
	value: string;
	callback: (value: string) => void;
}

const TextOutput: React.FC<TextOutputProps> = ({ value, callback }) => {

	const outputRef = useRef<HTMLInputElement>(null)

	const outputOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		callback(value)
	}

	return (
		<Container>
			<Input
				type='text'
				value={value}
				ref={outputRef}
				onMouseOver={() => outputRef.current?.select()}
				onMouseLeave={() => outputRef.current?.blur()}
				readOnly
			/>
			<Button type='submit' onClick={outputOnClick}>📋</Button>
		</Container>
	)
}

export default TextOutput
