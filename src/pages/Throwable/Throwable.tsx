import { changeThrowable } from 'actions/weaponsAction'
import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoRequirement, InfoTitle, InfoUnlock } from 'components/Info'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName, LockedIcon } from 'components/Item'
import perkDecks from 'data/abilities/perks'
import throwables from 'data/weapons/throwables'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'
import { itemColours } from 'utils/colours'

const Throwable: React.FC = () => {

	const dispatch = useAppDispatch()

	const equippedThrowable = throwables[useAppSelector(state => state.weapons.throwable)]
	const [selectedThrowable, setSelectedThrowable] = useState(equippedThrowable)

	const perkDeckName = useAppSelector(state => perkDecks[state.abilities.perkdeck].name)

	return (
		<Container title='Throwable'>

			<ItemContainer>
				{
					Object.values(throwables).map(throwable => {
						const locked = !!(throwable.perkDeck && perkDeckName !== throwable.perkDeck)
						return <Item key={throwable.name} width={192} height={96} selected={throwable.name === selectedThrowable.name} onClick={() => {
							if (throwable.name !== selectedThrowable.name) {
								setSelectedThrowable(throwable)
							} else {
								if (locked) return
								dispatch(changeThrowable(throwable.name))
							}
						}}>
							<ItemName color={itemColours[throwable.source.rarity]}>{throwable.name}</ItemName>
							{locked && <LockedIcon />}
							{throwable.name === equippedThrowable.name && <ItemEquipped />}
							<ItemImage
								src={`images/throwables/${throwable.image}.png`}
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
				<InfoUnlock color={itemColours[selectedThrowable.source.rarity]}>{selectedThrowable.source.name}</InfoUnlock>
			</InfoContainer>

		</Container>
	)
}

export default Throwable
