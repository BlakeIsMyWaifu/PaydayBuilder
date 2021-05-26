import { changeMask, toggleMaskFilter } from 'actions/characterAction'
import Back from 'components/Back'
import Container from 'components/Container'
import { Item, Title, Wrapper } from 'components/Content'
import { InfoContainer, InfoDescription, InfoTitle, InfoUnlock } from 'components/Info'
import data, { maskData } from 'data/character/masks'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { createRef, useRef, useState } from 'react'
import { useHistory } from 'react-router'
import { itemColours } from 'utils/colours'
import scrollHorizontalDiv from 'utils/scrollHorizontalDiv'

import { CollectionTitle, CollectionTitles, FilterContainer, FilterText, FilterTitle, FiltersWrapper, InfoCost, MaskCollection, MaskCollectionTitle } from './Mask-Elements'

interface collections {
	[key: string]: maskData[];
}

const Mask: React.FC = () => {

	const [hoveredMask, setHoveredMask] = useState<maskData | null>()

	const dispatch = useAppDispatch()

	const history = useHistory()

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
		<Container columns='3fr 1fr' rows='4rem 2rem 8fr 4rem' areas='"title filter" "collectiontitles filter" "wrapper info" "wrapper back"'>

			<Title>Mask</Title>

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

			<Wrapper>
				{
					Object.keys(collections).map((collection, i) => {
						const masks = collections[collection]
						if (filters[masks[0].type]) return
						return <MaskCollection key={collection} ref={collectionRefs.current[i]}>
							<MaskCollectionTitle color={itemColours[masks[0].type]}>{collection}</MaskCollectionTitle>
							{
								masks.map(mask => {
									return <Item
										key={mask.name}
										src={`images/masks/${mask.image}.png`}
										onMouseEnter={() => setHoveredMask(mask)}
										onMouseLeave={() => setHoveredMask(null)}
										onMouseDown={() => {
											dispatch(changeMask(mask))
											history.push('/')
										}}
										size={96}
									/>
								})
							}
						</MaskCollection>
					})
				}
			</Wrapper>

			<InfoContainer>
				{
					hoveredMask && (
						<>
							<InfoTitle>{hoveredMask.name}</InfoTitle>
							<InfoDescription>{hoveredMask.description.join('\n\n')}</InfoDescription>
							<InfoUnlock color={itemColours[hoveredMask.type]}>{hoveredMask.unlock}</InfoUnlock>
							<InfoCost>{hoveredMask.cost}</InfoCost>
						</>
					)
				}
			</InfoContainer>

			<Back />

		</Container>
	)
}

export default Mask
