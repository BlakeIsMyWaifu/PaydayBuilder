import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoRequirement, InfoTitle, InfoUnlock } from 'components/Info/Info-Elements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName, LockedIcon } from 'components/Item-Elements'
import perkDecks from 'data/abilities/perks'
import throwables from 'data/weapons/throwables'
import { FC, useState } from 'react'
import { useAbilityStore } from 'state/useAbilitiesStore'
import { useWeaponsStore } from 'state/useWeaponsStore'
import { itemColours } from 'utils/colours'

const Throwable: FC = () => {

	const equippedThrowable = throwables[useWeaponsStore(state => state.throwable)]
	const [selectedThrowable, setSelectedThrowable] = useState(equippedThrowable)

	const perkDeckName = useAbilityStore(state => perkDecks[state.perkDeck].name)

	const changeThrowable = useWeaponsStore(state => state.changeThrowable)

	const equipThrowableHandler = (): void => {
		if (selectedThrowable.name === equippedThrowable.name) return
		changeThrowable(selectedThrowable.name)
	}

	return (
		<Container title='Throwable'>

			<ItemContainer>
				{
					Object.values(throwables).map(throwable => {
						const locked = !!(throwable.perkDeck && perkDeckName !== throwable.perkDeck)
						return <Item
							key={throwable.name}
							width={192}
							rowAmount={5}
							selected={throwable.name === selectedThrowable.name}
							onClick={() => {
								if (throwable.name !== selectedThrowable.name) {
									setSelectedThrowable(throwable)
								} else {
									if (locked) return
									equipThrowableHandler()
								}
							}}
						>
							<ItemName colour={itemColours[throwable.source.rarity]}>{throwable.name}</ItemName>
							{locked && <LockedIcon />}
							{throwable.name === equippedThrowable.name && <ItemEquipped />}
							<ItemImage
								src={`/images/throwables/${throwable.image}.webp`}
								locked={locked}
								onMouseDown={event => event.preventDefault()}
							/>
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedThrowable.name}</InfoTitle>
				{selectedThrowable.perkDeck && selectedThrowable.perkDeck !== perkDeckName && <InfoRequirement>Requires the {selectedThrowable.perkDeck} perk deck equipped</InfoRequirement>}
				<InfoDescription>{selectedThrowable.description.join('\n\n')}</InfoDescription>
				<InfoUnlock colour={itemColours[selectedThrowable.source.rarity]}>{selectedThrowable.source.name}</InfoUnlock>
			</InfoContainer>

		</Container>
	)
}

export default Throwable
