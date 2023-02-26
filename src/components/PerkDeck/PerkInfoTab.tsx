import { InfoContainer, InfoDescription, InfoTitle } from 'components/elements/infoElements'
import { CopycatCards } from 'data/abilities/perks'
import { type PerkCardIndex } from 'pages/perkdeck'
import { type FC } from 'react'
import { useAbilityStore } from 'state/useAbilitiesStore'

interface PerkTabProps {
	hoveredCard: PerkCardIndex | null;
}

const PerkInfoTab: FC<PerkTabProps> = ({ hoveredCard }) => {

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

export default PerkInfoTab