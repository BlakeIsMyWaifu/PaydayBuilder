import styled from 'styled-components'

export const SkillsContainer = styled.div`
	width: calc(100% - 24px);
	height: calc(100% - 64px);
	padding-left: 12px;
	padding-top: 32px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const SkillWrapper = styled.div`
	width: calc(20% - 12px);
	height: 100%;
	display: flex;
	flex-direction: column;
`

export const SkillsCard = styled.div`
	width: 100%;
	height: clamp(64px, 50%, 128px);
	background-color: #fff;
	border-radius: 6px;
`

export interface SkillsAmountProps {
	colour: string;
}

export const SkillsAmount = styled.h1<SkillsAmountProps>`
	font-size: 1.5rem;
	text-align: center;
	color: ${props => props.colour};
`