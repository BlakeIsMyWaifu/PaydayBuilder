import { ItemContainer } from 'components/Item-Elements'
import styled, { css, keyframes } from 'styled-components'

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

export const MaskItemContainer = styled(ItemContainer)`
	flex-direction: column;
	flex-wrap: nowrap;
`

export const MaskCollection = styled.div`
	display: flex;
	flex-direction: column;
`

interface MaskCollectionTitleProps {
	colour: string;
}

export const MaskCollectionTitle = styled.h1<MaskCollectionTitleProps>`
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
