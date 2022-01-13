import { useAppSelector } from 'hooks/reduxHooks'
import useArmourStats from 'hooks/useArmourStats'
import useMeleeStats from 'hooks/useMeleeStats'
import useWeaponStats from 'hooks/useWeaponStats'
import React from 'react'
import findWeapon from 'utils/findWeapon'

import { Container, Image, ImageContainer, ImageEnabled, ImageWrapper, Number, Title } from './DetectionRisk-Elements'

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

interface DectectionRiskProps {
	flexDirection: 'row' | 'column';
	corner: boolean;
	size?: number;
}

const DetectionRisk: React.FC<DectectionRiskProps> = ({ flexDirection, corner, size = 96 }) => {

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

	console.log('drisk')

	return (
		<Container
			flexDirection={flexDirection}
			corner={corner}
			size={size}
		>

			<Title flexDirection={flexDirection} size={size}>Detection Risk</Title>

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

export default React.memo(DetectionRisk)
