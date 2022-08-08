import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

export type DragonPackList =
	| 'Laughing Dragon'
	| 'Mahakala'
	| 'Serenity'
	| 'Shouting Dragon'

const dragonPack: Record<DragonPackList, MaskData<DragonPackList, DlcCollectionList>> = {
	'Laughing Dragon': {
		name: 'Laughing Dragon',
		image: 'dragon01',
		description: [
			'Do dragons laugh? For Real? They\'re usually such cranky bastards, even if some of them have nice manners. Still, imagine you\'re on the receiving end of a heister wearing this, gunning at you with a big, fat hand-cannon.'
		],
		collection: 'Dragon Pack',
		source: content['Dragon Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A DRAGON PACK ITEM!',
		cost: 'Free'
	},
	'Mahakala': {
		name: 'Mahakala',
		image: 'daemon',
		description: [
			'There\'s probably a song based on the name of this mask out there somewhere. All those even syllables make for a catchy rhythm, don\'t they?'
		],
		collection: 'Dragon Pack',
		source: content['Dragon Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A DRAGON PACK ITEM!',
		cost: 'Free'
	},
	'Serenity': {
		name: 'Serenity',
		image: 'godess',
		description: [
			'The label on this says it\'s great for those situations when you\'re all stressed out and need a bit of Feng Shui to center yourself. But note the fine print: \'The manufacturer takes no responsibility for its use, misuse or resulting incarceration!\''
		],
		collection: 'Dragon Pack',
		source: content['Dragon Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A DRAGON PACK ITEM!',
		cost: 'Free'
	},
	'Shouting Dragon': {
		name: 'Shouting Dragon',
		image: 'dragon02',
		description: [
			'If the dragon is shouting, does that make the tiger roar? Usually, making a loud statement during a heist can be detrimental to its success. But you know, sometimes you just gotta roll with it because it\'s cool, so go ahead... treat yo\'self.'
		],
		collection: 'Dragon Pack',
		source: content['Dragon Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A DRAGON PACK ITEM!',
		cost: 'Free'
	}
}

export default dragonPack