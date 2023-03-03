import { deepStrictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import { defaultBuild } from 'state/useBuildsStore'
import { createActionSlice, createStateSlice, type SkillsStore, type SkillsStateSlice } from 'state/useSkillsStore'
import { encodeSkills } from 'utils/encodeBuild'
import { create } from 'zustand'

type Trees = SkillsStateSlice['trees']

const emptyTrees: Trees = {
	mastermind: {
		Medic: {
			tier: 1,
			points: 0,
			upgrades: {
				'Combat Medic': 'available',
				'Quick Fix': 'locked',
				Painkillers: 'locked',
				Uppers: 'locked',
				'Combat Doctor': 'locked',
				Inspire: 'locked'
			}
		},
		Controller: {
			tier: 1,
			points: 0,
			upgrades: {
				'Forced Friendship': 'available',
				Confident: 'locked',
				Joker: 'locked',
				'Stockholm Syndrome': 'locked',
				'Partners in Crime': 'locked',
				'Hostage Taker': 'locked'
			}
		},
		Sharpshooter: {
			tier: 1,
			points: 0,
			upgrades: {
				'Stable Shot': 'available',
				Rifleman: 'locked',
				Marksman: 'locked',
				'Ammo Efficiency': 'locked',
				'Aggressive Reload': 'locked',
				Graze: 'locked'
			}
		}
	},
	enforcer: {
		Shotgunner: {
			tier: 1,
			points: 0,
			upgrades: {
				Underdog: 'available',
				'Shotgun CQB': 'locked',
				'Shotgun Impact': 'locked',
				'Far Away': 'locked',
				'Close By': 'locked',
				Overkill: 'locked'
			}
		},
		Tank: {
			tier: 1,
			points: 0,
			upgrades: {
				Resilience: 'available',
				'Die Hard': 'locked',
				Transporter: 'locked',
				'Shock and Awe': 'locked',
				Bullseye: 'locked',
				'Iron Man': 'locked'
			}
		},
		'Ammo Specialist': {
			tier: 1,
			points: 0,
			upgrades: {
				Scavenger: 'available',
				Bulletstorm: 'locked',
				'Portable Saw': 'locked',
				'Extra Lead': 'locked',
				'Saw Massacre': 'locked',
				'Fully Loaded': 'locked'
			}
		}
	},
	technician: {
		Engineer: {
			tier: 1,
			points: 0,
			upgrades: {
				'Third Law': 'available',
				'Sentry Targeting Package': 'locked',
				'Eco Sentry': 'locked',
				Engineering: 'locked',
				'Jack of All Trades': 'locked',
				'Tower Defense': 'locked'
			}
		},
		Breacher: {
			tier: 1,
			points: 0,
			upgrades: {
				'Hardware Expert': 'available',
				'Combat Engineering': 'locked',
				'Drill Sawgeant': 'locked',
				'More Firepower': 'locked',
				Kickstarter: 'locked',
				'Fire Trap': 'locked'
			}
		},
		Oppressor: {
			tier: 1,
			points: 0,
			upgrades: {
				'Steady Grip': 'available',
				'Heavy Impact': 'locked',
				'Fire Control': 'locked',
				'Lock N\' Load': 'locked',
				Surefire: 'locked',
				'Body Expertise': 'locked'
			}
		}
	},
	ghost: {
		Shinobi: {
			tier: 1,
			points: 0,
			upgrades: {
				Chamaleon: 'available',
				Cleaner: 'locked',
				'Sixth Sense': 'locked',
				Nimble: 'locked',
				'ECM Overdrive': 'locked',
				'ECM Specialist': 'locked'
			}
		},
		'Artful Dodger': {
			tier: 1,
			points: 0,
			upgrades: {
				'Duck and Cover': 'available',
				Parkour: 'locked',
				'Inner Pockets': 'locked',
				'Dire Need': 'locked',
				Shockproof: 'locked',
				'Sneaky Bastard': 'locked'
			}
		},
		'Silent Killer': {
			tier: 1,
			points: 0,
			upgrades: {
				'Second Wind': 'available',
				'Optical Illusions': 'locked',
				'The Professional': 'locked',
				'Low Blow': 'locked',
				'High Value Target': 'locked',
				'Unseen Strike': 'locked'
			}
		}
	},
	fugitive: {
		Gunslinger: {
			tier: 1,
			points: 0,
			upgrades: {
				Equilibrium: 'available',
				'Gun Nut': 'locked',
				Akimbo: 'locked',
				'One Handed Talent': 'locked',
				Desperado: 'locked',
				'Trigger Happy': 'locked'
			}
		},
		Revenant: {
			tier: 1,
			points: 0,
			upgrades: {
				'Nine Lives': 'available',
				'Running from Death': 'locked',
				'Up You Go': 'locked',
				'Swan Song': 'locked',
				'Feign Death': 'locked',
				Messiah: 'locked'
			}
		},
		Brawler: {
			tier: 1,
			points: 0,
			upgrades: {
				'Martial Arts': 'available',
				Bloodthirst: 'locked',
				'Pumping Iron': 'locked',
				Counterstrike: 'locked',
				Berserker: 'locked',
				Frenzy: 'locked'
			}
		}
	}
}
const buildOneTrees: Trees = {
	mastermind: {
		Medic: {
			points: 28,
			tier: 4,
			upgrades: {
				'Combat Medic': 'basic',
				'Quick Fix': 'aced',
				Painkillers: 'available',
				Uppers: 'available',
				'Combat Doctor': 'aced',
				Inspire: 'aced'
			}
		},
		Controller: {
			points: 18,
			tier: 4,
			upgrades: {
				'Forced Friendship': 'basic',
				Confident: 'aced',
				Joker: 'basic',
				'Stockholm Syndrome': 'available',
				'Partners in Crime': 'aced',
				'Hostage Taker': 'available'
			}
		},
		Sharpshooter: {
			tier: 1,
			points: 0,
			upgrades: {
				'Stable Shot': 'available',
				Rifleman: 'locked',
				Marksman: 'locked',
				'Ammo Efficiency': 'locked',
				'Aggressive Reload': 'locked',
				Graze: 'locked'
			}
		}
	},
	enforcer: {
		Shotgunner: {
			points: 20,
			tier: 4,
			upgrades: {
				Underdog: 'aced',
				'Shotgun CQB': 'aced',
				'Shotgun Impact': 'aced',
				'Far Away': 'available',
				'Close By': 'available',
				Overkill: 'basic'
			}
		},
		Tank: {
			points: 9,
			tier: 3,
			upgrades: {
				Resilience: 'aced',
				'Die Hard': 'basic',
				Transporter: 'available',
				'Shock and Awe': 'available',
				Bullseye: 'basic',
				'Iron Man': 'locked'
			}
		},
		'Ammo Specialist': {
			tier: 1,
			points: 0,
			upgrades: {
				Scavenger: 'available',
				Bulletstorm: 'locked',
				'Portable Saw': 'locked',
				'Extra Lead': 'locked',
				'Saw Massacre': 'locked',
				'Fully Loaded': 'locked'
			}
		}
	},
	technician: {
		Engineer: {
			tier: 1,
			points: 0,
			upgrades: {
				'Third Law': 'available',
				'Sentry Targeting Package': 'locked',
				'Eco Sentry': 'locked',
				Engineering: 'locked',
				'Jack of All Trades': 'locked',
				'Tower Defense': 'locked'
			}
		},
		Breacher: {
			points: 1,
			tier: 2,
			upgrades: {
				'Hardware Expert': 'basic',
				'Combat Engineering': 'available',
				'Drill Sawgeant': 'available',
				'More Firepower': 'locked',
				Kickstarter: 'locked',
				'Fire Trap': 'locked'
			}
		},
		Oppressor: {
			tier: 1,
			points: 0,
			upgrades: {
				'Steady Grip': 'available',
				'Heavy Impact': 'locked',
				'Fire Control': 'locked',
				'Lock N\' Load': 'locked',
				Surefire: 'locked',
				'Body Expertise': 'locked'
			}
		}
	},
	ghost: {
		Shinobi: {
			tier: 1,
			points: 0,
			upgrades: {
				Chamaleon: 'available',
				Cleaner: 'locked',
				'Sixth Sense': 'locked',
				Nimble: 'locked',
				'ECM Overdrive': 'locked',
				'ECM Specialist': 'locked'
			}
		},
		'Artful Dodger': {
			points: 1,
			tier: 2,
			upgrades: {
				'Duck and Cover': 'basic',
				Parkour: 'available',
				'Inner Pockets': 'available',
				'Dire Need': 'locked',
				Shockproof: 'locked',
				'Sneaky Bastard': 'locked'
			}
		},
		'Silent Killer': {
			points: 20,
			tier: 4,
			upgrades: {
				'Second Wind': 'basic',
				'Optical Illusions': 'aced',
				'The Professional': 'available',
				'Low Blow': 'aced',
				'High Value Target': 'available',
				'Unseen Strike': 'basic'
			}
		}
	},
	fugitive: {
		Gunslinger: {
			points: 7,
			tier: 3,
			upgrades: {
				Equilibrium: 'basic',
				'Gun Nut': 'available',
				Akimbo: 'aced',
				'One Handed Talent': 'available',
				Desperado: 'available',
				'Trigger Happy': 'locked'
			}
		},
		Revenant: {
			points: 4,
			tier: 3,
			upgrades: {
				'Nine Lives': 'aced',
				'Running from Death': 'available',
				'Up You Go': 'available',
				'Swan Song': 'available',
				'Feign Death': 'available',
				Messiah: 'locked'
			}
		},
		Brawler: {
			points: 12,
			tier: 3,
			upgrades: {
				'Martial Arts': 'basic',
				Bloodthirst: 'basic',
				'Pumping Iron': 'available',
				Counterstrike: 'available',
				Berserker: 'aced',
				Frenzy: 'locked'
			}
		}
	}
}
const buildTwoTrees: Trees = {
	mastermind: {
		Medic: {
			points: 12,
			tier: 3,
			upgrades: {
				'Combat Medic': 'basic',
				'Quick Fix': 'basic',
				Painkillers: 'available',
				Uppers: 'aced',
				'Combat Doctor': 'available',
				Inspire: 'locked'
			}
		},
		Controller: {
			points: 30,
			tier: 4,
			upgrades: {
				'Forced Friendship': 'basic',
				Confident: 'aced',
				Joker: 'basic',
				'Stockholm Syndrome': 'available',
				'Partners in Crime': 'aced',
				'Hostage Taker': 'aced'
			}
		},
		Sharpshooter: {
			points: 28,
			tier: 4,
			upgrades: {
				'Stable Shot': 'aced',
				Rifleman: 'available',
				Marksman: 'available',
				'Ammo Efficiency': 'aced',
				'Aggressive Reload': 'basic',
				Graze: 'aced'
			}
		}
	},
	enforcer: {
		Shotgunner: {
			tier: 1,
			points: 0,
			upgrades: {
				Underdog: 'available',
				'Shotgun CQB': 'locked',
				'Shotgun Impact': 'locked',
				'Far Away': 'locked',
				'Close By': 'locked',
				Overkill: 'locked'
			}
		},
		Tank: {
			points: 11,
			tier: 3,
			upgrades: {
				Resilience: 'aced',
				'Die Hard': 'basic',
				Transporter: 'basic',
				'Shock and Awe': 'available',
				Bullseye: 'basic',
				'Iron Man': 'locked'
			}
		},
		'Ammo Specialist': {
			tier: 1,
			points: 0,
			upgrades: {
				Scavenger: 'available',
				Bulletstorm: 'locked',
				'Portable Saw': 'locked',
				'Extra Lead': 'locked',
				'Saw Massacre': 'locked',
				'Fully Loaded': 'locked'
			}
		}
	},
	technician: {
		Engineer: {
			points: 12,
			tier: 3,
			upgrades: {
				'Third Law': 'basic',
				'Sentry Targeting Package': 'available',
				'Eco Sentry': 'basic',
				Engineering: 'available',
				'Jack of All Trades': 'aced',
				'Tower Defense': 'locked'
			}
		},
		Breacher: {
			points: 1,
			tier: 2,
			upgrades: {
				'Hardware Expert': 'basic',
				'Combat Engineering': 'available',
				'Drill Sawgeant': 'available',
				'More Firepower': 'locked',
				Kickstarter: 'locked',
				'Fire Trap': 'locked'
			}
		},
		Oppressor: {
			points: 1,
			tier: 2,
			upgrades: {
				'Steady Grip': 'basic',
				'Heavy Impact': 'available',
				'Fire Control': 'available',
				'Lock N\' Load': 'locked',
				Surefire: 'locked',
				'Body Expertise': 'locked'
			}
		}
	},
	ghost: {
		Shinobi: {
			tier: 1,
			points: 0,
			upgrades: {
				Chamaleon: 'available',
				Cleaner: 'locked',
				'Sixth Sense': 'locked',
				Nimble: 'locked',
				'ECM Overdrive': 'locked',
				'ECM Specialist': 'locked'
			}
		},
		'Artful Dodger': {
			points: 1,
			tier: 2,
			upgrades: {
				'Duck and Cover': 'basic',
				Parkour: 'available',
				'Inner Pockets': 'available',
				'Dire Need': 'locked',
				Shockproof: 'locked',
				'Sneaky Bastard': 'locked'
			}
		},
		'Silent Killer': {
			points: 20,
			tier: 4,
			upgrades: {
				'Second Wind': 'basic',
				'Optical Illusions': 'aced',
				'The Professional': 'available',
				'Low Blow': 'aced',
				'High Value Target': 'available',
				'Unseen Strike': 'basic'
			}
		}
	},
	fugitive: {
		Gunslinger: {
			tier: 1,
			points: 0,
			upgrades: {
				Equilibrium: 'available',
				'Gun Nut': 'locked',
				Akimbo: 'locked',
				'One Handed Talent': 'locked',
				Desperado: 'locked',
				'Trigger Happy': 'locked'
			}
		},
		Revenant: {
			points: 4,
			tier: 3,
			upgrades: {
				'Nine Lives': 'aced',
				'Running from Death': 'available',
				'Up You Go': 'available',
				'Swan Song': 'available',
				'Feign Death': 'available',
				Messiah: 'locked'
			}
		},
		Brawler: {
			tier: 1,
			points: 0,
			upgrades: {
				'Martial Arts': 'available',
				Bloodthirst: 'locked',
				'Pumping Iron': 'locked',
				Counterstrike: 'locked',
				Berserker: 'locked',
				Frenzy: 'locked'
			}
		}
	}
}
const buildThreeTrees: Trees = {
	mastermind: {
		Medic: {
			tier: 1,
			points: 0,
			upgrades: {
				'Combat Medic': 'available',
				'Quick Fix': 'locked',
				Painkillers: 'locked',
				Uppers: 'locked',
				'Combat Doctor': 'locked',
				Inspire: 'locked'
			}
		},
		Controller: {
			tier: 1,
			points: 0,
			upgrades: {
				'Forced Friendship': 'available',
				Confident: 'locked',
				Joker: 'locked',
				'Stockholm Syndrome': 'locked',
				'Partners in Crime': 'locked',
				'Hostage Taker': 'locked'
			}
		},
		Sharpshooter: {
			tier: 1,
			points: 0,
			upgrades: {
				'Stable Shot': 'available',
				Rifleman: 'locked',
				Marksman: 'locked',
				'Ammo Efficiency': 'locked',
				'Aggressive Reload': 'locked',
				Graze: 'locked'
			}
		}
	},
	enforcer: {
		Shotgunner: {
			points: 46,
			tier: 4,
			upgrades: {
				Underdog: 'aced',
				'Shotgun CQB': 'aced',
				'Shotgun Impact': 'aced',
				'Far Away': 'aced',
				'Close By': 'aced',
				Overkill: 'aced'
			}
		},
		Tank: {
			points: 0,
			tier: 1,
			upgrades: {
				Resilience: 'available',
				'Die Hard': 'locked',
				Transporter: 'locked',
				'Shock and Awe': 'locked',
				Bullseye: 'locked',
				'Iron Man': 'locked'
			}
		},
		'Ammo Specialist': {
			points: 0,
			tier: 1,
			upgrades: {
				Scavenger: 'available',
				Bulletstorm: 'locked',
				'Portable Saw': 'locked',
				'Extra Lead': 'locked',
				'Saw Massacre': 'locked',
				'Fully Loaded': 'locked'
			}
		}
	},
	technician: {
		Engineer: {
			tier: 1,
			points: 0,
			upgrades: {
				'Third Law': 'available',
				'Sentry Targeting Package': 'locked',
				'Eco Sentry': 'locked',
				Engineering: 'locked',
				'Jack of All Trades': 'locked',
				'Tower Defense': 'locked'
			}
		},
		Breacher: {
			tier: 1,
			points: 0,
			upgrades: {
				'Hardware Expert': 'available',
				'Combat Engineering': 'locked',
				'Drill Sawgeant': 'locked',
				'More Firepower': 'locked',
				Kickstarter: 'locked',
				'Fire Trap': 'locked'
			}
		},
		Oppressor: {
			tier: 1,
			points: 0,
			upgrades: {
				'Steady Grip': 'available',
				'Heavy Impact': 'locked',
				'Fire Control': 'locked',
				'Lock N\' Load': 'locked',
				Surefire: 'locked',
				'Body Expertise': 'locked'
			}
		}
	},
	ghost: {
		Shinobi: {
			tier: 1,
			points: 0,
			upgrades: {
				Chamaleon: 'available',
				Cleaner: 'locked',
				'Sixth Sense': 'locked',
				Nimble: 'locked',
				'ECM Overdrive': 'locked',
				'ECM Specialist': 'locked'
			}
		},
		'Artful Dodger': {
			tier: 1,
			points: 0,
			upgrades: {
				'Duck and Cover': 'available',
				Parkour: 'locked',
				'Inner Pockets': 'locked',
				'Dire Need': 'locked',
				Shockproof: 'locked',
				'Sneaky Bastard': 'locked'
			}
		},
		'Silent Killer': {
			tier: 1,
			points: 0,
			upgrades: {
				'Second Wind': 'available',
				'Optical Illusions': 'locked',
				'The Professional': 'locked',
				'Low Blow': 'locked',
				'High Value Target': 'locked',
				'Unseen Strike': 'locked'
			}
		}
	},
	fugitive: {
		Gunslinger: {
			tier: 1,
			points: 0,
			upgrades: {
				Equilibrium: 'available',
				'Gun Nut': 'locked',
				Akimbo: 'locked',
				'One Handed Talent': 'locked',
				Desperado: 'locked',
				'Trigger Happy': 'locked'
			}
		},
		Revenant: {
			tier: 1,
			points: 0,
			upgrades: {
				'Nine Lives': 'available',
				'Running from Death': 'locked',
				'Up You Go': 'locked',
				'Swan Song': 'locked',
				'Feign Death': 'locked',
				Messiah: 'locked'
			}
		},
		Brawler: {
			tier: 1,
			points: 0,
			upgrades: {
				'Martial Arts': 'available',
				Bloodthirst: 'locked',
				'Pumping Iron': 'locked',
				Counterstrike: 'locked',
				Berserker: 'locked',
				Frenzy: 'locked'
			}
		}
	}
}

const emptyData = '0-90-90-9000'
const buildOneData = '1I3c00w7c10-410-510xk120158'
const buildTwoData = '5g3I8N00e1003810100010xk000100'
const buildThreeData = '0-7%2C0-90-90-4'

describe('encode skills', () => {
	it('default skills', () => {
		const defaultSkills = new URLSearchParams(defaultBuild).get('s')
		deepStrictEqual(emptyData, defaultSkills)
	})

	it('empty trees', () => {
		deepStrictEqual(emptyData, encodeSkills(emptyTrees))
	})

	it('build one', () => {
		deepStrictEqual(buildOneData, encodeSkills(buildOneTrees))
	})

	it('build two', () => {
		deepStrictEqual(buildTwoData, encodeSkills(buildTwoTrees))
	})

	it('build three', () => {
		deepStrictEqual(buildThreeData, encodeSkills(buildThreeTrees))
	})
})

describe('decode skills', () => {

	const skillsStore = create<SkillsStore>()((...a) => ({
		...createStateSlice(...a),
		...createActionSlice(...a)
	}))

	it('empty trees', () => {
		skillsStore.getState().resetSkills()
		skillsStore.getState().importSkillsData(emptyData)
		deepStrictEqual(emptyTrees, skillsStore.getState().trees)
	})

	it('build one', () => {
		skillsStore.getState().resetSkills()
		skillsStore.getState().importSkillsData(buildOneData)
		deepStrictEqual(buildOneTrees, skillsStore.getState().trees)
	})

	it('build two', () => {
		skillsStore.getState().resetSkills()
		skillsStore.getState().importSkillsData(buildTwoData)
		deepStrictEqual(buildTwoTrees, skillsStore.getState().trees)
	})

	it('build three', () => {
		skillsStore.getState().resetSkills()
		skillsStore.getState().importSkillsData(buildThreeData)
		deepStrictEqual(buildThreeTrees, skillsStore.getState().trees)
	})
})