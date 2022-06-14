import { ContentRarity } from 'data/source/downloadableContent'

import collaboration, { CollaborationCollectionList } from './mask/collaboration'
import community, { CommunityCollectionList } from './mask/community'
import dlc, { DlcCollectionList } from './mask/dlc'
import event, { EventCollectionList } from './mask/event'
import free, { FreeCollectionList } from './mask/free'
import infamous, { InfamousCollectionList } from './mask/infamous'

export interface AllMasks {
	community: Category<CommunityCollectionList>;
	free: Category<FreeCollectionList>;
	dlc: Category<DlcCollectionList>;
	event: Category<EventCollectionList>;
	collaboration: Category<CollaborationCollectionList>;
	infamous: Category<InfamousCollectionList>;
}

export type CategoryList = keyof AllMasks

export type AllMasksWeak = Partial<Record<CategoryList, Category<string>>>

export type Category<T extends string> = Record<T, Collection>

export interface Collection {
	id: number;
	masks: Record<string, MaskData>;
}
export interface MaskData {
	name: string;
	image: string;
	description: string[];
	collection: string;
	rarity: ContentRarity;
	unlock: string;
	cost: string;
}

export const allMasks: AllMasks = {
	community,
	free,
	dlc,
	event,
	collaboration,
	infamous
}

//

//

const masks: Record<string, MaskData> = {} // LEGACY

export type MaskList = string // LEGACY

export default masks