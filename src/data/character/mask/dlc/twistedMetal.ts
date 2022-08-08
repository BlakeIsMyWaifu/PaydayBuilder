import { MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { DlcCollectionList } from '../dlc'

export type TwistedMetalList =
	| 'Sweettooth'

const twistedMetal: Record<TwistedMetalList, MaskData<TwistedMetalList, DlcCollectionList>> = {
	'Sweettooth': {
		name: 'Sweettooth',
		image: 'Sweettooth',
		description: [
			'Sweet Tooth, real name Marcus \'Needles\' Kane is a character from the Twisted Metal video game series. Sweet Tooth is best known for being a killer clown that drives a combat ice cream truck.',
			'It\'s said that he once had escaped from a mental institution. He now leads a life of crime.'
		],
		collection: 'Twisted Metal',
		source: source['Base Game'],
		rarity: 'Paid',
		unlock: '',
		cost: '$10,250'
	}
}

export default twistedMetal