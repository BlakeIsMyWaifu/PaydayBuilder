import { InfoContainer, InfoTitle } from 'components/Info/Info-Elements'
import { MaskData } from 'data/character/masks'
import React, { Fragment } from 'react'
import { itemColours } from 'utils/colours'

import { CollectionTitle, CollectionsContainer } from './CollectionsTab-Elements'

interface CollectionsTabProps {
	selectedTab: string;
	collectionRefs: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>;
	collections: Record<string, MaskData[]>;
}

const CollectionsTab: React.FC<CollectionsTabProps> = ({ selectedTab, collectionRefs, collections }) => {
	return (
		<InfoContainer>
			<InfoTitle>Collections</InfoTitle>
			<CollectionsContainer>
				{
					Object.keys(collections).map((collection, i) => {
						if (selectedTab !== collections[collection][0].rarity && selectedTab !== 'All') return <Fragment key={collection}></Fragment>
						return <CollectionTitle
							key={collection}
							colour={itemColours[collections[collection][0].rarity]}
							onClick={() => collectionRefs.current[i].current?.scrollIntoView({ behavior: 'smooth' })}
						>{collection}</CollectionTitle>
					})
				}
			</CollectionsContainer>
		</InfoContainer>
	)
}

export default CollectionsTab