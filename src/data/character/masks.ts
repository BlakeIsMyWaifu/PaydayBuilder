import { ContentRarity } from 'data/source/downloadableContent'

import collaboration from './mask/collaboration'
import community from './mask/community'
import dlc from './mask/dlc'
import event from './mask/event'
import infamous from './mask/infamous'

export type MaskList = string

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
	dlc,
	event,
	collaboration,
	infamous
}

const masks: Record<string, MaskData> = {}

export default masks