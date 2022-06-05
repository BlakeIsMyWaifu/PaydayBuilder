import { FC, useState } from 'react'

import { Container, Input, Label } from './CheckboxInput-Elements'

interface CheckboxInputProps {
	defaultState: boolean;
	callback: (isToggled: boolean) => void;
}

const CheckboxInput: FC<CheckboxInputProps> = ({ defaultState, callback }) => {

	const [isToggled, setIsToggled] = useState(defaultState)

	return (
		<Container>
			<Input type='checkbox' checked={isToggled} readOnly />
			<Label onClick={() => {
				setIsToggled(!isToggled)
				callback(!isToggled)
			}} />
		</Container>
	)
}

export default CheckboxInput