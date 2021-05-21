import styled from 'styled-components'

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
