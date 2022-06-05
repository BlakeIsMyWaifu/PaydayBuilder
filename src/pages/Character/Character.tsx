import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoSubtitle, InfoTitle, InfoUnlock } from 'components/Info/Info-Elements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/Item-Elements'
import characters, { CharacterData } from 'data/character/characters'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import { FC, useState } from 'react'
import { changeCharacter } from 'slices/characterSlice'
import { itemColours } from 'utils/colours'

const Character: FC = () => {

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
							width={128}
							rowAmount={10}
							selected={character.name === selectedCharacter.name}
							onClick={() => character.name === selectedCharacter.name ? dispatch(changeCharacter(character.name)) : setSelectedCharacter(character)}
						>
							<ItemName colour={itemColours[character.source.rarity]}>{character.name}</ItemName>
							{character.name === equippedCharacter.name && <ItemEquipped />}
							<ItemImage src={`/images/masks/${character.image}.png`} onMouseDown={event => event.preventDefault()} />
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
