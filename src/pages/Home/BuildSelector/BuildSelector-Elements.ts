import styled from 'styled-components'
import { blue, dim } from 'utils/colours'
import corner from 'utils/corner'

export const Container = styled.span`
	width: 100%;
	display: flex;
	justify-content: center;
`

export const Wrapper = styled.div`
	display: flex;
	background-color: ${dim};
	width: 30vw;
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
	width: 100%;
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