import Link from 'next/link'
import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { blue } from 'utils/colours'

const Area = styled.div<ContainerProps>`
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	padding: 8px;
	box-sizing: border-box;

	overflow: hidden;

	display: grid;
	gap: 8px;

	grid-template-columns: ${props => props.columns};
	grid-template-rows: ${props => props.rows};
	grid-template-areas: ${props => props.areas};
`

const Title = styled.h1`
	grid-area: title;
	font-size: 4rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`

const BackWrapper = styled.div`
	grid-area: back;
	position: relative;
`

const BackLink = styled(Link)`
	text-decoration: none;
`

const BackText = styled.p`
	color: ${blue};
	position: absolute;
	bottom: 0;
	right: 0;
	font-size: 4rem;
	line-height: 4rem;
	&:hover {
		color: #fff;
	}
`

interface ContainerProps {
	columns?: string;
	rows?: string;
	areas?: string;
	title?: string;
	backButton?: boolean;
	children?: ReactNode;
	backLocation?: string;
}

const Container: FC<ContainerProps> = ({
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
					<BackLink href={backLocation} onMouseDown={event => event.preventDefault()}>
						<BackText>Back</BackText>
					</BackLink>
				</BackWrapper>
			}

		</Area>
	)
}

export default Container
