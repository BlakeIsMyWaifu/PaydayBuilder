import CollectionsTab from 'components/CollectionsTab'
import Container from 'components/Container'
import { InfoContainer, InfoCost, InfoDescription, InfoTitle, InfoUnlock } from 'components/elements/infoElements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/elements/itemElements'
import HorizontalBar from 'components/HorizontalBar'
import Info from 'components/Info'
import { type Category, type CategoryList, type Collection, type MaskData } from 'data/character/masks'
import { type ContentRarity } from 'data/source/downloadableContent'
import { type NextPage } from 'next'
import { createRef, type Dispatch, type FC, type MutableRefObject, type RefObject, type SetStateAction, useMemo, useRef, useState } from 'react'
import { useCharacterStore } from 'state/useCharacterStore'
import styled, { css, keyframes } from 'styled-components'
import { itemColours } from 'utils/colours'
import { capitalizeEachWord } from 'utils/stringCases'
import { trpc } from 'utils/trpc'

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

const MaskCollectionContainer = styled.div`
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

	const categories = useMaskData()

	const [selectedTab, setSelectedTab] = useState<CategoryList | 'all'>('community')

	const [selectedMask, setSelectedMask] = useState<MaskData | null>(null)

	const itemContainerRef = useRef<HTMLDivElement>(null)
	const collectionRefs = useRef<(HTMLDivElement | null)[] | RefObject<HTMLDivElement>[]>([])

	return (
		<Container
			title='Mask'
			desktopLayout={{
				rows: '4rem 2rem auto 4rem',
				areas: '"title title" "horizontalbar infotabs" "items info" "items back"'
			}}
			mobileLayout={{
				rows: '3rem 1.5rem auto 1rem 150px',
				areas: '"title title" "horizontalbar horizontalbar" "items items" "infotabs ." "info back"'
			}}
		>

			<MaskHorizontalBar
				selectedTab={selectedTab}
				setSelectedTab={setSelectedTab}
				itemContainerRef={itemContainerRef}
			/>

			<MaskItemContainer ref={itemContainerRef}>
				{
					Object.values(categories[selectedTab]).map((collectionMasks, i) => {
						const firstMask = Object.values(collectionMasks.masks)[0]
						return <MaskCollection
							key={`${firstMask.rarity}?${firstMask.collection}`}
							collectionMasks={collectionMasks}
							selectedMask={selectedMask}
							setSelectedMask={setSelectedMask}
							collectionRefs={collectionRefs}
							selectedTabData={categories[selectedTab]}
							i={i}
						/>
					})
				}
			</MaskItemContainer>

			<Info tabs={{
				mask: <MaskInfoTab selectedMask={selectedMask} />,
				collections: <CollectionsTab
					collectionRefs={collectionRefs}
					collections={categories[selectedTab]}
				/>
			}} />

		</Container>
	)
}

interface MaskHorizontalBarProps {
	selectedTab: CategoryList | 'all';
	setSelectedTab: Dispatch<SetStateAction<MaskHorizontalBarProps['selectedTab']>>;
	itemContainerRef: RefObject<HTMLDivElement>;
}

const MaskHorizontalBar: FC<MaskHorizontalBarProps> = ({ selectedTab, setSelectedTab, itemContainerRef }) => {

	const stringToRarity = (rarity: CategoryList) => {
		if (rarity === 'dlc') return 'Paid'
		return capitalizeEachWord(rarity) as ContentRarity
	}

	const allCategories: (CategoryList | 'all')[] = ['all', 'community', 'normal', 'dlc', 'event', 'collaboration', 'infamous']

	return (
		<HorizontalBar active={selectedTab} items={allCategories.map(rarity => ({
			label: rarity,
			callback: () => {
				setSelectedTab(rarity)
				itemContainerRef.current?.scrollTo(0, 0)
			},
			colour: rarity !== 'all' ? itemColours[stringToRarity(rarity)] : 'rainbow',
			additionalStyling: rarity === 'all' ? rainbowAnimation : null
		}))} />
	)
}

interface MaskCollectionProps {
	collectionMasks: Collection;
	selectedMask: MaskData | null;
	setSelectedMask: Dispatch<SetStateAction<MaskCollectionProps['selectedMask']>>;
	collectionRefs: MutableRefObject<(HTMLDivElement | null)[] | RefObject<HTMLDivElement>[]>;
	selectedTabData: Category;
	i: number;
}

const MaskCollection: FC<MaskCollectionProps> = ({ collectionMasks, selectedMask, setSelectedMask, collectionRefs, selectedTabData, i }) => {

	const equippedMaskName = useCharacterStore(state => state.mask)
	const changeMask = useCharacterStore(state => state.changeMask)

	const equipMaskHandler = () => {
		if (!selectedMask || selectedMask.name === equippedMaskName) return
		changeMask(selectedMask.name)
	}

	const { rarity } = Object.values(collectionMasks.masks)[0]
	const collectionColour = itemColours[rarity]

	collectionRefs.current = Array.from({ length: Object.keys(selectedTabData).length }, () => createRef<HTMLDivElement>())

	const collectionTitle = Object.values(collectionMasks.masks)[0].collection
	const title = collectionTitle.split('?').at(-1)

	return (
		<MaskCollectionContainer key={`${collectionMasks.masks[0]?.rarity}?${collectionTitle}`} ref={ref => {
			collectionRefs.current[i] = ref
		}}>
			<MaskCollectionTitle colour={collectionColour}>{title}</MaskCollectionTitle>
			<MaskWrapper key={`${collectionMasks.masks[0]?.rarity}?${collectionTitle}`}>
				{
					Object.values(collectionMasks.masks).map(maskData => {
						const isSelected = maskData.name === selectedMask?.name
						return <Item
							key={maskData.name}
							width={128}
							rowAmount={10}
							aspectRatio='1 / 1'
							selected={isSelected}
							onClick={() => isSelected ? equipMaskHandler() : setSelectedMask(maskData)}
						>
							<ItemName colour={itemColours[maskData.rarity]}>{maskData.name.replaceAll(' ', '\n')}</ItemName>
							{maskData.name === equippedMaskName && <ItemEquipped />}
							<ItemImage src={`/images/masks/${maskData.image || 'character_locked'}.webp`} onMouseDown={event => event.preventDefault()} />
						</Item>
					})
				}
			</MaskWrapper>
		</MaskCollectionContainer>
	)
}

interface MaskTabProps {
	selectedMask: MaskData | null;
}

const MaskInfoTab: FC<MaskTabProps> = ({ selectedMask }) => {
	return (
		<InfoContainer>
			{
				selectedMask && <>
					<InfoTitle>{selectedMask.name}</InfoTitle>
					<InfoDescription>{selectedMask.description.join('\n\n')}</InfoDescription>
					<InfoUnlock colour={itemColours[selectedMask.rarity]}>{selectedMask.unlock}</InfoUnlock>
					<InfoCost>{selectedMask.cost}</InfoCost>
				</>
			}
		</InfoContainer>
	)
}

const useMaskData = () => {

	const { data: communityData } = trpc.characterData.maskCommunityData.useQuery()
	const { data: normalData } = trpc.characterData.maskNormalData.useQuery()
	const { data: dlcData } = trpc.characterData.maskDlcData.useQuery()
	const { data: eventData } = trpc.characterData.maskEventData.useQuery()
	const { data: collaborationData } = trpc.characterData.maskCollaboration.useQuery()
	const { data: infamousData } = trpc.characterData.maskInfamous.useQuery()

	return useMemo(() => {
		const mainCategories: Record<string, Category> = {
			community: communityData ?? {},
			normal: normalData ?? {},
			dlc: dlcData ?? {},
			event: eventData ?? {},
			collaboration: collaborationData ?? {},
			infamous: infamousData ?? {}
		}
		const allDataArray = Object.entries(mainCategories).map(([key, value]) => {
			const collections = Object.entries(value).map<[string, Collection]>(([title, data]) => [`${key}?${title}`, data])
			return Object.fromEntries(collections)
		})
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const allData: Category = Object.assign({}, ...allDataArray)
		const out: Record<string, Category> = {
			all: allData,
			...mainCategories
		}
		return out
	}, [collaborationData, communityData, dlcData, eventData, infamousData, normalData])
}

export default Mask
