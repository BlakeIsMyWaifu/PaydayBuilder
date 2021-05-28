import { changeMask, toggleMaskFilter } from 'actions/characterAction'
import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle, InfoUnlock } from 'components/Info'
import { Item, ItemEquiped, ItemName } from 'components/Item'
import data, { maskData } from 'data/character/masks'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { createRef, useRef, useState } from 'react'
import { itemColours } from 'utils/colours'
import scrollHorizontalDiv from 'utils/scrollHorizontalDiv'

import { CollectionTitle, CollectionTitles, FilterContainer, FilterText, FilterTitle, FiltersWrapper, InfoCost, ItemContainer, ItemImage, MaskCollection, MaskCollectionTitle, MaskWrapper } from './Mask-Elements'

interface collections {
	[key: string]: maskData[];
}

const Mask: React.FC = () => {

	const dispatch = useAppDispatch()
	
	const equipedMask = useAppSelector(state => state.character.mask.equiped)

	const [selectedMask, setSelectedMask] = useState<maskData>(equipedMask)

	const clickMask = (mask: maskData) => mask.name === selectedMask.name ? dispatch(changeMask(mask)) : setSelectedMask(mask)

	const collections = (() => {
		let out: collections = {}
		data.forEach(mask => {
			let collection = out[mask.collection]
			out[mask.collection] = collection ? [...collection, mask] : [mask]
		})
		return out
	})()

	const scrollRef = useRef<HTMLDivElement>(null)

	const collectionRefs = useRef(Array.from({length: Object.keys(collections).length}, () => createRef<HTMLDivElement>()))

	const scrollToCollection = (i: number) => {
		const ref = collectionRefs.current[i].current
		ref?.scrollIntoView({ behavior: 'smooth' })
	}

	const filters = useAppSelector(state => state.character.mask.filter)

	return (
		<Container rows='4rem 2rem 8fr 4rem' areas='"title filter" "collectiontitles filter" "items info" "items back"' title={'Mask'}>

			<CollectionTitles ref={scrollRef} onWheel={e => scrollHorizontalDiv(e, scrollRef)}>
				{
					Object.keys(collections).map((collection, i) => {
						if (filters[collections[collection][0].type]) return
						return <CollectionTitle
							key={collection}
							color={itemColours[collections[collection][0].type]}
							onClick={() => scrollToCollection(i)}
						>{collection}</CollectionTitle>
					})
				}
			</CollectionTitles>

			<FilterContainer>
				<FilterTitle>Filters</FilterTitle>
				<FiltersWrapper>
					{
						Object.keys(itemColours).map(type => {
							return <FilterText
								key={type}
								color={itemColours[type]}
								onClick={() => dispatch(toggleMaskFilter(type))}
								typeFilter={filters[type]}
							>{type}</FilterText>
						})
					}
				</FiltersWrapper>
			</FilterContainer>

			<ItemContainer>
				{
					Object.keys(collections).map((collection, i) => {
						const masks = collections[collection]
						if (filters[masks[0].type]) return
						return <MaskCollection ref={collectionRefs.current[i]}>
							<MaskCollectionTitle color={itemColours[masks[0].type]}>{collection}</MaskCollectionTitle>
							<MaskWrapper key={collection}>
								{
									masks.map(mask => {
										return <Item key={mask.name} size={96} selected={mask.name === selectedMask.name}>
											<ItemName color={itemColours[mask.type]}>{mask.name}</ItemName>
											{mask.name === equipedMask.name && <ItemEquiped />}
											<ItemImage
												src={`images/masks/${mask.image}.png`}
												onMouseDown={() => clickMask(mask)}
											/>
										</Item>
									})
								}
							</MaskWrapper>
						</MaskCollection>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedMask.name}</InfoTitle>
				<InfoDescription>{selectedMask.description.join('\n\n')}</InfoDescription>
				<InfoUnlock color={itemColours[selectedMask.type]}>{selectedMask.unlock}</InfoUnlock>
				<InfoCost>{selectedMask.cost}</InfoCost>
			</InfoContainer>

		</Container>
	)
}

export default Mask
