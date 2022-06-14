import { ContentRarity } from 'data/source/downloadableContent'

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

export type AllMasks = Partial<Record<CategoryList, Category<string>>>

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