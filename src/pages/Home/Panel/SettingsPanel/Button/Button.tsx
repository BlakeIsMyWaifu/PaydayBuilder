import React from 'react'

import { Container, Input } from './Button-Elements'

interface ButtonProps {
	text: string;
	callback: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, callback }) => {
	return (
		<Container>
			<Input type='button' onClick={callback} value={text} />
		</Container>
	)
}

export default Button