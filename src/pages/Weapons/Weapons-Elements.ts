import styled from 'styled-components'

export const WeaponTypes = styled.div`
	grid-area: weapontypes;
	display: flex;
	overflow-x: hidden;
`

export const WeaponType = styled.h1`
	padding-right: 2rem;
	font-size: 1.6rem;
	cursor: pointer;
	white-space: nowrap;
	color: ${props => props.color};
	&:last-child {
		padding-right: 0;
	}
`