import { changeMask } from 'actions/characterAction'
import Back from 'components/Back'
import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/Info'
import data, { maskData } from 'data/character/masks'
import { useAppDispatch } from 'hooks'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { InfoCost, InfoUnlock, Mask, MaskWrapper, Title } from './Mask-Elements'

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

			<InfoContainer>
				{
					hoveredMask && (
						<>
							<InfoTitle>{hoveredMask.name}</InfoTitle>
							<InfoDescription>{hoveredMask.description.join('\n\n')}</InfoDescription>
							<InfoUnlock>{hoveredMask.unlock}</InfoUnlock>
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
