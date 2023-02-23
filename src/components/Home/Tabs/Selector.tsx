import Link from 'next/link'
import { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import { useSettingsContext } from 'state/settingsContext'
import styled from 'styled-components'
import { blue, dim } from 'utils/colours'

import { HoverInfo } from './Tabs'

const SelectorLink = styled(Link)`
	text-decoration: none;
`

const Container = styled.div`
	width: 100%;
	height: 25%;
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
`

interface ImageProps {
	path: string;
	leftFacing: boolean;
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

interface SelectorProps {
	title: string;
	children?: ReactNode;
	infoData: HoverInfo;
	setHoverInfo: Dispatch<SetStateAction<SelectorProps['infoData']>>;
	image?: string;
	imageLeftFacing?: boolean;
}

const Selector: FC<SelectorProps> = ({ title, children, infoData, setHoverInfo, image, imageLeftFacing }) => {

	const { leftFacing } = useSettingsContext().state

	return (
		<SelectorLink href={`/${title.replaceAll(' ', '')}`}>
			<Container
				onMouseDown={event => event.preventDefault()}
				onMouseEnter={() => setHoverInfo(infoData)}
				onMouseLeave={() => setHoverInfo(null)}
			>

				<Title>{title}</Title>

				{
					image && <Image path={image} leftFacing={!!(leftFacing && imageLeftFacing)} />
				}

				{children}
			</Container>
		</SelectorLink>
	)
}

export default Selector