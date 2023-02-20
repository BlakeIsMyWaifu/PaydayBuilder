import { InfoContainer, InfoTitle } from 'components/Info/Info-Elements'
import { Category } from 'data/character/masks'
import { FC, MutableRefObject, RefObject } from 'react'
import { itemColours } from 'utils/colours'

import { CollectionTitle, CollectionsContainer } from './CollectionsTab-Elements'

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
							key={collectionTitle}
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