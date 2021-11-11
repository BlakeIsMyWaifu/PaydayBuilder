import { changeMelee } from 'actions/weaponsAction'
import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle, InfoUnlock } from 'components/Info'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/Item'
import { TableCompare, TableEquipped } from 'components/Table'
import data, { MeleeStats } from 'data/weapons/melees'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'
import { itemColours } from 'utils/colours'

interface MeleeStatsTable {
	selectedMelee: MeleeStats;
	equippedMelee?: MeleeStats;
}

export const MeleeStatsTable: React.FC<MeleeStatsTable> = ({ selectedMelee, equippedMelee }) => {

	const baseStats = (meleeStats: MeleeStats) => {
		const toTwoDecimal = (number: number) => +(Math.round(number * 100) / 100).toFixed(2)
		const { damage, knockdown, chargeTime, range, concealment, specialType, specialTime } = meleeStats
		const stats: MeleeStats = {
			damage, knockdown, chargeTime, range, concealment,
			attackDelay: toTwoDecimal(meleeStats.attackDelay),
			cooldown: toTwoDecimal(meleeStats.cooldown),
			unequipDelay: toTwoDecimal(meleeStats.unequipDelay)
		}
		if (specialType) {
			stats['specialType'] = specialType
			stats['specialTime'] = specialTime
		}
		return stats
	}

	const innerPockets = useAppSelector(state => state.skills.trees.ghost.artful_dodger.upgrades['Inner Pockets'])
	const pumpingIron = useAppSelector(state => state.skills.trees.fugitive.brawler.upgrades['Pumping Iron'])

	const additionalStats = (meleeStats: MeleeStats) => {
		const stats: MeleeStats = {
			damage: [0, 0],
			knockdown: [0, 0],
			chargeTime: 0,
			range: 0,
			concealment: 0,
			attackDelay: 0,
			cooldown: 0,
			unequipDelay: 0,
			specialType: null,
			specialTime: null
		}

		stats.concealment += innerPockets === 'basic' || innerPockets === 'aced' ? 2 : 0
		stats.damage = pumpingIron === 'aced' ? [meleeStats.damage[0] << 1, meleeStats.damage[1] << 1] : stats.damage

		return stats
	}

	return (
		equippedMelee ?
			<TableCompare
				equippedStats={baseStats(equippedMelee)}
				selectedStats={baseStats(selectedMelee)}
				equippedAdditional={additionalStats(equippedMelee)}
				selectedAdditional={additionalStats(selectedMelee)}
			/> :
			<TableEquipped
				baseStats={baseStats(selectedMelee)}
				additionalStats={additionalStats(selectedMelee)}
			/>
	)
}

export const Melee: React.FC = () => {

	const dispatch = useAppDispatch()

	const equippedMelee = useAppSelector(state => state.weapons.melee)
	const [selectedMelee, setSelectedMelee] = useState(equippedMelee)

	const leftFacing = useAppSelector(state => state.settings.leftFacing)

	return (
		<Container title='Melee'>

			<ItemContainer>
				{
					data.map(melee => {
						return <Item
							key={melee.name}
							width={192}
							height={96}
							selected={melee.name === selectedMelee.name}
							onClick={() => melee.name === selectedMelee.name ? dispatch(changeMelee(melee)) : setSelectedMelee(melee)}
						>
							<ItemName color={itemColours[melee.source.rarity]}>{melee.name}</ItemName>
							{melee.name === equippedMelee.name && <ItemEquipped />}
							<ItemImage src={`images/melees/${melee.image}.png`} leftFacing={leftFacing} onMouseDown={event => event.preventDefault()} />
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedMelee.name}</InfoTitle>
				<MeleeStatsTable selectedMelee={selectedMelee.stats} equippedMelee={selectedMelee.name !== equippedMelee.name ? equippedMelee.stats : undefined} />
				<InfoUnlock color={itemColours[selectedMelee.source.rarity]}>{selectedMelee.source.name}</InfoUnlock>
				<InfoDescription>{selectedMelee.description}</InfoDescription>
			</InfoContainer>

		</Container>
	)
}

export default Melee
