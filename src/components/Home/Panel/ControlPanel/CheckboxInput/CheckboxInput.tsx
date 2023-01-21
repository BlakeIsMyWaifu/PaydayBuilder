import { FC } from 'react'

import { Container, Input, Label } from './CheckboxInput-Elements'

interface CheckboxInputProps {
	state: boolean;
	callback: (isToggled: boolean) => void;
}

const CheckboxInput: FC<CheckboxInputProps> = ({ state, callback }) => {
	return (
		<Container>
			<Input type='checkbox' checked={state} readOnly />
			<Label onClick={() => {
				callback(state)
			}} />
		</Container>
	)
}

export default CheckboxInput