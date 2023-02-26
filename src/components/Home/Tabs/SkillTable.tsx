import { Data, Head, Label, Row, Table } from 'components/Table/Table-Elements'
import skills from 'data/abilities/skills'
import { type FC } from 'react'
import { useSkillsStore } from 'state/useSkillsStore'
import { blue, dimBlue, grey } from 'utils/colours'

const SkillTable: FC = () => {

	const trees = useSkillsStore(state => state.trees)

	return (
		<Table>
			<thead>
				<Row>
					<Head />
					<Head>Points</Head>
					<Head>Owned</Head>
					<Head colour={blue}>Aced</Head>
				</Row>
			</thead>
			<tbody>
				{
					Object.keys(skills).map(tree => {
						const subtree = Object.values(trees[tree])
						let treePoints = 0
						let basicAmount = 0
						let acedAmount = 0
						Object.values(subtree).forEach(({ points: subtreePoints, upgrades }) => {
							treePoints += subtreePoints
							basicAmount += Object.values(upgrades).filter(skill => skill === 'basic').length
							acedAmount += Object.values(upgrades).filter(skill => skill === 'aced').length
						})
						const ownedAmount = basicAmount + acedAmount
						return <Row key={tree}>
							<Label>{tree}</Label>
							<Data colour={treePoints ? '#fff' : grey}>{treePoints}</Data>
							<Data colour={ownedAmount ? '#fff' : grey}>{ownedAmount}</Data>
							<Data colour={acedAmount ? blue : dimBlue}>{acedAmount}</Data>
						</Row>
					})
				}
			</tbody>
		</Table>
	)
}

export default SkillTable
