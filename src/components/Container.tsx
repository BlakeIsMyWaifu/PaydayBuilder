import useHandleKey from 'hooks/useHandleKey'
import Head from 'next/head'
import Link from 'next/link'
import { type FC, type ReactNode, useRef } from 'react'
import { useIsMobile } from 'state/settingsContext'
import styled from 'styled-components'
import { blue } from 'utils/colours'

const Area = styled.div<Layout>`
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
	font-size: ${props => props.theme.isMobile ? '3rem' : '4rem'};
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
	font-size: ${props => props.theme.isMobile ? '3rem' : '4rem'};
	line-height: 4rem;
	&:hover {
		color: #fff;
	}
`

interface Layout {
	columns: string;
	rows: string;
	areas: string;
}

interface ContainerProps {
	desktopLayout?: Partial<Layout>;
	mobileLayout?: Partial<Layout>;
	title?: string;
	backButton?: boolean;
	children?: ReactNode;
	backLocation?: string;
}

const Container: FC<ContainerProps> = ({
	desktopLayout,
	mobileLayout,
	title,
	backButton = true,
	children,
	backLocation = '/'
}) => {

	const defaultDesktopLayout = {
		columns: '3fr 1fr',
		rows: '4rem auto 4rem',
		areas: '"title title" "items info" "items back"'
	}

	const defaultMobileLayout = {
		columns: 'auto 75px',
		rows: '3rem auto 150px',
		areas: '"title title" "items items" "info back"'
	}

	const isMobile = useIsMobile()

	const layout = isMobile ? mobileLayout : desktopLayout
	const defaultLayout = isMobile ? defaultMobileLayout : defaultDesktopLayout

	const { columns, rows, areas }: Layout = {
		columns: layout?.columns ?? defaultLayout.columns,
		rows: layout?.rows ?? defaultLayout.rows,
		areas: layout?.areas ?? defaultLayout.areas
	}

	const backLinkRef = useRef<HTMLAnchorElement>(null)
	useHandleKey('Escape', () => backLinkRef.current?.click())

	return (
		<>
			{
				title && <Head>
					<title>Payday Builder - {title}</title>
				</Head>
			}

			<Area
				columns={columns}
				rows={rows}
				areas={areas}
			>

				{title && <Title>{title}</Title>}

				{children}

				{
					backButton && <BackWrapper>
						<BackLink
							ref={backLinkRef}
							href={backLocation}
							onMouseDown={event => event.preventDefault()}
						>
							<BackText>Back</BackText>
						</BackLink>
					</BackWrapper>
				}

			</Area>
		</>
	)
}

export default Container
