import styled from 'styled-components'
import { lightgrey } from 'utils/colours'

export const BuildInput = styled.div`
	width: 100%;
	height: 24px;
	display: flex;
`

export const TextInput = styled.input`
	width: 100%;
	height: 20px;
	font-size: 16px;
	user-select: text !important;
	background-color: transparent;
	color: #fff;
	padding-left: 4px;
	outline: none;
`

export const SubmitButton = styled.input`
	width: auto;
	height: 100%;
	padding: 4px;
	border: none;
	background-color: ${lightgrey};
	cursor: pointer;
	&:hover {
		background-color: white;
	}
`