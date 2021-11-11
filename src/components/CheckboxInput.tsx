import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.label`
	position: relative;
	display: inline-block;
`

const Label = styled.label`
	width: 89px;
	background: #2e394d;
	height: 24px;
	display: inline-block;
	border-radius: 50px;
	position: relative;
	transition: all .3s ease;
	transform-origin: 20% center;
	cursor: pointer;
	background: #af4c4c;
	border: .5px solid rgba(117, 117, 117, 0.31);
	box-shadow: inset 0px 0px 4px 0px rgba(0,0,0,0.2), 0 -3px 4px rgba(0,0,0,0.15);
	&:before {
		content: '';
		position: absolute;
		display: block;
		transition: all .2s ease;
		top: 2px;
		left: 2px;
		border-radius: 32px;
		border: 2px solid #88cf8f;
		transition: .3s ease;
		border: none;
		width: 20px;
		height: 20px;
		box-shadow: inset 0.5px -1px 1px rgba(0, 0, 0, 0.35);
		background: #fff;
		transform: rotate(-25deg);
	}
	&:after {
		content: '';
		position: absolute;
		background: transparent;
		height: calc(100% + 8px);
		border-radius: 30px;
		top: -5px;
		width: calc(100% + 8px);
		left: -4px;
		z-index: 0;
		box-shadow: inset 0px 2px 4px -2px rgba(0,0,0,0.2), 0px 1px 2px 0px rgba(151, 151, 151, 0.2);
	}
`

const Input = styled.input`
	position: absolute;
	opacity: 0;
	&:checked + ${Label} {
		background: #4caf50;
		&:before {
			left: 67px;
		}
	}
`

interface CheckboxInputProps {
	defaultState: boolean;
	callback: (isToggled: boolean) => void;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ defaultState, callback }) => {

	const [isToggled, setIsToggled] = useState(defaultState)

	return (
		<Container>
			<Input type='checkbox' checked={isToggled} />
			<Label onClick={() => {
				setIsToggled(!isToggled)
				callback(!isToggled)
			}} />
		</Container>
	)
}

export default CheckboxInput
