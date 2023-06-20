import { InfoContainer, InfoTitle } from 'components/elements/infoElements'
import { type Category } from 'data/character/masks'
import { type FC, type MutableRefObject, type RefObject } from 'react'
import styled from 'styled-components'
import { itemColours } from 'utils/colours'

const CollectionsContainer = styled.div`
	padding-top: 16px;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	overflow-x: hidden;
`

interface CollectionTitleProps {
	colour: string;
}

const CollectionTitle = styled.div<CollectionTitleProps>`
	font-size: 1.2rem;
	cursor: pointer;
	color: ${props => props.colour};
	&:hover::before {
		content: '> ';
	}
`

interface CollectionsTabProps {
	collectionRefs: MutableRefObject<(HTMLDivElement | null)[] | RefObject<HTMLDivElement>[]>;
	collections: Category | undefined;
}

const CollectionsTab: FC<CollectionsTabProps> = ({ collectionRefs, collections }) => {
	return (
		<InfoContainer>
			<InfoTitle>Collections</InfoTitle>
			<CollectionsContainer>
				{
					collections && Object.keys(collections).map((collectionTitle, i) => {

						const { rarity } = Object.values(collections[collectionTitle].masks)[0]
						const title = collectionTitle.split('?').at(-1)

						return <CollectionTitle
							key={`${rarity}?${collectionTitle}`}
							colour={itemColours[rarity]}
							onClick={() => (collectionRefs.current[i] as HTMLDivElement)?.scrollIntoView({ behavior: 'smooth' })}
						>
							{title}
						</CollectionTitle>
					})
				}
			</CollectionsContainer>
		</InfoContainer>
	)
}

export default CollectionsTab