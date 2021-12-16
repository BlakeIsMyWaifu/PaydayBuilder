import { changeMask } from 'actions/characterAction'
import Container from 'components/Container'
import HorizontalBar from 'components/HorizontalBar'
import Info, { InfoContainer, InfoDescription, InfoTitle, InfoUnlock } from 'components/Info'
import { Item, ItemEquipped, ItemImage, ItemName } from 'components/Item'
import masks, { MaskData } from 'data/character/masks'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { Fragment, createRef, useRef, useState } from 'react'
import { itemColours } from 'utils/colours'

import { CollectionTitle, CollectionsContainer, InfoCost, ItemContainer, MaskCollection, MaskCollectionTitle, MaskWrapper, rainbowAnimation } from './Mask-Elements'

const collections = (() => {
	const out: Record<string, MaskData[]> = {}
	Object.values(masks).forEach(mask => {
		const collection = out[mask.collection]
		out[mask.collection] = collection ? [...collection, mask] : [mask]
	})
	return out
})()

interface MaskTabProps {
	selectedMask: MaskData;
}

const MaskTab: React.FC<MaskTabProps> = ({ selectedMask }) => {
	return (
		<InfoContainer>
			<InfoTitle>{selectedMask.name}</InfoTitle>
			<InfoDescription>{selectedMask.description.join('\n\n')}</InfoDescription>
			<InfoUnlock colour={itemColours[selectedMask.rarity]}>{selectedMask.unlock}</InfoUnlock>
			<InfoCost>{selectedMask.cost}</InfoCost>
		</InfoContainer>
	)
}

interface CollectionsTabProps {
	selectedTab: string;
	collectionRefs: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>;
}

const CollectionsTab: React.FC<CollectionsTabProps> = ({ selectedTab, collectionRefs }) => {
	return (
		<InfoContainer>
			<InfoTitle>Collections</InfoTitle>
			<CollectionsContainer>
				{
					Object.keys(collections).map((collection, i) => {
						if (selectedTab !== collections[collection][0].rarity && selectedTab !== 'All') return <></>
						return <CollectionTitle
							key={collection}
							colour={itemColours[collections[collection][0].rarity]}
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

	const equippedMask = masks[useAppSelector(state => state.character.mask)]
	const [selectedMask, setSelectedMask] = useState<MaskData>(equippedMask)

	const [selectedTab, setSelectedTab] = useState('Community')

	const itemContainerRef = useRef<HTMLDivElement>(null)
	const collectionRefs = useRef(Array.from({ length: Object.keys(collections).length }, () => createRef<HTMLDivElement>()))

	return (
		<Container rows='4rem 2rem 8fr 4rem' areas='"title title" "horizontalbar infotabs" "items info" "items back"' title='Mask'>

			<HorizontalBar active={selectedTab} items={['All', 'Community', 'Free', 'Paid', 'Event', 'Collaboration', 'Infamous'].map(rarity => ({
				label: rarity === 'Paid' ? 'DLC' : rarity,
				callback: () => {
					setSelectedTab(rarity)
					itemContainerRef.current?.scrollTo(0, 0)
				},
				colour: itemColours[rarity] || 'rainbow',
				additionalStyling: rarity === 'All' ? rainbowAnimation : null
			}))} />

			<ItemContainer ref={itemContainerRef}>
				{
					Object.entries(collections).map(([collection, collectionMasks], i) => {
						if (selectedTab !== collectionMasks[0].rarity && selectedTab !== 'All') return <Fragment key={collection}></Fragment>
						return <MaskCollection key={collection} ref={collectionRefs.current[i]}>
							<MaskCollectionTitle colour={itemColours[collectionMasks[0].rarity]}>{collection}</MaskCollectionTitle>
							<MaskWrapper key={collection}>
								{
									collectionMasks.map(mask => {
										return <Item
											key={mask.name}
											width={128}
											rowAmount={10}
											selected={mask.name === selectedMask.name}
											onClick={() => mask.name === selectedMask.name ? dispatch(changeMask(mask.name)) : setSelectedMask(mask)}
										>
											<ItemName colour={itemColours[mask.rarity]}>{mask.name.replaceAll(' ', '\n')}</ItemName>
											{mask.name === equippedMask.name && <ItemEquipped />}
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
