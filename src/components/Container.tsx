import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { blue } from 'utils/colours'

interface AreaProps {
	columns?: string;
	rows?: string;
	areas?: string;
	title?: string;
	backButton?: boolean;
	children?: React.ReactNode;
	backLocation?: string;
}

const Area = styled.div<AreaProps>`
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

const BackWrapper = styled.div`
	grid-area: back;
`

const BackLink = styled(Link)`
	text-decoration: none;
`

const BackText = styled.p`
	color: ${blue};
	position: absolute;
	bottom: 0;
	right: 8px;
	font-size: calc(4rem - 8px);
	&:hover {
		color: #fff;
	}
`

const Container: React.FC<AreaProps> = ({
	columns = '3fr 1fr',
	rows = '4rem 8fr 4rem',
	areas = '"title title" "items info" "items back"',
	title,
	backButton = true,
	children,
	backLocation = '/'
}) => {
	return (
		<Area columns={columns} rows={rows} areas={areas}>

			{title && <Title>{title}</Title>}

			{children}

			{
				backButton && <BackWrapper>
					<BackLink to={backLocation} onMouseDown={event => event.preventDefault()}>
						<BackText>Back</BackText>
					</BackLink>
				</BackWrapper>
			}

		</Area>
	)
}

export default Container
