import React from 'react'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'
import { blue } from 'utils/colours'

interface area {
	columns?: string;
	rows?: string;
	areas?: string;
	title?: string;
	backButton?: boolean;
	children?: React.ReactNode;
	ref?: React.MutableRefObject<any>;
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

const Title = styled.h1`
	grid-area: title;
	font-size: 4rem;
`

const BackContainer = styled.div`
	grid-area: back;
`

const BackLink = styled(LinkR)`
	text-decoration: none;
`

const BackText = styled.p`
	direction: rtl;
	color: ${blue};
	position: absolute;
	bottom: 0;
	right: 8px;
	font-size: calc(4rem - 8px);
	&:hover {
		color: #fff;
	}
`

const Container: React.FC<area> = ({
	columns = '3fr 1fr',
	rows = '4rem 8fr 4rem',
	areas = '"title title" "items info" "items back"',
	title,
	backButton = true,
	children
}) => {
	return (
		<Area columns={columns} rows={rows} areas={areas}>

			<Title>{title}</Title>

			{children}

			{
				backButton && <BackContainer>
					<BackLink to='/'>
						<BackText>Back</BackText>
					</BackLink>
				</BackContainer>
			}

		</Area>
	)
}

export default Container
