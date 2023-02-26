import { type MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { type DlcCollectionList } from '../dlc'

export type ZagToysList =
	| 'The Almir'

const zagToys: Record<ZagToysList, MaskData<ZagToysList, DlcCollectionList>> = {
	'The Almir': {
		name: 'The Almir',
		image: 'ztm',
		description: [
			'This mask will instil',
			'The Almir is a mask that many would hesitate to unleash on a crew. that many would hesitate to unleash on a crew. Someone crazy enough to wear it would be capable of great deeds one day, only to go on a psychotic rampage the next. But sometimes, that\'s the kind of person you need to get you out of a sticky situation and avoid botching a heist completely.',
			'Knowing that such a person has an equal chance of bringing success or failure, would you dare bring an Almir into your crew?',
			';)'
		],
		collection: 'Zag Toys',
		source: source['Base Game'],
		rarity: 'Paid',
		unlock: 'THIS IS A ZAG TOYS ITEM!',
		cost: 'Free'
	}
}

export default zagToys