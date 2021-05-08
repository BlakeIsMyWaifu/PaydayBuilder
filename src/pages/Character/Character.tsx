import Back from 'components/Back/Back'
import Container from 'components/Container'
import data, { characterData } from 'data/character/characters'
import React, { useState } from 'react'

import { Character, CharacterWrapper, Info, InfoAge, InfoDescription, InfoName, InfoNationality, Title } from './Character-Elements'

const CharacterPage: React.FC = () => {

	const [hoveredCharacter, setHoveredCharacter] = useState<characterData | null>()

	return (
		<Container columns='3fr 1fr' rows='1fr 8fr 4rem' areas='"title title" "characters info" "characters back"'>
			
			<Title>Character</Title>

			<CharacterWrapper>
				{
					data.map(character => {
						return <Character
							onMouseEnter={() => setHoveredCharacter(character)}
							onMouseLeave={() => setHoveredCharacter(null)}
							src={`images/characters/${character.name}.png`}
							key={`${character.name}`}
						/>
					})
				}
			</CharacterWrapper>

			<Info>
				{
					hoveredCharacter && (
						<>
							<InfoName>{hoveredCharacter.name}</InfoName>
							<InfoNationality>Nationality: {hoveredCharacter.nationality}</InfoNationality>
							<InfoAge>Age: {hoveredCharacter.age}</InfoAge>
							{
								hoveredCharacter.description.map(description => {
									return <InfoDescription>{description}</InfoDescription>
								})
							}
						</>
					)
				}
			</Info>

			<Back />

		</Container>
	)
}

export default CharacterPage
