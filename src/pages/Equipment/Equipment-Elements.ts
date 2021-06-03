import styled from 'styled-components'
import corner from 'utils/corner'

export const EquipmentWrapper = styled.div`
	grid-area: wrapper;
	padding: 12px;
	${corner};
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 12px;
`

interface item {
	selected: boolean;
}


export const Item = styled.div<item>`
	position: relative;
	width: 100%;
	height: 100%;
	${props => props.selected && corner};
`

interface equipementImage {
	locked: boolean;
}

export const EquipementImage = styled.img<equipementImage>`
	width: auto;
	height: 100%;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	filter: brightness(${props => props.locked ? 0.2 : 1});
`

export const EquipInfo = styled.div`
	grid-area: equipinfo;
`

export const EquipText = styled.h1`
	font-size: 1.5rem;
	text-align: end;
`