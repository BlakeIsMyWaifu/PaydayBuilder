import Container from 'components/Container'
import HorizontalBar from 'components/HorizontalBar'
import Info from 'components/Info'
import { Item, ItemEquipped, ItemImage, ItemName } from 'components/Item-Elements'
import masks, { MaskData } from 'data/character/masks'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import useMountEffect from 'hooks/useMountEffect'
import useObjectState from 'hooks/useObjectState'
import { FC, RefObject, createRef, useCallback, useEffect, useRef, useState } from 'react'
import { changeMask } from 'slices/characterSlice'
import { itemColours } from 'utils/colours'
import findMask from 'utils/findMask'

import CollectionsTab from './CollectionsTab'
import { MaskCollection, MaskCollectionTitle, MaskItemContainer, MaskWrapper, rainbowAnimation } from './Mask-Elements'
import MaskTab from './MaskTab'

export const getCollectionList = (): Record<string, MaskData[]> => {
	const out: Record<string, MaskData[]> = {}
	Object.values(masks).forEach(mask => {
		const collection = out[mask.collection]
		out[mask.collection] = collection ? [...collection, mask] : [mask]
	})
	return out
}

const Mask: FC = () => {

	const dispatch = useAppDispatch()

	const [collections, setCollections] = useObjectState<Record<string, Record<string, Record<string, MaskData>>>>({})
	const [selectedTab, setSelectedTab] = useState('Community')
	const selectedTabLower = selectedTab.toLowerCase()

	const equippedMask = findMask(useAppSelector(state => state.character.mask))
	const [selectedMask, setSelectedMask] = useState<MaskData>(equippedMask)

	const itemContainerRef = useRef<HTMLDivElement>(null)
	const collectionRefs = useRef<(HTMLDivElement | null)[] | RefObject<HTMLDivElement>[]>([])

	const addToCollection = useCallback(async (category: string): Promise<void> => {
		const loadMaskData = (category: string): Promise<Record<string, Record<string, MaskData>>> => new Promise((res, rej) => {
			import(`../../data/character/mask/${category}`).then(data => {
				res(data.default as unknown as Record<string, Record<string, MaskData>>)
			}).catch(err => rej(err))
		})
		const newCollectionData = await loadMaskData(category)
		setCollections({ [category]: newCollectionData })
	}, [setCollections])

	useMountEffect(() => {
		addToCollection('community')
	})

	useEffect(() => {
		if (selectedTab === 'All') return
		addToCollection(selectedTabLower)
	}, [selectedTabLower, selectedTab, addToCollection])

	return (
		<Container rows='4rem 2rem 8fr 4rem' areas='"title title" "horizontalbar infotabs" "items info" "items back"' title='Mask'>

			<HorizontalBar active={selectedTab} items={['All', 'Community', 'Free', 'DLC', 'Event', 'Collaboration', 'Infamous'].map(rarity => ({
				label: rarity === 'Paid' ? 'DLC' : rarity,
				callback: () => {
					setSelectedTab(rarity)
					itemContainerRef.current?.scrollTo(0, 0)
				},
				colour: itemColours[rarity === 'DLC' ? 'Paid' : rarity] ?? 'rainbow',
				additionalStyling: rarity === 'All' ? rainbowAnimation : null
			}))} />

			<MaskItemContainer ref={itemContainerRef}>
				{
					collections[selectedTabLower] && Object.entries(collections[selectedTabLower]).map(([collectionTitle, collectionMasks], i) => {

						const collectionColour = itemColours[selectedTab === 'DLC' ? 'Paid' : selectedTab]
						collectionRefs.current = Array.from({ length: Object.keys(collections[selectedTabLower]).length }, () => createRef<HTMLDivElement>())

						return <MaskCollection key={collectionTitle} ref={ref => {
							collectionRefs.current[i] = ref
						}}>
							<MaskCollectionTitle colour={collectionColour}>{collectionTitle}</MaskCollectionTitle>
							<MaskWrapper key={collectionTitle}>
								{
									Object.entries(collectionMasks).map(([maskName, maskData]) => {
										return <Item
											key={maskName}
											width={128}
											rowAmount={10}
											selected={maskName === selectedMask.name}
											onClick={() => maskName === selectedMask.name ? dispatch(changeMask(maskName)) : setSelectedMask(maskData)}
										>
											<ItemName colour={itemColours[maskData.rarity]}>{maskName.replaceAll(' ', '\n')}</ItemName>
											{maskName === equippedMask.name && <ItemEquipped />}
											<ItemImage src={`/images/masks/${maskData.image}.png`} onMouseDown={event => event.preventDefault()} />
										</Item>
									})
								}
							</MaskWrapper>
						</MaskCollection>
					})
				}
			</MaskItemContainer>

			<Info tabs={{
				mask: <MaskTab selectedMask={selectedMask} />,
				collections: <CollectionsTab
					collectionRefs={collectionRefs}
					collections={collections[selectedTab.toLowerCase()]}
				/>
			}} />

		</Container>
	)
}

export default Mask
