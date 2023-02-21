import CollectionsTab from 'components/CollectionsTab'
import Container from 'components/Container'
import { InfoContainer, InfoCost, InfoDescription, InfoTitle, InfoUnlock } from 'components/elements/infoElements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/elements/itemElements'
import HorizontalBar from 'components/HorizontalBar'
import Info from 'components/Info'
import { AllMasks, Category, CategoryList, MaskData } from 'data/character/masks'
import { ContentRarity } from 'data/source/downloadableContent'
import useMountEffect from 'hooks/useMountEffect'
import useObjectState from 'hooks/useObjectState'
import { NextPage } from 'next'
import { FC, RefObject, createRef, useCallback, useEffect, useRef, useState } from 'react'
import { useCharacterStore } from 'state/useCharacterStore'
import styled, { css, keyframes } from 'styled-components'
import { itemColours } from 'utils/colours'
import findMask from 'utils/findMask'
import { capitalizeEachWord } from 'utils/stringCases'

const rainbow = keyframes`
	0% {
		color: #3BAEFE;
	}
	18% {
		color: #FFD400;
	}
	36% {
		color: #FFF;
	}
	54% {
		color: #FF9100;
	}
	72% {
		color: #FE5D63;
	}
	90% {
		color: #FF1AFF;
	}
	100% {
		color: #3BAEFE;
	}
`

const rainbowAnimation = css`
	animation: ${rainbow} 4s linear 0s infinite;
`

const MaskItemContainer = styled(ItemContainer)`
	flex-direction: column;
	flex-wrap: nowrap;
`

const MaskCollection = styled.div`
	display: flex;
	flex-direction: column;
`

interface MaskCollectionTitleProps {
	colour: string;
}

const MaskCollectionTitle = styled.h1<MaskCollectionTitleProps>`
	font-size: 1.5rem;
	padding-left: 32px;
	color: ${props => props.colour};
`

const MaskWrapper = styled.div`
	padding-top: 16px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`

const Mask: NextPage = () => {

	const [categories, setCategories] = useObjectState<AllMasks>({
		community: {},
		normal: {},
		dlc: {},
		event: {},
		collaboration: {},
		infamous: {}
	})
	const [selectedTab, setSelectedTab] = useState<CategoryList | 'all'>('community')

	const equippedMask = findMask(useCharacterStore(state => state.mask))
	const [selectedMask, setSelectedMask] = useState<MaskData>(equippedMask)

	const itemContainerRef = useRef<HTMLDivElement>(null)
	const collectionRefs = useRef<(HTMLDivElement | null)[] | RefObject<HTMLDivElement>[]>([])

	const changeMask = useCharacterStore(state => state.changeMask)

	const addToCategory = useCallback(async (category: CategoryList): Promise<void> => {
		const loadMaskData = (category: CategoryList): Promise<Category> => new Promise((res, rej) => {
			import(`../data/character/mask/${category}`).then(data => {
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

	const equipMaskHandler = (): void => {
		if (selectedMask.name === equippedMask.name) return
		changeMask(selectedMask.name)
	}

	const stringToRarity = (rarity: CategoryList): ContentRarity => {
		if (rarity === 'dlc') return 'Paid'
		return capitalizeEachWord(rarity) as ContentRarity
	}

	const allCategories: (CategoryList | 'all')[] = ['all', 'community', 'normal', 'dlc', 'event', 'collaboration', 'infamous']

	return (
		<Container rows='4rem 2rem 8fr 4rem' areas='"title title" "horizontalbar infotabs" "items info" "items back"' title='Mask'>

			<HorizontalBar active={selectedTab} items={allCategories.map(rarity => ({
				label: rarity,
				callback: () => {
					setSelectedTab(rarity as (CategoryList | 'all'))
					itemContainerRef.current?.scrollTo(0, 0)
				},
				colour: rarity !== 'all' ? itemColours[stringToRarity(rarity)] : 'rainbow',
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
											onClick={() => maskName === selectedMask.name ? equipMaskHandler() : setSelectedMask(maskData)}
										>
											<ItemName colour={itemColours[maskData.rarity]}>{maskName.replaceAll(' ', '\n')}</ItemName>
											{maskName === equippedMask.name && <ItemEquipped />}
											<ItemImage src={`/images/masks/${maskData.image || 'character_locked'}.webp`} onMouseDown={event => event.preventDefault()} />
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

interface MaskTabProps {
	selectedMask: MaskData;
}

const MaskTab: FC<MaskTabProps> = ({ selectedMask }) => {
	return (
		<InfoContainer>
			<InfoTitle>{selectedMask.name}</InfoTitle>
			<InfoDescription>{selectedMask.description.join('\n\n')}</InfoDescription>
			<InfoUnlock colour={itemColours[selectedMask.rarity]}>{selectedMask.unlock}</InfoUnlock>
			<InfoCost>{selectedMask.cost}</InfoCost>
		</InfoContainer>
	)
}

export default Mask
