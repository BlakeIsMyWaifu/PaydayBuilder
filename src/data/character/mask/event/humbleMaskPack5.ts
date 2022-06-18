import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { EventCollectionList } from '../event'

export type HumbleMaskPack5List =
	| 'Floating Guy'
	| 'Garreth'
	| 'The Judge'

const humbleMaskPack5: Record<HumbleMaskPack5List, MaskData<HumbleMaskPack5List, EventCollectionList>> = {
	'Floating Guy': {
		name: 'Floating Guy',
		image: 'damned',
		description: [
			'As you walk down the corridor you see this scary, but also somewhat slow guy. Hovering there, ominously. Hard to tell if he\'s a threat or just floating around a bit. But then. A blast breaks the silence and you cease to exist. So next time you meet Floating Guy: come prepared and don\'t take him lightly.'
		],
		collection: 'Humble Mask Pack 5',
		source: content['Humble Mask Pack 5'],
		rarity: 'Event',
		unlock: 'THIS IS A HUMBLE MASK PACK 5 ITEM!',
		cost: 'Free'
	},
	'Garreth': {
		name: 'Garreth',
		image: 'jig_01',
		description: [
			'In space you need a trusted companion. As everything from huge monsters on distant planets to space itself is deadly - you need an ally. Not just a hired gun. But instead a friend and a soldier that makes sure that you survive and others don\'t. Be happy that Garreth is on your team. Be happy that he helps you shepherd the herd'
		],
		collection: 'Humble Mask Pack 5',
		source: content['Humble Mask Pack 5'],
		rarity: 'Event',
		unlock: 'THIS IS A HUMBLE MASK PACK 5 ITEM!',
		cost: 'Free'
	},
	'The Judge': {
		name: 'The Judge',
		image: 'jig_02',
		description: [
			'\'Those pesky youngsters think they can just run around doing whatever they feel like. Don\'t they understand? I exist for a reason. One must obey me - my ruling and my saying. Escaping the world, just feeling free? What kind of life is that? Riding around on those yellow bird creations. No respect for the empire or the emperor. Disgraceful!\''
		],
		collection: 'Humble Mask Pack 5',
		source: content['Humble Mask Pack 5'],
		rarity: 'Event',
		unlock: 'THIS IS A HUMBLE MASK PACK 5 ITEM!',
		cost: 'Free'
	}
}

export default humbleMaskPack5