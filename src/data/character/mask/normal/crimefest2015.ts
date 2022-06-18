import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { NormalCollectionList } from '../normal'

export type Crimefest2015List =
	| 'Baba Yaga'
	| 'Russian Hat'
	| 'Sputnik'
	| 'Tiara'
	| 'Vlad Armor'
	| 'Le Castle Vania'
	| 'Eggian'
	| 'Fatboy'
	| 'Oliver'
	| 'Pirate'
	| 'Groucho'
	| 'Tinted Love'

const crimefest2015: Record<Crimefest2015List, MaskData<Crimefest2015List, NormalCollectionList>> = {
	'Baba Yaga': {
		name: 'Baba Yaga',
		image: 'baba_yaga',
		description: [
			'Occasionally villainous, always mysterious. The Baba Yaga stalks the dark forests of Slavic myth. She flies around in a mortar, wields a pestle and lives in a hut that stomps about on giant chicken legs.'
		],
		collection: 'Crimefest 2015',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Russian Hat': {
		name: 'Russian Hat',
		image: 'rus_hat',
		description: [
			'The world would be very different were it not for the howling, freezing Russian winter. Napoleon and Hitler both learned this. History could be very different if they only packed a warm hat.'
		],
		collection: 'Crimefest 2015',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Sputnik': {
		name: 'Sputnik',
		image: 'sputnik',
		description: [
			'Despite being just a tiny, beeping sphere, the original Sputnik sent political shock-waves across 1950\'s Washington. Send some criminal shock-waves around the capital with this vintage-yet-pimped version.'
		],
		collection: 'Crimefest 2015',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Tiara': {
		name: 'Tiara',
		image: 'tiara',
		description: [
			'Okay, it doesn\'t hide your face and it is certainly not going to stop any bullets whizzing your way....but, damn. You\'re going to look like the belle of the ball wearing Mrs Volkov\'s wedding tiara.'
		],
		collection: 'Crimefest 2015',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Vlad Armor': {
		name: 'Vlad Armor',
		image: 'vlad_armor',
		description: [
			'\'Hey! Payday clowns! Vlad here with a little something from the Motherland. I wore this beautiful heavy bastard all through my days in Donetsk. It ain\'t pretty like your delicate American masks, but it kept me pretty!\''
		],
		collection: 'Crimefest 2015',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Le Castle Vania': {
		name: 'Le Castle Vania',
		image: 'lcv',
		description: [
			'It\'s modern, dynamic and a real crowd-pleaser. It\'s sleek, slick and totally stylish. It\'s both the music of Le Castle Vania, and his mask.'
		],
		collection: 'Crimefest 2015',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Eggian': {
		name: 'Eggian',
		image: 'eggian',
		description: [
			'In \'Xenogogs\', this creature embodied fear itself, as it tore its way from the butt of Troy Templeton during that scene.'
		],
		collection: 'Crimefest 2015',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Fatboy': {
		name: 'Fatboy',
		image: 'fatboy',
		description: [
			'It\'s the full-cheeked, pink, healthy face that represents the wonderful, magical alchemy of deep-fried dough and sugar found in the lobby of theaters across the States.'
		],
		collection: 'Crimefest 2015',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Oliver': {
		name: 'Oliver',
		image: 'oliver',
		description: [
			'\'And the nominees for The Greatest Heisters In The World are.....\''
		],
		collection: 'Crimefest 2015',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Pirate': {
		name: 'Pirate',
		image: 'pirate_skull',
		description: [
			'In \'Buccaneers Ahoy!\', these swashbuckling undead heisters terrorized the treasure-laden galleons of the Caribbean for years, proving forever that....pirates arrrrrrrrrrrr cool.'
		],
		collection: 'Crimefest 2015',
		source: source['Base Game'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Groucho': {
		name: 'Groucho',
		image: 'groucho_glasses',
		description: [
			'A perfect disguise doesn\'t have to mean dying your hair, changing your iris and burning off your fingerprints. Sometimes looking obviously strange makes people uncomfortable enough to look away and pay you no mind.'
		],
		collection: 'Crimefest 2015',
		source: content['The Dallas Heist Pack II'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Tinted Love': {
		name: 'Tinted Love',
		image: 'glasses_tinted_love',
		description: [
			'Murder, extortion, violence, destruction, drugs, guns, and theft. These are all crimes associated with Vlad, but none are as great as his fashion sense.'
		],
		collection: 'Crimefest 2015',
		source: content['The Dallas Heist Pack II'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	}
}

export default crimefest2015