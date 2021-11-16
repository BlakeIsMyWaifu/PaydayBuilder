import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { blue, dim } from 'utils/colours'

export const SelectorLink = styled(Link)`
	text-decoration: none;
`

export const Container = styled.div`
	width: 100%;
	height: 25%;
	background-color: ${dim};
`

export const Title = styled.p`
	font-size: 20px;
	color: ${blue};
	padding-left: 4px;
`
