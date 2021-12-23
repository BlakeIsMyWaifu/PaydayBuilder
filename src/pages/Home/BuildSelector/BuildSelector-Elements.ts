import styled from 'styled-components'
import { blue, dim } from 'utils/colours'
import corner from 'utils/corner'

export const Container = styled.div`
	display: flex;
	background-color: ${dim};
	padding: 4px;
	height: 2.2rem;
	color: ${blue};
	${corner};
	background-size: 8px 8px;
`

export const Arrow = styled.button`
	line-height: 2.2rem;
	font-size: 2.2rem;
`

export const BuildName = styled.input`
	color: inherit;
	border: none;
	background: transparent;
	height: 100%;
	width: 20vw;
	font-size: 2.2rem;
	text-align: center;
	text-transform: none;
	user-select: text;
	outline: 0;
	&:focus, &:hover {
		color: white;
	}
`

export const BuildList = styled.button`
	height: 2.2rem;
	aspect-ratio: 1;
	font-size: 2rem;
`