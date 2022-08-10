import Link from 'next/link'
import styled from 'styled-components'
import { blue, dim } from 'utils/colours'

export const SelectorLink = styled(Link)`
	text-decoration: none;
`

export const Container = styled.div`
	width: 100%;
	height: 25%;
	background-color: ${dim};
	position: relative;
`

export const Title = styled.h2`
	font-size: 20px;
	color: ${blue};
	padding-left: 4px;
`
