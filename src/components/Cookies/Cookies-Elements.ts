import styled from 'styled-components'
import colours from 'utils/colours'

export const CookiesContainer = styled.div`
	position: absolute;
	width: 100vw;
	height: 3rem;
	bottom: 0;
	left: 0;
	background-color: ${colours.grey};
	z-index: 100;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 16px;
`

export const CookiesText = styled.p`
	font-size: 1.4rem;
	text-transform: none;
`

export const CookiesButton = styled.input`
	padding: 2px 4px;
`