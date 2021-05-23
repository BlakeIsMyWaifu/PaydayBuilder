import { changeCharacter } from 'actions/characterAction'
import Back from 'components/Back'
import Container from 'components/Container'
import { Item, Title, Wrapper } from 'components/Content'
import { InfoContainer, InfoDescription, InfoSubtitle, InfoTitle } from 'components/Info'
import data, { characterData } from 'data/character/characters'
import { useAppDispatch } from 'hooks'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

const Character: React.FC = () => {

	const [hoveredCharacter, setHoveredCharacter] = useState<characterData | null>()

	const dispatch = useAppDispatch()

	const history = useHistory()

	return (
		<Container columns='3fr 1fr' rows='4rem 8fr 4rem' areas='"title title" "wrapper info" "characters back"'>

			<Title>Character</Title>

			<Wrapper>
				{
					data.map(character => {
						return <Item
							key={character.name}
							src={`images/characters/${character.name}.png`}
							onMouseEnter={() => setHoveredCharacter(character)}
							onMouseLeave={() => setHoveredCharacter(null)}
							onMouseDown={() => {
								dispatch(changeCharacter(character))
								history.push('/')
							}}
						/>
					})
				}
			</Wrapper>

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

export default Character
