import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type TheButchersBBQPackList =
	| 'Firefighter\'s Helmet'
	| 'Graug'
	| 'The Chef'
	| 'The Gas Mask'

const theButchersBBQPack: Record<TheButchersBBQPackList, MaskData<TheButchersBBQPackList, DlcCollectionList>> = {
	'Firefighter\'s Helmet': {
		name: 'Firefighter\'s Helmet',
		image: 'firemask',
		description: [
			'The crew may show scant respect to the police authorities, but they have huge respect for the men and women that clean up the burning messes left in their wake. This mask is a tribute to their efforts.'
		],
		collection: 'The Butcher\'s BBQ Pack',
		source: content['The Butcher\'s BBQ Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A BBQ WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Graug': {
		name: 'Graug',
		image: 'firedemon',
		description: [
			'The head of the legendary Graug. Towering beings of fire and smoking darkness, bound in blackened iron mail. Shaped like a man, but horned and visaged like a cruel demon. Body consumed by a furnace heat, hotter than Hell itself. Knows all the best tunes.'
		],
		collection: 'The Butcher\'s BBQ Pack',
		source: content['The Butcher\'s BBQ Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A BBQ WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'The Chef': {
		name: 'The Chef',
		image: 'chef_hat',
		description: [
			'Whether you\'re a line cook flipping patties at a roadside diner, or an itamae dissecting toadfish at a $1000-a-table joint, this hat means one thing: you\'re the chef. '
		],
		collection: 'The Butcher\'s BBQ Pack',
		source: content['The Butcher\'s BBQ Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A BBQ WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'The Gas Mask': {
		name: 'The Gas Mask',
		image: 'gasmask',
		description: [
			'The gas mask may seem like it belongs to the wars of an older era, but it is a crucial piece of equipment on the urban battlefield, where gas can still be deployed. Also, gives you a cool, wheezy breathing sound.'
		],
		collection: 'The Butcher\'s BBQ Pack',
		source: content['The Butcher\'s BBQ Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A BBQ WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	}
}

export default theButchersBBQPack