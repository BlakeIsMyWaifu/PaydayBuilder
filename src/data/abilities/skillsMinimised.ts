export type SkillTreeName = typeof skillTreeNames[number]

type KeysOfUnion<T> = T extends T ? keyof T : never
export type SubtreeName = KeysOfUnion<typeof skillsMinimised[SkillTreeName]>

export const skillTreeNames = ['mastermind', 'enforcer', 'technician', 'ghost', 'fugitive'] as const

const skillsMinimised = {
	mastermind: {
		'Medic': [
			'Combat Medic',
			'Quick Fix',
			'Painkillers',
			'Uppers',
			'Combat Doctor',
			'Inspire'
		],
		'Controller': [
			'Forced Friendship',
			'Confident',
			'Joker',
			'Stockholm Syndrome',
			'Partners in Crime',
			'Hostage Taker'
		]
		,
		'Sharpshooter': [
			'Stable Shot',
			'Rifleman',
			'Marksman',
			'Ammo Efficiency',
			'Aggressive Reload',
			'Graze'
		]
	},
	enforcer: {
		'Shotgunner': [
			'Underdog',
			'Shotgun CQB',
			'Shotgun Impact',
			'Far Away',
			'Close By',
			'Overkill'
		],
		'Tank': [
			'Resilience',
			'Die Hard',
			'Transporter',
			'Shock and Awe',
			'Bullseye',
			'Iron Man'
		],
		'Ammo Specialist': [
			'Scavenger',
			'Bulletstorm',
			'Portable Saw',
			'Extra Lead',
			'Saw Massacre',
			'Fully Loaded'
		]
	},
	technician: {
		'Engineer': [
			'Third Law',
			'Sentry Targeting Package',
			'Eco Sentry',
			'Engineering',
			'Jack of All Trades',
			'Tower Defense'
		],
		'Breacher': [
			'Hardware Expert',
			'Combat Engineering',
			'Drill Sawgeant',
			'More Firepower',
			'Kickstarter',
			'Fire Trap'
		],
		'Oppressor': [
			'Steady Grip',
			'Heavy Impact',
			'Fire Control',
			'Lock N\' Load',
			'Surefire',
			'Body Expertise'
		]
	},
	ghost: {
		'Shinobi': [
			'Chamaleon',
			'Cleaner',
			'Sixth Sense',
			'Nimble',
			'ECM Overdrive',
			'ECM Specialist'
		],
		'Artful Dodger': [
			'Duck and Cover',
			'Parkour',
			'Inner Pockets',
			'Dire Need',
			'Shockproof',
			'Sneaky Bastard'
		],
		'Silent Killer': [
			'Second Wind',
			'Optical Illusions',
			'The Professional',
			'Low Blow',
			'High Value Target',
			'Unseen Strike'
		]
	},
	fugitive: {
		'Gunslinger': [
			'Equilibrium',
			'Gun Nut',
			'Akimbo',
			'One Handed Talent',
			'Desperado',
			'Trigger Happy'
		],
		'Revenant': [
			'Nine Lives',
			'Running from Death',
			'Up You Go',
			'Swan Song',
			'Feign Death',
			'Messiah'
		],
		'Brawler': [
			'Martial Arts',
			'Bloodthirst',
			'Pumping Iron',
			'Counterstrike',
			'Berserker',
			'Frenzy'
		]
	}
} satisfies Record<SkillTreeName, Record<string, string[]>>

export default skillsMinimised