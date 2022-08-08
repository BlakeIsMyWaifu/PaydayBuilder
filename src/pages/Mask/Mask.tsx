import Container from 'components/Container'
import HorizontalBar from 'components/HorizontalBar'
import Info from 'components/Info'
import { Item, ItemEquipped, ItemImage, ItemName } from 'components/Item-Elements'
import { AllMasks, Category, CategoryList, MaskData } from 'data/character/masks'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import useMountEffect from 'hooks/useMountEffect'
import useObjectState from 'hooks/useObjectState'
import { FC, RefObject, createRef, useCallback, useEffect, useRef, useState } from 'react'
import { changeMask } from 'slices/characterSlice'
import { itemColours } from 'utils/colours'
import findMask from 'utils/findMask'
import { capitalizeEachWord } from 'utils/stringCases'

import CollectionsTab from './CollectionsTab'
import { MaskCollection, MaskCollectionTitle, MaskItemContainer, MaskWrapper, rainbowAnimation } from './Mask-Elements'
import MaskTab from './MaskTab'

const Mask: FC = () => {

	const dispatch = useAppDispatch()

	const [categories, setCategories] = useObjectState<AllMasks>({
		community: {},
		normal: {},
		dlc: {},
		event: {},
		collaboration: {},
		infamous: {}
	})
	const [selectedTab, setSelectedTab] = useState<CategoryList | 'all'>('community')

	const equippedMask = findMask(useAppSelector(state => state.character.mask))
	const [selectedMask, setSelectedMask] = useState<MaskData>(equippedMask)

	const itemContainerRef = useRef<HTMLDivElement>(null)
	const collectionRefs = useRef<(HTMLDivElement | null)[] | RefObject<HTMLDivElement>[]>([])

	const addToCategory = useCallback(async (category: CategoryList): Promise<void> => {
		const loadMaskData = (category: CategoryList): Promise<Category> => new Promise((res, rej) => {
			import(`../../data/character/mask/${category}`).then(data => {
				res(data.default as unknown as Category)
			}).catch(err => rej(err))
		})
		const newCategoryData = await loadMaskData(category)
		setCategories({ [category]: newCategoryData })
	}, [setCategories])

	const getCurrentData = useCallback((): Category => {
		const allDataArray = Object.entries(categories ?? {}).map(([key, value]) => {
			const collections = Object.entries(value).map(([title, data]) => [`${key}?${title}`, data])
			return Object.fromEntries(collections)
		})
		const allData: Category = Object.assign({}, ...allDataArray)
		return (selectedTab === 'all' ? allData : categories[selectedTab]) ?? {}
	}, [categories, selectedTab])

	useMountEffect(() => {
		addToCategory('community')
	})

	useEffect(() => {
		if (selectedTab === 'all') {
			const allCategories: CategoryList[] = ['community', 'normal', 'dlc', 'event', 'collaboration', 'infamous']
			allCategories.forEach(addToCategory)
		} else {
			addToCategory(selectedTab)
		}
	}, [selectedTab, addToCategory])

	return (
		<Container rows='4rem 2rem 8fr 4rem' areas='"title title" "horizontalbar infotabs" "items info" "items back"' title='Mask'>

			<HorizontalBar active={selectedTab} items={['all', 'community', 'normal', 'dlc', 'event', 'collaboration', 'infamous'].map(rarity => ({
				label: rarity,
				callback: () => {
					setSelectedTab(rarity as (CategoryList | 'all'))
					itemContainerRef.current?.scrollTo(0, 0)
				},
				colour: itemColours[rarity === 'dlc' ? 'Paid' : capitalizeEachWord(rarity)] ?? 'rainbow',
				additionalStyling: rarity === 'all' ? rainbowAnimation : null
			}))} />

			<MaskItemContainer ref={itemContainerRef}>
				{
					Object.entries(getCurrentData()).map(([collectionTitle, collectionMasks], i) => {

						const { rarity } = Object.values(collectionMasks.masks)[0]
						const collectionColour = itemColours[rarity]

						collectionRefs.current = Array.from({ length: Object.keys(getCurrentData()).length }, () => createRef<HTMLDivElement>())

						const title = collectionTitle.split('?').at(-1)

						return <MaskCollection key={collectionTitle} ref={ref => {
							collectionRefs.current[i] = ref
						}}>
							<MaskCollectionTitle colour={collectionColour}>{title}</MaskCollectionTitle>
							<MaskWrapper key={collectionTitle}>
								{
									Object.entries(collectionMasks.masks).map(([maskName, maskData]) => {
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
					collections={getCurrentData()}
				/>
			}} />

		</Container>
	)
}

export default Mask
