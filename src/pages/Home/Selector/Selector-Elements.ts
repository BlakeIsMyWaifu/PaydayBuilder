import { Link as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'
import { blue, dim } from 'utils/colours'

export const Link = styled(LinkRouter)`
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

export const Image = styled.img`
	height: calc(100% - 32px);
	width: auto;
	display: block;
	margin-left: auto;
	margin-right: auto;
`