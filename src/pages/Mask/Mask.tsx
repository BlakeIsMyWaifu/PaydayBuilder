import Back from 'components/Back'
import Container from 'components/Container'
import React from 'react'

import { Info, MaskWrapper, Title } from './Mask-Elements'

const Mask: React.FC = () => {
	return (
		<Container columns='3fr 1fr' rows='1fr 8fr 4rem' areas='"title title" "masks info" "masks back"'>
			
			<Title>Mask</Title>

			<MaskWrapper>
				
			</MaskWrapper>

			<Info>

			</Info>

			<Back />

		</Container>
	)
}

export default Mask
