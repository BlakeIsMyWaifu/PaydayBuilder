import Container from 'components/Container'
import Loadout from 'components/CrewLoadout'
import { InfoContainer, InfoTitle } from 'components/elements/infoElements'
import { type CrewAbilityList } from 'data/abilities/crewAbilities'
import { type CrewBoostsList } from 'data/abilities/crewBoosts'
import { type CharacterList } from 'data/character/characters'
import { type MaskList } from 'data/character/masks'
import { type NextPage } from 'next'
import { useAbilityStore } from 'state/useAbilitiesStore'
import styled from 'styled-components'

const LoadoutContainer = styled.div`
	grid-area: items;
	display: flex;
	flex-direction: column;
	gap: 8px;
`

export interface CrewData {
	mask: MaskList;
	character: CharacterList;
	outfit: null;
	weapon: number;
	ability: CrewAbilityList | null;
	boost: CrewBoostsList | null;
}

const CrewManagement: NextPage = () => {

	const crew = useAbilityStore(state => state.crewmanagement)

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
