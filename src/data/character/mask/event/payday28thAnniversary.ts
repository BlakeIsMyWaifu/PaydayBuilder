import { MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { EventCollectionList } from '../event'

export type Payday28thAnniversaryList =
	| 'The Burning 8th'

const payday28thAnniversary: Record<Payday28thAnniversaryList, MaskData<Payday28thAnniversaryList, EventCollectionList>> = {
	'The Burning 8th': {
		name: 'The Burning 8th',
		image: '???',
		description: [
			'Anniversaries are special, some more than others. And the Gods of Chaos and Heisting (i.e. the Payday Gang) demand nothing less than a grand tribute, so we have here this flaming clown visage for you to show your loyalty with.'
		],
		collection: 'Payday 2 8th Anniversary',
		source: source['Base Game'],
		rarity: 'Event',
		unlock: 'THIS IS A PAYDAY 2 8th ANNIVERSARY ITEM!',
		cost: 'Unlocked through Side Job'
	}
}

export default payday28thAnniversary