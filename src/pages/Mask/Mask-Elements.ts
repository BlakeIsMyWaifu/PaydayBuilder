import styled, { css, keyframes } from 'styled-components'
import corner from 'utils/corner'

const rainbow = keyframes`
	0% {
		color: #3BAEFE;
	}
	18% {
		color: #FFD400;
	}
	36% {
		color: #FFF;
	}
	54% {
		color: #FF9100;
	}
	72% {
		color: #FE5D63;
	}
	90% {
		color: #FF1AFF;
	}
	100% {
		color: #3BAEFE;
	}
`

export const rainbowAnimation = css`
	animation: ${rainbow} 4s linear 0s infinite;
`

export const ItemContainer = styled.div`
	grid-area: items;
	padding: 12px;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	${corner};
`

export const MaskCollection = styled.div`
	display: flex;
	flex-direction: column;
`

interface MaskCollectionTitelProps {
	colour: string;
}

export const MaskCollectionTitle = styled.h1<MaskCollectionTitelProps>`
	font-size: 1.5rem;
	padding-left: 32px;
	color: ${props => props.colour};
`

export const MaskWrapper = styled.div`
	padding-top: 16px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`
