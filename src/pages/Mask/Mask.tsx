import { changeMask } from 'actions/characterAction'
import Container from 'components/Container'
import Info, { InfoContainer, InfoDescription, InfoTitle, InfoUnlock } from 'components/Info'
import { Item, ItemEquipped, ItemImage, ItemName } from 'components/Item'
import data, { maskData } from 'data/character/masks'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { createRef, useRef, useState } from 'react'
import { itemColours } from 'utils/colours'

import { CollectionTitle, CollectionsContainer, InfoCost, ItemContainer, MaskCollection, MaskCollectionTitle, MaskWrapper, RarityContainer, RarityTitle } from './Mask-Elements'

const collections = (() => {
	let out: Record<string, maskData[]> = {}
	data.forEach(mask => {
		let collection = out[mask.collection]
		out[mask.collection] = collection ? [...collection, mask] : [mask]
	})
	return out
})()

interface MaskTabComponent {
	selectedMask: maskData;
}

const MaskTab: React.FC<MaskTabComponent> = ({ selectedMask }) => {
	return (
		<InfoContainer>
			<InfoTitle>{selectedMask.name}</InfoTitle>
			<InfoDescription>{selectedMask.description.join('\n\n')}</InfoDescription>
			<InfoUnlock color={itemColours[selectedMask.rarity]}>{selectedMask.unlock}</InfoUnlock>
			<InfoCost>{selectedMask.cost}</InfoCost>
		</InfoContainer>
	)
}

interface CollectionsTabComponent {
	selectedTab: string;
	collectionRefs: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>;
}

const CollectionsTab: React.FC<CollectionsTabComponent> = ({ selectedTab, collectionRefs }) => {
	return (
		<InfoContainer>
			<InfoTitle>Collections</InfoTitle>
			<CollectionsContainer>
				{
					Object.keys(collections).map((collection, i) => {
						if (selectedTab !== collections[collection][0].rarity && selectedTab !== 'All') return
						return <CollectionTitle
							key={collection}
							color={itemColours[collections[collection][0].rarity]}
							onClick={() => collectionRefs.current[i].current?.scrollIntoView({ behavior: 'smooth' })}
						>{collection}</CollectionTitle>
					})
				}
			</CollectionsContainer>
		</InfoContainer>
	)
}

const Mask: React.FC = () => {

	const dispatch = useAppDispatch()

	const equippedMask = useAppSelector(state => state.character.mask)
	const [selectedMask, setSelectedMask] = useState<maskData>(equippedMask)

	const [selectedTab, setSelectedTab] = useState('All')

	const itemContainerRef = useRef<HTMLDivElement>(null)
	const collectionRefs = useRef(Array.from({length: Object.keys(collections).length}, () => createRef<HTMLDivElement>()))

	return (
		<Container rows='4rem 2rem 8fr 4rem' areas='"title title" "rarity infotabs" "items info" "items back"' title='Mask'>

			<RarityContainer>
				{
					['All','Community', 'Free', 'Paid', 'Event', 'Collaboration', 'Infamous'].map(rarity => {
						return <RarityTitle
							key={rarity}
							color={itemColours[rarity] || 'rainbow'}
							onClick={() => {
								setSelectedTab(rarity)
								itemContainerRef.current?.scrollTo(0, 0)
							}}
						>{rarity === 'Paid' ? 'DLC' : rarity}</RarityTitle>
					})
				}
			</RarityContainer>

			<ItemContainer ref={itemContainerRef}>
				{
					Object.entries(collections).map(([collection, masks], i) => {
						if (selectedTab !== masks[0].rarity && selectedTab !== 'All') return
						return <MaskCollection key={collection} ref={collectionRefs.current[i]}>
							<MaskCollectionTitle color={itemColours[masks[0].rarity]}>{collection}</MaskCollectionTitle>
							<MaskWrapper key={collection}>
								{
									masks.map(mask => {
										return <Item
											key={mask.name}
											size={128}
											selected={mask.name === selectedMask.name}
											onClick={() => mask.name === selectedMask.name ? dispatch(changeMask(mask)) : setSelectedMask(mask)}
										>
											<ItemName color={itemColours[mask.rarity]}>{mask.name.replaceAll(' ', '\n')}</ItemName>
											{ mask.name === equippedMask.name && <ItemEquipped /> }
											<ItemImage src={`images/masks/${mask.image}.png`} onMouseDown={event => event.preventDefault()} />
										</Item>
									})
								}
							</MaskWrapper>
						</MaskCollection>
					})
				}
			</ItemContainer>

			<Info tabs={{
				mask: <MaskTab selectedMask={selectedMask} />,
				collections: <CollectionsTab selectedTab={selectedTab} collectionRefs={collectionRefs} />
			}} />

		</Container>
	)
}

export default Mask
