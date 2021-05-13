import { useAppSelector } from 'hooks'
import React from 'react'
import { grey } from 'utils/colours'

import { Container, Image, Link, SkillWrapper, SkillsAmount, SkillsCard, SkillsContainer, Title } from './Selector-Elements'

interface selectorComponent {
	path: string;
	title: string;
	imagePath?: string;
}

const Selector: React.FC<selectorComponent> = ({ path, title, imagePath }) => {

	const skillTrees = useAppSelector(state => Object.values(state.skills.trees))

	return (
		<Link to={path}>
			<Container>
				<Title>{title}</Title>
				{
					imagePath && <Image src={imagePath}/>
				}
				{
					title === 'skills' && <SkillsContainer>
						{
							skillTrees.map((tree, i) => {
								let treePoints = 0
								for (let subtree in tree) {
									treePoints += tree[subtree].points
								}
								return <SkillWrapper key={`selector-skill-${i}`}>
									<SkillsCard />
									<SkillsAmount colour={treePoints ? '#fff' : grey}>{treePoints}</SkillsAmount>
								</SkillWrapper>
							})
						}
					</SkillsContainer>
				}
			</Container>
		</Link>
	)
}

export default Selector