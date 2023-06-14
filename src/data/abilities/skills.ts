import { type SkillTreeName } from './skillsMinimised'

export interface TreeData {
	name: SkillTreeName;
	subtrees: Record<string, SubtreeData>;
}

export interface SubtreeData {
	name: string;
	upgrades: Record<string, SkillData>;
}

export interface SkillData {
	name: string;
	description: string[];
	vr_description?: string;
	pos: [number, number];
	tier: 1 | 2 | 3 | 4;
}

const skills: Record<SkillTreeName, TreeData> = {
	mastermind: {
		name: 'mastermind',
		subtrees: {
			'Medic': {
				name: 'Medic',
				upgrades: {
					'Combat Medic': {
						name: 'Combat Medic',
						description: [
							'You gain a 30% damage reduction for 5 seconds both after and during reviving another player.',
							'Reviving a crew member gives them 30% more health.'
						],
						pos: [400, 560],
						tier: 1
					},
					'Quick Fix': {
						name: 'Quick Fix',
						description: [
							'Decreases your First Aid Kit and Doctor Bag deploy time by 50%.',
							'Crew Members that use your First Aid Kits or Doctor Bags take 10% less damage for 120 seconds.'
						],
						pos: [80, 880],
						tier: 2
					},
					'Painkillers': {
						name: 'Painkillers',
						description: [
							'Crew members you revive take 30% less damage for 5 seconds.',
							'The damage reduction is increased by an additional 50%'
						],
						pos: [0, 800],
						tier: 2
					},
					'Uppers': {
						name: 'Uppers',
						description: [
							'Adds 7 more First Aid Kits to your inventory.',
							'Adds 3 First Aid Kits to your inventory. Your deployed First Aid Kits will be automatically used if a player is downed within a 5 meter radius of the First Aid Kit. This cannot occur more than once every 20 seconds.'],
						pos: [160, 880],
						tier: 3
					},
					'Combat Doctor': {
						name: 'Combat Doctor',
						description: [
							'You can now deploy 2 Doctor Bags instead of just one.',
							'Your doctor bags have 2 more charges.'
						],
						pos: [400, 640],
						tier: 3
					},
					'Inspire': {
						name: 'Inspire',
						description: [
							'You revive crew members 100% faster. Shouting at your teammates will increase their movement and reload speed by 20% for 10 seconds.',
							'There is a 100% chance that you can revive crew members at a distance of up to 9 meters by shouting at them. This cannot occur more than every 20 seconds.'],
						pos: [320, 720],
						tier: 4
					}
				}
			},
			'Controller': {
				name: 'Controller',
				upgrades: {
					'Forced Friendship': {
						name: 'Forced Friendship',
						description: [
							'Increase your supply of cable ties by 4. You can cable tie hostages 75% faster.',
							'You and your crew gain 0.5 damage absorptions for each hostage you have. This effect stacks with up to a maximum of 8 hostages.\nNote: This skill does not stack with other players Forced Friendship skill.'
						],
						pos: [320, 560],
						tier: 1
					},
					'Confident': {
						name: 'Confident',
						description: [
							'The power and range of your intimidation is increased by 50%.',
							'You can now have 2 converted enemies at the same time.'
						],
						pos: [160, 640],
						tier: 2
					},
					'Joker': {
						name: 'Joker',
						description: [
							'You can convert a non-special enemy to fight on your side.\tThis can not be done during stealth and the enemy must have surrendered in order for you to convert them.\nYou can only convert one non-special enemy at a time.',
							'Your converted enemy deals 35% more damage. The time to convert an enemy is reduced by 65%.'
						],
						pos: [480, 640],
						tier: 2
					},
					'Stockholm Syndrome': {
						name: 'Stockholm Syndrome',
						description: [
							'Civilians are intimidated by the noise you make and remain intimidated 50% longer.',
							'Your hostages will not flee when they have been rescued by law enforcers. Whenever you get into custody, your hostages will trade themselves for your safe return. This effect can occur during assaults, but only 1 time during a heist.'
						],
						pos: [240, 640],
						tier: 3
					},
					'Partners in Crime': {
						name: 'Partners in Crime',
						description: [
							'Having a converted enemy increases your movement speed by 10%.\nYour converted enemy takes 45% less damage.',
							'Having a converted enemy increases your health by 30%.\nYour converted enemy takes an additional 54% less damage.'
						],
						pos: [80, 800],
						tier: 3
					},
					'Hostage Taker': {
						name: 'Hostage Taker',
						description: [
							'Having at least one of your own hostage or converted law enforcer makes you regenerate 1.5% health every 5 seconds.',
							'Having at least one of your own hostage or converted law enforcer makes you regenerate 4.5% health every 5 seconds.'
						],
						pos: [160, 800],
						tier: 4
					}
				}
			},
			'Sharpshooter': {
				name: 'Sharpshooter',
				upgrades: {
					'Stable Shot': {
						name: 'Stable Shot',
						description: [
							'You gain 8 weapon stability.',
							'You gain 16 weapon accuracy while standing still.'
						],
						pos: [0, 400],
						tier: 1
					},
					'Rifleman': {
						name: 'Rifleman',
						description: [
							'Your snap to zoom is 100% faster with all weapons.\nYour movement speed is unhindered while using steel sight.',
							'Your weapon zoom level is increased by 25% with all weapons. Your weapon accuracy while moving with SMGs, Assault Rifles and Sniper Rifles is increased by 16.'
						],
						vr_description: 'Addition in VR:\tBASIC: Every kill while aiming down sight will regenerate 2% stamina.\tEvery 25 points of stamina consumed by dashing will refill 5% of their ammo pool to single shot weapons.\tACE: The improved accuracy lasts from 1 up to a maximum of 5 seconds after dashing.',
						pos: [480, 400],
						tier: 2
					},
					'Marksman': {
						name: 'Marksman',
						description: [
							'You gain 8 weapon accuracy with all SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.',
							'You gain a 20% accuracy bonus while aiming down sights with all SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.'
						],
						pos: [640, 80],
						tier: 2
					},
					'Ammo Efficiency': {
						name: 'Ammo Efficiency',
						description: [
							'Getting 3 headshots in less than 6 seconds will refund 1 bullet to your used weapon. Can only be triggered by SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.',
							'The amount of headshots required is reduced to 2.'
						],
						pos: [640, 320],
						tier: 3
					},
					'Aggressive Reload': {
						name: 'Aggressive Reload',
						description: [
							'Increases your reload speed with SMGs, Assault Rifles and Sniper Rifles by 15%.',
							'Any killing headshot will increase your reload speed by 100% for 4 seconds. Can only be triggered by SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.'
						],
						pos: [640, 240],
						tier: 3
					},
					'Graze': {
						name: 'Graze',
						description: [
							'Snipers that hit their target deal 20% of the damage dealt in a 100cm radius around the bullet trajectory.',
							'If a bullet would headshot-kill someone, the graze skill will deal 100% of the weapon\'s damage instead of 20%.'
						],
						pos: [880, 720],
						tier: 4
					}
				}
			}
		}
	},
	enforcer: {
		name: 'enforcer',
		subtrees: {
			'Shotgunner': {
				name: 'Shotgunner',
				upgrades: {
					'Underdog': {
						name: 'Underdog',
						description: [
							'When three or more enemies within 10 meters are targeting you, you receive a 15% damage bonus that lasts for 7 seconds.',
							'When three or more enemies within 18 meters are targeting you, you also receive a 10% damage reduction that lasts for 7 seconds.\nNote: Does not apply to melee damage, throwables, grenade launchers or rocket launchers.'
						],
						pos: [160, 80],
						tier: 1
					},
					'Shotgun CQB': {
						name: 'Shotgun CQB',
						description: [
							'You reload Shotguns 15% faster.',
							'You reload Shotguns 35% faster. You gain a 125% increased steel sight zoom speed when using Shotguns.'
						],
						vr_description: 'Addition in VR:\tACE: Every kill while aiming down sight will regenerate 2% stamina.',
						pos: [640, 560],
						tier: 2
					},
					'Shotgun Impact': {
						name: 'Shotgun Impact',
						description: [
							'Your weapon stability with all shotguns is increased by 8. You deal 5% more damage with Shotguns.',
							'You deal an additional 10% more damage with shotguns.'
						],
						pos: [320, 80],
						tier: 2
					},
					'Far Away': {
						name: 'Far Away',
						description: [
							'Your accuracy bonus while aiming down sights with Shotguns is increased by 40%.',
							'You gain a 50% increased effective range with Shotguns when aiming down sights.'
						],
						pos: [640, 400],
						tier: 3
					},
					'Close By': {
						name: 'Close By',
						description: [
							'You can now hip-fire with your Shotguns while sprinting.',
							'Your rate of fire is increased by 35% while firing from the hip with single shot Shotguns. Shotguns with magazines have their magazine sizes increased by 15 shells'
						],
						vr_description: 'Addition in VR:\tBASIC: After dashing the player kills have a 100% chance to fear enemies within 8 meters of the player for 1 up to a maximum of 3 seconds depending on the amount of stamina consumed by the jump.',
						pos: [640, 480],
						tier: 3
					},
					'Overkill': {
						name: 'Overkill',
						description: [
							'When you kill an enemy with a Shotgun or the OVE9000 portable saw, you receive 75% damage increase for 20 seconds.',
							'The damage bonus now applies to all weapons. Skill must still be activated using a Shotgun or the OVE9000 portable saw. Your weapon swap speed is increased by 80%.\nNote: Does not apply to melee damage, throwables, grenade launchers or rocket launchers.'
						],
						pos: [240, 160],
						tier: 4
					}
				}
			},
			'Tank': {
				name: 'Tank',
				upgrades: {
					'Resilience': {
						name: 'Resilience',
						description: [
							'Increases your armor recovery rate by 15%.',
							'Reduces the visual effect duration of Flashbangs by 75%.'
						],
						pos: [160, 960],
						tier: 1
					},
					'Die Hard': {
						name: 'Die Hard',
						description: [
							'You take 50% less damage while interacting with objects.',
							'Increases the armor of all Ballistic vests by 20.'
						],
						pos: [640, 720],
						tier: 2
					},
					'Transporter': {
						name: 'Transporter',
						description: [
							'You can throw bags 50% further.',
							'For each 10 armor points the bag movement penalty is reduced by 1%.'
						],
						pos: [640, 640],
						tier: 2
					},
					'Shock and Awe': {
						name: 'Shock and Awe',
						description: [
							'Increases the armor recovery rate for you and your crew by 25%.',
							'Enables your weapons to have a chance to knock back Shield enemies when attacking them. Ranged weapons\' knockback chance is increased the higher the total damage of the weapon is. Melee weapons\' knockback chance is 100%.'
						],
						pos: [640, 800],
						tier: 3
					},
					'Bullseye': {
						name: 'Bullseye',
						description: [
							'You regenerate 5 armor for each successful headshot. This can not occur more than once every 2 seconds.',
							'You regenerate an additional 20 armor for each successful headshot.'
						],
						pos: [480, 880],
						tier: 3
					},
					'Iron Man': {
						name: 'Iron Man',
						description: [
							'Your total armor value is increased by 30%.',
							'Unlocks the ability to wear the Improved Combined Tactical Vest.'
						],
						pos: [240, 80],
						tier: 4
					}
				}
			},
			'Ammo Specialist': {
				name: 'Ammo Specialist',
				upgrades: {
					'Scavenger': {
						name: 'Scavenger',
						description: [
							'Your ammo pick up range is increased by 50%.',
							'Every 6th enemy you kill will drop an extra ammo box.'
						],
						pos: [640, 880],
						tier: 1
					},
					'Bulletstorm': {
						name: 'Bulletstorm',
						description: [
							'Ammo bags placed by you grant players the ability to shoot without depleting their ammunition for up to 5 seconds after interacting with it. The more ammo players replenish, the longer the duration of the effect.',
							'Increases the base duration of the effect by up to 15 seconds.'
						],
						pos: [320, 400],
						tier: 2
					},
					'Portable Saw': {
						name: 'Portable Saw',
						description: [
							'Unlocks the OVE9000 portable saw for you to use as a secondary weapon.',
							'You gain 1 extra saw blade for the OVE9000 portable saw. You replace your saw blades with carbon blades, increasing your saw efficiency by 40%.'
						],
						pos: [0, 80],
						tier: 2
					},
					'Extra Lead': {
						name: 'Extra Lead',
						description: [
							'You can now place 2 ammo bags instead of just one.',
							'Each ammo bag now contains 50% more ammunition.'
						],
						pos: [560, 80],
						tier: 3
					},
					'Saw Massacre': {
						name: 'Saw Massacre',
						description: [
							'Reducing the wear down of the blades on enemies by 50%.',
							'You can now saw through shield enemies with your OVE9000 portable saw. When killing an enemy with the saw, you have a 50% chance to cause nearby enemies in a 10m radius to panic. Panic will make enemies go into short bursts of uncontrollable fear.'
						],
						pos: [0, 160],
						tier: 3
					},
					'Fully Loaded': {
						name: 'Fully Loaded',
						description: [
							'Your total ammo capacity is increased by 25%.',
							'Increases the amount of ammo you gain from ammo boxes by 75%. You also gain a 5% base chance to get a throwable from an ammo box. The base chance is increased by 1% for each ammo box you pick up that does not contain a throwable. When a throwable has been found, the chance is reset to it\'s base value\nNote: Does not stack with the perk deck skill \'Walk-in Closet\'.'
						],
						pos: [240, 0],
						tier: 4
					}
				}
			}
		}
	},
	technician: {
		name: 'technician',
		subtrees: {
			'Engineer': {
				name: 'Engineer',
				upgrades: {
					'Third Law': {
						name: 'Third Law',
						description: [
							'The cost of deploying a sentry gun is reduced by 5%.',
							'Your sentry guns gain a protective shield.'
						],
						pos: [720, 0],
						tier: 1
					},
					'Sentry Targeting Package': {
						name: 'Sentry Targeting Package',
						description: [
							'Your sentry guns gain a 100% increase in accuracy.',
							'Your sentry guns rotation speed is increased by 150%. Your sentry guns also have 50% more ammunition.'
						],
						pos: [720, 80],
						tier: 2
					},
					'Eco Sentry': {
						name: 'Eco Sentry',
						description: [
							'The cost of deploying a sentry gun is reduced by 5%.',
							'Your sentry guns gain 150% increased health.'
						],
						pos: [720, 160],
						tier: 2
					},
					'Engineering': {
						name: 'Engineering',
						description: [
							'You can now select a less noisy version of the sentry guns, making them much less likely to be targeted by enemies.',
							'You can now toggle AP rounds on your sentry guns, lowering the rate of fire by 75%, but increasing damage by 250% and allowing it to pierce through enemies and shields.'
						],
						pos: [720, 240],
						tier: 3
					},
					'Jack of All Trades': {
						name: 'Jack of All Trades',
						description: [
							'You deploy and interact with all deployable 100% faster.',
							'You can now equip a secondary deployable to bring with you. If your deployable is equipped as a secondary deployable, you can only bring half of what you should bring if it was equipped as a primary deployable.'
						],
						pos: [720, 320],
						tier: 3
					},
					'Tower Defense': {
						name: 'Tower Defense',
						description: [
							'You can now carry 1 extra sentry gun.',
							'You can now carry an additional 2 extra sentry guns.'
						],
						pos: [720, 400],
						tier: 4
					}
				}
			},
			'Breacher': {
				name: 'Breacher',
				upgrades: {
					'Hardware Expert': {
						name: 'Hardware Expert',
						description: [
							'You fix drills and saws 25% faster. Decreases trip mine deploy time by 20%. Drills and saws are also silent. Civilians and guards must see the drill or saw in order to become alerted.',
							'Gives your drills and saws a 10% chance to automatically restart after breaking\nNote: Skill does not affect the OVE9000 saw.'
						],
						pos: [720, 480],
						tier: 1
					},
					'Combat Engineering': {
						name: 'Combat Engineering',
						description: [
							'The radius of your trip mine explosion is increased by 30%.',
							'Your trip mine damage is increased by 50%.'
						],
						pos: [80, 400],
						tier: 2
					},
					'Drill Sawgeant': {
						name: 'Drill Sawgeant',
						description: [
							'Your drill and saw timer is decreased by 15%.',
							'Your drill and saw timer is decreased by an additional 15%.\nNote: Skill does not affect the OVE9000 saw'
						],
						pos: [240, 480],
						tier: 2
					},
					'More Firepower': {
						name: 'More Firepower',
						description: [
							'You gain 1 more shaped charge and 4 more trip mines.',
							'You gain more shaped charges and 7 more trip mines.'
						],
						pos: [720, 560],
						tier: 3
					},
					'Kickstarter': {
						name: 'Kickstarter',
						description: [
							'Your drills and saws gain an additional 20% chance to automatically restart after breaking.',
							'Enables the ability to reset a broken drill or saw with a melee attack. The ability has a 50% chance to fix the drill or saw. The ability can only be used once per time the drill or saw is broken.\nNote: Skill does not affect the OVE9000 saw.'
						],
						pos: [720, 640],
						tier: 3
					},
					'Fire Trap': {
						name: 'Fire Trap',
						description: [
							'Your trip mines now spread fire around the area of detonation for 10 seconds in a 4 meter diameter.',
							'Increases the fire effect duration by 10 seconds and increases the fire effect radius by 50%.'
						],
						pos: [720, 720],
						tier: 4
					}
				}
			},
			'Oppressor': {
				name: 'Oppressor',
				upgrades: {
					'Steady Grip': {
						name: 'Steady Grip',
						description: [
							'You gain 8 weapon accuracy.',
							'You gain 16 weapon stability.'
						],
						pos: [720, 880],
						tier: 1
					},
					'Heavy Impact': {
						name: 'Heavy Impact',
						description: [
							'Your shots have a 5% chance to stagger all enemies except Bulldozers and Captain Winters.',
							'Increases your stagger chance to 20%.'
						],
						pos: [880, 80],
						tier: 2
					},
					'Fire Control': {
						name: 'Fire Control',
						description: [
							'You gain 12 weapon accuracy while firing from the hip.',
							'Your accuracy penalty is decreased by 20% when shooting while moving.'
						],
						vr_description: 'Addition in VR:\tACE: The decreased accuracy penalty lasts from 1 up to a maximum of 5 seconds after dashing.',
						pos: [720, 800],
						tier: 2
					},
					'Lock N\' Load': {
						name: 'Lock N\' Load',
						description: [
							'You can how hip-fire with your weapons while sprinting.',
							'Killing 2 enemies with SMGs, LMGs, Assault Rifles or Special Weapons set on automatic fire mode will increase your next reload speed by up to 100%. This bonus is reduced by 1% for each bullet above 20 in the total magazine size, down to a maximum of 40% reload speed increase.'
						],
						vr_description: 'Addition in VR:\tBASIC: Every 40 points of stamina consumed by dashing will refill 5% of their ammo pool to automatic weapons.',
						pos: [800, 0],
						tier: 3
					},
					'Surefire': {
						name: 'Surefire',
						description: [
							'Your SMGs, LMGs and Assault Rifles gain 15 more bullets in their magazines. This does not affect the \'Lock n\' Load\' Ace skill.',
							'Your ranged weapons can now pierce through enemy body armor.\nNote: Does not apply to throwable weapons.'
						],
						pos: [800, 160],
						tier: 3
					},
					'Body Expertise': {
						name: 'Body Expertise',
						description: [
							'30% from the bonus headshot damage is permanently applied to hitting enemies on the body. This skill is only activated by SMGs, LMGs, Assault Rifles or Special Weapons fired in automatic fire mode.',
							'90% from the bonus headshot damage is permanently applied to hitting enemies on the body. This skill is only activated by SMGs, LMGs, Assault Rifles or Special Weapons fired in automatic fire mode.'
						],
						pos: [800, 240],
						tier: 4
					}
				}
			}
		}
	},
	ghost: {
		name: 'ghost',
		subtrees: {
			'Shinobi': {
				name: 'Shinobi',
				upgrades: {
					'Chamaleon': {
						name: 'Chamaleon',
						description: [
							'Increases the time before you start getting detected by 25% while in casing mode. You can also mark enemies while in casing mode.',
							'You can pick up items while in casing mode. You can also gain 30% more value to items and cash that you pick up.'
						],
						pos: [400, 240],
						tier: 1
					},
					'Cleaner': {
						name: 'Cleaner',
						description: [
							'You gain 1 additional body bag in your inventory. Also increases the body bag inventory space to 3.',
							'You gain the ability to place 2 body bags cases.'
						],
						pos: [560, 160],
						tier: 2
					},
					'Sixth Sense': {
						name: 'Sixth Sense',
						description: [
							'You gain the ability to automatically mark enemies within a 10 meter radius around you after standing still for 3.5 seconds while in stealth.',
							'You gain access to all insider assets. Cleaning costs after killing a civilian is reduced by 75%.'
						],
						pos: [480, 800],
						tier: 2
					},
					'Nimble': {
						name: 'Nimble',
						description: [
							'You gain the ability to disable 1 camera from detecting you and your crew. Effect lasts for 25 seconds.',
							'You lockpick 100% faster. You also gain the ability to lockpick safes.'
						],
						pos: [800, 320],
						tier: 3
					},
					'ECM Overdrive': {
						name: 'ECM Overdrive',
						description: [
							'Your ECM jammer and feedback duration is increased by 25%.',
							'Your ECM jammer can now also be used to open certain electronic doors.'
						],
						pos: [480, 240],
						tier: 3
					},
					'ECM Specialist': {
						name: 'ECM Specialist',
						description: [
							'You can now place 2 ECM jammers instead of just one.',
							'The ECM jammer duration is increased by an additional 25% and the ECM feedback duration lasts 25% longer. Pagers are delayed by the ECM jammers.'
						],
						pos: [240, 320],
						tier: 4
					}
				}
			},
			'Artful Dodger': {
				name: 'Artful Dodger',
				upgrades: {
					'Duck and Cover': {
						name: 'Duck and Cover',
						description: [
							'Your stamina starts regenerating 25% earlier and 25% faster. You also sprint 25% faster.',
							'You have a 10% increased chance to dodge while sprinting you gain 15% chance to dodge while ziplining.'
						],
						vr_description: 'Addition in VR\tACE: The increased dodge chance lasts from 1 up to a maximum of 5 seconds after dashing.',
						pos: [800, 400],
						tier: 1
					},
					'Parkour': {
						name: 'Parkour',
						description: [
							'You gain 10% additional movement speed and 20% increased speed while climbing ladders.',
							'You gain the ability to sprint in any direction.\nRun and reload — you can reload your weapons while sprinting'
						],
						vr_description: 'Addition in VR:\tACE: After dashing you will get 20% up to a maximum of 50% reload speed increase.',
						pos: [800, 480],
						tier: 2
					},
					'Inner Pockets': {
						name: 'Inner Pockets',
						description: [
							'Increases the concealment of melee weapons by 2.',
							'Increases the concealment of all ballistic vests by 4.'
						],
						pos: [800, 560],
						tier: 2
					},
					'Dire Need': {
						name: 'Dire Need',
						description: [
							'When your armor breaks, the first shot on every enemy will cause that enemy to stagger. This effect ends when your armor recovers.',
							'The effect persists for 6 after your armor has recovered.'
						],
						pos: [800, 640],
						tier: 3
					},
					'Shockproof': {
						name: 'Shockproof',
						description: [
							'When tased, the shock effect has a 30% chance to backfire on the Taser, knocking them back.',
							'When tased, you are able to free yourself from the taser by interacting with it within 2 seconds of getting tased.'
						],
						pos: [240, 400],
						tier: 3
					},
					'Sneaky Bastard': {
						name: 'Sneaky Bastard',
						description: [
							'You gain a 1% chance for every 3 points of detection rate under 35 up to 10%.',
							'You gain a 1% dodge chance for every 1 point of detection rate under 35 up to 10%.'
						],
						pos: [80, 960],
						tier: 4
					}
				}
			},
			'Silent Killer': {
				name: 'Silent Killer',
				upgrades: {
					'Second Wind': {
						name: 'Second Wind',
						description: [
							'When your armor breaks your movement speed is increased by 30% for 5 seconds.',
							'This effect also applies to your crew when triggered.'
						],
						pos: [800, 720],
						tier: 1
					},
					'Optical Illusions': {
						name: 'Optical Illusions',
						description: [
							'You are 35% less likely to be targeted by enemies.',
							'You gain 1 concealment for each silenced weapon you equip and reduces the concealment penalty of silencers by 2.'
						],
						pos: [800, 800],
						tier: 2
					},
					'The Professional': {
						name: 'The Professional',
						description: [
							'You gain 8 weapon stability and 100% snap to zoom speed increase with silenced weapons.',
							'You gain 12 weapon accuracy with silenced weapons.'
						],
						vr_description: 'Addition in VR:\tBASIC: Every kill while aiming down sight will regenerate 2% stamina.',
						pos: [320, 320],
						tier: 2
					},
					'Low Blow': {
						name: 'Low Blow',
						description: [
							'You gain a 3% critical hit for every 3 points of detection rate under 35 up to 30%.',
							'You gain 3% critical hit chance for every 1 point of detection rate under 35 up to 30%.\nNote: Does not apply to grenade launchers.'
						],
						pos: [0, 960],
						tier: 3
					},
					'High Value Target': {
						name: 'High Value Target',
						description: [
							'Enemies you mark take 15% more damage.',
							'Enemies you mark take an additional 50% damage when further away than 10 meters. Increase the duration of marked enemies by 100% and you can now mark specials by aiming down at them with any weapon.'
						],
						pos: [640, 160],
						tier: 3
					},
					'Unseen Strike': {
						name: 'Unseen Strike',
						description: [
							'If you do not lose any armor or health for 4 seconds, you gain 35% critical hit chance for 6 seconds.',
							'The critical hit chance duration is increased to 18 seconds.\nTaking any damage will cancel the effect.'
						],
						pos: [800, 880],
						tier: 4
					}
				}
			}
		}
	},
	fugitive: {
		name: 'fugitive',
		subtrees: {
			'Gunslinger': {
				name: 'Gunslinger',
				upgrades: {
					'Equilibrium': {
						name: 'Equilibrium',
						description: [
							'Decreases the time it takes to draw end holster pistols by 33%.',
							'You gain 8 weapon accuracy with all pistols.'
						],
						pos: [240, 720],
						tier: 1
					},
					'Gun Nut': {
						name: 'Gun Nut',
						description: [
							'Your pistol magazine sizes are increased by 5 bullets.',
							'You gain a 50% increased rate of fire with pistols.'
						],
						pos: [880, 0],
						tier: 2
					},
					'Akimbo': {
						name: 'Akimbo',
						description: [
							'Your Akimbo weapons\' stability penalty is reduced by 8.',
							'Your Akimbo weapons\' stability penalty is reduced by an additional 8 and they also have 50% increased ammo capacity.'
						],
						pos: [240, 880],
						tier: 2
					},
					'One Handed Talent': {
						name: 'One Handed Talent',
						description: [
							'The base damage of all pistols is increased by 5.',
							'The base damage of all pistols is increased by an additional 10 damage.'
						],
						pos: [560, 880],
						tier: 3
					},
					'Desperado': {
						name: 'Desperado',
						description: [
							'Each successful pistol hit gives you a 10% accuracy bonus for 10% and you can stack it 4 times.',
							'You reload 50% faster.'
						],
						pos: [880, 80],
						tier: 3
					},
					'Trigger Happy': {
						name: 'Trigger Happy',
						description: [
							'For every hit with a pistol you gain a 120% damage boost that lasts for 2 seconds.\tStacks up to 1 time.',
							'Increases the damage boost duration to 4 seconds.'
						],
						pos: [880, 160],
						tier: 4
					}
				}
			},
			'Revenant': {
				name: 'Revenant',
				upgrades: {
					'Nine Lives': {
						name: 'Nine Lives',
						description: [
							'You gain a 50% increase to your bleedout health.',
							'You gain the ability to get downed 1 more time before going into custody.'
						],
						pos: [400, 160],
						tier: 1
					},
					'Running from Death': {
						name: 'Running from Death',
						description: [
							'You reload and swap weapons 100% faster for 10% seconds after being revived.',
							'You move 30% faster for 10 seconds after being revived.'
						],
						pos: [880, 240],
						tier: 2
					},
					'Up You Go': {
						name: 'Up You Go',
						description: [
							'You take 30% less damage for 10 seconds after being revived.',
							'You receive 40% more health when revived.'
						],
						pos: [880, 320],
						tier: 2
					},
					'Swan Song': {
						name: 'Swan Song',
						description: [
							'Instead of getting downed instantly, you gain the ability to keep on fighting for 3 seconds with a 60% movement penalty before going down.\nNote: Does not trigger on fall or fire damage.',
							'Increases the duration of Swan Song by 3 seconds. Ammunition won\'t be depleted while the effect is active.'
						],
						pos: [400, 960],
						tier: 3
					},
					'Feign Death': {
						name: 'Feign Death',
						description: [
							'When you get downed, you have a 15% chance to instantly get revived',
							'The chance to get instantly revived is increased by an additional 30%.'
						],
						pos: [880, 400],
						tier: 3
					},
					'Messiah': {
						name: 'Messiah',
						description: [
							'While in bleedout, you can revive yourself if you kill an enemy. You only have 1 charge.',
							'Your messiah charge is replenished whenever you use a doctor bag.'
						],
						pos: [160, 720],
						tier: 4
					}
				}
			},
			'Brawler': {
				name: 'Brawler',
				upgrades: {
					'Martial Arts': {
						name: 'Martial Arts',
						description: [
							'You take 50% less damage from all melee attacks. Because of training.',
							'You are 50% more likely to knock down enemies with a melee strike.'
						],
						pos: [880, 560],
						tier: 1
					},
					'Bloodthirst': {
						name: 'Bloodthirst',
						description: [
							'Every kill you get will increase your next melee attack damage by 100%, up to a maximum of 1600%. This effect gets reset when you kill an enemy with a melee attack.',
							'Whenever you kill an enemy with a melee attack, you will gain a 50% increase in reload speed for 10 seconds.'
						],
						pos: [880, 480],
						tier: 2
					},
					'Pumping Iron': {
						name: 'Pumping Iron',
						description: [
							'Your melee attacks against non-special enemies do 100% more damage.',
							'Your melee attacks against special enemies do 100% more damage'
						],
						pos: [80, 240],
						tier: 2
					},
					'Counterstrike': {
						name: 'Counterstrike',
						description: [
							'When charging your melee weapons you will counterattack enemies that try to strike you, knocking them down. The knockdown does not deal any damage',
							'You gain the ability to counterattack cloakers and their kicks'
						],
						pos: [320, 960],
						tier: 3
					},
					'Berserker': {
						name: 'Berserker',
						description: [
							'The lower your health, the more damage you do. When your health is below 50%, you will do up to 250% more melee and saw damage.',
							'The lower your health, the more damage you do. When your health is below 50%, you will do up to 100% more damage with ranged weapons as well.\nNote: Does not apply to throwables, grenade launchers or rocket launchers.\nEntering berserker state negates third-party regeneration effects.'
						],
						pos: [160, 160],
						tier: 3
					},
					'Frenzy': {
						name: 'Frenzy',
						description: [
							'You only get 30% of your maximum health and cannot heal above it but you take 10% less damage and healing received is reduced by 75%.',
							'Damage taken is now reduced by 25% and healing received is reduced by 0%'
						],
						pos: [880, 640],
						tier: 4
					}
				}
			}
		}
	}
}

export default skills