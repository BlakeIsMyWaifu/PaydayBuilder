import { changeMelee } from 'actions/weaponsAction'
import Back from 'components/Back'
import Container from 'components/Container'
import { Title, Wrapper } from 'components/Content'
import { InfoContainer, InfoTitle } from 'components/Info'
import data, { meleeData } from 'data/weapons/melees'
import { useAppDispatch } from 'hooks'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { WeaponIcon } from './Melee-Elements'

const Melee: React.FC = () => {

	const [hoveredMelee, setHoveredMelee] = useState<meleeData | null>(null)

	const dispatch = useAppDispatch()

	const history = useHistory()

	return (
		<Container columns='3fr 1fr' rows='4rem 8fr 4rem' areas='"title title" "wrapper info" "wrapper back"'>

			<Title>Melee</Title>

			<Wrapper>
				{
					data.map(melee => {
						return <WeaponIcon
							key={melee.name}
							src={`images/melees/${melee.image}.png`}
							onMouseEnter={() => setHoveredMelee(melee)}
							onMouseLeave={() => setHoveredMelee(null)}
							onMouseDown={() => {
								dispatch(changeMelee(melee))
								history.push('/')
							}}
						/>
					})
				}
			</Wrapper>

			<InfoContainer>
				{
					hoveredMelee && (
						<>
							<InfoTitle>{hoveredMelee.name}</InfoTitle>
						</>
					)
				}
			</InfoContainer>

			<Back />

		</Container>
	)
}

export default Melee
