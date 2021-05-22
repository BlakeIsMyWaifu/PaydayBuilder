import perkData from 'data/abilities/perks'
import skillData from 'data/abilities/skills'
import { useAppSelector } from 'hooks'
import React from 'react'
import { grey } from 'utils/colours'
import skillTreePoints from 'utils/skillTreePoints'

import { Container, EquipmentContainer, Image, Link, PerkDeckImage, SkillWrapper, SkillsAmount, SkillsCard, SkillsContainer, Title } from './Selector-Elements'

interface selectorComponent {
	path: string;
	title: string;
	imagePath?: string;
}

const Selector: React.FC<selectorComponent> = ({ path, title, imagePath }) => {

	const equipment = useAppSelector(state => state.character.equipment)

	const perkDeck = useAppSelector(state => state.abilities.perkdeck)
	const perkDeckIndex = perkData.indexOf(perkData.find(perk => perk.name === perkDeck.name) || perkData[0])

	return (
		<Link to={path}>
			<Container>
				<Title>{title}</Title>
				{
					imagePath && <Image src={imagePath}/>
				}
				{
					title === 'equipment' && (
						equipment.secondary ? <EquipmentContainer>
							<Image src={`images/equipment/${equipment.primary.name}.png`} />
							<Image src={`images/equipment/${equipment.secondary.name}.png`} />
						</EquipmentContainer> : <Image src={`images/equipment/${equipment.primary.name}.png`} />
					)
				}
				{
					title === 'skills' && <SkillsContainer>
						{
							Object.keys(skillData).map((tree, i) => {
								const treePoints = skillTreePoints(tree)
								return <SkillWrapper key={`selector-skill-${i}`}>
									<SkillsCard />
									<SkillsAmount colour={treePoints ? '#fff' : grey}>{treePoints}</SkillsAmount>
								</SkillWrapper>
							})
						}
					</SkillsContainer>
				}
				{
					title === 'perk deck' && <PerkDeckImage x={192} y={(perkDeckIndex + 1) * 48} />
				}
			</Container>
		</Link>
	)
}

export default Selector