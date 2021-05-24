import Back from 'components/Back'
import Container from 'components/Container'
import { Item, Title, Wrapper } from 'components/Content'
import { InfoContainer, InfoTitle } from 'components/Info'
import data, { meleeData } from 'data/weapons/melees'
import React, { useState } from 'react'

const Melee: React.FC = () => {

	const [hoveredMelee, setHoveredMelee] = useState<meleeData | null>(null)

	return (
		<Container columns='3fr 1fr' rows='4rem 8fr 4rem' areas='"title title" "wrapper info" "wrapper back"'>

			<Title>Melee</Title>

			<Wrapper>
				{
					data.map(melee => {
						return <Item
							key={melee.name}
							src={'images/melees/0_agave.png'}
							onMouseEnter={() => setHoveredMelee(melee)}
							onMouseLeave={() => setHoveredMelee(null)}
							onMouseDown={() => {
								
							}}
						/>
					})
				}
			</Wrapper>

			<InfoContainer>
				{
					hoveredMelee && (
						<>
							<InfoTitle>{hoveredMelee.name}</InfoTitle>
						</>
					)
				}
			</InfoContainer>

			<Back />

		</Container>
	)
}

export default Melee
