import { type ContentData, type ContentRarity } from 'data/source/downloadableContent'
import { type SourceData } from 'data/source/miscSources'

import collaboration, { type CollaborationCollectionList, type CollaborationMaskList } from './mask/collaboration'
import community, { type CommunityCollectionList, type CommunityMaskList } from './mask/community'
import dlc, { type DlcCollectionList, type DlcMaskList } from './mask/dlc'
import event, { type EventCollectionList, type EventMaskList } from './mask/event'
import infamous, { type InfamousCollectionList, type InfamousMaskList } from './mask/infamous'
import normal, { type NormalCollectionList, type NormalMaskList } from './mask/normal'

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