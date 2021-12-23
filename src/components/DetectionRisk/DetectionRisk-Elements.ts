import styled from 'styled-components'
import corner from 'utils/corner'

interface ContainerProps {
	flexDirection: 'row' | 'column';
	corner: boolean;
	size: number;
}

export const Container = styled.div<ContainerProps>`
	grid-area: drisk;
	display: flex;
	flex-direction: ${props => props.flexDirection === 'column' ? 'column' : 'row-reverse'};
	justify-content: start;
	padding: ${props => props.size / 8}px;
	${props => props.corner && corner}
`

interface TitleProps {
	flexDirection: 'row' | 'column';
	size: number;
}

export const Title = styled.h2<TitleProps>`
	line-height: ${props => props.flexDirection === 'column' ? props.size / 8 : props.size}px;
	padding-left: ${props => props.flexDirection === 'row' && '12px'};
`

interface ImageContainerProps {
	size: number;
}

export const ImageContainer = styled.div<ImageContainerProps>`
	position: relative;
	width: ${props => props.size}px;
	height: ${props => props.size}px;
`

export const ImageWrapper = styled.span`
	position: absolute;
	display: flex;
	align-items: flex-end;
	height: 100%;
	width: 100%;
`

interface ImageProps {
	direction: 'left' | 'right';
}

export const Image = styled.img<ImageProps>`
	transform: scaleX(${props => props.direction === 'left' ? 1 : -1});
	opacity: 0.3;
	height: 100%;
	width: 100%;
`

interface ImageEnabledProps extends ImageProps {
	detectionPercentage: number;
}

export const ImageEnabled = styled.img<ImageEnabledProps>`
	transform: scaleX(${props => props.direction === 'left' ? 1 : -1});
	opacity: 1;
	height: ${props => props.detectionPercentage}%;
	width: 100%;
	object-fit: cover;
	object-position: bottom;
`

interface NumberProps {
	size: number;
}

export const Number = styled.p<NumberProps>`
	font-size: ${props => props.size / 2}px;;
	text-align: center;
	line-height: ${props => props.size}px;
`