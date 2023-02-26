import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type TheGoldenGrinCasinoHeistList =
	| 'Murmillo Galea Helmet'
	| 'Sports Utility Mask'
	| 'King, The'
	| 'Wheeler Dealer'

const theGoldenGrinCasinoHeist: Record<TheGoldenGrinCasinoHeistList, MaskData<TheGoldenGrinCasinoHeistList, DlcCollectionList>> = {
	'Murmillo Galea Helmet': {
		name: 'Murmillo Galea Helmet',
		image: 'gladiator_helmet',
		description: [
			'Gladiators were members of a brutal caste in Ancient Rome whose sole duty was to entertain by way of public exhibitions of horrific violence. This style of helmet with its high crest  resembles a fish. It was worn by a Murmillo - a heavy class of gladiator that fought with a sword and tower shield. They symbolize Vulcan - the roman god of fire, and they stand for strength and honor.'
		],
		collection: 'The Golden Grin Casino Heist',
		source: content['The Golden Grin Casino Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A GOLDEN GRIN CASINO ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Sports Utility Mask': {
		name: 'Sports Utility Mask',
		image: 'sports_utility_mask',
		description: [
			'Forget bulky and unfashionable helmets, this glorious sucker is the best friend of every adrenaline junkie. The face-guard is made out of tough ABS plastic and it provides solid protection against snow, sand blasts and hail drops. Just avoid heavy blows to the head. Be the envy of your airboarding friends, brah!'
		],
		collection: 'The Golden Grin Casino Heist',
		source: content['The Golden Grin Casino Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A GOLDEN GRIN CASINO ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'King, The': {
		name: 'King, The',
		image: 'the_king_mask',
		description: [
			'Mercy! Are you bad enough of a dude or dudette to rock the royal trifecta of slick aviators ,bad-ass pompadour and tactical sideburns? Summon forth the indomitable spirit of various used-car dealers and shotgun-wedding ministers all around Vegas who wore this thing all the way to success. Or at least mild public awkwardness. Hail to the king!'
		],
		collection: 'The Golden Grin Casino Heist',
		source: content['The Golden Grin Casino Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A GOLDEN GRIN CASINO ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Wheeler Dealer': {
		name: 'Wheeler Dealer',
		image: 'croupier_hat',
		description: [
			'Spruce up your glamorous neon 80\'s look! This kind of mint-green headwear has been in use since the 19th century as a method of preventing eyestrain from intense light sources. Coked out gamblers and gonzo journalists have propelled the croupier\'s hat into the focus of the mainstream. They are also perfect for beach-front raves, picking up hotties on the beach, signing a contract on the 18th hole of your nearest country club and generally looking like an octogenarian.'
		],
		collection: 'The Golden Grin Casino Heist',
		source: content['The Golden Grin Casino Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A GOLDEN GRIN CASINO ITEM!',
		cost: 'Unlocked through Achievement'
	}
}

export default theGoldenGrinCasinoHeist