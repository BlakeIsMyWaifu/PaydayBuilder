import { changeThrowable } from 'actions/weaponsAction'
import Back from 'components/Back'
import Container from 'components/Container'
import { Item, ItemContainer, ItemEquiped, ItemImage, ItemName, Title } from 'components/Content'
import { InfoContainer, InfoDescription, InfoTitle, InfoUnlock } from 'components/Info'
import data, { throwableData } from 'data/weapons/throwables'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'
import { itemColours } from 'utils/colours'

const Throwable: React.FC = () => {

	const dispatch = useAppDispatch()

	const equipedThrowable = useAppSelector(state => state.weapons.throwable)

	const [selectedThrowable, setSelectedThrowable] = useState(equipedThrowable)

	const clickThrowable = (throwable: throwableData) => throwable.name === selectedThrowable.name ? dispatch(changeThrowable(throwable)) : setSelectedThrowable(throwable)

	return (
		<Container columns='3fr 1fr' rows='4rem 8fr 4rem' areas='"title title" "items info" "items back"'>

			<Title>Throwable</Title>

			<ItemContainer>
				{
					data.map(throwable => {
						return <Item key={throwable.name} width={192} height={96} selected={throwable.name === selectedThrowable.name}>
							<ItemName color={itemColours[throwable.sourceType]}>{throwable.name}</ItemName>
							{throwable.name === equipedThrowable.name && <ItemEquiped />}
							<ItemImage
								src={`images/throwables/${throwable.image}.png`}
								onMouseDown={() => clickThrowable(throwable)}
							/>
						</Item>
					})
				}
			</ItemContainer>

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
