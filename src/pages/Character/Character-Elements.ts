import styled from 'styled-components';
import corner from 'utils/corner';

export const CharacterWrapper = styled.div`
	grid-area: characters;
	${corner};
	padding: 12px;
	overflow-y: scroll;
`

export const Character = styled.img`
	width: 128px;
	height: 128px;
`