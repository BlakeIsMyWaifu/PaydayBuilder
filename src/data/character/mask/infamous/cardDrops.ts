import { MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { InfamousCollectionList } from '../infamous'

type CardDropsList =
	| 'Anonymous'
	| 'Chains'
	| 'Chains Begins'
	| 'Cthulhu'
	| 'Dallas'
	| 'Dallas Begins'
	| 'Hoxton'
	| 'Hoxton Begins'
	| 'Dillinger Death Mask, The'
	| 'Grin, The'
	| 'Wolf'
	| 'Wolf Begins'

const cardDrops: Record<CardDropsList, MaskData<CardDropsList, InfamousCollectionList>> = {
	'Anonymous': {
		name: 'Anonymous',
		image: 'anonymous',
		description: [
			'Don the mask, become anonymous and do as you wish.',
			'Do it because you mean it, do it because you were told to, or do it for the lulz.',
			'Do all the things that regular society will not allow you. Like robbing a bank.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$45,000'
	},
	'Chains': {
		name: 'Chains',
		image: 'chains',
		description: [
			'The mask of Chains.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$48,750'
	},
	'Chains Begins': {
		name: 'Chains Begins',
		image: 'chains_clean',
		description: [
			'This is a clean version of the iconic Chains mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$61,250'
	},
	'Cthulhu': {
		name: 'Cthulhu',
		image: 'cthulhu',
		description: [
			'A mask with a hideous appearance, the very face of terror.',
			'They say that an evil beast has many names. That must be why this beast is known as Tulu, Clulu, Clooloo, Cthulu, C\'thulhu, Cighulu, Cathulu, C\'thlu among other names,',
			'Part human, part octopus and part dragon, this is one of the greatest evils known to man.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$55,000'
	},
	'Dallas': {
		name: 'Dallas',
		image: 'dallas',
		description: [
			'The mask that everyone fears.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$48,750'
	},
	'Dallas Begins': {
		name: 'Dallas Begins',
		image: 'dallas_clean',
		description: [
			'This is a clean version of the iconic Dallas mask,before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$67,500'
	},
	'Hoxton': {
		name: 'Hoxton',
		image: 'hoxton',
		description: [
			'The mask of Hoxton.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$48,750'
	},
	'Hoxton Begins': {
		name: 'Hoxton Begins',
		image: 'hoxton_clean',
		description: [
			'This is a clean version of the iconic Hoxton mask,before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$61,250'
	},
	'Dillinger Death Mask, The': {
		name: 'Dillinger Death Mask, The',
		image: 'dillinger_death_mask',
		description: [
			'John Herbert Dillinger was a famous American bank robber.',
			'His gang robbed two dozen banks and even four police stations.',
			'Dillinger himself escaped jail twice and was widely known as one of the meanest motherfuckers in the depression-era United States.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$61,250'
	},
	'Grin, The': {
		name: 'Grin, The',
		image: 'grin',
		description: [
			'There once was a man and his brother.',
			'Together, they owned a successful company.',
			'One day, the man and his brother temporarily only had one client. The client got cold feet and wanted out. Rather than simply pulling out and having to pay a fine for breach of contract, the client starved the man and his brother\'s company to death.',
			'The Man and his brother lost everything, and it is said that this mask was the very image of the man\'s facial expression the day that he went mad.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$55,000'
	},
	'Wolf': {
		name: 'Wolf',
		image: 'wolf',
		description: [
			'The mask of Wolf.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$48,750'
	},
	'Wolf Begins': {
		name: 'Wolf Begins',
		image: 'wolf_clean',
		description: [
			'This is a clean version of the iconic Wolf mask,before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Card Drops',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$61,250'
	}
}

export default cardDrops