import Container from 'components/Container'
import DetectionRisk from 'components/DetectionRisk'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/elements/infoElements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName, LockedIcon } from 'components/elements/itemElements'
import ArmourStatsTable from 'components/Table/ArmourStatsTable'
import armours, { type ArmourData } from 'data/character/armours'
import { type NextPage } from 'next'
import { useState } from 'react'
import { useIsMobile } from 'state/settingsContext'
import { useCharacterStore } from 'state/useCharacterStore'
import { useSkillsStore } from 'state/useSkillsStore'

export const Armour: NextPage = () => {

	const equippedArmour = armours[useCharacterStore(state => state.armour)]
	const [selectedArmour, setSelectedArmour] = useState<ArmourData>(equippedArmour)

	const ironManUnlocked = useSkillsStore(state => state.trees.enforcer.Tank.upgrades['Iron Man']) === 'aced'

	const changeArmour = useCharacterStore(state => state.changeArmour)

	const equipArmourHandler = (): void => {
		if (selectedArmour.name === equippedArmour.name) return
		changeArmour(selectedArmour.name)
	}

	const isMobile = useIsMobile()

	return (
		<Container
			title='Armour'
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
					Object.values(armours).map(armour => {
						const locked = armour.name === 'Improved Combined Tactical Vest' && !ironManUnlocked
						return <Item
							key={armour.name}
							rowAmount={5}
							selected={armour.name === selectedArmour.name}
							onClick={() => armour.name === selectedArmour.name && !locked ? equipArmourHandler() : setSelectedArmour(armour)}
						>
							<ItemName>{armour.name}</ItemName>
							{armour.name === equippedArmour.name && <ItemEquipped />}
							{locked && <LockedIcon />}
							<ItemImage
								src={`/images/armours/${armour.name}.webp`}
								onMouseDown={event => event.preventDefault()}
								locked={locked}
							/>
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedArmour.name}</InfoTitle>
				<ArmourStatsTable selectedArmour={selectedArmour.name} equippedArmour={selectedArmour.name !== equippedArmour.name ? equippedArmour.name : undefined} />
				<InfoDescription>{selectedArmour.description.join('\n\n')}</InfoDescription>
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

Armour.getInitialProps = () => ({})

export default Armour
