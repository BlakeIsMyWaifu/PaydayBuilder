import { ContentData, ContentRarity } from 'data/source/downloadableContent'
import { SourceData } from 'data/source/miscSources'

import collaboration from './mask/collaboration'
import community from './mask/community'
import dlc from './mask/dlc'
import event from './mask/event'
import free from './mask/free'
import infamous from './mask/infamous'

export type CategoryList =
	| 'community'
	| 'free'
	| 'dlc'
	| 'event'
	| 'collaboration'
	| 'infamous'

export type AllMasks = Partial<Record<CategoryList, Category>>

export type Category<T extends string = string> = Record<T, Collection>

export interface Collection {
	id: number;
	masks: Record<string, MaskData>;
}

export interface MaskData<N extends string = string, C extends string = string> {
	name: N;
	image: string;
	description: string[];
	collection: C;
	source: ContentData | SourceData;
	rarity: ContentRarity;
	unlock: string;
	cost: string;
}

export const allMasks = {
	community,
	free,
	dlc,
	event,
	collaboration,
	infamous
} as const

//

//

const masks: Record<string, MaskData> = {} // LEGACY

export type MaskList = string // LEGACY

export default masks