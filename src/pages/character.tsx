import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoSubtitle, InfoTitle, InfoUnlock } from 'components/elements/infoElements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/elements/itemElements'
import { type CharacterData } from 'data/character/characters'
import { type NextPage } from 'next'
import { useState } from 'react'
import { useIsMobile } from 'state/settingsContext'
import { useCharacterStore } from 'state/useCharacterStore'
import { itemColours } from 'utils/colours'
import { trpc } from 'utils/trpc'

const Character: NextPage = () => {

	const { data } = trpc.characterData.characterData.useQuery()

	const equippedCharacterName = useCharacterStore(state => state.character)
	const [selectedCharacterData, setSelectedCharacter] = useState<CharacterData | null>(null)

	const changeCharacter = useCharacterStore(state => state.changeCharacter)

	const equipCharacterHandler = () => {
		if (!selectedCharacterData || selectedCharacterData.name === equippedCharacterName) return
		changeCharacter(selectedCharacterData.name)
	}

	const isMobile = useIsMobile()

	return (
		<Container title='Character'>

			<ItemContainer>
				{
					Object.values(data ?? {}).map(character => {
						const isSelected = character.name === selectedCharacterData?.name
						return <Item
							key={character.name}
							width={isMobile ? 96 : 192}
							rowAmount={10}
							selected={isSelected}
							onClick={() => isSelected ? equipCharacterHandler() : setSelectedCharacter(character)}
						>
							<ItemName colour={itemColours[character.source.rarity]}>{character.name}</ItemName>
							{character.name === equippedCharacterName && <ItemEquipped />}
							<ItemImage src={`/images/masks/${character.image}.webp`} onMouseDown={event => event.preventDefault()} />
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				{
					selectedCharacterData && <>
						<InfoTitle>{selectedCharacterData.name}</InfoTitle>
						<InfoSubtitle>Nationality: {selectedCharacterData.nationality}</InfoSubtitle>
						<InfoSubtitle>Age: {selectedCharacterData.age}</InfoSubtitle>
						<InfoDescription>{selectedCharacterData.description.join('\n\n')}</InfoDescription>
						<InfoUnlock colour={itemColours[selectedCharacterData.source.rarity]}>{selectedCharacterData.source.name}</InfoUnlock>
					</>
				}
			</InfoContainer>

		</Container>
	)
}

export default Character
