import keybinds from 'data/keybinds'

export type EquipmentList = keyof typeof equipments

export interface EquipmentData {
	name: EquipmentList;
	amount: number[];
	upgrade: EquipmentUpgradeData[];
	description: string[];
}

interface EquipmentUpgradeData {
	amount: number[];
	skillPath: [string, string, string];
	skillState: 'basic' | 'aced';
}

const equipments: Record<string, EquipmentData> = {
	'Ammo Bag': {
		name: 'Ammo Bag',
		amount: [1],
		upgrade: [{
			amount: [2],
			skillPath: ['enforcer', 'Tank', 'Extra Lead'],
			skillState: 'aced'
		}],
		description: [
			`To use the Ammo Bag, you place it by holding [${keybinds['Deploy Equipment/Throw Bag']}]. Once placed it cannot be moved, but it can be used by you and your crew by holding [${keybinds['Shout/Interact']}] to gain more ammunition. It can fully replenish the ammunition of one your weapons 4 times. When the Ammo Bag is depleted, it will disappear. You can see how many uses are left by looking at the Ammo Bag.`,
			'The ammo bag is a portable bag, originally intended to allow soldiers to carry extra ammunition with them into combat.'
		]
	},
	'Armour Kit': {
		name: 'Armour Kit',
		amount: [1],
		upgrade: [],
		description: [
			`To use the Armor Bag, hold [${keybinds['Deploy Equipment/Throw Bag']}] to put on your equipped armor. Until that, you will wear the Two-piece Suit.`,
			'The armor bag has only one use and when it is consumed, it disappears. The Armor Bag is a portable bag used to transport an armor of your choice, that can be used during a heist.'
		]
	},
	'Body Bag Case': {
		name: 'Body Bag Case',
		amount: [1],
		upgrade: [{
			amount: [2],
			skillPath: ['ghost', 'Shinobi', 'Cleaner'],
			skillState: 'aced'
		}],
		description: [
			`To use the Body Bag Case, you place it by holding [${keybinds['Deploy Equipment/Throw Bag']}]. Once placed, it cannot be moved, but it can be used by you and your crew by holding [${keybinds['Shout/Interact']}] to gain a body bag.`,
			'The Body Bag Case has limited uses. You can see how many uses are left by looking at the Body Bag Case. The Body Bag Case carries additional bags, used for the transportation of corpses during stealth.'
		]
	},
	'Doctor Bag': {
		name: 'Doctor Bag',
		amount: [1],
		upgrade: [{
			amount: [2],
			skillPath: ['mastermind', 'Medic', 'Combat Doctor'],
			skillState: 'aced'
		}],
		description: [
			`To use the doctor bag, you need to place it by holding [${keybinds['Deploy Equipment/Throw Bag']}]. Once placed it cannot be moved, but it can be used by you and your crew by holding [${keybinds['Shout/Interact']}] to regain health. Using the doctor bag will reset the amount of times the player can get downed before going into custody. It can only be used twice.`,
			'When the Doctor Bag is consumed, it disappears. You can see how many uses are left by looking at the Doctor Bag.',
			'The Doctor Bag is a portable bag, usually used by a physician or other medical profession to transport medical supplies and medicine.'
		]
	},
	'ECM Jammer': {
		name: 'ECM Jammer',
		amount: [1],
		upgrade: [{
			amount: [2],
			skillPath: ['ghost', 'Shinobi', 'ECM Specialist'],
			skillState: 'basic'
		}],
		description: [
			`To use the ECM Jammer, you need to place it by holding [${keybinds['Deploy Equipment/Throw Bag']}]. Once placed it cannot be moved and it will be active for 20 seconds.`,
			`You can toggle the ECM Jammer by pressing [${keybinds['Shout/Interact']}]. The ECM Jammer then has a chance to incapacitate your enemies within a certain radius. When consumed, it stops working.`,
			'An Electronic Countermeasure (ECM) is an electronic device designed to trick radar, sonar and other detection systems, easing your way towards your goal.'
		]
	},
	'First Aid Kit': {
		name: 'First Aid Kit',
		amount: [4],
		upgrade: [
			{
				amount: [11],
				skillPath: ['mastermind', 'Medic', 'Uppers'],
				skillState: 'basic'
			},
			{
				amount: [14],
				skillPath: ['mastermind', 'Medic', 'Uppers'],
				skillState: 'aced'
			}
		],
		description: [
			'The first aid kit is a collection of supplies and equipment for use in giving first aid.',
			`To use the first aid kit, you need to place it by holding [${keybinds['Deploy Equipment/Throw Bag']}]. Once placed it cannot be moved, but it can be used by you and your crew by holding [${keybinds['Shout/Interact']}] to regain health.`,
			'A deployed first aid kit can be used once and when it is consumed, it disappears.'
		]
	},
	'Sentry Gun': {
		name: 'Sentry Gun',
		amount: [1],
		upgrade: [
			{
				amount: [2],
				skillPath: ['technician', 'Engineer', 'Tower Defense'],
				skillState: 'basic'
			},
			{
				amount: [4],
				skillPath: ['technician', 'Engineer', 'Tower Defense'],
				skillState: 'aced'
			}
		],
		description: [
			`To use the Sentry Gun, you need to place it by holding [${keybinds['Deploy Equipment/Throw Bag']}]. Upon deployment it will use up 30% of your weapons' total ammo. It can be destroyed by firing at it, but as long as it is not completely destroyed, picking it up will automatically repair it and return the remaining Sentry Gun ammo. As it runs out of ammo it will stop firing but it can be reloaded by re-deploying it after pick up.`,
			'The Sentry Gun automatically aims and fires at targets that are detected by its sensors. It\'s commonly used as a distraction, drawing attention from you and your team.'
		]
	},
	'Silenced Sentry Gun': {
		name: 'Silenced Sentry Gun',
		amount: [1],
		upgrade: [
			{
				amount: [2],
				skillPath: ['technician', 'Engineer', 'Tower Defense'],
				skillState: 'basic'
			},
			{
				amount: [4],
				skillPath: ['technician', 'Engineer', 'Tower Defense'],
				skillState: 'aced'
			}
		],
		description: [
			`To use the Suppressed Sentry Gun, you need to place it by holding [${keybinds['Deploy Equipment/Throw Bag']}]. Upon deployment it will use up 30% of your weapons' total ammo. It can be destroyed by firing at it, but as long as it is not completely destroyed, picking it up will automatically repair it and return the remaining Sentry Gun ammo. As it runs out of ammo it will stop firing but it can be reloaded by re-deploying it after pick up.`,
			'The Suppressed Sentry Gun is the counterpart to the regular, louder Sentry Gun as it\'s more used to take out enemies than a classic distraction.'
		]
	},
	'Trip Mines and Shaped Charges': {
		name: 'Trip Mines and Shaped Charges',
		amount: [3, 3],
		upgrade: [
			{
				amount: [7, 4],
				skillPath: ['technician', 'Breacher', 'More Firepower'],
				skillState: 'basic'
			},
			{
				amount: [14, 6],
				skillPath: ['technician', 'Breacher', 'More Firepower'],
				skillState: 'aced'
			}
		],
		description: [
			`To use the Trip Mine, you need to place it by holding [${keybinds['Deploy Equipment/Throw Bag']}]. The trigger laser can be toggled between explosive mode and sensor by pressing [${keybinds['Shout/Interact']}].`,
			`To use Shaped Charges, you need to place it by holding [${keybinds['Deploy Equipment/Throw Bag']}]. Once placed it will detonate within a few seconds. Trip Mines are basically traps that will hurt or kill enemies crossing the beam. Shaped Charges are commonly used to open safes and doors. Both are a good addition to all combat situations.`
		]
	}
}

export default equipments