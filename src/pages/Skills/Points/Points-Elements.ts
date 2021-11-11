import styled from 'styled-components'

interface ContainerProps {
	colour: string
}

export const Container = styled.div<ContainerProps>`
	grid-area: points;
	color: ${props => props.colour};
	font-size: 1.8rem;
	display: flex;
	justify-content: space-between;
`

export const PointsText = styled.p`
	color: inherit;
	font-size: inherit;
`

export const PointsNumber = styled.p`
	color: inherit;
	font-size: inherit;
	direction: rtl;
`