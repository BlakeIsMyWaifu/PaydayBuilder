import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type TheButchersAKCARModPackList =
	| 'Alfred'
	| 'Pachy'
	| 'Timothy'
	| 'Vincent'

const theButchersAKCARModPack: Record<TheButchersAKCARModPackList, MaskData<TheButchersAKCARModPackList, DlcCollectionList>> = {
	'Alfred': {
		name: 'Alfred',
		image: 'carnotaurus',
		description: [
			'Alfred the Carnotaurus was a very fast dinosaur when he was alive and kicking. His distinctive horns and his muscular neck made him stand out next to all the other dinosaurs. His large head along with his horns working as shock absorbers made him particularly skilled at head butting other dinosaurs in order to show who had the largest prehistoric d-peen.'
		],
		collection: 'The Butcher\'s AK/CAR Mod Pack',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS AN AK/CAR MOD PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Pachy': {
		name: 'Pachy',
		image: 'pachy',
		description: [
			'Pachy the Pachycephalosaurus, meaning thick headed lizard, wasn\'t never that thick headed really. He never took that name for himself, the other dinosaurs gave it to him because they were jealous of his high rolls in intelligence, spirit and wisdom. Having earned a robe and a wizard hat as a second prize at the local prehistoric spelling bee didn\'t make it any better.'
		],
		collection: 'The Butcher\'s AK/CAR Mod Pack',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS AN AK/CAR MOD PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Timothy': {
		name: 'Timothy',
		image: 'triceratops',
		description: [
			'Timothy the Triceratops is one of the most popular dinosaurs at the Jurassic High. He had a huge grudge with Teddy the Tyrannosaurus though. Even though they were massive and lived together during the last epoch of the age of dinosaurs, they couldn\'t find it in them to be friends. Especially not since that one time when they went to that cabin during Spring Break and Teddy and his pals pranked Timothy with that horror movie and the phone call about seven days left before the meteorite would hit. Timothy did not think that was funny at all.'
		],
		collection: 'The Butcher\'s AK/CAR Mod Pack',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS AN AK/CAR MOD PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Vincent': {
		name: 'Vincent',
		image: 'velociraptor',
		description: [
			'Vincent the Velociraptor and his best friend Andreas HÃ¤ll Penninger the Protoceratops were out and about one day in the jungle when they got in a fight. It wasn\'t a big thing really but Vincent just wouldn\'t let it go. Andreas, being the stubborn Protoceratops he was, continued to mouth off to Vincent. Violent fighting ensued and to this day, no one is sure who actually won.'
		],
		collection: 'The Butcher\'s AK/CAR Mod Pack',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS AN AK/CAR MOD PACK ITEM!',
		cost: 'Unlocked through Achievement'
	}
}

export default theButchersAKCARModPack