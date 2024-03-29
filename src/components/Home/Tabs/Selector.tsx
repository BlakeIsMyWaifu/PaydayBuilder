import Link from 'next/link'
import { type Dispatch, type FC, type ReactNode, type SetStateAction } from 'react'
import { useIsLeftFacing } from 'state/settingsContext'
import styled from 'styled-components'
import { blue, dim } from 'utils/colours'

import { type HoverInfo } from './Tabs'

const SelectorLink = styled(Link)`
	text-decoration: none;
	width: 100%;
	height: 100%;
`

const Container = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	background-color: ${dim};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Title = styled.h2`
	font-size: 20px;
	color: ${blue};
	padding-left: 4px;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
`

interface ImageProps {
	path: string;
	leftFacing: boolean;
	alt: string;
}

const Image = styled.div<ImageProps>`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: no-repeat center url('/images/${props => props.path}.webp');
	background-size: contain;
	transform: scaleX(${props => props.leftFacing ? -1 : 1});;
`

export interface SelectorProps {
	title: string;
	children?: ReactNode;
	linkChildren?: boolean;
	infoData: HoverInfo;
	setHoverInfo: Dispatch<SetStateAction<SelectorProps['infoData']>>;
	image?: string;
	imageLeftFacing?: boolean;
}

const Selector: FC<SelectorProps> = ({ title, children, linkChildren, infoData, setHoverInfo, image, imageLeftFacing }) => {

	const leftFacing = useIsLeftFacing()

	return (
		<Container
			onMouseDown={event => event.preventDefault()}
			onMouseEnter={() => setHoverInfo(infoData)}
			onMouseLeave={() => setHoverInfo(null)}
		>
			<SelectorLink href={`/${title.replaceAll(' ', '')}`}>

				<Title>{title}</Title>

				{
					image && <Image
						path={image}
						leftFacing={!!(leftFacing && imageLeftFacing)}
						alt={`selector ${title}`}
					/>
				}

				{linkChildren && children}
			</SelectorLink>

			{!linkChildren && children}

		</Container>
	)
}

export default Selector