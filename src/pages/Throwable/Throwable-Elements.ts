import styled from 'styled-components'
import corner from 'utils/corner'

export const IconWrapper = styled.div`
	position: relative;
`

export const EquipedLabel = styled.h1`
	position: absolute;
	top: 5px;
	left: 8px;
`

export const NameLabel = styled.h1`
	position: absolute;
	top: 5px;
	right: 8px;
	font-size: 0.8rem;
	color: ${props => props.color};
`

interface throwableIcon {
	selected: boolean;
}

export const ThrowableIcon = styled.img<throwableIcon>`
	width: 192px;
	height: 96px;
	${props => props.selected && corner};
`