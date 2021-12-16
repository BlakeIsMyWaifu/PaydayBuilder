import { useAppSelector } from 'hooks'
import useArmourStats from 'hooks/useArmourStats'
import useMeleeStats from 'hooks/useMeleeStats'
import useWeaponStats from 'hooks/useWeaponStats'
import React from 'react'
import styled from 'styled-components'
import findWeapon from 'utils/findWeapon'

const Container = styled.div`
	position: absolute;
	width: 128px;
	height: 128px;
`

const Title = styled.h2`
	color: white;
`

const ImageContainer = styled.div`
	width: 100%;
	width: 100%;
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

const Number = styled.p`
	color: white;
	font-size: 3rem;
	text-align: center;
	line-height: 128px;
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

const DetectionRisk: React.FC = () => {

	const weapons = useAppSelector(state => state.weapons),
		primaryWeapon = useAppSelector(state => state.armoury.primary)[weapons.primary],
		secondaryWeapon = useAppSelector(state => state.armoury.secondary)[weapons.secondary],
		primaryConcealment = useWeaponStats(findWeapon(primaryWeapon.weaponFind), primaryWeapon.modifications).total.concealment,
		secondaryConcealment = useWeaponStats(findWeapon(secondaryWeapon.weaponFind), secondaryWeapon.modifications).total.concealment,

		meleeConcleament = useMeleeStats(weapons.melee).total.concealment,
		armourConcleament = useArmourStats(useAppSelector(state => state.character.armour)).total.concealment,

		totalConcealment = primaryConcealment + secondaryConcealment + meleeConcleament + armourConcleament,
		detection = concealmentToDetectionRisk(totalConcealment),
		detectionPercentage = (100 * detection) / 75

	const preventDefault = (event: React.MouseEvent<HTMLImageElement, MouseEvent>): void => event.preventDefault()

	return (
		<Container>

			<Title>Detection Risk</Title>

			<ImageContainer>
				<ImageWrapper>
					<Image
						src='images/detection_meter.png'
						direction='left'
						onMouseDown={preventDefault}
					/>
					<Image
						src='images/detection_meter.png'
						direction='right'
						onMouseDown={preventDefault}
					/>
				</ImageWrapper>
				<ImageWrapper>
					<ImageEnabled
						src='images/detection_meter.png'
						direction='left'
						detectionPercentage={detectionPercentage}
						onMouseDown={preventDefault}
					/>
					<ImageEnabled
						src='images/detection_meter.png'
						direction='right'
						detectionPercentage={detectionPercentage}
						onMouseDown={preventDefault}
					/>
				</ImageWrapper>
			</ImageContainer>

			<Number>{detection}</Number>

		</Container>
	)
}

export default DetectionRisk
