import { ContentData, ContentRarity } from 'data/source/downloadableContent'
import { SourceData } from 'data/source/miscSources'

import collaboration, { CollaborationCollectionList, CollaborationMaskList } from './mask/collaboration'
import community, { CommunityCollectionList, CommunityMaskList } from './mask/community'
import dlc, { DlcCollectionList, DlcMaskList } from './mask/dlc'
import event, { EventCollectionList, EventMaskList } from './mask/event'
import infamous, { InfamousCollectionList, InfamousMaskList } from './mask/infamous'
import normal, { NormalCollectionList, NormalMaskList } from './mask/normal'

export type CategoryList = keyof typeof allMasks

export type AllMasks = Partial<Record<CategoryList, Category>>

export type Category<T extends string = string> = Record<T, Collection>

export interface Collection {
	id: number;
	masks: Record<string, MaskData>;
}

export interface MaskData<N extends MaskList = MaskList, C extends AllCollections = AllCollections> {
	name: N;
	image: string;
	description: string[];
	collection: C;
	source: ContentData | SourceData;
	rarity: ContentRarity;
	unlock: string;
	cost: string;
}

export type AllCollections =
	| CommunityCollectionList
	| NormalCollectionList
	| DlcCollectionList
	| EventCollectionList
	| CollaborationCollectionList
	| InfamousCollectionList

export type MaskList =
	| CommunityMaskList
	| NormalMaskList
	| DlcMaskList
	| EventMaskList
	| CollaborationMaskList
	| InfamousMaskList

export const allMasks = {
	community,
	normal,
	dlc,
	event,
	collaboration,
	infamous
} as const