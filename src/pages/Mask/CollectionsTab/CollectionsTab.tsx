import { InfoContainer, InfoTitle } from 'components/Info/Info-Elements'
import { MaskData } from 'data/character/masks'
import { FC, MutableRefObject, RefObject } from 'react'
import { itemColours } from 'utils/colours'

import { CollectionTitle, CollectionsContainer } from './CollectionsTab-Elements'

interface CollectionsTabProps {
	collectionRefs: MutableRefObject<(HTMLDivElement | null)[] | RefObject<HTMLDivElement>[]>;
	collections: Record<string, Record<string, MaskData>> | undefined;
}

const CollectionsTab: FC<CollectionsTabProps> = ({ collectionRefs, collections }) => {
	return (
		<InfoContainer>
			<InfoTitle>Collections</InfoTitle>
			<CollectionsContainer>
				{
					collections && Object.keys(collections).map((collection, i) => {

						const { rarity } = Object.values(collections[collection])[0]

						return <CollectionTitle
							key={collection}
							colour={itemColours[rarity]}
							onClick={() => (collectionRefs.current[i] as HTMLDivElement)?.scrollIntoView({ behavior: 'smooth' })}
						>
							{collection}
						</CollectionTitle>
					})
				}
			</CollectionsContainer>
		</InfoContainer>
	)
}

export default CollectionsTab