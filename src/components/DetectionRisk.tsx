import useArmourStats from 'hooks/useArmourStats'
import useMeleeStats from 'hooks/useMeleeStats'
import useWeaponStats from 'hooks/useWeaponStats'
import { FC, MouseEvent, memo } from 'react'
import { useArmouryStore } from 'state/useArmouryStore'
import { useCharacterStore } from 'state/useCharacterStore'
import { useWeaponsStore } from 'state/useWeaponsStore'
import styled from 'styled-components'
import { cornerCSS } from 'utils/corner'
import findWeapon from 'utils/findWeapon'

interface ContainerProps {
	flexDirection: 'row' | 'column';
	corner: boolean;
	size: number;
}

const Container = styled.div<ContainerProps>`
	grid-area: drisk;
	display: flex;
	flex-direction: ${props => props.flexDirection === 'column' ? 'column' : 'row-reverse'};
	justify-content: start;
	align-items: center;
	padding: ${props => props.size / 8}px;
	${props => props.corner && cornerCSS}
`

interface TitleProps {
	flexDirection: 'row' | 'column';
	size: number;
}

const Title = styled.h2<TitleProps>`
	line-height: ${props => props.flexDirection === 'column' ? props.size / 8 : props.size}px;
	padding-left: ${props => props.flexDirection === 'row' && '12px'};
`

interface ImageContainerProps {
	size: number;
}

const ImageContainer = styled.div<ImageContainerProps>`
	position: relative;
	width: ${props => props.size}px;
	height: ${props => props.size}px;
`

const ImageWrapper = styled.span`
	position: absolute;
	display: flex;
	align-items: flex-end;
	height: 100%;
	width: 100%;
`

interface ImageProps {
	direction: 'left' | 'right';
}

const Image = styled.img<ImageProps>`
	transform: scaleX(${props => props.direction === 'left' ? 1 : -1});
	opacity: 0.3;
	height: 100%;
	width: 100%;
`

interface ImageEnabledProps extends ImageProps {
	detectionPercentage: number;
}

const ImageEnabled = styled.img<ImageEnabledProps>`
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

const Number = styled.p<NumberProps>`
	font-size: ${props => props.size / 2}px;;
	text-align: center;
	line-height: ${props => props.size}px;
`

const concealmentToDetectionRisk = (concealment: number): number => {
	const detectionRisk: Record<number, number> = {
		119: 3,
		118: 4,
		117: 6,
		116: 7,
		115: 9,
		114: 10,
		113: 12,
		112: 13,
		111: 14,
		110: 16,
		109: 17,
		108: 19,
		107: 20,
		106: 22,
		105: 23,
		104: 26,
		103: 29,
		102: 32,
		101: 35,
		100: 43,
		99: 45,
		98: 46,
		97: 49,
		96: 52,
		95: 55,
		94: 58,
		93: 63,
		92: 69,
		91: 75
	}
	return concealment > 119 ? 3 : concealment < 91 ? 75 : detectionRisk[concealment]
}

interface DetectionRiskProps {
	flexDirection: 'row' | 'column';
	corner: boolean;
	text?: boolean;
	size?: number;
}

const DetectionRisk: FC<DetectionRiskProps> = ({ flexDirection, corner, text = true, size = 96 }) => {

	const weapons = useWeaponsStore(),
		primaryWeapon = useArmouryStore(state => state.primary)[weapons.primary],
		secondaryWeapon = useArmouryStore(state => state.secondary)[weapons.secondary],
		primaryConcealment = useWeaponStats(findWeapon(primaryWeapon.weaponFind), primaryWeapon.modifications).total.concealment,
		secondaryConcealment = useWeaponStats(findWeapon(secondaryWeapon.weaponFind), secondaryWeapon.modifications).total.concealment,

		meleeConcealment = useMeleeStats(weapons.melee).total.concealment,
		armourConcealment = useArmourStats(useCharacterStore(state => state.armour)).total.concealment,

		totalConcealment = primaryConcealment + secondaryConcealment + meleeConcealment + armourConcealment,
		detection = concealmentToDetectionRisk(totalConcealment),
		detectionPercentage = (100 * detection) / 75

	const preventDefault = (event: MouseEvent<HTMLImageElement>): void => event.preventDefault()

	return (
		<Container
			flexDirection={flexDirection}
			corner={corner}
			size={size}
		>

			{text && <Title flexDirection={flexDirection} size={size}>Detection Risk</Title>}

			<ImageContainer size={size}>
				<ImageWrapper>
					<Image
						src='/images/detection_meter.png'
						direction='left'
						onMouseDown={preventDefault}
					/>
					<Image
						src='/images/detection_meter.png'
						direction='right'
						onMouseDown={preventDefault}
					/>
				</ImageWrapper>
				<ImageWrapper>
					<ImageEnabled
						src='/images/detection_meter.png'
						direction='left'
						detectionPercentage={detectionPercentage}
						onMouseDown={preventDefault}
					/>
					<ImageEnabled
						src='/images/detection_meter.png'
						direction='right'
						detectionPercentage={detectionPercentage}
						onMouseDown={preventDefault}
					/>
				</ImageWrapper>

				<Number size={size}>{detection}</Number>

			</ImageContainer>

		</Container>
	)
}

export default memo(DetectionRisk)
