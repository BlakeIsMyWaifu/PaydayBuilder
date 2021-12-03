import { changeCharacter } from 'actions/characterAction'
import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoSubtitle, InfoTitle, InfoUnlock } from 'components/Info'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/Item'
import characters, { CharacterData } from 'data/character/characters'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'
import { itemColours } from 'utils/colours'

const Character: React.FC = () => {

	const dispatch = useAppDispatch()

	const equippedCharacter = characters[useAppSelector(state => state.character.character)]
	const [selectedCharacter, setSelectedCharacter] = useState<CharacterData>(equippedCharacter)

	return (
		<Container title='Character'>

			<ItemContainer>
				{
					Object.values(characters).map(character => {
						return <Item
							key={character.name}
							size={128}
							selected={character.name === selectedCharacter.name}
							onClick={() => character.name === selectedCharacter.name ? dispatch(changeCharacter(character.name)) : setSelectedCharacter(character)}
						>
							<ItemName color={itemColours[character.source.rarity]}>{character.name}</ItemName>
							{character.name === equippedCharacter.name && <ItemEquipped />}
							<ItemImage src={`images/masks/${character.image}.png`} onMouseDown={event => event.preventDefault()} />
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedCharacter.name}</InfoTitle>
				<InfoSubtitle>Nationality: {selectedCharacter.nationality}</InfoSubtitle>
				<InfoSubtitle>Age: {selectedCharacter.age}</InfoSubtitle>
				<InfoDescription>{selectedCharacter.description.join('\n\n')}</InfoDescription>
				<InfoUnlock color={itemColours[selectedCharacter.source.rarity]}>{selectedCharacter.source.name}</InfoUnlock>
			</InfoContainer>

		</Container>
	)
}

export default Character
