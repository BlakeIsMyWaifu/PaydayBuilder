import { changeMask } from 'actions/characterAction'
import Back from 'components/Back'
import Container from 'components/Container'
import data, { maskData } from 'data/character/masks'
import { useAppDispatch } from 'hooks'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { Info, InfoCost, InfoDescription, InfoName, InfoUnlock, Mask, MaskWrapper, Title } from './Mask-Elements'

const MaskPage: React.FC = () => {

	const [hoveredMask, setHoveredMask] = useState<maskData | null>()

	const dispatch = useAppDispatch()

	const history = useHistory()

	return (
		<Container columns='3fr 1fr' rows='4rem 8fr 4rem' areas='"title title" "masks info" "masks back"'>
			
			<Title>Mask</Title>

			<MaskWrapper>
				{
					data.map((mask, i) => {
						return <Mask
							onMouseEnter={() => setHoveredMask(mask)}
							onMouseLeave={() => setHoveredMask(null)}
							onMouseDown={() => {
								dispatch(changeMask(mask))
								history.push('/')
							}}
							src={`images/masks/${mask.imageColour}.png`}
							key={`mask-${mask.name}-${i}`}
						/>
					})
				}
			</MaskWrapper>

			<Info>
				{
					hoveredMask && (
						<>
							<InfoName>{hoveredMask.name}</InfoName>
							<InfoDescription>{hoveredMask.description}</InfoDescription>
							<InfoUnlock>{hoveredMask.unlock}</InfoUnlock>
							<InfoCost>{hoveredMask.cost}</InfoCost>
						</>
					)
				}
			</Info>

			<Back />

		</Container>
	)
}

export default MaskPage
