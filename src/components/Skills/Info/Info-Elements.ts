import styled from 'styled-components'
import { blue } from 'utils/colours'

export const InfoCost = styled.div`
	font-size: 1.5rem;
	padding-top: 24px;
`

export const InfoCostText = styled.span`
	font-size: inherit;
	text-transform: uppercase;
	color: #fff;
`

export const InfoCostNumber = styled.span`
	font-size: inherit;
	text-transform: lowercase;
	color: ${blue};
`

export const InfoSkill = styled.h1`
	font-size: 1.2rem;
	text-transform: none;
`