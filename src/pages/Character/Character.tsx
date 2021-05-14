import { changeCharacter } from 'actions/characterAction'
import Back from 'components/Back/Back'
import Container from 'components/Container'
import data, { characterData } from 'data/character/characters'
import { useAppDispatch } from 'hooks'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { Character, CharacterWrapper, Info, InfoAge, InfoDescription, InfoName, InfoNationality, Title } from './Character-Elements'

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

			<Info>
				{
					hoveredCharacter && (
						<>
							<InfoName>{hoveredCharacter.name}</InfoName>
							<InfoNationality>Nationality: {hoveredCharacter.nationality}</InfoNationality>
							<InfoAge>Age: {hoveredCharacter.age}</InfoAge>
							{
								hoveredCharacter.description.map((description, i) => {
									return <InfoDescription key={`character-info-${hoveredCharacter.name}-${i}`}>{description}</InfoDescription>
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
