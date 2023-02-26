import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type DraganCharacterPackList =
	| 'Dragan'
	| 'Dragan Begins'

const draganCharacterPack: Record<DraganCharacterPackList, MaskData<DraganCharacterPackList, DlcCollectionList>> = {
	'Dragan': {
		name: 'Dragan',
		image: 'dragan',
		description: [
			'With a background like the one Dragan has, there\'s no surprise he aspires to greatness in the criminal underworld.',
			'His mask represents a lot of his own characteristics, with the clear resemblance to some of the original crew\'s masks that tells of his ability to infiltrate and blend in while still having some features that tells of his unending ruthlessness.',
			'The Croatian checker on the forehead serves as a reminder for both himself and his enemies to be aware that he is not your common western street thug.'
		],
		collection: 'Dragan Character Pack',
		source: content['Dragan Character Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A DRAGAN CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	'Dragan Begins': {
		name: 'Dragan Begins',
		image: 'dragan_begins',
		description: [
			'This is a clean version of Dragan\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Dragan Character Pack',
		source: content['Dragan Character Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A DRAGAN CHARACTER PACK ITEM!',
		cost: 'Free'
	}
}

export default draganCharacterPack