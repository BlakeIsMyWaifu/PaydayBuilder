import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoRequirement, InfoTitle, InfoUnlock } from 'components/elements/infoElements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName, LockedIcon } from 'components/elements/itemElements'
import { type ThrowableData } from 'data/weapons/throwables'
import { type NextPage } from 'next'
import { useState } from 'react'
import { useAbilityStore } from 'state/useAbilitiesStore'
import { useWeaponsStore } from 'state/useWeaponsStore'
import { itemColours } from 'utils/colours'
import { trpc } from 'utils/trpc'

const Throwable: NextPage = () => {

	const { data } = trpc.weaponData.throwableData.useQuery()

	const equippedThrowableName = useWeaponsStore(state => state.throwable)
	const [selectedThrowable, setSelectedThrowable] = useState<ThrowableData | null>(null)

	const perkDeckName = useAbilityStore(state => state.perkDeck)

	const changeThrowable = useWeaponsStore(state => state.changeThrowable)

	const equipThrowableHandler = (): void => {
		if (selectedThrowable?.name === equippedThrowableName) return
		changeThrowable(selectedThrowable?.name ?? 'Frag Grenade')
	}

	return (
		<Container title='Throwable'>

			<ItemContainer>
				{
					Object.values(data ?? {}).map(throwable => {
						const locked = !!(throwable.perkDeck && perkDeckName !== throwable.perkDeck)
						const isSelected = throwable.name === selectedThrowable?.name
						return <Item
							key={throwable.name}
							rowAmount={5}
							selected={isSelected}
							onClick={() => isSelected && !locked ? equipThrowableHandler() : setSelectedThrowable(throwable)}
						>
							<ItemName colour={itemColours[throwable.source.rarity]}>{throwable.name}</ItemName>
							{locked && <LockedIcon />}
							{throwable.name === equippedThrowableName && <ItemEquipped />}
							<ItemImage
								src={`/images/throwables/${throwable.image}.webp`}
								locked={locked}
								aspectRatio='auto'
								onMouseDown={event => event.preventDefault()}
							/>
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				{
					selectedThrowable && <>
						<InfoTitle>{selectedThrowable.name}</InfoTitle>
						{selectedThrowable.perkDeck && selectedThrowable.perkDeck !== perkDeckName && <InfoRequirement>Requires the {selectedThrowable.perkDeck} perk deck equipped</InfoRequirement>}
						<InfoDescription>{selectedThrowable.description.join('\n\n')}</InfoDescription>
						<InfoUnlock colour={itemColours[selectedThrowable.source.rarity]}>{selectedThrowable.source.name}</InfoUnlock>
					</>
				}
			</InfoContainer>

		</Container>
	)
}

export default Throwable
