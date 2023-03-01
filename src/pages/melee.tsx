import Container from 'components/Container'
import DetectionRisk from 'components/DetectionRisk'
import { InfoContainer, InfoDescription, InfoTitle, InfoUnlock } from 'components/elements/infoElements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/elements/itemElements'
import MeleeStatsTable from 'components/Table/MeleeStatsTable'
import melees from 'data/weapons/melees'
import { type NextPage } from 'next'
import { useState } from 'react'
import { useIsLeftFacing, useIsMobile } from 'state/settingsContext'
import { useWeaponsStore } from 'state/useWeaponsStore'
import { itemColours } from 'utils/colours'

export const Melee: NextPage = () => {

	const equippedMelee = melees[useWeaponsStore(state => state.melee)]
	const [selectedMelee, setSelectedMelee] = useState(equippedMelee)

	const changeMelee = useWeaponsStore(state => state.changeMelee)

	const leftFacing = useIsLeftFacing()

	const equipMeleeHander = (): void => {
		if (selectedMelee.name === equippedMelee.name) return
		changeMelee(selectedMelee.name)
	}

	const isMobile = useIsMobile()

	return (
		<Container
			title='Melee'
			desktopLayout={{
				rows: '4rem 8fr 120px 4rem',
				areas: '"title title" "items info" "items drisk" "items back"'
			}}
			mobileLayout={{
				rows: '4rem auto 106px 64px',
				areas: '"title title" "items items" "info drisk" "info back"'
			}}
		>

			<ItemContainer>
				{
					Object.values(melees).map(melee => {
						return <Item
							key={melee.name}
							rowAmount={8}
							selected={melee.name === selectedMelee.name}
							onClick={() => melee.name === selectedMelee.name ? equipMeleeHander() : setSelectedMelee(melee)}
						>
							<ItemName colour={itemColours[melee.source.rarity]}>{melee.name}</ItemName>
							{melee.name === equippedMelee.name && <ItemEquipped />}
							<ItemImage
								src={`/images/melees/${melee.image}.webp`}
								leftFacing={leftFacing}
								aspectRatio='auto'
								onMouseDown={event => event.preventDefault()}
							/>
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedMelee.name}</InfoTitle>
				<MeleeStatsTable selectedMelee={selectedMelee.name} equippedMelee={selectedMelee.name !== equippedMelee.name ? equippedMelee.name : undefined} />
				<InfoUnlock colour={itemColours[selectedMelee.source.rarity]}>{selectedMelee.source.name}</InfoUnlock>
				<InfoDescription>{selectedMelee.description}</InfoDescription>
			</InfoContainer>

			<DetectionRisk
				flexDirection='row'
				corner={true}
				text={!isMobile}
				size={isMobile ? 64 : 96}
			/>

		</Container>
	)
}

Melee.getInitialProps = () => ({})

export default Melee
