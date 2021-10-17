import { Data, Head, Label, Row, Table } from 'components/Table'
import data from 'data/abilities/skills'
import { useAppSelector } from 'hooks'
import React from 'react'
import { blue, dimBlue, grey } from 'utils/colours'

const SkillTable: React.FC = () => {

	const trees = useAppSelector(state => state.skills.trees)

	return (
		<Table>
			<thead>
				<Row>
					<Head />
					<Head>Points</Head>
					<Head>Owned</Head>
					<Head color={blue}>Aced</Head>
				</Row>
			</thead>
			<tbody>
				{
					Object.keys(data).map(tree => {
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
							<Data color={treePoints ? '#fff' : grey}>{treePoints}</Data>
							<Data color={ownedAmount ? '#fff' : grey}>{ownedAmount}</Data>
							<Data color={acedAmount ? blue : dimBlue}>{acedAmount}</Data>
						</Row>
					})
				}
			</tbody>
		</Table>
	)
}

export default SkillTable
