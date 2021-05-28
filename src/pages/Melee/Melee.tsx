import { changeMelee } from 'actions/weaponsAction'
import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle, InfoUnlock } from 'components/Info'
import { Item, ItemContainer, ItemEquiped, ItemImage, ItemName } from 'components/Item'
import { TableCompare, TableEquiped } from 'components/Table'
import data, { meleeData, meleeStats } from 'data/weapons/melees'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'
import { itemColours } from 'utils/colours'

interface meleeStatsTable {
	mainMelee: meleeStats;
	compareMelee?: meleeStats;
}

export const MeleeStatsTable: React.FC<meleeStatsTable> = ({ mainMelee, compareMelee }) => {

	const baseStats = (meleeStats: meleeStats) => {
		const toTwoDecimal = (number: number) => +(Math.round(number * 100) / 100).toFixed(2)
		const { damage, knockdown, chargeTime, range, concealment, specialType, specialTime } = meleeStats
		let stats: meleeStats = {
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

	const additionalStats = (meleeStats: meleeStats) => {
		let stats = {
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
		stats.damage = pumpingIron === 'aced' ? [...meleeStats.damage].map(num => num * 2) : stats.damage

		return stats
	}

	return (
		compareMelee ? 
			<TableCompare
				equipedStats={baseStats(compareMelee)}
				selectedStats={baseStats(mainMelee)}
				equipedAdditional={additionalStats(compareMelee)}
				selectedAdditional={additionalStats(mainMelee)}
			/> :
			<TableEquiped
				baseStats={baseStats(mainMelee)}
				additionalStats={additionalStats(mainMelee)}
			/>
	)
}

export const Melee: React.FC = () => {

	const dispatch = useAppDispatch()

	const equipedMelee = useAppSelector(state => state.weapons.melee)

	const [selectedMelee, setSelectedMelee] = useState(equipedMelee)

	const clickMelee = (melee: meleeData) => melee.name === selectedMelee.name ? dispatch(changeMelee(melee)) : setSelectedMelee(melee)

	return (
		<Container title={'Melee'}>

			<ItemContainer>
				{
					data.map(melee => {
						return <Item key={melee.name} width={192} height={96} selected={melee.name === selectedMelee.name}>
							<ItemName color={itemColours[melee.sourceType]}>{melee.name}</ItemName>
							{melee.name === equipedMelee.name && <ItemEquiped />}
							<ItemImage
								src={`images/melees/${melee.image}.png`}
								onMouseDown={() => clickMelee(melee)}
							/>
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedMelee.name}</InfoTitle>

				{
					<MeleeStatsTable mainMelee={selectedMelee.stats} compareMelee={selectedMelee.name !== equipedMelee.name ? equipedMelee.stats : undefined} />
				}

				{
					selectedMelee.source !== 'Base Game' &&
						<InfoUnlock color={itemColours[selectedMelee.sourceType]}>{selectedMelee.source}</InfoUnlock>
				}

				<InfoDescription>{selectedMelee.description}</InfoDescription>
			</InfoContainer>

		</Container>
	)
}

export default Melee
