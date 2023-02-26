import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type NormalCollectionList } from '../normal'

export type TheSearchForKentoList =
	| 'Byrne'
	| 'Fluffedup'
	| 'Stoibs'
	| 'Tempy'
	| 'Keelhauled Alex'
	| 'Nilam'
	| 'One-Eyed Jessicah'
	| 'Schneider'

const theSearchForKento: Record<TheSearchForKentoList, MaskData<TheSearchForKentoList, NormalCollectionList>> = {
	'Byrne': {
		name: 'Byrne',
		image: 'mp2_03',
		description: [
			'Byrne is gone. He\'s our koala and our \'pet\'. But we don\'t want him back. He\'s boring and tedious and all he does is eat eucalyptus leaves. And we mean like ALL day. He doesn\'t like when you touch or even talk to him. So now he\'s gone and we wanna keep it that way. If you find him (he looks like a douchebag pet) you can keep him or whatever. Consider this a warning of boredom.'
		],
		collection: 'The Search for Kento',
		source: content['Search for Kento day 6'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Fluffedup': {
		name: 'Fluffedup',
		image: 'mp2_01',
		description: [
			'Our darling Fluffedup is gone. He\'s 95 years old, and part of our family. Fluffedup is a happy little individual who\'s absolutely not been trying to throw himself into the blender or off the roof several times. We just want to keep him forever, and never let him go. So it\'s super important that we get him back to us, to our home where he lives and loves and absolutely doesn\'t hate.'
		],
		collection: 'The Search for Kento',
		source: content['Search for Kento day 6'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Stoibs': {
		name: 'Stoibs',
		image: 'mp2_02',
		description: [
			'Stoibs is a bit frantic and \'speedy\'. He ran away last tuesday night and we would be glad to get him back. We have had a hard time finding a chinchilla with a good pedigree. So for us to start over again with a new one, feeding him corn to get him fat and tender will be tedious. If you find him, we\'ll invite you to dinner where we enjoy Stoibs!'
		],
		collection: 'The Search for Kento',
		source: content['Search for Kento day 6'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Tempy': {
		name: 'Tempy',
		image: 'mp2_04',
		description: [
			'Tempy is our tame lion. He\'s been away for 2 weeks now and we miss him. Tempy loves all kind of cuddle, as long as it\'s done by us. If you spot Tempy: do not approach him in any way. Please tell us where you\'ve seen him. But you will get mutilated if he gets close. Other than that, he\'s a doll and loves sleeping in the sun. Also don\'t let him see any kids...that doesn\'t end well.'
		],
		collection: 'The Search for Kento',
		source: content['Search for Kento day 6'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Keelhauled Alex': {
		name: 'Keelhauled Alex',
		image: 'amp_02',
		description: [
			'Every ship come bearing tales of ghost. Restless phantoms seen by tired spotters late at night. Everything from Krakens to mermaids. But the tale of Keelhauled Alex is maybe one of the most feared. Alex had been stealing food during a long sail out at sea. As he was caught, he was sentenced to be keelhauled. Not a serious crime, but a serious punishment. But as Alex was beneath the boat, another ship opened fire, and Alex was forgotten on the bottom of the ship. As the dust settled, his corpse was thrown into the depths. But ever since then, Keelhauled Alex walks ships at night, staring down everyone from captains to simple deck hands. It is said that he can gaze into your soul and devour it.'
		],
		collection: 'The Search for Kento',
		source: content['Green Bridge'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Nilam': {
		name: 'Nilam',
		image: 'amp_03',
		description: [
			'Nilam grew up among buccaneers, pirates and corsairs. She knew rum before she could speak, and held a sword before she could walk. Nilam was without family, and instead she found the nomadic lifestyle of a pirate her destiny. She was swift with a blade and few could match her in combat. All she sought was the same respect her peers got, but this was a world ruled by men. Finally Nilam had reached her limit. Those who wronged her were \'sentenced\' by getting their throats slit. Her reputation preceded her, and harbours feared the bloodshed she brought with her when her ship \'Verdict\' came sailing in.'
		],
		collection: 'The Search for Kento',
		source: content['Green Bridge'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'One-Eyed Jessicah': {
		name: 'One-Eyed Jessicah',
		image: 'amp_04',
		description: [
			'With two eyes, Jessicah would never have been famous. After a shipwreck, she managed to swim to a small islet. Circled by a shark, with no rescue in sight, she was caught. With only a broken knife, her only choice was to kill the shark, so that she could safely swim to shore. But she needed a decoy, a lure so she could surprise the shark. The loss of a finger to toe would make swimming difficult, so instead, she scooped out one of her eyeballs and threw the bloody mess in the water. Then she dove in.'
		],
		collection: 'The Search for Kento',
		source: content['Green Bridge'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	},
	'Schneider': {
		name: 'Schneider',
		image: 'amp_01',
		description: [
			'One of the most brutal and ruthless pirates to ever exist. But also one of the most unknown. Just the way Schneider wanted it. Instead, Schneider\'s moniker \'the Devil\' was much more well known. He found it more profitable if nobody actually knew his face. But tales of how the \'devil\' sailed the seven seas traveled among bars in the Caribbean. To \'spot the Devil on the horizon\' is a common saying whe someone had disappeared out at sea. But the truth was that Schneider had forever buried them in a watery grave.'
		],
		collection: 'The Search for Kento',
		source: content['Green Bridge'],
		rarity: 'Free',
		unlock: '',
		cost: 'Free'
	}
}

export default theSearchForKento