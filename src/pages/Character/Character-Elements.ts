import styled from "styled-components";
import corner from "utils/corner";

export const Title = styled.h1`
	grid-area: title;
	font-size: 4rem;
`

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

export const Info = styled.div`
	grid-area: info;
	${corner};
	padding: 8px;
`

export const InfoName = styled.h1`
	text-transform: none;
	font-size: 2rem;
`

export const InfoNationality = styled.h1`
	text-transform: none;
`

export const InfoAge = styled.h1`
	text-transform: none;
`

export const InfoDescription = styled.h1`
	text-transform: none;
	font-size: 1.2rem;
	padding-top: 12px;
`