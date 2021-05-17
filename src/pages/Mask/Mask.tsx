import { changeMask } from 'actions/characterAction'
import Back from 'components/Back'
import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/Info'
import data, { maskData } from 'data/character/masks'
import { useAppDispatch } from 'hooks'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { CollectionTitle, InfoCost, InfoUnlock, Mask, MaskCollection, MaskContainer, Title } from './Mask-Elements'

interface collections {
	[key: string]: maskData[];
}

const MaskPage: React.FC = () => {

	const [hoveredMask, setHoveredMask] = useState<maskData | null>()

	const dispatch = useAppDispatch()

	const history = useHistory()

	const colours = {
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

	return (
		<Container columns='3fr 1fr' rows='4rem 8fr 4rem' areas='"title title" "masks info" "masks back"'>
			
			<Title>Mask</Title>

			<MaskContainer>
				{
					Object.keys(collections).map(collection => {
						const masks = collections[collection]
						return <MaskCollection key={collection}>
							<CollectionTitle color={colours[masks[0].type]}>{collection}</CollectionTitle>
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
