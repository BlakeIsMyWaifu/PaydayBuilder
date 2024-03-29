import { type PerkData } from 'data/abilities/perks'
import { type PerkCardIndex } from 'pages/perkdeck'
import { type Dispatch, type FC, type RefObject, type SetStateAction } from 'react'
import { useIsMobile } from 'state/settingsContext'
import { useAbilityStore } from 'state/useAbilitiesStore'
import { useWeaponsStore } from 'state/useWeaponsStore'
import styled from 'styled-components'
import { cornerCSS } from 'utils/corner'

const Container = styled.div`
	width: 100%;
	height: 120px;
	position: relative;
`

const Title = styled.p`
	font-size: 1.2rem;
	position: absolute;
	z-index: 20;
`

const Equipped = styled(Title)`
	top: 1.2rem;
`

const CardWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	margin-left: ${props => props.theme.isMobile ? '0' : '32px'};
`

interface CardProps {
	selected: boolean;
}

const Card = styled.div<CardProps>`
	height: 92px;
	min-width: 64px;
	position: relative;
	transform: ${props => props.selected ? `scale(${props.theme.isMobile ? '108' : '120'}%)` : 'none'};
	transition: transform 0.25s ease-in-out;
	&:hover {
		${cornerCSS}
	}
	`

interface CardBackgroundProps {
	selected: boolean;
}

const CardBackground = styled.img<CardBackgroundProps>`
	height: 100%;
	width: 100%;
	opacity: ${props => props.selected ? 1 : 0.5};
`

interface CardIconBaseProps {
	x: number;
	y: number;
}

export const CardIconBase = styled.div<CardIconBaseProps>`
	background-position-x: calc((${props => props.x}% / 192) * 100) !important;
	background-position-y: calc((${props => props.y}% / 1104) * 100) !important;
	background: url('/images/perks/perks.png') 0 0 no-repeat;
	background-size: 500% 2400%;
`

const CardIcon = styled(CardIconBase)`
	height: 48px;
	width: 48px;
	top: 24px;
	left: 8px;
	position: absolute;
`

const CardNumber = styled.p`
	position: absolute;
	top: 4px;
	width: 100%;
	text-align: center;
	color: black;
	text-shadow: none;
`

interface PerkProps {
	perk: PerkData;
	index: number;
	perkref: RefObject<HTMLDivElement>;
	setHoveredCard: Dispatch<SetStateAction<PerkCardIndex | null>>;
	selectedPerk: PerkData | null;
	setSelectedPerk: Dispatch<SetStateAction<PerkProps['selectedPerk']>>;
	equippedPerkData: PerkData;
}

const Perk: FC<PerkProps> = ({ perk, index, perkref, setHoveredCard, selectedPerk, setSelectedPerk, equippedPerkData }) => {

	const changePerkDeck = useAbilityStore(state => state.changePerkDeck)

	const copycatCards = useAbilityStore(state => state.copycat)
	const changeCopycatValues = useAbilityStore(state => state.changeCopycatValues)

	const changeThrowable = useWeaponsStore(state => state.changeThrowable)

	const equipPerkDeckHandler = () => {
		if (!selectedPerk || selectedPerk.name === equippedPerkData.name) return
		changePerkDeck(selectedPerk.name)
	}

	const perkDeckClickHandler = () => {
		if (selectedPerk?.name !== perk.name) return setSelectedPerk(perk)
		if (perk.throwable || equippedPerkData.throwable) {
			const throwable = perk.throwable ? perk.throwable : 'Frag Grenade'
			changeThrowable(throwable)
		}
		equipPerkDeckHandler()
	}

	const isMobile = useIsMobile()

	const cardClickHandler = (button: number, cardIndex: number) => {
		if (isMobile) {
			setHoveredCard({ ...perk.cards[cardIndex], index: cardIndex })
		}

		if (perk.name !== 'Copycat' || selectedPerk?.name !== 'Copycat' || equippedPerkData.name !== 'Copycat' || cardIndex % 2) return
		changeCopycatValues(cardIndex / 2, button ? 'decrement' : 'increment')
	}

	return (
		<Container ref={perkref}>

			<Title>{perk.name}</Title>
			<Equipped>{perk.name === equippedPerkData.name && '(EQUIPPED)'}</Equipped>

			<CardWrapper onClick={perkDeckClickHandler}>
				{
					perk.cards.map((card, i) => {
						if (isMobile && i % 2) return null
						const x = ~~((i + 1) / 2) * 48
						const y = i % 2 ? 0 : (index + 1) * 48
						const isSelected = perk.name === selectedPerk?.name
						return <Card
							key={`${perk.name}-${card.name}`}
							onMouseOver={() => setHoveredCard({ ...card, index: i })}
							onMouseLeave={() => setHoveredCard(null)}
							onMouseDown={event => cardClickHandler(event.button, i)}
							onContextMenu={event => event.preventDefault()}
							selected={isSelected}>
							<CardBackground
								src='/images/perks/card.png'
								onMouseDown={event => event.preventDefault()}
								selected={isSelected}
							/>
							<CardIcon x={x} y={y} />
							{perk.name === 'Copycat' && !(i % 2) && <CardNumber>{copycatCards[i / 2] + 1}/{i === 8 ? 22 : 4}</CardNumber>}
						</Card>
					})
				}
			</CardWrapper>

		</Container>
	)
}

export default Perk
