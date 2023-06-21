import Container from 'components/Container'
import { InfoContainer, InfoTitle } from 'components/elements/infoElements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/elements/itemElements'
import CrewWeaponTable from 'components/Table/CrewWeaponTable'
import crewWeapons from 'data/abilities/crewWeapons'
import { type NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useIsLeftFacing } from 'state/settingsContext'
import { type CrewIndex, isValidCrewIndex, useAbilityStore } from 'state/useAbilitiesStore'
import { itemColours } from 'utils/colours'
import { typedObject } from 'utils/typedObject'

const CrewWeaponSlug: NextPage = () => {

	const router = useRouter()
	const { slug } = router.query
	const [crewIndex] = slug ?? []

	return isValidCrewIndex(crewIndex)
		? <CrewWeapon crewIndex={crewIndex} />
		: <Container>
			<h1>Invalid URL parameters</h1>
		</Container>
}

interface CrewWeaponProps {
	crewIndex: CrewIndex;
}

const CrewWeapon = ({ crewIndex }: CrewWeaponProps) => {

	const router = useRouter()

	const leftFacing = useIsLeftFacing()

	const equippedWeaponName = useAbilityStore(state => state.crewManagement[+crewIndex].weapon)
	const [selectedWeaponName, setSelectedWeaponName] = useState(equippedWeaponName)

	const changeCrewWeapon = useAbilityStore(state => state.changeCrewWeapon)

	const equipWeaponHandler = () => {
		if (selectedWeaponName === equippedWeaponName) return
		router.push('/crewmanagement').catch(console.error)
		changeCrewWeapon(crewIndex, selectedWeaponName)
	}

	return (
		<Container
			title='Crew Weapon'
			backLocation='/crewmanagement'
			mobileLayout={{
				rows: '3rem auto 156px 64px',
				areas: '"title reset" "items items" "info ." "info back"'
			}}>

			<ItemContainer>
				{
					typedObject.entries(crewWeapons).map(([weaponName, weaponData]) => {
						const isSelected = weaponName === selectedWeaponName
						return <Item
							key={weaponName}
							rowAmount={5}
							aspectRatio='2 / 1'
							selected={isSelected}
							onClick={() => isSelected ? equipWeaponHandler() : setSelectedWeaponName(weaponName)}
						>
							<ItemName colour={itemColours.Free}>{weaponName}</ItemName>
							{weaponName === equippedWeaponName && <ItemEquipped />}
							<ItemImage
								src={`/images/weapons/${weaponData.image}.webp`}
								leftFacing={leftFacing}
								aspectRatio='auto'
								onMouseDown={event => event.preventDefault()}
							/>
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedWeaponName}</InfoTitle>
				<CrewWeaponTable weaponName={selectedWeaponName} />
			</InfoContainer>

		</Container>
	)
}

export default CrewWeaponSlug