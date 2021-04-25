import styled from 'styled-components'

import corner from '../../utils/corner'

export const Container = styled.div`
	position: absolute;
	width: calc(100% - 16px);
	height: calc(100% - 16px);
	top: 8px;
	bottom: 8px;
	left: 8px;
	right: 8px;

	display: grid;
	gap: 8px;
	grid-template-columns: 3fr 1fr;
	grid-template-rows: 1fr 9fr;
	grid-template-areas: "title title" "masks info";
`

export const Title = styled.div`
	grid-area: title;
	font-size: 4rem;
`

export const MaskWrapper = styled.div`
	grid-area: masks;
	${corner};
`

export const Info = styled.div`
	grid-area: info;
	${corner};
`