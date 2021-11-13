import Container from 'components/Container'
import { InfoContainer, InfoTitle } from 'components/Info'
import { CrewAbility } from 'data/abilities/crewAbilities'
import { CrewBoost } from 'data/abilities/crewBoosts'
import { CharacterData } from 'data/character/characters'
import { MaskData } from 'data/character/masks'
import { WeaponData } from 'data/weapons/guns/weaponTypes'
import { useAppSelector } from 'hooks'
import React from 'react'

import { LoadoutContainer } from './CrewManagement-Elements'
import Loadout from './Loadout/Loadout'

export interface CrewData {
	mask: MaskData;
	character: CharacterData;
	outfit: null;
	weapon: WeaponData;
	ability: CrewAbility | null;
	boost: CrewBoost | null;
}

const CrewManagement: React.FC = () => {

	const crew = useAppSelector(state => state.abilities.crewmanagement)

	return (
		<Container title='Crew Management'>

			<LoadoutContainer>
				<Loadout data={crew[0]} index={1} />
				<Loadout data={crew[1]} index={2} />
				<Loadout data={crew[2]} index={3} />
			</LoadoutContainer>

			<InfoContainer>
				<InfoTitle>Work in progress</InfoTitle>
			</InfoContainer>
		</Container>
	)
}

export default CrewManagement
