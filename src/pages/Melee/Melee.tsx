import { changeMelee } from 'actions/weaponsAction'
import Back from 'components/Back'
import Container from 'components/Container'
import { Item, ItemContainer, ItemEquiped, ItemImage, ItemName, Title } from 'components/Content'
import { InfoContainer, InfoDescription, InfoTitle, InfoUnlock } from 'components/Info'
import data, { meleeData } from 'data/weapons/melees'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'
import { blue, itemColours } from 'utils/colours'

import { TableData, TableHead, TableLabel, TableRow, TableStats } from './Melee-Elements'

const Melee: React.FC = () => {

	const dispatch = useAppDispatch()

	const equipedMelee = useAppSelector(state => state.weapons.melee)

	const [selectedMelee, setSelectedMelee] = useState(equipedMelee)

	const clickMelee = (melee: meleeData) => melee.name === selectedMelee.name ? dispatch(changeMelee(melee)) : setSelectedMelee(melee)

	const innerPockets = useAppSelector(state => state.skills.trees.ghost.artful_dodger.upgrades['Inner Pockets'])
	const hasInnerPockets = innerPockets === 'basic' || innerPockets === 'aced'
	const addition = hasInnerPockets ? 2 : 0

	const pumpingIron = useAppSelector(state => state.skills.trees.fugitive.brawler.upgrades['Pumping Iron'])
	const hasPumpingIron = pumpingIron === 'aced'
	const pumpIronDamage = (melee: meleeData) => [...melee.stats.damage].map(num => num * (hasPumpingIron ? 2 : 1))

	const infoTable = selectedMelee.name === equipedMelee.name

	const toTwoDecimal = (number: number) => (Math.round(number * 100) / 100).toFixed(2)

	return (
		<Container columns='3fr 1fr' rows='4rem 8fr 4rem' areas='"title title" "items info" "items back"'>

			<Title>Melee</Title>

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

				<TableStats>
					<TableRow>
						<TableHead></TableHead>
						{
							infoTable ? (
								<>
									<TableHead>Total</TableHead>
									<TableHead>Base</TableHead>
									<TableHead color={blue}>Skill</TableHead>
								</>
							) : (
								<>
									<TableHead>Equiped</TableHead>
									<TableHead>Selected</TableHead>
								</>
							)
						}
					</TableRow>
					<TableRow>
						<TableLabel>Damage</TableLabel>
						<TableData>{pumpIronDamage(equipedMelee)[0]}({pumpIronDamage(equipedMelee)[1]})</TableData>
						{
							infoTable ? (
								<>
									<TableData>{equipedMelee.stats.damage[0]} ({equipedMelee.stats.damage[1]})</TableData>
									<TableData color={blue}>{hasPumpingIron && `+${equipedMelee.stats.damage[0]} (${equipedMelee.stats.damage[1]})`}</TableData>			
								</>
							) : (
								<>
									<TableData>{pumpIronDamage(selectedMelee)[0]}({pumpIronDamage(selectedMelee)[1]})</TableData>
								</>
							)
						}
					</TableRow>
					<TableRow>
						<TableLabel>Knockdown</TableLabel>
						<TableData>{equipedMelee.stats.knockdown[0]} ({equipedMelee.stats.knockdown[1]})</TableData>
						{
							infoTable ? (
								<>
									<TableData>{equipedMelee.stats.knockdown[0]} ({equipedMelee.stats.knockdown[1]})</TableData>
									<TableData />
								</>
							) : (
								<>
									<TableData>{selectedMelee.stats.knockdown[0]} ({selectedMelee.stats.knockdown[1]})</TableData>
								</>
							)
						}
					</TableRow>
					<TableRow>
						<TableLabel>Charge Time</TableLabel>
						<TableData>{equipedMelee.stats.chargeTime}s</TableData>
						{
							infoTable ? (
								<>
									<TableData>{equipedMelee.stats.chargeTime}s</TableData>
									<TableData />
								</>
							) : (
								<>
									<TableData>{selectedMelee.stats.chargeTime}s</TableData>
								</>
							)
						}
					</TableRow>
					<TableRow>
						<TableLabel>Range</TableLabel>
						<TableData>{equipedMelee.stats.range}</TableData>
						{
							infoTable ? (
								<>
									<TableData>{equipedMelee.stats.range}</TableData>
									<TableData />
								</>
							) : (
								<>
									<TableData>{selectedMelee.stats.range}</TableData>
								</>
							)
						}
					</TableRow>
					<TableRow>
						<TableLabel>Concealment</TableLabel>
						<TableData>{equipedMelee.stats.concealment + addition}</TableData>
						{
							infoTable ? (
								<>
									<TableData>{equipedMelee.stats.concealment}</TableData>
									<TableData color={blue}>{hasInnerPockets && '+2'}</TableData>
								</>
							) : (
								<>
									<TableData>{selectedMelee.stats.concealment + addition}</TableData>
								</>
							)
						}
					</TableRow>
					<TableRow>
						<TableLabel>Attack Delay</TableLabel>
						<TableData>{toTwoDecimal(equipedMelee.stats.attackDelay)}s</TableData>
						{
							infoTable ? (
								<>
									<TableData />
									<TableData />
								</>
							) : (
								<>
									<TableData>{toTwoDecimal(selectedMelee.stats.attackDelay)}s</TableData>
								</>
							)
						}
					</TableRow>
					<TableRow>
						<TableLabel>Cooldown</TableLabel>
						<TableData>{toTwoDecimal(equipedMelee.stats.cooldown)}s</TableData>
						{
							infoTable ? (
								<>
									<TableData />
									<TableData />
								</>
							) : (
								<>
									<TableData>{toTwoDecimal(selectedMelee.stats.cooldown)}s</TableData>
								</>
							)
						}
					</TableRow>
					<TableRow>
						<TableLabel>Unequip Delay</TableLabel>
						<TableData>{toTwoDecimal(equipedMelee.stats.unequipDelay)}s</TableData>
						{
							infoTable ? (
								<>
									<TableData />
									<TableData />
								</>
							) : (
								<>
									<TableData>{toTwoDecimal(selectedMelee.stats.unequipDelay)}s</TableData>
								</>
							)
						}
					</TableRow>
				</TableStats>

				{
					selectedMelee.source !== 'Base Game' &&
						<InfoUnlock color={itemColours[selectedMelee.sourceType]}>{selectedMelee.source}</InfoUnlock>
				}
				<InfoDescription>{selectedMelee.description}</InfoDescription>
			</InfoContainer>

			<Back />

		</Container>
	)
}

export default Melee
