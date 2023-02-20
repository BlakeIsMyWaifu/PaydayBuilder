import { InfoContainer, InfoDescription, InfoTitle } from 'components/Info/Info-Elements'
import { CopycatCards } from 'data/abilities/perks'
import { FC } from 'react'
import { useAbilityStore } from 'state/useAbilitiesStore'

import { PerkCardIndex } from '../PerkDeck'

interface PerkTabProps {
	hoveredCard: PerkCardIndex | null;
}

const PerkTab: FC<PerkTabProps> = ({ hoveredCard }) => {

	const perkDeck = useAbilityStore(state => state.perkDeck)

	return (
		<InfoContainer>
			<InfoTitle>{hoveredCard?.name}</InfoTitle>
			<InfoDescription>{hoveredCard?.description.join('\n\n')}</InfoDescription>
			{perkDeck === 'Copycat' && <Copycat cardIndex={hoveredCard?.index} />}
		</InfoContainer>
	)
}

interface CopycatProps {
	cardIndex?: number;
}

const Copycat: FC<CopycatProps> = ({ cardIndex }) => {

	const copycatCardValues = useAbilityStore(state => state.copycat)

	if (typeof cardIndex !== 'number') return null

	const card = CopycatCards[copycatCardValues[cardIndex / 2] + (cardIndex === 8 ? 4 : 0)]

	return !(cardIndex % 2) ? (
		<>
			<InfoTitle>{card.name}</InfoTitle>
			<InfoDescription>{card.description.join('\n\n')}</InfoDescription>
		</>
	) : null
}

export default PerkTab