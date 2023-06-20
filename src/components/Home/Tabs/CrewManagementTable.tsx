import { Data, Head, Label, Row, Table } from 'components/Table/Table-Elements'
import { useAbilityStore } from 'state/useAbilitiesStore'
import { red } from 'utils/colours'
import { isUniqueValue } from 'utils/isUniqueValue'

const CrewManagementTable = () => {

	const crewManagement = useAbilityStore(state => state.crewManagement)

	const equippedAbilities = crewManagement.map(crew => crew.ability)
	const equippedBoosts = crewManagement.map(crew => crew.boost)

	return (
		<Table>
			<thead>
				<Head />
				<Head>Crew 1</Head>
				<Head>Crew 2</Head>
				<Head>Crew 3</Head>
			</thead>
			<tbody>
				<Row>
					<Label>Weapon</Label>
					<Data>{crewManagement[0].weapon}</Data>
					<Data>{crewManagement[1].weapon}</Data>
					<Data>{crewManagement[2].weapon}</Data>
				</Row>
				<Row>
					<Label>Ability</Label>
					{
						crewManagement.map((crew, i) => {
							const isUnique = isUniqueValue(crew.ability, equippedAbilities)
							return <Data key={i} colour={isUnique ? undefined : red}>
								{crew.ability}
							</Data>
						})
					}
				</Row>
				<Row>
					<Label>Boost</Label>
					{
						crewManagement.map((crew, i) => {
							const isUnique = isUniqueValue(crew.boost, equippedBoosts)
							return <Data key={i} colour={isUnique ? undefined : red}>
								{crew.boost}
							</Data>
						})
					}
				</Row>
			</tbody>
		</Table>
	)
}

export default CrewManagementTable