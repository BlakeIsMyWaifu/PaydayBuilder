import { MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { FreeCollectionList } from '../free'

type AldstonesHeritageList =
	| 'Kurgan\'s Gas Mask'
	| 'Rivet\'s Bandana'
	| 'Sterling\'s Beret'
	| 'Wolfgang\'s Cap'

const aldstonesHeritage: Record<AldstonesHeritageList, MaskData<AldstonesHeritageList, FreeCollectionList>> = {
	'Kurgan\'s Gas Mask': {
		name: 'Kurgan\'s Gas Mask',
		image: 'jfr_03',
		description: [],
		collection: 'Aldstone\'s Heritage',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: 'Kurgan doesn\'t wear the gas-mask to keep the fumes of war out. He wears it to keep the flames of fury in. Betrayed by his own side, Kurgan barely survived an ambush by armored flamers. Inside the mask, there is only the smell of his own immolated flesh, a constant reminder to trust no-one.',
		cost: 'Unlocked through Side Job'
	},
	'Rivet\'s Bandana': {
		name: 'Rivet\'s Bandana',
		image: 'jfr_04',
		description: [],
		collection: 'Aldstone\'s Heritage',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: 'Rivet is American, and Americans value tradition. From the office of the President, to the lowliest scum-sucker in the land, tradition matters. So if you\'re going to stick a gun in a chump\'s face and demand they \'hand it over\' you better damn well know your history. Like Jesse James, like Billy The Kid,(sic) you wear a bandana.',
		cost: 'Unlocked through Side Job'
	},
	'Sterling\'s Beret': {
		name: 'Sterling\'s Beret',
		image: 'jfr_01',
		description: [
			'It would be lovely to think '
		],
		collection: 'Aldstone\'s Heritage',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: 'Sterling earned the beret and badge through hard-training and combat. The truth, however, is that he saw how it impressed a couple of young fillies at the Officers Club. An invitation to step outside, a few dirty punches and a knocked out Colonel later, and Sterling had his very own red beret. And a couple of fillies. Smashing!',
		cost: 'Unlocked through Side Job'
	},
	'Wolfgang\'s Cap': {
		name: 'Wolfgang\'s Cap',
		image: 'jfr_02',
		description: [
			'This cap may look like a normal, standard-issue M43 field cap. And you may think such humble headgear is an unusual choice for a man as vain as '
		],
		collection: 'Aldstone\'s Heritage',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: 'Wolfgang. But this cap holds special meaning for him. It may surprise you that Wolfgang can truly love. Pinned inside is a picture of his beloved. For whom he fights the good fight.',
		cost: 'Unlocked through Side Job'
	}
}

export default aldstonesHeritage