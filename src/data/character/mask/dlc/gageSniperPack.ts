import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

export type GageSniperPackList =
	| 'Asilidae'
	| 'Sphodromantis'
	| 'Tarantula'
	| 'Vespula'

const gageSniperPack: Record<GageSniperPackList, MaskData<GageSniperPackList, DlcCollectionList>> = {
	'Asilidae': {
		name: 'Asilidae',
		image: 'mantis',
		description: [
			'The Asilidae, also known as robber fly or assassin fly, are powerfully built, bristly flies who are known for their notoriously aggressive predatory habits. They feed on other insects and as a rule, they wait in ambush and catch their prey in flight.'
		],
		collection: 'Gage Sniper Pack',
		source: content['Gage Sniper Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE SNIPER PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Sphodromantis': {
		name: 'Sphodromantis',
		image: 'robberfly',
		description: [
			'The common name for these lovely little fellows is \'praying mantis\'. The reason? It refers to the prayer-like posture where it folds its fore-limbs. More commonly however it\'s referred to as the preying mantis, because of it\'s nature.',
			'Basically, they eat anything they can successfully capture and devour.'
		],
		collection: 'Gage Sniper Pack',
		source: content['Gage Sniper Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE SNIPER PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Tarantula': {
		name: 'Tarantula',
		image: 'spider',
		description: [
			'Eight legs strong, tarantula sizes range from as small as a fingernail to as large as a handgun when the legs are fully extended. The name originally comes from the name Lycosa tarantula, a species of wolf spider. Tarantulas generally hunt in trees, on or near the ground. They\'re also popular as pets.'
		],
		collection: 'Gage Sniper Pack',
		source: content['Gage Sniper Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE SNIPER PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Vespula': {
		name: 'Vespula',
		image: 'wasp',
		description: [
			'Two pairs of wings, an ovipositor or stinger, no thickened hairs and a pair of talons. That\'s the wasp for you. Almost every pest insect species has at least one wasp species that preys upon it or parasitizes it. This makes the wasps very important in natural control of their numbers.'
		],
		collection: 'Gage Sniper Pack',
		source: content['Gage Sniper Pack'],
		rarity: 'Paid',
		unlock: 'THIS IS A GAGE SNIPER PACK ITEM!',
		cost: 'Unlocked through Achievement'
	}
}

export default gageSniperPack