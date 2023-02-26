import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type JohnWickHeistsPackList =
	| 'Lady Liberty'
	| 'Captain'
	| 'Bird of Prey'
	| 'Sailor'

const johnWickHeistsPack: Record<JohnWickHeistsPackList, MaskData<JohnWickHeistsPackList, DlcCollectionList>> = {
	'Lady Liberty': {
		name: 'Lady Liberty',
		image: 'spa_04',
		description: [
			'Liberty. Liberty for all those heisters that have fallen and been sent to prison. Liberty for all that gold which sits sadly in the dark basement vaults of banks. Liberty for the spirit of enterprise, the will to take what you want, the rule of the gun. Liberty for those seeking a bigger PAYDAY.'
		],
		collection: 'John Wick Heists Pack',
		source: content['John Wick Heists'],
		rarity: 'Paid',
		unlock: 'THIS IS A JOHN WICK HEISTS PACK ITEM!',
		cost: 'Free'
	},
	'Captain': {
		name: 'Captain',
		image: 'spa_01',
		description: [
			'Captain on the bridge! Guide your crew safely through the banks, and a favourite wind will lead you to great adventures. Strike the coast and take their treasure, then disappear over the horizon.'
		],
		collection: 'John Wick Heists Pack',
		source: content['John Wick Heists'],
		rarity: 'Paid',
		unlock: 'THIS IS A JOHN WICK HEISTS PACK ITEM!',
		cost: 'Free'
	},
	'Bird of Prey': {
		name: 'Bird of Prey',
		image: 'spa_03',
		description: [
			'Soar high, swoop down and strike your prey with merciless, deadly claws. Then fly home to your lofty nest, enjoying the spoils of your hunt. You are the apex predator and you shall devour it all.'
		],
		collection: 'John Wick Heists Pack',
		source: content['John Wick Heists'],
		rarity: 'Paid',
		unlock: 'THIS IS A JOHN WICK HEISTS PACK ITEM!',
		cost: 'Free'
	},
	'Sailor': {
		name: 'Sailor',
		image: 'spa_02',
		description: [
			'Sail on the treasure fleet - climb the rigging and keep an eye out for pursuing ships as you scour the sea for sunken gold. If they catch up with you, abandon ship like the rat you are - but don\'t forget to bring the gold.'
		],
		collection: 'John Wick Heists Pack',
		source: content['John Wick Heists'],
		rarity: 'Paid',
		unlock: 'THIS IS A JOHN WICK HEISTS PACK ITEM!',
		cost: 'Free'
	}
}

export default johnWickHeistsPack