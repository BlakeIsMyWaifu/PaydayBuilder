import React from 'react'
import styled from 'styled-components'

interface area {
	columns: string;
	rows: string;
	areas: string;
	children: React.ReactNode;
}

const Area = styled.div<area>`
	position: absolute;
	width: calc(100% - 16px);
	height: calc(100% - 16px);
	top: 8px;
	bottom: 8px;
	left: 8px;
	right: 8px;

	display: grid;
	gap: 8px;

	grid-template-columns: ${props => props.columns};
	grid-template-rows: ${props => props.rows};
	grid-template-areas: ${props => props.areas};
`

const Container: React.FC<area> = ({ columns, rows, areas, children}: area) => {
	return (
		<Area columns={columns} rows={rows} areas={areas}>
			{children}
		</Area>
	)
}

export default Container
