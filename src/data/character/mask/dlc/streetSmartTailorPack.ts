import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

export type StreetSmartTailorPackList =
	| 'Agent Black'
	| 'Agent Brown'
	| 'Bad Cabbie'
	| 'Cool Beans Black'
	| 'Cool Beans Green'
	| 'State Crime'

const streetSmartTailorPack: Record<StreetSmartTailorPackList, MaskData<StreetSmartTailorPackList, DlcCollectionList>> = {
	'Agent Black': {
		name: 'Agent Black',
		image: 'gentgla_dark', // ! wrong size
		description: [
			'Oh great, here comes Agent Black. This guy\'s a real freak. Electrode torture, piano wire strangulation, that\'s all him. The Agency only sets him loose when the body count is no longer a concern. That said, he\'s actually super sweet to the elderly. People are complicated, I guess.'
		],
		collection: 'Street Smart Tailor Pack',
		source: content['Street Smart Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A STREET SMART TAILOR PACK ITEM!',
		cost: ''
	},
	'Agent Brown': {
		name: 'Agent Brown',
		image: 'gentgla_brown', // ! wrong size
		description: [
			'When the Agency needs a lighter touch, they send in Agent Brown. He\'s the king of guy that offers you a cigarette before the interrogation. Real people, person, great sense of humor. He\'ll get you laughing so hard, you won\'t even notice his pistol until it\'s digging into your belly.'
		],
		collection: 'Street Smart Tailor Pack',
		source: content['Street Smart Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A STREET SMART TAILOR PACK ITEM!',
		cost: ''
	},
	'Bad Cabbie': {
		name: 'Bad Cabbie',
		image: 'flapcapban', // ! wrong size
		description: [
			'Suddenly, you decide that you\'re tired of driving idiots around for a living. You\'re in a quiet part of town, with some fat cat asshole sitting in your backseat. Probably has a thousand dollars cash in his pocket, easy. No one\'s around to stop you, and you remember there\'s a 9mm stashed in your glove compartment. Pull into an alley and collect your cab fare.'
		],
		collection: 'Street Smart Tailor Pack',
		source: content['Street Smart Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A STREET SMART TAILOR PACK ITEM!',
		cost: ''
	},
	'Cool Beans Black': {
		name: 'Cool Beans Black',
		image: 'hatgla_dark', // ! wrong size
		description: [
			'This is my beanie. There are many like it, but this one is mine. My beanie is my best friend. It is my life. I must master my beanie as I must master my life.'
		],
		collection: 'Street Smart Tailor Pack',
		source: content['Street Smart Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A STREET SMART TAILOR PACK ITEM!',
		cost: ''
	},
	'Cool Beans Green': {
		name: 'Cool Beans Green',
		image: 'hatgla_green', // ! wrong size
		description: [
			'You ever noticed that people who wear beanies are never NOT wearing beanies? I\'ve known a guy for ten years who wears a beanie like this, and I\'ve never seen the top of his head. Not once.'
		],
		collection: 'Street Smart Tailor Pack',
		source: content['Street Smart Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A STREET SMART TAILOR PACK ITEM!',
		cost: ''
	},
	'State Crime': {
		name: 'State Crime',
		image: 'bandcap_dark', // ! wrong size
		description: [
			'When you\'re robbing a gas station in Amarillo, this hat lets the cashier know their money\'s staying local.'
		],
		collection: 'Street Smart Tailor Pack',
		source: content['Street Smart Tailor Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A STREET SMART TAILOR PACK ITEM!',
		cost: ''
	}
}

export default streetSmartTailorPack