import { FC, MouseEvent, useRef } from 'react'
import { FaClipboardList } from 'react-icons/fa'

import { Button, Container, Input } from './TextIO-Elements'

interface TextOutputProps {
	value: string;
	callback: (value: string) => void;
}

const TextOutput: FC<TextOutputProps> = ({ value, callback }) => {

	const outputRef = useRef<HTMLInputElement>(null)

	const outputOnClick = (event: MouseEvent<HTMLButtonElement>): void => {
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
			<Button type='submit' onClick={outputOnClick}> <FaClipboardList /> </Button>
		</Container>
	)
}

export default TextOutput
