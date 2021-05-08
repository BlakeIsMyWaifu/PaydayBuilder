import Back from 'components/Back'
import Container from 'components/Container'
import data, { maskData } from 'data/character/masks'
import React, { useState } from 'react'

import { Info, InfoCost, InfoDescription, InfoName, InfoUnlock, Mask, MaskWrapper, Title } from './Mask-Elements'

const MaskPage: React.FC = () => {

	const [hoveredMask, setHoveredMask] = useState<maskData | null>()

	return (
		<Container columns='3fr 1fr' rows='1fr 8fr 4rem' areas='"title title" "masks info" "masks back"'>
			
			<Title>Mask</Title>

			<MaskWrapper>
				{
					data.map(mask => {
						return <Mask
							onMouseEnter={() => setHoveredMask(mask)}
							onMouseLeave={() => setHoveredMask(null)}
							src={`images/masks/${mask.imageColour}.png`}
							key={`${mask.name}`}
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
