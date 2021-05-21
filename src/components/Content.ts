import styled from 'styled-components';
import corner from 'utils/corner';

export const Title = styled.h1`
	grid-area: title;
	font-size: 4rem;
`

export const Wrapper = styled.div`
	grid-area: wrapper;
	padding: 12px;
	overflow-y: scroll;
	${corner};
`

interface item {
	size?: number;
}

export const Item = styled.img<item>`
	width: ${props => props.size || 128}px;
	height: ${props => props.size || 128}px;
`