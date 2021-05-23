import { changeEquipment } from 'actions/characterAction'
import Back from 'components/Back'
import Container from 'components/Container'
import { Title } from 'components/Content'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/Info'
import data, { equipmentData } from 'data/character/equipment'
import { useAppDispatch } from 'hooks'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { EquipInfo, EquipText, EquipementIcon, EquipmentWrapper } from './Equipment-Elements'

const Equipment: React.FC = () => {

	const [hoveredEquipment, setHoveredEquipment] = useState<equipmentData | null>()

	const dispatch = useAppDispatch()

	const history = useHistory()

	return (
		<Container columns='3fr 1fr' rows='4rem 8fr 3rem 4rem' areas='"title title" "wrapper info" "wrapper equipinfo" "wrapper back"'>
			
			<Title>Equipment</Title>

			<EquipmentWrapper>
				{
					data.map(equipment => {
						return <EquipementIcon
							key={equipment.name}
							src={`images/equipment/${equipment.name}.png`}
							onMouseEnter={() => setHoveredEquipment(equipment)}
							onMouseLeave={() => setHoveredEquipment(null)}
							onMouseDown={(event: React.MouseEvent) => {
								event.preventDefault()
								if (event.button !== 0 && event.button !== 2) return
								const slot = event.button ? 'secondary' : 'primary'
								dispatch(changeEquipment([equipment, slot]))
								history.push('/')
							}}
						/>
					})
				}
			</EquipmentWrapper>

			<InfoContainer>
				{
					hoveredEquipment && (
						<>
							<InfoTitle>{hoveredEquipment.name} (x{hoveredEquipment.amount.join('/x')})</InfoTitle>
							<InfoDescription>{hoveredEquipment.description.join('\n\n')}</InfoDescription>
						</>
					)
				}
			</InfoContainer>

			<EquipInfo>
				<EquipText>[Left Click] Equip Primary</EquipText>
				<EquipText>[Right Click] Equip Secondary</EquipText>
			</EquipInfo>

			<Back />

		</Container>
	)
}

export default Equipment
