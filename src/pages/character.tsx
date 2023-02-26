import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoSubtitle, InfoTitle, InfoUnlock } from 'components/elements/infoElements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/elements/itemElements'
import characters, { type CharacterData } from 'data/character/characters'
import { type NextPage } from 'next'
import { useState } from 'react'
import { useIsMobile } from 'state/settingsContext'
import { useCharacterStore } from 'state/useCharacterStore'
import { itemColours } from 'utils/colours'

const Character: NextPage = () => {

	const equippedCharacter = characters[useCharacterStore(state => state.character)]
	const [selectedCharacter, setSelectedCharacter] = useState<CharacterData>(equippedCharacter)

	const changeCharacter = useCharacterStore(state => state.changeCharacter)

	const equipCharacterHandler = (): void => {
		if (selectedCharacter.name === equippedCharacter.name) return
		changeCharacter(selectedCharacter.name)
	}

	const isMobile = useIsMobile()

	return (
		<Container title='Character'>

			<ItemContainer>
				{
					Object.values(characters).map(character => {
						return <Item
							key={character.name}
							width={isMobile ? 96 : 192}
							rowAmount={10}
							selected={character.name === selectedCharacter.name}
							onClick={() => character.name === selectedCharacter.name ? equipCharacterHandler() : setSelectedCharacter(character)}
						>
							<ItemName colour={itemColours[character.source.rarity]}>{character.name}</ItemName>
							{character.name === equippedCharacter.name && <ItemEquipped />}
							<ItemImage src={`/images/masks/${character.image}.webp`} onMouseDown={event => event.preventDefault()} />
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedCharacter.name}</InfoTitle>
				<InfoSubtitle>Nationality: {selectedCharacter.nationality}</InfoSubtitle>
				<InfoSubtitle>Age: {selectedCharacter.age}</InfoSubtitle>
				<InfoDescription>{selectedCharacter.description.join('\n\n')}</InfoDescription>
				<InfoUnlock colour={itemColours[selectedCharacter.source.rarity]}>{selectedCharacter.source.name}</InfoUnlock>
			</InfoContainer>

		</Container>
	)
}

export default Character
