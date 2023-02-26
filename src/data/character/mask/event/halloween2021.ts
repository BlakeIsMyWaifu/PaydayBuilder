import { type MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { type EventCollectionList } from '../event'

export type Halloween2021List =
	| 'Boney Black Top'
	| 'Deadhead Blues'
	| 'Red Dead Bonehead Fred'

const halloween2021: Record<Halloween2021List, MaskData<Halloween2021List, EventCollectionList>> = {
	'Boney Black Top': {
		name: 'Boney Black Top',
		image: 'tophatske',
		description: [
			'Any well-dressed skeleton needs a good hat to complete his or her look. The bones are in vogue, and black is the color. Heist in 18th century style, all October long.'
		],
		collection: 'Halloween 2021',
		source: source['Base Game'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN 2021 ITEM!',
		cost: ''
	},
	'Deadhead Blues': {
		name: 'Deadhead Blues',
		image: 'tophatskeblue',
		description: [
			'Feeling down? Got a heisting gig down at the bayou? Blue is the way to go. That skeletal grin will keep \'em running away while you steal all the loot in sight!'
		],
		collection: 'Halloween 2021',
		source: source['Base Game'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN 2021 ITEM!',
		cost: ''
	},
	'Red Dead Bonehead Fred': {
		name: 'Red Dead Bonehead Fred',
		image: 'tophatskered',
		description: [
			'Getting ready for another glorious heist, but find yourself surrounded by roaring hellapalooza demon-wannabes? Put this on, then just stand there and look at them. Guaranteed to scare the living socks out of kids and cops alike!'
		],
		collection: 'Halloween 2021',
		source: source['Base Game'],
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN 2021 ITEM!',
		cost: ''
	}
}

export default halloween2021