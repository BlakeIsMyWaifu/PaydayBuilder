export default {
	"mastermind": {
		"medic": [
			{
				"name": "Combat Medic",
				"description": "BASIC: 1 point\tYou gain a 30% damage reduction for 5 seconds both after and during reviving another player.\nACE: 3 points\tReviving a crew member gives them 30% more health.",
				"pos": [400, 560],
				"tier": 1
			},
			{
				"name": "Quick Fix",
				"description": "BASIC: 2 points\tDecreases your First Aid Kit and Doctor Bag deploy time by 50%.\nACE: 4 points\tCrew Members that use your First Aid Kits or Doctor Bags take 10% less damage for 120 seconds.",
				"pos": [80, 880],
				"tier": 2
			},
			{
				"name": "Painkillers",
				"description": "BASIC: 2 points\tCrew members you revive take 30% less damage for 5 seconds.\nACE: 4 points\tThe damage reduction is increased by an additional 50%",
				"pos": [0, 800],
				"tier": 2
			},
			{
				"name": "Uppers",
				"description": "BASIC: 3 points\tAdds 7 more First Aid Kits to your inventory.\nACE: 6 points\tAdds 3 First Aid Kits to your inventory. Your deployed First Aid Kits will be automatically used if a player is downed within a 5 meter radius of the First Aid Kit. This cannot occur more than once every 20 seconds.",
				"pos": [160, 880],
				"tier": 3
			},
			{
				"name": "Combat Doctor",
				"description": "BASIC: 3 points\tYou can now deploy 2 Doctor Bags instead of just one.\nACE: 6 points\tYour doctor bags have 2 more charges.",
				"pos": [400, 640],
				"tier": 3
			},
			{
				"name": "Inspire",
				"description": "BASIC: 4 points\tYou revive crew members 100% faster. Shouting at your teammates will increase their movement and reload speed by 20% for 10 seconds.\nACE: 8 points\tThere is a 100% chance that you can revive crew members at a distance of up to 9 meters by shouting at them. This cannot occur more than every 20 seconds.",
				"pos": [320, 720],
				"tier": 4
			}
		],
		"controller": [
			{
				"name": "Forced Friendship",
				"description": "BASIC: 1 point\tIncrease your supply of cable ties by 4. You can cable tie hostages 75% faster.\nACE: 3 points\tYou and your crew gain 0.5 damage absorptions for each hostage you have. This effect stacks with up to a maximum of 8 hostages.\nNote: This skill does not stack with other players Forced Friendship skill.",
				"pos": [320, 560],
				"tier": 1
			},
			{
				"name": "Confident",
				"description": "BASIC: 2 points\tThe power and range of your intimidation is increased by 50%.\nACE: 4 points\tYou can now have 2 converted enemies at the same time.",
				"pos": [160, 640],
				"tier": 2
			},
			{
				"name": "Joker",
				"description": "BASIC: 2 points\tYou can convert a non-special enemy to fight on your side.\tThis can not be done during stealth and the enemy must have surrendered in order for you to convert them.\nYou can only convert one non-special enemy at a time.\nACE: 4 points\tYour converted enemy deals 35% more damage. The time to convert an enemy is reduced by 65%.",
				"pos": [480, 640],
				"tier": 2
			},
			{
				"name": "Stockholm Syndrome",
				"description": "BASIC: 3 points\tCivilians are intimidated by the noise you make and remain intimidated 50% longer.\nACE: 6 points\tYour hostages will not flee when they have been rescued by law enforcers. Whenever you get into custody, your hostages will trade themselves for your safe return. This effect can occur during assaults, but only 1 time during a heist.",
				"pos": [240, 640],
				"tier": 3
			},
			{
				"name": "Partners in Crime",
				"description": "BASIC: 3 points\tHaving a converted enemy increases your movement speed by 10%.\nYour converted enemy takes 45% less damage.\nACE: 6 points\tHaving a converted enemy increases your health by 30%.\nYour converted enemy takes an additional 54% less damage.",
				"pos": [80, 800],
				"tier": 3
			},
			{
				"name": "Hostage Taker",
				"description": "BASIC: 4 points\tHaving at least one of your own hostage or converted law enforcer makes you regenerate 1.5% health every 5 seconds.\nACE: 8 points\tHaving at least one of your own hostage or converted law enforcer makes you regenerate 4.5% health every 5 seconds.",
				"pos": [160, 800],
				"tier": 4
			}
		],
		"sharpshooter": [
			{
				"name": "Stable Shot",
				"description": "BASIC: 1 point\tYou gain 8 weapon stability.\nACE: 3 points\tYou gain 16 weapon accuracy while standing still.",
				"pos": [0, 400],
				"tier": 1
			},
			{
				"name": "Rifleman",
				"description": "BASIC: 2 points\tYour snap to zoom is 100% faster with all weapons.\nYour movement speed is unhindered while using steel sight.\nACE: 4 points\tYour weapon zoom level is increased by 25% with all weapons. Your weapon accuracy while moving with SMGs, Assault Rifles and Sniper Rifles is increased by 16.",
				"vr_description": "Addition in VR:\tBASIC: Every kill while aiming down sight will regenerate 2% stamina.\tEvery 25 points of stamina consumed by dashing will refill 5% of their ammo pool to single shot weapons.\tACE: The improved accuracy lasts from 1 up to a maximum of 5 seconds after dashing.",
				"pos": [480, 400],
				"tier": 2
			},
			{
				"name": "Marksman",
				"description": "BASIC: 2 points\tYou gain 8 weapon accuracy with all SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.\nACE: 4 points\tYou gain a 20% accuracy bonus while aiming down sights with all SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.",
				"pos": [640, 80],
				"tier": 2
			},
			{
				"name": "Ammo Efficiency",
				"description": "BASIC: 3 points\tGetting 3 headshots in less than 6 seconds will refund 1 bullet to your used weapon. Can only be triggered by SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.\nACE: 6 points\tThe amount of headshots required is reduced to 2.",
				"pos": [640, 320],
				"tier": 3
			},
			{
				"name": "Aggressive Reload",
				"description": "BASIC: 3 points\tIncreases your reload speed with SMGs, Assault Rifles and Sniper Rifles by 15%.\nACE: 6 points\tAny killing headshot will increase your reload speed by 100% for 4 seconds. Can only be triggered by SMGs, Assault Rifles and Sniper Rifles fired in single shot fire mode.",
				"pos": [640, 240],
				"tier": 3
			},
			{
				"name": "Graze",
				"description": "BASIC: 4 points\tSnipers that hit their target deal 20% of the damage dealth in a 100cm radius around the bullet trajectory.\nACE: 8 points\tIf a bullet would headshot-kill someone, the graze skill will deal 100% of the weapon's damage instead of 20%.",
				"pos": [880, 720],
				"tier": 4
			}
		]
	},
	"enforcer": {
		"shotgunner": [
			{
				"name": "Underdog",
				"description": "BASIC: 1 point\tWhen three or more enemies within 10 meters are targeting you, you receive a 15% damage bonus that lasts for 7 seconds.\nACE: 3 points\tWhen three or more enemies within 18 meters are targeting you, you also receive a 10% damage reduction that lasts for 7 seconds.\nNote: Does not apply to melee damage, throwables, grenade launchers or rocket launchers.",
				"pos": [160, 80],
				"tier": 1
			},
			{
				"name": "Shotgun CQB",
				"description": "BASIC: 2 points\tYou reload Shotguns 15% faster.\nACE: 4 points\tYou reload Shotguns 35% faster. You gain a 125% increased steel sight zoom speed when using Shotguns.",
				"vr_description": "Addition in VR:\tACE: Every kill while aiming down sight will regenerate 2% stamina.",
				"pos": [640, 560],
				"tier": 2
			},
			{
				"name": "Shotgun Impact",
				"description": "BASIC: 2 points\tYour weapon stability with all shotguns is increased by 8. You deal 5% more damage with Shotguns.\nACE: 4 points\tYou deal an additional 10% more damage with shotguns.",
				"pos": [320, 80],
				"tier": 2
			},
			{
				"name": "Far Away",
				"description": "BASIC: 3 points\tYour accuracy bonus while aiming down sights with Shotguns is increased by 40%.\nACE: 6 points\tYou gain a 50% increased effective range with Shotguns when aiming down sights.",
				"pos": [640, 400],
				"tier": 3
			},
			{
				"name": "Close By",
				"description": "BASIC: 3 points\tYou can now hip-fire with your Shotguns while sprinting.\nACE: 6 points\tYour rate of fire is increased by 35% while firing from the hip with single shot Shotguns. Sotguns with magazines have their magazine sizes increased by 15 shells",
				"vr_description": "Addition in VR:\tBASIC: After dashing the player kills have a 100% chance to fear enemies within 8 meters of the player for 1 up to a maximum of 3 seconds depending on the amount of stamina consumed by the jump.",
				"pos": [640, 480],
				"tier": 3
			},
			{
				"name": "Overkill",
				"description": "BASIC: 4 points\tWhen you kill an enemy with a Shotgun or the OVE9000 portable saw, you receive 75% damage increase for 20 seconds.\nACE: 8 points\tThe damage bonus now applies to all weapons. Skill must still be activated using a Shotgun or the OVE9000 portable saw. Your weapon swap speed is increased by 80%.\nNote: Does not apply to melee damage, throwables, grenade launchers or rocket launchers.",
				"pos": [240, 160],
				"tier": 4
			}
		],
		"tank": [
			{
				"name": "Resilience",
				"description": "BASIC: 1 point\tIncreases your armor recovery rate by 15%.\nACE: 3 points\tReduces the visual effect duration of Flashbangs by 75%.",
				"pos": [160, 960],
				"tier": 1
			},
			{
				"name": "Die Hard",
				"description": "BASIC: 2 points\tYou take 50% less damage while interacting with objects.\nACE: 4 points\tIncreases the armor of all Ballistic vests by 20.",
				"pos": [640, 720],
				"tier": 2
			},
			{
				"name": "Transporter",
				"description": "BASIC: 2 points\tYou can throw bags 50% further.\nACE: 4 points\tFor each 10 armor points the bag movement penalty is reduced by 1%.",
				"pos": [640, 640],
				"tier": 2
			},
			{
				"name": "Shock and Awe",
				"description": "BASIC: 3 points\tIncreases the armor recovery rate for you and your crew by 25%.\nACE: 6 points\tEnables your weapons to have a chance to knock back Shield enemies when attacking them. Ranged weapons' knockback chance is increased the higher the total damage of the weapon is. Melee weapons' knockback chance is 100%.",
				"pos": [640, 800],
				"tier": 3
			},
			{
				"name": "Bullseye",
				"description": "BASIC: 3 points\tYou regenerate 5 armor for each succesful headshot. This can not occur more than once every 2 seconds.\nACE: 6 points\tYou regenerate an additional 20 armor for each succesful headshot.",
				"pos": [480, 880],
				"tier": 3
			},
			{
				"name": "Iron Man",
				"description": "BASIC: 4 points\tYour total armor value is increased by 30%.\nACE: 8 points\tUnlocks the ability to wear the Improved Combined Tactical Vest.",
				"pos": [240, 80],
				"tier": 4
			}
		],
		"ammo specialist": [
			{
				"name": "Scavenger",
				"description": "BASIC: 1 point\tYour ammo pick up range is increased by 50%.\nACE: 3 points\tEvery 6th enemy you kill will drop an extra ammo box.",
				"pos": [640, 880],
				"tier": 1
			},
			{
				"name": "Bulletstorm",
				"description": "BASIC: 2 points\tAmmo bags placed by you grant players the ability to shoot without depleting their ammunition for up to 5 seconds after interacting with it. The more ammo players replenish, the longer the duration of the effect.\nACE: 4 points\tIncreases the base duration of the effect by up to 15 seconds.",
				"pos": [320, 400],
				"tier": 2
			},
			{
				"name": "Portable Saw",
				"description": "BASIC: 2 points\tUnlocks the OVE9000 portable saw for you to use as a secondary weapon.\nACE: 4 points\tYou gain 1 extra saw blade for the OVE9000 portable saw. You replace your saw blades with carbon blades, increasing your saw efficiency by 40%.",
				"pos": [0, 80],
				"tier": 2
			},
			{
				"name": "Extra Lead",
				"description": "BASIC: 3 points\tYou can now place 2 ammo bags instead of just one.\nACE: 6 points\tEach ammo bag now contains 50% more ammunition.",
				"pos": [560, 80],
				"tier": 3
			},
			{
				"name": "Saw Massacre",
				"description": "BASIC: 3 points\tReducing the wear down of the blades on enemies by 50%.\nACE: 6 points\tYou can now saw through shield enemies with your OVE9000 portable saw. When killing an enemy with the saw, you have a 50% chance to cause nearby enemies in a 10m radius to panic. Panic will make enemies go into short bursts of uncontrollable fear.",
				"pos": [0, 160],
				"tier": 3
			},
			{
				"name": "Fully Loaded",
				"description": "BASIC: 4 points\tYour total ammo capacity is increased by 25%.\nACE: 8 points\tIncreases the amount of ammo you gain from ammo boxes by 75%. You also gain a 5% base chance to get a throwable from an ammo box. The base chance is increased by 1% for each ammo box you pick up that does not contain a throwable. When a throwable has been found, the chance is reset to it's base value\nNote: Does not stack with the perk deck skill \"Walk-in Closet\".",
				"pos": [240, 0],
				"tier": 4
			}
		]
	},
	"technician": {
		"engineer": [
			{
				"name": "Third Law",
				"description": "BASIC: 1 point\tThe cost of deploying a sentry gun is reduced by 5%.\nACE: 3 points\tYour sentry guns gain a protective shield.",
				"pos": [720, 0],
				"tier": 1
			},
			{
				"name": "Sentry Targeting Package",
				"description": "BASIC: 2 points\tYour sentry guns gain a 100% increase in accuracy.\nACE: 4 points\tYour sentry guns rotation speed is increased by 150%. Your sentry guns also have 50% more ammunition.",
				"pos": [720, 80],
				"tier": 2
			},
			{
				"name": "Eco Sentry",
				"description": "BASIC: 2 points\tThe cost of deploying a sentry gun is reduced by 5%.\nACE: 4 points\tYour sentry guns gain 150% increased health.",
				"pos": [720, 160],
				"tier": 2
			},
			{
				"name": "Engineering",
				"description": "BASIC: 3 points\tYou can now select a less noisy version of the sentry guns, making them much less likely to be targeted by enemies.\nACE: 6 points\tYou can now toggle AP rounds on your sentry guns, lowering the rate of fire by 75%, but increasing damage by 250% and allowing it to pierce through enemies and shields.",
				"pos": [720, 240],
				"tier": 3
			},
			{
				"name": "Jack of All Trades",
				"description": "BASIC: 3 points\tYou deploy and interact with all deployable 100% faster.\nACE: 6 points\tYou can now equip a secondary deployable to bring with you. If your deployable is equipped as a secondary deployable, you can only bring half of what you should bring if it was equipped as a primary deployable.",
				"pos": [720, 320],
				"tier": 3
			},
			{
				"name": "Tower Defense",
				"description": "BASIC: 4 points\tYou can now carry 1 extra sentry gun.\nACE: 8 points\tYou can now carry an additional 2 extra sentry guns.",
				"pos": [720, 400],
				"tier": 4
			}
		],
		"breacher": [
			{
				"name": "Hardware Expert",
				"description": "BASIC: 1 point\tYou fix drills and saws 25% faster. Decreases trip mine deploy time by 20%. Drills and saws are also silent. Civilians and guards must see the drill or saw in order to become alerted.\nACE: 3 points\tGives your drills and saws a 10% chance to automatically restart after breaking\nNote: Skill does not affect the OVE9000 saw.",
				"pos": [720, 480],
				"tier": 1
			},
			{
				"name": "Combat Engineering",
				"description": "BASIC: 2 points\tThe radius of your trip mine explosion is increased by 30%.\nACE: 4 points\tYour trip mine damage is increased by 50%.",
				"pos": [80, 400],
				"tier": 2
			},
			{
				"name": "Drill Sawgeant",
				"description": "BASIC: 2 points\tYour drill and saw timer is decreased by 15%.\nACE: 4 points\tYour drill and saw timer is decreased by an additional 15%.\nNote: Skill does not affect the OVE9000 saw",
				"pos": [240, 480],
				"tier": 2
			},
			{
				"name": "More Firepower",
				"description": "BASIC: 3 points\tYou gain 1 more shaped charge and 4 more trip mines.\nACE: 6 points\tYou gain more shaped charges and 7 more trip mines.",
				"pos": [720, 560],
				"tier": 3
			},
			{
				"name": "Kickstarter",
				"description": "BASIC: 3 points\tYour drills and saws gain an additional 20% chance to automatically restart after breaking.\nACE: 6 points\tEnables the ability to reset a broken drill or saw with a melee attack. The ability has a 50% chance to fix the drill or saw. The ability can only be used once per time the drill or saw is broken.\nNote: Skill does not affect the OVE9000 saw.",
				"pos": [720, 640],
				"tier": 3
			},
			{
				"name": "Fire Trap",
				"description": "BASIC: 4 points\tYour trip mines now spread fire around the area of detonation for 10 seconds in a 4 meter diameter.\nACE: 8 points\tIncreases the fire effect duration by 10 seconds and increases the fire effect radius by 50%.",
				"pos": [720, 720],
				"tier": 4
			}
		],
		"oppressor": [
			{
				"name": "Steady Grip",
				"description": "BASIC: 1 point\tYou gain 8 weapon accuracy.\nACE: 3 points\tYou gain 16 weapon stability.",
				"pos": [720, 880],
				"tier": 1
			},
			{
				"name": "Heavy Impact",
				"description": "BASIC: 2 points\tYour shots have a 5% chance to stagger all enemies except Bulldozers and Captain Winters.\nACE: 4 points\tIncreases your stagger chance to 20%.",
				"pos": [880, 80],
				"tier": 2
			},
			{
				"name": "Fire Control",
				"description": "BASIC: 2 points\tYou gain 12 weapon accuracy while firing from the hip.\nACE: 4 points\tYour accuracy penalty is decreased by 20% when shooting while moving.",
				"vr_description": "Addition in VR:\tACE: The decreased accuracy penalty lasts from 1 up to a maximum of 5 seconds after dashing.",
				"pos": [720, 800],
				"tier": 2
			},
			{
				"name": "Lock N' Load",
				"description": "BASIC: 3 points\tYou can how hip-fire with your weapons while sprinting.\nACE: 6 points\tKilling 2 enemies with SMGs, LMGs, Assault Rifles or Special Weapons set on automatic fire mode will increase your next reload speed by up to 100%. This bonus is reduced by 1% for each bullet above 20 in the total magazine size, down to a maximum of 40% reload speed increase.",
				"vr_description": "Addition in VR:\tBASIC: Every 40 points of stamina consumed by dashin will refill 5% of their ammo pool to automatic weapons.",
				"pos": [800, 0],
				"tier": 3
			},
			{
				"name": "Surefire",
				"description": "BASIC: 3 points\t Your SMGs, LMGs and Assault Rifles gain 15 more bullets in their magazines. This does not affect the \"Lock n' Load\" Ace skill.\nAce: 6 points\tYour ranged weapons can now pierce through enemy body armor.\nNote: Does not apply to throwable weapons.",
				"pos": [800, 160],
				"tier": 3
			},
			{
				"name": "Body Expertise",
				"description": "BASIC: 4 points\t30% from the bonus headshot damage is permanently applied to hitting enemies on the body. This skill is only activated by SMGs, LMGs, Assault Rifles or Special Weapons fired in automatic fire mode.\nACE: 8 points\t90% from the bonus headshot damage is permanently applied to hitting enemies on the body. This skill is only activated by SMGs, LMGs, Assault Rifles or Special Weapons fired in automatic fire mode.",
				"pos": [800, 240],
				"tier": 4
			}
		]
	},
	"ghost": {
		"shinobi": [
			{
				"name": "Chamaleon",
				"description": "BASIC: 1 point\tIncreases the time before you start getting detected by 25% while in casing mode. You can also mark enemies while in casing mode.\nACE: 3 points\tYou can pick up items while in casing mode. You can also gain 30% more value to items and cash that you pick up.",
				"pos": [400, 240],
				"tier": 1
			},
			{
				"name": "Cleaner",
				"description": "BASIC: 2 points\tYou gain 1 additional body bag in your inventory. Also increases the body bag inventory space to 3.\nACE: 4 points\tYou gain the ability to place 2 body bags cases.",
				"pos": [560, 160],
				"tier": 2
			},
			{
				"name": "Sixth Sense",
				"description": "BASIC: 2 points\tYou gain the ability to automatically mark enemies within a 10 meter radius around you after standing still for 3.5 seconds while in stealth.\nACE: 4 points\tYou gain access to all insider assets. Cleaning costs after killing a civilian is reduced by 75%.",
				"pos": [480, 800],
				"tier": 2
			},
			{
				"name": "Nimble",
				"description": "BASIC: 3 points\tYou gain the ability to disable 1 camera from detecting you and your crew. Effect lasts for 25 seconds.\nACE: 6 points\tYou lockpick 100% faster. You also gain the ability to lockpick safes.",
				"pos": [800, 320],
				"tier": 3
			},
			{
				"name": "ECM Overdrive",
				"description": "BASIC: 3 points\tYour ECM jammer and feedback duration is increased by 25%.\nACE: 6 points\tYour ECM jammer can now also be used to open certain electronic doors.",
				"pos": [480, 240],
				"tier": 3
			},
			{
				"name": "ECM Specialist",
				"description": "BASIC: 4 points\tYou can now place 2 ECM jammers instead of just one.\nACE: 8 points\tThe ECM jammer duration is increased by an additional 25% and the ECM feedback duration lasts 25% longer. Pagers are delayed by the ECM jammers.",
				"pos": [240, 320],
				"tier": 4
			}
		],
		"artful dodger": [
			{
				"name": "Duck and Cover",
				"description": "BASIC: 1 point\tYour stamina starts regenerating 25% earlier and 25% faster. You also sprint 25% faster.\nACE: 3 points\tYou have a 10% increased chance to dodge while sprinting you gain 15% chance to dodge while ziplining.",
				"vr_description": "Addition in VR\tACE: The increased dodge chance lasts from 1 up to a maximum of 5 seconds after dashing.",
				"pos": [800, 400],
				"tier": 1
			},
			{
				"name": "Parkour",
				"description": "BASIC: 2 points\tYou gain 10% additional movement speed and 20% increased speed while climbing ladders.\nACE: 4 points\tYou gain the ability to sprint in any direction.\nRun and reload — you can reload your weapons while sprinting",
				"vr_description": "Addition in VR:\tACE: After dashing you will get 20% up to a maximum of 50% reload speed increase.",
				"pos": [800, 480],
				"tier": 2
			},
			{
				"name": "Inner Pockets",
				"description": "BASIC: 2 points\tIncreases the concealment of melee weapons by 2.\nACE: 4 points\tIncreases the concealment of all ballistic vests by 4.",
				"pos": [800, 560],
				"tier": 2
			},
			{
				"name": "Dire Need",
				"description": "BASIC: 3 points\tWhen your armor breaks, the first shot on every enemy will cause that enemy to stagger. This effect ends when your armor recovers.\nACE: 6 points\tThe effect persists for 6 after your armor has recovered.",
				"pos": [800, 640],
				"tier": 3
			},
			{
				"name": "Shockproof",
				"description": "BASIC: 3 points\tWhen tased, the shock effect has a 30% chance to backfire on the Taser, knocking them back.\nACE: 6 points\tWhen tased, you are able to free yourself from the taser by interacting with it within 2 seconds of getting tased.",
				"pos": [240, 400],
				"tier": 3
			},
			{
				"name": "Sneaky Bastard",
				"description": "BASIC: 4 points\tYou gain a 1% chance for every 3 points of detection rate under 35 up to 10%.\nACE: 8 points\tYou gain a 1% dodge chance for every 1 point of detection rate under 35 up to 10%.",
				"pos": [80, 960],
				"tier": 4
			}
		],
		"silent killer": [
			{
				"name": "Second Wind",
				"description": "BASIC: 1 point\tWhen your armor breaks your movement speed is increased by 30% for 5 seconds.\nACE: 3 points\tThis effect also applies to your crew when triggered.",
				"pos": [800, 720],
				"tier": 1
			},
			{
				"name": "Optical Illusions",
				"description": "BASIC: 2 points\tYou are 35% less likely to be targeted by enemies.\nACE: 4 points\tYou gain 1 concealment for each silenced weapon you equip and reduces the concealment penalty of silencers by 2.",
				"pos": [800, 800],
				"tier": 2
			},
			{
				"name": "The Professional",
				"description": "BASIC: 2 points\tYou gain 8 weapon stability and 100% snap to zoom speed increase with silenced weapons.\nACE: 4 points\tYou gain 12 weapon accuracy with silenced weapons.",
				"vr_description": "Addition in VR:\tBASIC: Every kill while aiming down sight will regenerate 2% stamina.",
				"pos": [320, 320],
				"tier": 2
			},
			{
				"name": "Low Blow",
				"description": "BASIC: 3 points\tYou gain a 3% critical hit for every 3 points of detection rate under 35 up to 30%.\nACE: 6 points\tYou gain 3% critical hit chance for every 1 point of detection rate under 35 up to 30%.\nNote: Does not apply to grenade launchers.",
				"pos": [0, 960],
				"tier": 3
			},
			{
				"name": "High Value Target",
				"description": "BASIC: 3 points\tEnemies you mark take 15% more damage.\nACE: 6 points\tEnemies you mark take an additional 50% damage when further away than 10 meters. Increase the duration of marked enemies by 100% and you can now mark specials by aiming down at them with any weapon.",
				"pos": [640, 160],
				"tier": 3
			},
			{
				"name": "Unseen Strike",
				"description": "BASIC: 4 points\tIf you do not lose any armor or health for 4 seconds, you gain 35% critical hit chance for 6 seconds.\nACE: 8 points\tThe critical hit chance duration is increased to 18 seconds.\nTaking any damage will cancel the effect.",
				"pos": [800, 880],
				"tier": 4
			}
		]
	},
	"fugitive": {
		"gunslinger": [
			{
				"name": "Equilibrium",
				"description": "BASIC: 1 point\tDecreases the time it takes to draw end holster pistols by 33%.\nACE: 3 points\tYou gain 8 weapon accuracy with all pistols.",
				"pos": [240, 720],
				"tier": 1
			},
			{
				"name": "Gun Nut",
				"description": "BASIC: 2 points\tYour pistoll magazine sizes are increased by 5 bullets.\nACE: 4 points\tYou gain a 50% increased rate of fire with pistols.",
				"pos": [880, 0],
				"tier": 2
			},
			{
				"name": "Akimbo",
				"description": "BASIC: 2 points\tYour Akimbo weapons' stability penalty is reduced by 8.\nACE: 4 points\tYour Akimbo weapons' stability penalty is reduced by an additional 8 and they also have 50% increased ammo capacity.",
				"pos": [240, 880],
				"tier": 2
			},
			{
				"name": "One Handed Talent",
				"description": "BASIC: 3 points\tThe base damage of all pistols is increased by 5.\nACE: 6 points\tThe base damage of all pistols is increased by an additional 10 damage.",
				"pos": [560, 880],
				"tier": 3
			},
			{
				"name": "Desperado",
				"description": "BASIC: 3 points\tEach successful pistol hit gives you a 10% accuracy bonus for 10% and you can stack it 4 times.\nACE: 6 points\tYou reload 50% faster.",
				"pos": [880, 80],
				"tier": 3
			},
			{
				"name": "Trigger Happy",
				"description": "BASIC: 4 points\tFor every hit with a pistol you gain a 120% damage boost that lasts for 2 seconds.\tStacks up to 1 time.\nACE: 8 points\tIncreases the damage boost duration to 4 seconds.",
				"pos": [880, 160],
				"tier": 4
			}
		],
		"revenant": [
			{
				"name": "Nine Lives",
				"description": "BASIC: 1 point\tYou gain a 50% increase to your bleedout health.\nACE: 3 points\tYou gain the ability to get downed 1 more time before going into custody.",
				"pos": [400, 160],
				"tier": 1
			},
			{
				"name": "Running from Death",
				"description": "BASIC: 2 points\tYou reload and swap weapons 100% faster for 10% seconds after being revived.\nACE: 4 points\tYou move 30% faster for 10 seconds after being revived.",
				"pos": [880, 240],
				"tier": 2
			},
			{
				"name": "Up You Go",
				"description": "BASIC: 2 points\tYou take 30% less damage for 10 seconds after being revived.\nACE: 4 points\tYou receive 40% more health when revived.",
				"pos": [880, 320],
				"tier": 2
			},
			{
				"name": "Swan Song",
				"description": "BASIC: 3 points\tInstead of getting downed instantly, you gain the ability to keep on fighting for 3 seconds with a 60% movement penalty before going down.\nNote: Does not trigger on fall or fire damage.\nACE: 6 points\tIncreases the duration of Swan Song by 3 seconds. Ammunition won't be depleted while the effect is active.",
				"pos": [400, 960],
				"tier": 3
			},
			{
				"name": "Feign Death",
				"description": "BASIC: 3 points\tWhen you get downed, you have a 15% chance to instantly get revived\nACE: 6 points\tThe chance to get instantly revived is increased by an additional 30%.",
				"pos": [880, 400],
				"tier": 3
			},
			{
				"name": "Messiah",
				"description": "BASIC: 4 points\tWhile in bleedout, you can revive yourself if you kill an enemy. You only have 1 charge.\nACE: 8 points\tYour messiah charge is replenished whenever you use a doctor bag.",
				"pos": [160, 720],
				"tier": 4
			}
		],
		"brawler": [
			{
				"name": "Martial Arts",
				"description": "BASIC: 1 point\tYou take 50% less damage from all melee attacks. Because of training.\nACE: 3 points\tYou are 50% more likely to knock down enemies with a melee strike.",
				"pos": [880, 560],
				"tier": 1
			},
			{
				"name": "Bloodthirst",
				"description": "BASIC: 2 points\tEvery kill you get will increase your next melee attack damage by 100%, up to a maximum of 1600%. This effect gets reset when you kill an enemy with a melee attack.\nACE: 4 points\tWhenever you kill an enemy with a melee attack, you will gain a 50% increase in reload speed for 10 seconds.",
				"pos": [880, 480],
				"tier": 2
			},
			{
				"name": "Pumping Iron",
				"description": "BASIC: 2 points\tYour melee attacks against non-special enemies do 100% more damage.\nACE: 4 points\tYour melee attacks against special enemies do 100% more damage",
				"pos": [80, 240],
				"tier": 2
			},
			{
				"name": "Counterstrike",
				"description": "BASIC: 3 points\tWhen charging your melee weapons you will counterattack enemies that try to strike you, knocking them down. The knockdown does not deal any damage\nACE: 6 points\tYou gain the ability to counterattack cloakers and their kicks",
				"pos": [320, 960],
				"tier": 3
			},
			{
				"name": "Berserker",
				"description": "BASIC: 3 points\tThe lower your health, the more damage you do. When your health is below 50%, you will do up to 250% more melee and saw damage.\nACE 6 points\tThe lower your health, the more damage you do. When your health is below 50%, you will do up to 100% more damage with ranged weapons as well.\nNote: Does not apply to throwables, grenade launchers or rocket launchers.\nEntering berserker state negates third-party regeneration effects.",
				"pos": [160, 160],
				"tier": 3
			},
			{
				"name": "Frenzy",
				"description": "BASIC: 4 points\tYou only get 30% of your maximum health and cannot heal above it but you take 10% less damage and healing received is reduced by 75%.\nACE: 8 points\tDamage taken is now reduced by 25% and healing received is reduced by 0%",
				"pos": [880, 640],
				"tier": 4
			}
		]
	}
}