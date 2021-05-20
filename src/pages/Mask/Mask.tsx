import { changeMask, toggleMaskFilter } from 'actions/characterAction'
import Back from 'components/Back'
import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/Info'
import { Title } from 'components/Title'
import data, { maskData } from 'data/character/masks'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { createRef, useRef, useState } from 'react'
import { useHistory } from 'react-router'
import scrollHorizontalDiv from 'utils/scrollHorizontalDiv'

import { CollectionTitle, CollectionTitles, FilterContainer, FilterText, FilterTitle, FiltersWrapper, InfoCost, InfoUnlock, Mask, MaskCollection, MaskCollectionTitle, MaskContainer } from './Mask-Elements'

interface collections {
	[key: string]: maskData[];
}

interface colours {
	[key: string]: string;
}

const MaskPage: React.FC = () => {

	const [hoveredMask, setHoveredMask] = useState<maskData | null>()

	const dispatch = useAppDispatch()

	const history = useHistory()

	const colours: colours = {
		normal: '#fff',
		community: '#3baefe',
		dlc: '#ffd400',
		event: '#ff9100',
		collaboration: '#fe5d63',
		infamous: '#ff1aff'
	}

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
		<Container columns='3fr 1fr' rows='4rem 2rem 8fr 4rem' areas='"title filter" "collectiontitles filter" "masks info" "masks back"'>

			<Title>Mask</Title>

			<CollectionTitles ref={scrollRef} onWheel={e => scrollHorizontalDiv(e, scrollRef)}>
				{
					Object.keys(collections).map((collection, i) => {
						return <CollectionTitle
							key={collection}
							color={colours[collections[collection][0].type]}
							onClick={() => scrollToCollection(i)}
						>{collection}</CollectionTitle>
					})
				}
			</CollectionTitles>

			<FilterContainer>
				<FilterTitle>Filters</FilterTitle>
				<FiltersWrapper>
					{
						Object.keys(colours).map(type => {
							return <FilterText
								key={type}
								color={colours[type]}
								onClick={() => dispatch(toggleMaskFilter(type))}
								typeFilter={filters[type]}
							>{type}</FilterText>
						})
					}
				</FiltersWrapper>
			</FilterContainer>

			<MaskContainer>
				{
					Object.keys(collections).map((collection, i) => {
						const masks = collections[collection]
						if (filters[masks[0].type]) return
						return <MaskCollection key={collection} ref={collectionRefs.current[i]}>
							<MaskCollectionTitle color={colours[masks[0].type]}>{collection}</MaskCollectionTitle>
							{
								masks.map(mask => {
									return <Mask
										onMouseEnter={() => setHoveredMask(mask)}
										onMouseLeave={() => setHoveredMask(null)}
										onMouseDown={() => {
											dispatch(changeMask(mask))
											history.push('/')
										}}
										src={`images/masks/${mask.image}.png`}
										key={mask.name}
									/>
								})
							}
						</MaskCollection>
					})
				}
			</MaskContainer>

			<InfoContainer>
				{
					hoveredMask && (
						<>
							<InfoTitle>{hoveredMask.name}</InfoTitle>
							<InfoDescription>{hoveredMask.description.join('\n\n')}</InfoDescription>
							<InfoUnlock color={colours[hoveredMask.type]}>{hoveredMask.unlock}</InfoUnlock>
							<InfoCost>{hoveredMask.cost}</InfoCost>
						</>
					)
				}
			</InfoContainer>

			<Back />

		</Container>
	)
}

export default MaskPage
