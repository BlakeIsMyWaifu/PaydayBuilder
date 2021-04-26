import styled from 'styled-components'
import corner from 'utils/corner'

export const Container = styled.div`
	height: 100%;
	width: calc((100% / 3) - 6px);
	display: flex;
	flex-direction: column;
	${corner}
`

export const Tier = styled.div`
	color: #fff;
	height: 25%;
	width: 100%;
`