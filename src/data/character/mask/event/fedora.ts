import { MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

type FedoraList =
	| 'The Fedora'

const fedora: Record<FedoraList, MaskData<FedoraList>> = {
	'The Fedora': {
		name: 'The Fedora',
		image: 'fdm',
		description: [
			'The fedora, the very height of fashion and class. Where the line is drawn between boys and men. Carry this classical headgear with the pride and resolve that it deserves. Feel the legacy and tradition of the millions of gentlemen and gangsters that wore a fedora throughout the ages.'
		],
		collection: 'Fedora',
		source: source['Base Game'],
		rarity: 'Event',
		unlock: 'THIS IS AN ALDSTONE\'S HERITAGE ITEM!',
		cost: 'Free'
	}
}

export default fedora