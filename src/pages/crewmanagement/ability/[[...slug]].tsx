import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/elements/infoElements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/elements/itemElements'
import crewAbilities from 'data/abilities/crewAbilities'
import { type NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { type CrewIndex, isValidCrewIndex, useAbilityStore } from 'state/useAbilitiesStore'
import { itemColours } from 'utils/colours'
import { typedObject } from 'utils/typedObject'

const CrewAbilitySlug: NextPage = () => {

	const router = useRouter()
	const { slug } = router.query
	const [crewIndex] = slug ?? []

	return isValidCrewIndex(crewIndex)
		? <CrewAbility crewIndex={crewIndex} />
		: <Container>
			<h1>Invalid URL parameters</h1>
		</Container>
}

interface CrewAbilityProps {
	crewIndex: CrewIndex;
}

const CrewAbility = ({ crewIndex }: CrewAbilityProps) =>  {

	const router = useRouter()

	const equippedAbilityName = useAbilityStore(state => state.crewManagement[+crewIndex].ability)
	const [selectedAbilityName, setSelectedAbilityName] = useState(equippedAbilityName)

	const changeCrewAbility = useAbilityStore(state => state.changeCrewAbility)

	const equipAbilityHandler = () => {
		if (selectedAbilityName === equippedAbilityName) return
		router.push('/crewmanagement').catch(console.error)
		changeCrewAbility(crewIndex, selectedAbilityName)
	}

	return (
		<Container title='Crew Ability'>

			<ItemContainer>
				{
					typedObject.keys(crewAbilities).map(abilityName => {
						const isSelected = abilityName === selectedAbilityName
						return <Item
							key={abilityName}
							rowAmount={4}
							selected={isSelected}
							onClick={() => isSelected ? equipAbilityHandler(): setSelectedAbilityName(abilityName)}
						>
							<ItemName colour={itemColours.Free}>{abilityName}</ItemName>
							{abilityName === equippedAbilityName && <ItemEquipped />}
							<ItemImage
								src={`/images/crew/abilities/${abilityName}.webp`}
								onMouseDown={event => event.preventDefault()}
							/>
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedAbilityName}</InfoTitle>
				<InfoDescription>{crewAbilities[selectedAbilityName]}</InfoDescription>
			</InfoContainer>

		</Container>
	)
}

export default CrewAbilitySlug