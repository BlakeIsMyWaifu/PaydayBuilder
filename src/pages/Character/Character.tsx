import { changeCharacter } from 'actions/characterAction'
import Back from 'components/Back/Back'
import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoSubtitle, InfoTitle } from 'components/Info'
import data, { characterData } from 'data/character/characters'
import { useAppDispatch } from 'hooks'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { Character, CharacterWrapper, Title } from './Character-Elements'

const CharacterPage: React.FC = () => {

	const [hoveredCharacter, setHoveredCharacter] = useState<characterData | null>()

	const dispatch = useAppDispatch()

	const history = useHistory()

	return (
		<Container columns='3fr 1fr' rows='4rem 8fr 4rem' areas='"title title" "characters info" "characters back"'>

			<Title>Character</Title>

			<CharacterWrapper>
				{
					data.map(character => {
						return <Character
							onMouseEnter={() => setHoveredCharacter(character)}
							onMouseLeave={() => setHoveredCharacter(null)}
							onMouseDown={() => {
								dispatch(changeCharacter(character))
								history.push('/')
							}}
							src={`images/characters/${character.name}.png`}
							key={`character-${character.name}`}
						/>
					})
				}
			</CharacterWrapper>

			<InfoContainer>
				{
					hoveredCharacter && (
						<>
							<InfoTitle>{hoveredCharacter.name}</InfoTitle>
							<InfoSubtitle>Nationality: {hoveredCharacter.nationality}</InfoSubtitle>
							<InfoSubtitle>Age: {hoveredCharacter.age}</InfoSubtitle>
							<InfoDescription>{hoveredCharacter.description.join('\n\n')}</InfoDescription>
						</>
					)
				}
			</InfoContainer>

			<Back />

		</Container>
	)
}

export default CharacterPage
