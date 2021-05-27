import { changeThrowable } from 'actions/weaponsAction'
import Back from 'components/Back'
import Container from 'components/Container'
import { Title, Wrapper } from 'components/Content'
import { InfoContainer, InfoDescription, InfoTitle, InfoUnlock } from 'components/Info'
import data, { throwableData } from 'data/weapons/throwables'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'
import { itemColours } from 'utils/colours'

import { EquipedLabel, IconWrapper, NameLabel, ThrowableIcon } from './Throwable-Elements'

const Throwable: React.FC = () => {

	const dispatch = useAppDispatch()

	const equipedThrowable = useAppSelector(state => state.weapons.throwable)

	const [selectedThrowable, setSelectedThrowable] = useState(equipedThrowable)

	const clickThrowable = (throwable: throwableData) => throwable.name === selectedThrowable.name ? dispatch(changeThrowable(throwable)) : setSelectedThrowable(throwable)

	return (
		<Container columns='3fr 1fr' rows='4rem 8fr 4rem' areas='"title title" "wrapper info" "wrapper back"'>

			<Title>Throwable</Title>

			<Wrapper>
				{
					data.map(throwable => {
						return <IconWrapper key={throwable.name}>
							{
								throwable.name === equipedThrowable.name && <EquipedLabel>Equiped</EquipedLabel>
							}
							<NameLabel color={itemColours[throwable.sourceType]}>{throwable.name}</NameLabel>
							<ThrowableIcon
								src={`images/throwables/${throwable.image}.png`}
								selected={throwable.name === selectedThrowable.name}
								onMouseDown={() => clickThrowable(throwable)}
								/>
						</IconWrapper>
					})
				}
			</Wrapper>

			<InfoContainer>
				<InfoTitle>{selectedThrowable.name}</InfoTitle>
				<InfoDescription>{selectedThrowable.description.join('\n\n')}</InfoDescription>
				<InfoUnlock color={itemColours[selectedThrowable.sourceType]}>{selectedThrowable.source}</InfoUnlock>
			</InfoContainer>

			<Back />

		</Container>
	)
}

export default Throwable
