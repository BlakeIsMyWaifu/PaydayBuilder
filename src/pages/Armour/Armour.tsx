import { changeArmour } from 'actions/characterAction'
import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/Info'
import { Item, ItemContainer, ItemEquiped, ItemImage, ItemName } from 'components/Item'
import { TableCompare, TableEquiped } from 'components/Table'
import data, { armourData, armourStats } from 'data/character/armours'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'

const Armour: React.FC = () => {

	const dispatch = useAppDispatch()

	const equipedArmour = useAppSelector(state => state.character.armour)

	const [selectedArmour, setSelectedArmour] = useState<armourData>(equipedArmour)

	const clickArmour = (armour: armourData) => armour.name === selectedArmour.name ? dispatch(changeArmour(armour)) : setSelectedArmour(armour)

	const baseStats = ({ armour, concealment, speed, dodge, steadiness, stamina }: armourStats) => {
		return ({ armour, health: 230, concealment, speed, dodge, steadiness, stamina })
	}

	const dieHard = useAppSelector(state => state.skills.trees.enforcer.tank.upgrades['Die Hard'])
	const innerPockets = useAppSelector(state => state.skills.trees.ghost.artful_dodger.upgrades['Inner Pockets'])
	const ironMan = useAppSelector(state => state.skills.trees.enforcer.tank.upgrades['Iron Man'])

	const additionalStats = (armour: armourData) => {
		const hasBallistic = armour.name.includes('Ballistic Vest')

		let stats = {
			armour: 0,
			health: 0,
			concealment: 0,
			dodge: 0,
			speed: 0,
			stamina: 0,
			steadiness: 0
		}

		stats.armour += dieHard === 'aced' && hasBallistic ? 20 : 0
		stats.armour += ironMan === 'basic' || ironMan === 'aced' ? ((armour.stats.armour + stats.armour) / 100) * 30 : 0
		stats.concealment += innerPockets === 'aced' && hasBallistic ? 5 : 1 // +1 from blending in perk

		return stats
	}

	return (
		<Container title={'Armour'}>

			<ItemContainer>
				{
					data.map(armour => {
						return <Item key={armour.name} size={196} selected={armour.name === selectedArmour.name}>
							<ItemName>{armour.name}</ItemName>
							{armour.name === equipedArmour.name && <ItemEquiped />}
							<ItemImage
								src={`images/armours/${armour.name}.png`}
								onMouseDown={() => clickArmour(armour)}
							/>
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedArmour.name}</InfoTitle>

				{
					selectedArmour.name === equipedArmour.name ?
						<TableEquiped
							baseStats={baseStats(selectedArmour.stats)}
							additionalStats={additionalStats(selectedArmour)}
						/> :
						<TableCompare
							equipedStats={baseStats(equipedArmour.stats)}
							selectedStats={baseStats(selectedArmour.stats)}
							equipedAdditional={additionalStats(equipedArmour)}
							selectedAdditional={additionalStats(selectedArmour)}
						/>
				}

				<InfoDescription>{selectedArmour.desciption.join('\n\n')}</InfoDescription>
			</InfoContainer>

		</Container>
	)
}

export default Armour
