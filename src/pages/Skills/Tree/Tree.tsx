import data from 'data/abilities/skills'
import React from 'react'

import { Container, Label, Subtree, Tier, TierWrapper } from './Tree-Elements'

interface tree {
	tree: 'mastermind' | 'enforcer' | 'technician' | 'ghost' | 'fugitive'
}

const Tree: React.FC<tree> = ({tree}: tree) => {
	return (
		<Container>
			{
				Object.values(data[tree]).map((values, i) => {

					const label = Object.keys(data[tree])[i]

					return (
						<Subtree>
							
							<TierWrapper>
								<Tier></Tier>
								<Tier></Tier>
								<Tier></Tier>
								<Tier></Tier>
							</TierWrapper>

							<Label>{label}</Label>
						</Subtree>
					)
				})
			}
		</Container>
	)
}

export default Tree
