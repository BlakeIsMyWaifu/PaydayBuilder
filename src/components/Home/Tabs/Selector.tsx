import Link from 'next/link'
import { HoverInfo } from 'pages/index'
import { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import styled from 'styled-components'
import { blue, dim } from 'utils/colours'

const SelectorLink = styled(Link)`
	text-decoration: none;
`

const Container = styled.div`
	width: 100%;
	height: 25%;
	background-color: ${dim};
	position: relative;
`

const Title = styled.h2`
	font-size: 20px;
	color: ${blue};
	padding-left: 4px;
`

interface SelectorProps {
	title: string;
	children?: ReactNode;
	infoData?: HoverInfo | null;
	setHoverInfo: Dispatch<SetStateAction<HoverInfo | null>>;
	enableLink?: boolean;
}

const Selector: FC<SelectorProps> = ({ title, children, infoData, setHoverInfo, enableLink = true }) => {

	const inners = (
		<Container
			onMouseDown={event => event.preventDefault()}
			onMouseEnter={() => setHoverInfo(infoData || null)}
			onMouseLeave={() => setHoverInfo(null)}
		>
			{
				enableLink ? <Title>{title}</Title> : <SelectorLink href={`/${title.replaceAll(' ', '')}`}>
					<Title>{title}</Title>
				</SelectorLink>
			}

			{children}
		</Container>
	)

	return enableLink ? (
		<SelectorLink href={`/${title.replaceAll(' ', '')}`}>
			{inners}
		</SelectorLink>
	) : inners
}

export default Selector