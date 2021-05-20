import Back from 'components/Back'
import Container from 'components/Container'
import { InfoContainer, InfoTitle } from 'components/Info'
import { Title } from 'components/Title'
import data, { armourData } from 'data/character/armours'
import { ArmourWrapper, Armourr } from 'pages/Armour/Armour-Elements'
import React, { useState } from 'react'

const Armour: React.FC = () => {

	const [hoveredArmour, setHoveredArmour] = useState<armourData | null>(null)

	return (
		<Container columns='3fr 1fr' rows='4rem 8fr 4rem' areas='"title title" "armours info" "armours back"'>

			<Title>Armour</Title>

			<ArmourWrapper>
				{
					data.map(armour => {
						return <Armourr
							key={armour.name}
							src={`images/armours/${armour.name}.png`}
							onMouseEnter={() => setHoveredArmour(armour)}
							onMouseLeave={() => setHoveredArmour(null)}
						/>
					})
				}
			</ArmourWrapper>

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
