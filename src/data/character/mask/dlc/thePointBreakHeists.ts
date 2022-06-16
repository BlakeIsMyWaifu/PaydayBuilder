import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

type ThePointBreakHeistsList =
	| 'Maui'
	| 'Oro'
	| 'Tane'
	| 'Tawhiri'

const thePointBreakHeists: Record<ThePointBreakHeistsList, MaskData<ThePointBreakHeistsList, DlcCollectionList>> = {
	'Maui': {
		name: 'Maui',
		image: 'maui',
		description: [
			'Exploring the Pacific \'Ring of Fire\' in his youth, Bodhi came to the following revelation: honoring oneself means honoring the myths. A myth that stuck with him was that of Maui. Like Bodhi, Maui was a dauntless champion of humankind, a trickster and adventurer.'
		],
		collection: 'The Point Break Heists',
		source: content['The Point Break Heists'],
		rarity: 'Paid',
		unlock: 'THIS IS A POINT BREAK HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Oro': {
		name: 'Oro',
		image: 'oro',
		description: [
			'It was exploring the Islands of French Polynesia, Bodhi encountered the disciples of the war-god Oro. The young adventurer quickly became enamored of this god, who valued the appreciation of beautiful crafts as much as the art of struggle.'
		],
		collection: 'The Point Break Heists',
		source: content['The Point Break Heists'],
		rarity: 'Paid',
		unlock: 'THIS IS A POINT BREAK HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Tane': {
		name: 'Tane',
		image: 'tane',
		description: [
			'Tane was the god of the forest who used his mighty strength to separate his parents, the earth and the sky. Legends also credit him with creating Tiki, the first man. Thus, he created the world as we know it, and the people within it.'
		],
		collection: 'The Point Break Heists',
		source: content['The Point Break Heists'],
		rarity: 'Paid',
		unlock: 'THIS IS A POINT BREAK HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Tawhiri': {
		name: 'Tawhiri',
		image: 'water_spirit',
		description: [
			'Brother of Tane, Tawhiri is the god of weather, most particularly violent storms and lightning. Bodhi experienced plenty of both, and it was during a particularly vicious explosion while reef-diving in Tuvalu that Bodhi gained a true appreciation for this powerful deity.'
		],
		collection: 'The Point Break Heists',
		source: content['The Point Break Heists'],
		rarity: 'Paid',
		unlock: 'THIS IS A POINT BREAK HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	}
}

export default thePointBreakHeists