import { Item } from 'components/Item-Elements'
import { ActionText, ActionsContainer } from 'components/ItemAction-Elements'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { blue } from 'utils/colours'

export const BuyContainer = styled(Item)`
	color: ${blue};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`

export const BuyText = styled.p`
	color: inherit;
	font-size: 1.2rem;
`

export const DetectionAndActionsContainer = styled(ActionsContainer)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const WeaponActionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`

interface WeaponActionTextProps {
	hide?: boolean;
}

export const WeaponActionText = styled(ActionText) <WeaponActionTextProps>`
	visibility: ${props => props.hide ? 'hidden' : 'visible'};
`

export const BlackmarketLink = styled(Link)`
	text-decoration: none;
`