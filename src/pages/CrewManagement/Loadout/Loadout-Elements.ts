import styled from 'styled-components'
import corner from 'utils/corner'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
`

export const LoadoutNumber = styled.h1`
	writing-mode: vertical-rl;
	font-size: 1.5rem;
`

export const ItemContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 128px;
	align-items: center;
	justify-content: center;
	${corner};
`

export const Item = styled.div`
	width: 128px;
	height: 128px;
	position: relative;
	&:nth-child(4) {
		width: 256px;
	}
`

export const ItemTitle = styled.p`
	position: absolute;
	top: 0;
	font-size: 16px;
`

export const ItemIcon = styled.img`
	
`