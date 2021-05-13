import styled from 'styled-components'
import corner from 'utils/corner'

export const Container = styled.div`
	position: relative;
	height: 100%;
	width: calc((100% / 3) - 6px);
	${corner};
`

export const TierWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`

export const Tier = styled.div`
	color: #fff;
	height: 25%;
	width: 100%;
	display: flex;
	flex-direction: row-reverse;
	justify-content: center;
`

interface background {
	height: number
}

export const Background = styled.img`
	position: absolute;
	width: 100%;
	height: ${props => props.height}%;
	bottom: 0;
`