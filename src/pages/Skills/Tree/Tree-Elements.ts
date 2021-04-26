import styled from 'styled-components'
import { blue } from 'utils/colours'
import corner from 'utils/corner'

export const Container = styled.div`
	grid-area: skills;
	display: flex;
	justify-content: space-between;
`

export const Subtree = styled.div`
	height: 100%;
	width: calc((100% / 3) - 6px);
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 3rem;
`

export const Label = styled.p`
	color: ${blue};
	text-align: center;
	font-size: 2rem;
`

export const TierWrapper = styled.div`
	${corner}
`

export const Tier = styled.div`
	height: 25%;
	width: 100%;
`