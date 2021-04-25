import styled from 'styled-components'
import { dim } from 'utils/colours'
import corner from 'utils/corner'

interface tab {
	id: string
}
export const Tab = styled.div<tab>`
	grid-area: ${(props) => props.id};
`

interface tabtitle {
	direction: 'ltr' | 'rtl'
}
export const TabTitle = styled.p<tabtitle>`
	direction: ${props => props.direction};
	font-size: 20px;
	text-transform: uppercase;
`

export const PreviewWrapper = styled.div`
	width: 100%;
	height: calc(100% - 20px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const Preview = styled.div`
	width: 100%;
	height: calc(50% - 4px);
	background-color: ${dim} !important;
	${corner}
`

export const SelectorWrapper = styled.div`
	width: 100%;
	height: calc(100% - 20px);
	${corner}
`