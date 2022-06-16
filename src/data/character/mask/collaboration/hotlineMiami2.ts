import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { CollaborationCollectionList } from '../collaboration'

type HotlineMiami2List =
	| 'Alex'
	| 'Biker'
	| 'Corey'
	| 'Jake'
	| 'Richter'
	| 'Tony\'s Revenge'

const hotlineMiami2: Record<HotlineMiami2List, MaskData<HotlineMiami2List, CollaborationCollectionList>> = {
	'Alex': {
		name: 'Alex',
		image: 'alex',
		description: [
			'One half of a brother and sister duo, Alex. Like swans, they are fierce. Unlike swans, they wield chainsaws and SMG\'s. Like swans, they are closely bonded. Unlike swans, they have a penchant for slaughter.'
		],
		collection: 'Hotline Miami 2',
		source: content['Hotline Miami Mask Pack'],
		rarity: 'Collaboration',
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	},
	'Biker': {
		name: 'Biker',
		image: 'biker',
		description: [
			'When you\'re a thrill-seeker, and a risk-taker, and a live-for-the-moment kind of heister, it is important to have at least some measure of protection. That also goes if you are a meat-cleaver waving maniac.'
		],
		collection: 'Hotline Miami 2',
		source: content['Hotline Miami Mask Pack'],
		rarity: 'Collaboration',
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	},
	'Corey': {
		name: 'Corey',
		image: 'corey',
		description: [
			'When you\'re the most delicious lunch on the savannah, you have to be fast, agile and cunning if you\'re going to survive. Corey is all of these things. Zebras are also peaceful, gentle and herbivorous. Corey is none of these things.'
		],
		collection: 'Hotline Miami 2',
		source: content['Hotline Miami Mask Pack'],
		rarity: 'Collaboration',
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	},
	'Jake': {
		name: 'Jake',
		image: 'jake',
		description: [
			'There\'s no such thing as a good snake, but even among the deadly serpents the cobra is bad news. The broad hood, when seen, is a display of threat - so run. Its long fangs can pierce elephant skin - so run. And just a drop of its venom can fell a dozer - so... look, basically, when you see this, just run. Because they also spit.'
		],
		collection: 'Hotline Miami 2',
		source: content['Hotline Miami Mask Pack'],
		rarity: 'Collaboration',
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	},
	'Richter': {
		name: 'Richter',
		image: 'richter',
		description: [
			'Like the rat, Richter is a silent killer. It can make its way into just about anywhere - into the most secure banks and apartments. It can avoid detection when it wants, and, once there, spread death like a plague. It kills without remorse. Nothing personal.'
		],
		collection: 'Hotline Miami 2',
		source: content['Hotline Miami Mask Pack'],
		rarity: 'Collaboration',
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	},
	'Tony\'s Revenge': {
		name: 'Tony\'s Revenge',
		image: 'tonys_revenge',
		description: [
			'The near-perfect predator. Tigers are immensely strong, yet fast. They are brutal, yet patient. They can stalk silently, before exploding into violence. The perfect killing machine. Despite this, the tiger is in decline. Poachers prize the tiger penis in traditional medicine. So don\'t get taken alive.'
		],
		collection: 'Hotline Miami 2',
		source: content['Hotline Miami Mask Pack'],
		rarity: 'Collaboration',
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	}
}

export default hotlineMiami2