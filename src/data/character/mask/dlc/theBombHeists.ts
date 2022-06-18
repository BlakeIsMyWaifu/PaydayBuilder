import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

export type TheBombHeistsList =
	| 'The Butcher from Hell'
	| 'Lady Butcher'
	| 'Tech Lion'
	| 'The Doctor'

const theBombHeists: Record<TheBombHeistsList, MaskData<TheBombHeistsList, DlcCollectionList>> = {
	'The Butcher from Hell': {
		name: 'The Butcher from Hell',
		image: 'butcher',
		description: [
			'There are many rumours about the mad butcher from the east, one of them tells of a man who found such pleasure in butchering pigs that he slowly started to look like one.',
			'Working in a butchery as hot as hell itself his skin became disfigured with blisters and cuts, people tell of screams coming from inside... And not just the screams of pigs.'
		],
		collection: 'The Bomb Heists',
		source: content['The Bomb Heists'],
		rarity: 'Paid',
		unlock: 'THIS IS A THE BOMB HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Lady Butcher': {
		name: 'Lady Butcher',
		image: 'lady_butcher',
		description: [
			'If you received a dollar every time the Butcher was called a \'witch\', a \'harlot\' or a \'banshee\' by her peers you could earn enough money to buy the entirety of Croatia. Cynical men around her bemoaned the fact that she was female, and felt endangered and distressed at the sight of her meteoric rise in the criminal underground. Keep in mind that the Balkans are not exactly known for their capacity to tolerate anybody who is in any way different, and one can only image the flat-out chauvinism and misogyny she must have dealt with while working with some of the most ruthless criminals every day of her existence. This mask shows how she is seen by both her rivals and her associates. It makes people feel afraid. As they should be.'
		],
		collection: 'The Bomb Heists',
		source: content['The Bomb Heists'],
		rarity: 'Paid',
		unlock: 'THIS IS A THE BOMB HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Tech Lion': {
		name: 'Tech Lion',
		image: 'tech_lion',
		description: [
			'This mask is a modern interpretation of the Egyptian war-god Maahes. Known as the \'Wield of the Knife\', \'Lord of Slaughter\' and \'Avenger of Wrongs\', Maahes punished those who transgressed from the rules of Ma`at - the personification of order and balance. Considered the embodiment of the burning heat of the sun, he was also seen as a protective deity that defended the Pharaoh during battle.',
			'He is usually depicted as lion-headed man carrying a knife wearing the Atef crown, the Solar Disk or is pictured as a lion devouring a victim.'
		],
		collection: 'The Bomb Heists',
		source: content['The Bomb Heists'],
		rarity: 'Paid',
		unlock: 'THIS IS A THE BOMB HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'The Doctor': {
		name: 'The Doctor',
		image: 'doctor',
		description: [
			'A naso-buccal mask usually associated with hospitals and ambulances. This mask disables the host from spreading airborne viruses by catching the bacteria-laden saliva and mucus that is discharged upon sneezing or coughing. Both doctors and patients wear this, so you should ask yourself: am I the sick or the healthy one? The disease or the cure?',
			'In any case - it\'s fever season, and the only prescription is dead Bulldozers.'
		],
		collection: 'The Bomb Heists',
		source: content['The Bomb Heists'],
		rarity: 'Paid',
		unlock: 'THIS IS A THE BOMB HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	}
}

export default theBombHeists