import { MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { NormalCollectionList } from '../normal'

export type LockeAndLoadList =
	| 'Retro Chains'
	| 'Retro Dallas'
	| 'Retro Hoxton'
	| 'Retro Wolf'
	| 'Z.A.M.S Helmet'
	| 'Rhubarb'

const lockeAndLoad: Record<LockeAndLoadList, MaskData<LockeAndLoadList, NormalCollectionList>> = {
	'Retro Chains': {
		name: 'Retro Chains',
		image: 'cmo_04',
		description: [
			'Combat and shooter games that simulate intense situations between players is a great way to keep up your skills in between jobs. Chains likes games that train your situational awareness and award skillfull'
		],
		collection: 'Locke and Load',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '(sic) play by gaining the upperhand in a fight.',
		cost: 'Free'
	},
	'Retro Dallas': {
		name: 'Retro Dallas',
		image: 'cmo_01',
		description: [
			'A good tactical game is the perfect way to prep before a big heist. Dallas prefers to kick-start his strategic mind with something difficult and calculating where you need to manage units and resources to achieve victory.'
		],
		collection: 'Locke and Load',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Retro Hoxton': {
		name: 'Retro Hoxton',
		image: 'cmo_02',
		description: [
			'Solving logic puzzles as a brain teaser is a great way to unwind after some intense criminal activity. Hoxton likes games that lets'
		],
		collection: 'Locke and Load',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '(sic) him wrap his head around a problem and figure it out one step at a time with the clues given.',
		cost: 'Free'
	},
	'Retro Wolf': {
		name: 'Retro Wolf',
		image: 'cmo_03',
		description: [
			'Violent games help Wolf getting into the mood'
		],
		collection: 'Locke and Load',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '(sic) for a heist. The more blood, gore and carnage the better. He prefers games that test your reaction and speed.(sic) Games where every second counts for your survival against a nearly endless horde of enemies.',
		cost: 'Free'
	},
	'Z.A.M.S Helmet': {
		name: 'Z.A.M.S Helmet',
		image: 'mmj',
		description: [
			'Classic gear can be a wonderful thing. The mindset of a heroic thrill-seeker riding a 200BHP steel horse has many things in common with a heister that are not obvious at first glance- the aesthetic value of a piece of custom headgear being one of them!'
		],
		collection: 'Locke and Load',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Rhubarb': {
		name: 'Rhubarb',
		image: 'kwm',
		description: [
			'A tribute to our legendary adventurer [MANY GUN] CLOVERAPTOR- solver of mysteries and bringer of The Mega Death! Giving up a dream of being a banker, he faced his destiny and faced the Cop Wizard and his minions, the Law Elementals. Who knows if it was his own will, or his pushy Crime Dad, that allowed him to prevail, but we will be forever grateful for his service.',
			'OVERKILL Salutes You!'
		],
		collection: 'Locke and Load',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	}
}

export default lockeAndLoad