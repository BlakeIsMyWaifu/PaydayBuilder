import { type FC, type MouseEvent, useRef } from 'react'
import { FaClipboardList } from 'react-icons/fa'

import { Button, Container, Input } from './textIOElements'

interface TextOutputProps {
	value: string;
	callback: (value: string) => Promise<void>;
}

const TextOutput: FC<TextOutputProps> = ({ value, callback }) => {

	const outputRef = useRef<HTMLInputElement>(null)

	const outputOnClick = async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
		event.preventDefault()
		await callback(value)
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
			<Button type='submit' onClick={() => void outputOnClick}> <FaClipboardList /> </Button>
		</Container>
	)
}

export default TextOutput
