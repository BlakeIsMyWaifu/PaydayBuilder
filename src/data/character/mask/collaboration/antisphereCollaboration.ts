import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type CollaborationCollectionList } from '../collaboration'

export type AntisphereCollaborationList =
	| 'DOME'
	| 'DRONE'
	| 'INTERCEPTOR'
	| 'MOTH'
	| 'RAPTOR'
	| 'VIZOR'
	| 'SKULL'
	| 'WASP'

const antisphereCollaboration: Record<AntisphereCollaborationList, MaskData<AntisphereCollaborationList, CollaborationCollectionList>> = {
	'DOME': {
		name: 'DOME',
		image: 'ant_04',
		description: [
			'Dome was the centerpiece of a grand scheme, planned and set in motion by the other side. A simple robot, assembled to restore/reassemble/rearrange, Dome was on mission to reassemble a government building that got destroyed by the enemy. A stealth attack - to take out Commander Wasp - was taking place near the location as the Commander\'s car drove passed the debris. Dome saw the coming attack and sacrificed himself to protect the Commander by throwing himself in front of the car, making it steer away from the blast. Wasp survived, Dome did not.'
		],
		collection: 'Antisphere Collaboration',
		source: content['Antisphere Mask Pack'],
		rarity: 'Collaboration',
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	'DRONE': {
		name: 'DRONE',
		image: 'ant_06',
		description: [
			'Engineered to be as lethal as robotly possible. Drone was solely responsible for the Great Purge. Forever imprinted in all minds and historical dataservers. Drone had the skills needed to go beyond what was expected by a \'grunt\'. Someone who seemed disposable. but would prove invaluable. The Great Purge turned the war: sleeper cells got exposed, robots got disconnected, and the Hive Mind lost thousands of zettabytes. Drone became a statue to be gazed upon in Ming Ji Memorial Park.'
		],
		collection: 'Antisphere Collaboration',
		source: content['Antisphere Mask Pack'],
		rarity: 'Collaboration',
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	'INTERCEPTOR': {
		name: 'INTERCEPTOR',
		image: 'ant_01',
		description: [
			'Interceptor model BX-99 was built to keep \'things in order\'. A mission with a lof to interpret. Roaming the streets, making sure that civilians are safe and that things are \'OK\'. This Interceptor took things too far as a situation occurred near a assembly factory. Some civilians came to harm, others destroyed, ammo slugs filled the air, and Interceptor did what it thought was absolutely necessary to not obstruct the assembly factory. Interceptor BX-99 with serial number 151010130807 was later disassembled.'
		],
		collection: 'Antisphere Collaboration',
		source: content['Antisphere Mask Pack'],
		rarity: 'Collaboration',
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	'MOTH': {
		name: 'MOTH',
		image: 'ant_03',
		description: [
			'Every war has its traitor. Moth was one of them. A sentinel robot assembled to retrieve information - by any means necessary. But hierarchy and power are often coveted. Wars breed corruption, and Moth followed his logic and switched sides - causing millions of robots to disconnect. Celebrated by one side and hated by another - Moth came to be one of the pawns that turned the war.'
		],
		collection: 'Antisphere Collaboration',
		source: content['Antisphere Mask Pack'],
		rarity: 'Collaboration',
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	'RAPTOR': {
		name: 'RAPTOR',
		image: 'ant_08',
		description: [
			'Raptor was a fighter pilot. Hooked into the central hub on each plane he flew, he steered with certainty. It became a matter of accumulated knowledge. Even though all pilots got the same software installed - an AI learns. And somehow, Raptor managed to stay alive enough to keep his knowledge. The Hive Mind was off limits to fighter pilots, as they could be captured and hacked when they crossed into enemy territory. But Raptor learned to be the best at taking out enemy bases without hesitation.'
		],
		collection: 'Antisphere Collaboration',
		source: content['Antisphere Mask Pack'],
		rarity: 'Collaboration',
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	'VIZOR': {
		name: 'VIZOR',
		image: 'ant_02',
		description: [
			'Robot wars are easy to make fun of. Dead things that fight other dead things. But as the AI evolved, things turned real. Soldiers like Vizor played a crucial role in the mayhem orchestrated by long dead humans. Humans who pushed the button, but failed to experience the consequences. As robots turned against robots, soldiers like Vizor rose, and those with a heartbeat became a memory.'
		],
		collection: 'Antisphere Collaboration',
		source: content['Antisphere Mask Pack'],
		rarity: 'Collaboration',
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	'SKULL': {
		name: 'SKULL',
		image: 'ant_05',
		description: [
			'Every war requires executioners. Not a simple soldier, but someone who can take a life with a threatening demeanor. Someone working for the \'system\', who blindly follow orders. Skull was one of those. Someone who, tirelessly disconnected robot after robot, war criminals and everyone else deemed \'dangerous\' to the \'cause\'.'
		],
		collection: 'Antisphere Collaboration',
		source: content['Antisphere Mask Pack'],
		rarity: 'Collaboration',
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Free'
	},
	'WASP': {
		name: 'WASP',
		image: 'ant_07',
		description: [
			'Commander Wasp sat on incredible technical capacity. Strength and intelligence was by far superior to the other side. A prototype that would have the needed circuits to outsmart the opposing forces. But an untested prototype. Something rushed. Something that was too experimental. Madness strikes circuit boards, but we refer to it as a \'bug\'. Killing his fellow troops in a rage of paranoia - Commander Wasp became a criminal of war.'
		],
		collection: 'Antisphere Collaboration',
		source: content['Antisphere Mask Pack'],
		rarity: 'Collaboration',
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Free'
	}
}

export default antisphereCollaboration