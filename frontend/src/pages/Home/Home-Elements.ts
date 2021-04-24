import styled from 'styled-components'

export const Container = styled.div`
	position: absolute;
	width: calc(100% - 16px);
	height: calc(100% - 16px);
	top: 8px;
	bottom: 8px;
	left: 8px;
	right: 8px;

	display: grid;
	grid-template-columns: 2fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 8px;
	grid-template-areas:
		"stats character weapons abilities"
		"preview character weapons abilities";
`

export const Tab = styled.div`
	border: 1px #fff solid;
	grid-area: ${(props) => props.id};
`

export const Preview = styled.div`
	border: 1px #fff solid;
	grid-area: ${(props) => props.id};
`