import Back from 'components/Back'
import Container from 'components/Container'
import { InfoContainer, InfoTitle } from 'components/Info'
import { Item, Title, Wrapper } from 'components/Content'
import data, { armourData } from 'data/character/armours'
import React, { useState } from 'react'

const Armour: React.FC = () => {

	const [hoveredArmour, setHoveredArmour] = useState<armourData | null>(null)

	return (
		<Container columns='3fr 1fr' rows='4rem 8fr 4rem' areas='"title title" "wrapper info" "wrapper back"'>

			<Title>Armour</Title>

			<Wrapper>
				{
					data.map(armour => {
						return <Item
							key={armour.name}
							src={`images/armours/${armour.name}.png`}
							onMouseEnter={() => setHoveredArmour(armour)}
							onMouseLeave={() => setHoveredArmour(null)}
						/>
					})
				}
			</Wrapper>

			<InfoContainer>
				{
					hoveredArmour && (
						<>
							<InfoTitle>{hoveredArmour.name}</InfoTitle>
						</>
					)
				}
			</InfoContainer>

			<Back />

		</Container>
	)
}

export default Armour
