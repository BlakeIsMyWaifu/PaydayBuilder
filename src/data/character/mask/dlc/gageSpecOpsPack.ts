import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

export type GageSpecOpsPackList =
	| 'Batshit Crazy'
	| 'A.W.O.L'
	| 'Bloody Bandana'
	| 'Dark Legion'

const gageSpecOpsPack: Record<GageSpecOpsPackList, MaskData<GageSpecOpsPackList, DlcCollectionList>> = {
	'Batshit Crazy': {
		name: 'Batshit Crazy',
		image: 'tng_cloaker',
		description: [
			'Somehow bending the laws of physics, the special unit of the WPD nicknamed the \'Cloaker\' is the bane of every bad guy trying to prove they can do things on their own. The first Cloaker is rumored to just have been a regular SWAT officer who nobody wanted to team up with. Might be because he was a fucked up killing machine with kung fu-kicks and bullets flying everywhere around him. He used excessive force almost always and left any combat tactic behind together with his unit. But he produced results, so the brass kept him on and made him train like minded individuals.',
			'Activate Night Vision Mode by holding down the Fire Mode button.'
		],
		collection: 'Gage Spec Ops Pack',
		source: content['Gage Spec Ops Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE SPEC OPS PACK ITEM!',
		cost: 'Unlocked through Side Jobs'
	},
	'A.W.O.L': {
		name: 'A.W.O.L',
		image: 'tng_cap',
		description: [
			'Highly classified reports mentions this soldier from an elite special operations force. Engaged in high profile military operations and on constant alert, he was living his life under extreme pressure and constant adrenaline highs. During a sensitive strategic operation, the evidence suggest that he turned on his own unit. But no one knows certain, since the massacre left no witnesses. The soldier went A.W.O.L. and has not been seen since that day.'
		],
		collection: 'Gage Spec Ops Pack',
		source: content['Gage Spec Ops Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE SPEC OPS PACK ITEM!',
		cost: 'Unlocked through Side Jobs'
	},
	'Bloody Bandana': {
		name: 'Bloody Bandana',
		image: 'tng_bandana',
		description: [
			'The identity of the soldier that wore this red headband is classified information. Leaked reports speak of a war veteran and former U.S. Army Special Forces soldier that was an expert in guerrilla tactics. His military comrades described him as tough, reckless and over the top aggressive. Based on how many high-ranking officers he tracked down and slaughtered, he may have major problem with authorities...'
		],
		collection: 'Gage Spec Ops Pack',
		source: content['Gage Spec Ops Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE SPEC OPS PACK ITEM!',
		cost: 'Unlocked through Side Jobs'
	},
	'Dark Legion': {
		name: 'Dark Legion',
		image: 'tng_zeal_swat_mask',
		description: [
			'He did not exist, not officially. Not since he came aboard ZEAL, the top-secret strike force. He was always the last resort, deployed when extreme violence was needed. He never held back. For every operation, he lost a bit of his humanity. For every operation, he gained an edge as an instrument of death. He did not separate right from wrong, not anymore. Only obeyed the orders from above. Just one shadow in the dark legion of secret super soldiers. One day, he woke up and could only think of killing others. He had finally found his true purpose.'
		],
		collection: 'Gage Spec Ops Pack',
		source: content['Gage Spec Ops Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE SPEC OPS PACK ITEM!',
		cost: 'Unlocked through Side Jobs'
	}
}

export default gageSpecOpsPack