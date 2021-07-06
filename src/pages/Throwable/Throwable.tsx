import { changeThrowable } from 'actions/weaponsAction'
import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle, InfoUnlock } from 'components/Info'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName, LockedIcon } from 'components/Item'
import data, { throwableData } from 'data/weapons/throwables'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'
import { itemColours } from 'utils/colours'

const Throwable: React.FC = () => {

	const dispatch = useAppDispatch()

	const equippedThrowable = useAppSelector(state => state.weapons.throwable)

	const [selectedThrowable, setSelectedThrowable] = useState(equippedThrowable)

	const perkDeckName = useAppSelector(state => state.abilities.perkdeck.name)

	return (
		<Container title='Throwable'>

			<ItemContainer>
				{
					data.map(throwable => {
						const locked = !!(throwable.perkDeck && perkDeckName !== throwable.perkDeck)
						return <Item key={throwable.name} width={192} height={96} selected={throwable.name === selectedThrowable.name} onMouseDown={event => {
							event.preventDefault()
							if (throwable.name !== selectedThrowable.name) {
								setSelectedThrowable(throwable)
							} else {
								if (locked) return
								dispatch(changeThrowable(throwable))
							}
						}}>
							<ItemName color={itemColours[throwable.sourceType]}>{throwable.name}</ItemName>
							{ locked && <LockedIcon /> }
							{ throwable.name === equippedThrowable.name && <ItemEquipped /> }
							<ItemImage
								src={`images/throwables/${throwable.image}.png`}
								locked={locked}
							/>
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedThrowable.name}</InfoTitle>
				<InfoDescription>{selectedThrowable.description.join('\n\n')}</InfoDescription>
				<InfoUnlock color={itemColours[selectedThrowable.sourceType]}>{selectedThrowable.source}</InfoUnlock>
			</InfoContainer>

		</Container>
	)
}

export default Throwable
