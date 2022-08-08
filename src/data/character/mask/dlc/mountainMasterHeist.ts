import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

export type MountainMasterHeistList =
	| 'Mountain Master Crown'

const mountainMasterHeist: Record<MountainMasterHeistList, MaskData<MountainMasterHeistList, DlcCollectionList>> = {
	'Mountain Master Crown': {
		name: 'Mountain Master Crown',
		image: 'yufuhelmet',
		description: [
			'Wang was a formidable fire-spewing foe indeed, and this hand-forged crown of the Mountain Master will serve as an impressive symbol of your victory.'
		],
		collection: 'Mountain Master Heist',
		source: content['Mountain Master Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A MOUNTAIN MASTER HEIST DLC ITEM!',
		cost: 'Unlocked through Achievement'
	}
}

export default mountainMasterHeist