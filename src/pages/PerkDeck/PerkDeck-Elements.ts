import styled from 'styled-components';
import corner from 'utils/corner';

export const Title = styled.h1`
	grid-area: title;
	font-size: 4rem;
`

export const PerkDeckNamesWrapper = styled.div`
	grid-area: perkdecknames;
	display: flex;
	overflow-x: hidden;
`

export const PerkDeckName = styled.h1`
	padding-right: 2rem;
	font-size: 1.6rem;
	cursor: pointer;
	white-space: nowrap;
	&:last-child {
		padding-right: 0;
	}
`

export const PerksWrapper = styled.div`
	grid-area: perkdeck;
	overflow-y: scroll;
	${corner};
`
