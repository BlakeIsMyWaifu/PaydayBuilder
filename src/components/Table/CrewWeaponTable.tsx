import { Data, Head, Label, Row, Table } from 'components/Table/Table-Elements'
import crewWeapons from 'data/abilities/crewWeapons'
import { type CrewWeapon } from 'data/abilities/crewWeapons'
import { type FC } from 'react'

interface CrewWeaponTableProps {
	weaponName: CrewWeapon;
}

const CrewWeaponTable: FC<CrewWeaponTableProps> = ({ weaponName }) => {
	return (
		<Table>
			<thead>
				<Row>
					<Head/>
					<Head>Stats</Head>
				</Row>
			</thead>
			<tbody>
				{
					Object.entries(crewWeapons[weaponName].stats).map(([stat, value]) => {
						return <Row key={stat}>
							<Label>{stat}</Label>
							<Data>{value}</Data>
						</Row>
					})
				}
			</tbody>
		</Table>
	)
}

export default CrewWeaponTable