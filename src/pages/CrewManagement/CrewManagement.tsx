import Container from 'components/Container'
import { InfoContainer, InfoTitle } from 'components/Info/Info-Elements'
import { CrewAbilityList } from 'data/abilities/crewAbilities'
import { CrewBoostsList } from 'data/abilities/crewBoosts'
import { CharacterList } from 'data/character/characters'
import { MaskList } from 'data/character/masks'
import { useAppSelector } from 'hooks/reduxHooks'
import React from 'react'

import { LoadoutContainer } from './CrewManagement-Elements'
import Loadout from './Loadout'

export interface CrewData {
	mask: MaskList;
	character: CharacterList;
	outfit: null;
	weapon: number;
	ability: CrewAbilityList | null;
	boost: CrewBoostsList | null;
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
