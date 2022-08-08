import styled from 'styled-components'

export const CollectionsContainer = styled.div`
	padding-top: 16px;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	overflow-x: hidden;
`

interface CollectionTitleProps {
	colour: string;
}

export const CollectionTitle = styled.div<CollectionTitleProps>`
	font-size: 1.2rem;
	cursor: pointer;
	color: ${props => props.colour};
	&:hover::before {
		content: '> ';
	}
`