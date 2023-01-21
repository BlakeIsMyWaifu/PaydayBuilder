import styled from 'styled-components'
import { blue, dim } from 'utils/colours'
import corner from 'utils/corner'

export const Builds = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 24px 8px 0 0;
	height: 100%;
	overflow-y: auto;
`

export const BuildSectionTitle = styled.h2`
	font-size: 1.2rem;
`

export const BuildWrapper = styled.div`
	height: 2rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 4px;
	color: ${blue};
	${corner};
	background-color: ${dim};
	background-size: 8px 8px;
`

export const BuildName = styled.input`
	color: inherit;
	border: none;
	width: 100%;
	margin-left: 12px;
	background-color: transparent;
	font-size: 1.8rem;
	text-transform: none;
	user-select: text;
	outline: 0;
	&:focus, &:hover {
		color: white;
	}
`

interface BuildButtonProps {
	colour?: string;
}

export const BuildButton = styled.button<BuildButtonProps>`
	height: 100%;
	aspect-ratio: 1;
	color: ${props => props.colour || blue};
`

export const NewBuild = styled.button`
	height: 2rem;
	font-size: 2rem;
	margin-top: 8px;
	align-self: flex-end;
`