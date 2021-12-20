import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ModIconContainer = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
	width: 80%;
	margin: 2px;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-end;
	align-items: flex-end;
	align-content: flex-end;
`

export const ModWrapper = styled.span`
	width: clamp(16px, 10%, 2rem);
	aspect-ratio: 1;
`

export const ModLink = styled(Link)`
	width: 100%;
	height: 100%;
`

interface ModIconProps {
	equipped: boolean;
}

export const ModIcon = styled.img<ModIconProps>`
	width: 100%;
	height: 100%;
	opacity: ${props => props.equipped ? 1 : 0.2};
`