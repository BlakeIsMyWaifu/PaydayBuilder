interface perk {
	name: string;
	description: string[];
	cards: card[];
	dlc?: string;
}

interface card {
	name: string;
	description: string[];
	vr_description?: string;
	stats?: stat[];
}

interface stat {
	type: string;
	value: string | number;
	multiply?: boolean;
	whitelist?: string[];
	arguments?: string[];
}

const perks: perk[] = [
	{
		name: 'Crew Chief',
		description: [
			'The Crew Chief. also known as the Caporegime, is the head of a branch of an organized crime syndicate. The Crew Chief commands a crew of soldiers and reports directly to a boss or an underboss.',
			'When the crime syndicate needs to have someone dealt with, the Crew Chief and his soldiers make sure it\'s done.'
		],
		cards: [
			{
				name: 'Brute Strength',
				description: [
					'You grant 8% damage reduction for players in your group. This bonus is doubled for you when you are under 50% health.'
				],
				vr_description: 'After dashing the player will heal from 0 up to a maximum of 3 health depending on the amount of stamina consumed. Can only heal a maximum of 50 health every 5 seconds.'
			},
			{
				name: 'Marathon Man',
				description: [
					'You and your crew\'s stamina is increased by 50%.',
					'Increases your shout distance by 25%.',
					'When you are within medium range of an enemy, you receive 6% less damage from enemies.',
					'Note: Crew perks do not stack.'
				],
				vr_description: 'The dash effect is now from 0 up to a maximum of 6.',
				stats: [
					{
						type: 'stamina',
						value: 1.5,
						multiply: true
					},
					{
						type: 'crewStamina',
						value: 1.5,
						multiply: true
					},
					{
						type: 'shout',
						value: 1.25,
						multiply: true
					}
				]
			},
			{
				name: 'Wolf Pack',
				description: [
					'Your crew will gain 10% more health.',
					'You will gain 20% more health.',
					'Note: Crew perks do not stack.'
				],
				vr_description: 'The dash effect is now from 0 up to a maximum of 9.',
				stats: [
					{
						type: 'hp',
						value: 1.2,
						multiply: true
					},
					{
						type: 'crewHp',
						value: 1.1,
						multiply: true
					}
				]
			},
			{
				name: 'Testudo',
				description: [
					'You gain 10% more armor and your crew gains an additional 5% more armor.',
					'Note: Crew perks do not stack.'
				],
				vr_description: 'The dash effect is now from 0 up to a maximum of 12.',
				stats: [
					{
						type: 'armor',
						value: 1.1,
						multiply: true
					},
					{
						type: 'crewArmor',
						value: 1.05,
						multiply: true
					}
				]
			},
			{
				name: 'Hostage Situation',
				description: [
					'You and your crew will gain 6% max health and 12% stamina for each hostage up to 4 times.',
					'You and your crew will gain 8% damage reduction for having one or more hostages.',
					'Note: Crew perks do not stack.'
				],
				vr_description: 'The dash effect is now from 0 up to a maximum of 15.'
			}
		]
	},
	{
		name: 'Muscle',
		description: ['The Muscle is a tough guy who uses violence to send messages from his Mafia superioris. They are the backbone of any criminal organization.\nThe muscle is called in whenever you need to rough someone up, break some legs, crush a skull or remind people who\'s boss.'],
		cards: [
			{
				name: 'Brute Strength',
				description: ['You gain 10% more health'],
				vr_description: 'After dashing the player will heal from 0 up to a maximum of 3 health depending on the amount of stamina consumed. Can only heal a maximum of 50 health every 5 seconds.',
				stats: [
					{
						type: 'hp',
						value: 1.1,
						multiply: true
					}
				]
			},
			{
				name: 'Meat Shield',
				description: ['You are 15% more likely to be targeted when you are close to your crew members.\nYou gain 10% more health.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 6.',
				stats: [
					{
						type: 'hp',
						value: 1.1,
						multiply: true
					}
				]
			},
			{
				name: 'Giant Strength',
				description: ['You gain an additional 20% more health.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 9.',
				stats: [
					{
						type: 'hp',
						value: 1.2,
						multiply: true
					}
				]
			},
			{
				name: 'Disturbing the Peace',
				description: ['All firearms have a chance to spread panic among your enemies.\nPanic will make enemies go into short bursts of uncontrollable fear.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 12.'
			},
			{
				name: '800-pound Gorilla',
				description: ['You gain an additional 40% more health.\nYou regenerate 3% of your life every 5 seconds.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 15.',
				stats: [
					{
						type: 'hp',
						value: 1.4,
						multiply: true
					},
					{
						type: 'hpRegen',
						value: 3
					}
				]
			}
		]
	},
	{
		name: 'Armorer',
		description: ['The Armorer was formerly a profession within the military. The armorer\'s job is to maintain, repair and improve armors.\nAny self-respecting crime syndicate needs someone who can make sure the soldiers have the necessary protection to do their jobs.'],
		cards: [
			{
				name: 'Type I Armor',
				description: ['You gain 10% more armor'],
				vr_description: 'After dashing the player will regenerate from 2 up to a maximum of 6 armor depending on the amount of stamina consumed. Can only occur 3 times every 3 seconds.',
				stats: [
					{
						type: 'armor',
						value: 1.1,
						multiply: true
					}
				]
			},
			{
				name: 'Type II Armor',
				description: ['You gain an additional 10% more armor.'],
				vr_description: 'The dash effect is now from 4 up to a maximum of 10.',
				stats: [
					{
						type: 'armor',
						value: 1.1,
						multiply: true
					}
				]
			},
			{
				name: 'Type III Armor',
				description: ['You gain an additional 10% more armor.'],
				vr_description: 'The dash effect is now from 6 up to a maximum of 14.',
				stats: [
					{
						type: 'armor',
						value: 1.1,
						multiply: true
					}
				]
			},
			{
				name: 'Reinforced Armor',
				description: ['Your armor recovery rate is increased by 10%.\nWhen your armor gets depleted you will be immune to health damage for 2 seconds. This cannot occur more often than once every 15 seconds.'],
				vr_description: 'The dash effect is now from 8 up to a maximum of 18.',
				stats: [
					{
						type: 'armorRecoveryRate',
						value: 1.1,
						multiply: true
					}
				]
			},
			{
				name: 'Liquid Armor',
				description: ['You gain an additional 5% more armor.\nReduces the armor recovery time for you and your crew by 10%.\nNote: Crew perks do not stack.'],
				vr_description: 'The dash effect is now from 10 up to a maximum of 22.',
				stats: [
					{
						type: 'armor',
						value: 1.05,
						multiply: true
					},
					{
						type: 'armorRecoveryRate',
						value: 1.1,
						multiply: true
					},
					{
						type: 'crewArmorRecoveryRate',
						value: 1.1,
						multiply: true
					}
				]
			}
		]
	},
	{
		name: 'Rogue',
		description: ['The Rogue is a stealthy criminal, capable of sneaky tricks and deadly force. Versatile and deceptive, the Rogue is hired to do anything from pickpocketing, to burglaries and con jobs.\nThe trademark of a Rogue is his versatility - what he lacks in strength he makes up for in skill.'],
		cards: [
			{
				name: 'Subtle',
				description: ['Your chance to dodge is increased by 15%.'],
				vr_description: 'After dashing the player will gain 1% up to a maximum of 6% dodge for 3 seconds depending on the amount of stamina consumed.',
				stats: [
					{
						type: 'dodge',
						value: 1.15,
						multiply: true
					}
				]
			},
			{
				name: 'Elusive',
				description: ['You are 15% less likely to be targeted when you are close to your crew members.'],
				vr_description: 'The dash effect is now from 1% up to a maximum of 7%.'
			},
			{
				name: 'Evasive',
				description: ['Your chance to dodge is increased by an additional 15%.'],
				vr_description: 'The dash effect is now from 1% up to a maximum of 8%.',
				stats: [
					{
						type: 'dodge',
						value: 1.15,
						multiply: true
					}
				]
			},
			{
				name: 'Shadow Warrior',
				description: ['Your chance to dodge is increased by an additional 15%.'],
				vr_description: 'The dash effect is now from 1% up to a maximum of 9%.',
				stats: [
					{
						type: 'dodge',
						value: 1.15,
						multiply: true
					}
				]
			},
			{
				name: 'Killer Instinct',
				description: ['All your weapons have a 25% chance to pierce enemy armor.\nIncreases weapon swapping speed by 80%'],
				vr_description: 'The dash effect is now from 1% up to a maximum of 10%.',
				stats: [
					{
						type: 'swapSpeed',
						value: 1.80,
						multiply: true
					}
				]
			}
		]
	},
	{
		name: 'Hitman',
		description: ['The Hitman is a professional killer from the criminal underworld who excels at close and ranged combat.\nCriminal syndicates will hire a hitman as a last resort to enforce criminal authority, deliver retribution or eliminate competition.'],
		cards: [
			{
				name: 'Basic Recovery',
				description: ['Your armor recovery rate is increased by 5%.'],
				vr_description: 'After dashing the player will regenerate from 2 up to a maximum of 6 armor depending on the amount of stamina consumed. Can only occur 3 times every 3 seconds.',
				stats: [
					{
						type: 'armorRecoveryRate',
						value: 1.05,
						multiply: true
					}
				]
			},
			{
				name: 'Ambidexterity',
				description: ['Dual wielded weapons have a -16 stability penalty.\nYour armor recovery rate is increased by an additional 10%.\nAmmo capacity for your akimbo weapons are increased by 50%.'],
				vr_description: 'The dash effect is now from 4 up to a maximum of 10.',
				stats: [
					{
						type: 'armorRecoveryRate',
						value: 1.1,
						multiply: true
					}
				]
			},
			{
				name: 'Advanced Recovery',
				description: ['Your armor recovery rate is increased by an additional 10%.'],
				vr_description: 'The dash effect is now from 6 up to a maximum of 14.',
				stats: [
					{
						type: 'armorRecoveryRate',
						value: 1.1,
						multiply: true
					}
				]
			},
			{
				name: 'Expert Recovery',
				description: ['Your armor recovery rate is increased by an additional 10%.'],
				vr_description: 'The dash effect is now from 8 up to a maximum of 18.',
				stats: [
					{
						type: 'armorRecoveryRate',
						value: 1.1,
						multiply: true
					}
				]
			},
			{
				name: 'Tooth and Claw',
				description: ['Your armor recovery rate is increased by an additional 10%.\nYour armor will recover 1.5 seconds after being broken no matter what the situation.'],
				vr_description: 'The dash effect is now from 10 up to a maximum of 22.',
				stats: [
					{
						type: 'armorRecoveryRate',
						value: 1.1,
						multiply: true
					}
				]
			}
		]
	},
	{
		name: 'Crook',
		description: ['The Crook is a versatile criminal. The term is as old as crime itself.\nTruly, the crook is a jack of all trades and a master of none. He steals, lies, cheats and does any and every dishonest or illegal work necessary to get by.'],
		cards: [
			{
				name: 'Subtle',
				description: ['Your chance to dodge is increased by 15%.'],
				vr_description: 'After dashing the player will regenerate from 2 up to a maximum of 6 armor depending on the amount of stamina consumed. Can only occur 3 times every 3 seconds',
				stats: [
					{
						type: 'dodge',
						value: 1.15,
						multiply: true
					}
				]
			},
			{
				name: 'Basic Composure',
				description: ['Your chance to dodge is increased by 5% for ballistic vests.\nYour armor is increased by 20% for ballistic vests.'],
				vr_description: 'The dash effect is now from 4 up to a maximum of 10.',
				stats: [
					{
						type: 'dodge',
						value: 1.05,
						multiply: true,
						whitelist: [
							'light_ballistic',
							'ballistic',
							'heavy_ballistic'
						]
					},
					{
						type: 'armor',
						value: 1.2,
						multiply: true,
						whitelist: [
							'light_ballistic',
							'ballistic',
							'heavy_ballistic'
						]
					}
				]
			},
			{
				name: 'Advanced Composure',
				description: ['Your chance to dodge is increased by 10% for ballistic vests.\nYour armor is increased by 20% for ballistic vests.'],
				vr_description: 'The dash effect is now from 6 up to a maximum of 14.',
				stats: [
					{
						type: 'dodge',
						value: 1.1,
						multiply: true,
						whitelist: [
							'light_ballistic',
							'ballistic',
							'heavy_ballistic'
						]
					},
					{
						type: 'armor',
						value: 1.2,
						multiply: true,
						whitelist: [
							'light_ballistic',
							'ballistic',
							'heavy_ballistic'
						]
					}
				]
			},
			{
				name: 'Expert Composure',
				description: ['Your chance to dodge is increased by 10% for ballistic vests.\nYour armor is increased by 25% for ballistic vests.'],
				vr_description: 'The dash effect is now from 8 up to a maximum of 18.',
				stats: [
					{
						type: 'dodge',
						value: 1.1,
						multiply: true,
						whitelist: [
							'light_ballistic',
							'ballistic',
							'heavy_ballistic'
						]
					},
					{
						type: 'armor',
						value: 1.25,
						multiply: true,
						whitelist: [
							'light_ballistic',
							'ballistic',
							'heavy_ballistic'
						]
					}
				]
			},
			{
				name: 'Master Recovery',
				description: ['Your armor recovery rate is increased by 10%'],
				vr_description: 'The dash effect is now from 10 up to a maximum of 22.',
				stats: [
					{
						type: 'dodge',
						value: 1.1,
						multiply: true
					}
				]
			}
		]
	},
	{
		name: 'Burglar',
		description: ['The natural dexterity of the Burglar has benefits beyond merely breaking and entering. Being nimble allows the Burglar to pick locks, bag bodies and answer pagers faster. They are aslo harder to hit in combat. They stay alive by staying out of the way.\nThis physical conditioning also gives the Burglar a high tolerance to pain and the ability to shrug off wounds quickly.'],
		cards: [
			{
				name: 'Sneaky',
				description: ['Your chance to dodge is increased by 20%.'],
				vr_description: 'After dashing the player will gain 1% up to a maximum of 6% dodge for 3 seconds depending on the amount of stamina consumed.',
				stats: [
					{
						type: 'dodge',
						value: 1.2,
						multiply: true
					}
				]
			},
			{
				name: 'Bag of Tricks',
				description: ['Standing still and crouching decreases your chances to be targeted by 10%.\nYou bag corpses 20% faster.'],
				vr_description: 'The dash effect is now from 1% up to a maximum of 7%.'
			},
			{
				name: 'Luck of the Irish',
				description: ['Your chance to dodge is increased by an additional 5%.\nYour chance to be targeted while standing still and crouching is decreased by an additional 5%.\nYou pick locks 20% faster.'],
				vr_description: 'The dash effect is now from 1% up to a maximum of 8%',
				stats: [
					{
						type: 'dodge',
						value: 1.05,
						multiply: true
					}
				]
			},
			{
				name: 'Dutch Courage',
				description: ['Your chance to dodge is increased by an additional 5%.\nYour chance to be targeted while standing still and crouching is decreased by an additional 5%.\nYou answer pagers 10% faster.'],
				vr_description: 'The dash effect is now from 1% up to a maximum of 9%',
				stats: [
					{
						type: 'dodge',
						value: 1.05,
						multiply: true
					}
				]
			},
			{
				name: 'Breath of Fresh Air',
				description: ['Standing still and crouching increases your armor recovery rate by 20%.\nYou gain 10% crouching movement speed.'],
				vr_description: 'The dash effect is now from 1% up to a maximum of 10%.'
			}
		],
		dlc: 'Clover Character Pack'
	},
	{
		name: 'Infiltrator',
		description: ['The Infiltrator is an agent hired by a government or large criminal organization to obtain information about its enemies, or by a corporation to obtain industrial secrets from its competitors.\nThe Infiltrator is a close combat specialist who knows how to use the environment in order to get the upper hand.'],
		cards: [
			{
				name: 'OVERDOG',
				description: ['When you are surrounded by three enemies or more, you receive 12% less damage from enemies.\nYour second and each consecutive melee hit within 1 second of the last one will deal 10 times its normal damage.'],
				vr_description: 'After dashing the player will regenerate from 2 up to a maximum of 6 armor depending on the amount of stamina consumed. Can only occur 3 times every 3 seconds.'
			},
			{
				name: 'Basic Close Combat',
				description: ['When you are within medium range of an enemy, you receive 8% less damage from enemies.'],
				vr_description: 'The dash effect is now from 4 up to a maximum of 10.'
			},
			{
				name: 'Advanced Close Combat',
				description: ['When you are within medium range of an enemy, you receive an additional 8% less damage from enemies.'],
				vr_description: 'The dash effect is now from 6 up to a maximum of 14.'
			},
			{
				name: 'Expert Close Combat',
				description: ['When you are within medium range of an enemy, you receive an additional 8% less damage from enemies.'],
				vr_description: 'The dash effect is now from 8 up to a maximum of 18.'
			},
			{
				name: 'Life Drain',
				description: ['Striking an enemy with your melee weapon regenerates 20% of your health. This cannot occur more than once every 10 seconds.'],
				vr_description: 'The dash effect is now from 10 up to a maximum of 22.'
			}
		],
		dlc: 'Dragan Character Pack'
	},
	{
		name: 'Sociopath',
		description: ['The Sociopath is known to be one of the most effective type of criminals. Where he is effective, he is also difficult to deal with, which is why larger organizations avoid him.\nBold, disinhibitted and mean, the Sociopath excels in the most violent of jobs. Unable to feel guilt for the crimes he commits, the Sociopath is a dangerous enemy.'],
		cards: [
			{
				name: 'OVERDOG',
				description: ['When you are surrounded by three enemies or more, you receive 12% less damage from enemies.\nYour second and each consecutive melee hit within 1 second of the last one will deal 10 times its normal damage.'],
				vr_description: 'After dashing the player will regenerate from 2 up to a maximum of 6 armor depending on the amount of stamina consumed. Can only occur 3 times every 3 seconds.'
			},
			{
				name: 'Tension',
				description: ['Killing an enemy regenerates 30 armor.\nThis cannot occur more than once every 1 second.\nYou gain an additional 10% more armor.'],
				vr_description: 'The dash effect is now from 4 up to a maximum of 10.',
				stats: [
					{
						type: 'armor',
						value: 1.1,
						multiply: true
					}
				]
			},
			{
				name: 'Clean Hit',
				description: ['Killing an enemy with a melee weapon regenerates 10% health.\nThis cannot occur more than once every 1 second.\nWhen you are within medium range of an enemy you receive 8% less damage.'],
				vr_description: 'The dash effect is now from 6 up to a maximum of 14.'
			},
			{
				name: 'Overdose',
				description: ['Killing an enemy at medium range recovers 30 armor.\nThis cannot occur more than once every 1 second.\nYou gain an additional 10% more armor.'],
				vr_description: 'The dash effect is now from 8 up to a maximum of 18.',
				stats: [
					{
						type: 'armor',
						value: 1.1,
						multiply: true
					}
				]
			},
			{
				name: 'Showdown',
				description: ['Killing an enemy at medium range has a 75% chance to spread panic among your enemies.\nPanic will make enemies go into short bursts of uncontrollable fear.\nThis cannot occur more than once every 1 second.'],
				vr_description: 'The dash effect is now from 10 up to a maximum of 22.'
			}
		],
		dlc: 'Hotline Miami 2 Deluxe'
	},
	{
		name: 'Gambler',
		description: ['Heading into the furnace of battle requires skill, hardness and more than a little luck. Some people just have it.\nLuck is an elusive quality. The ancient Greeks believed it was the design of the Gods. It isn\'t. It certainly exists, but it\'s something you can earn. It requires preparation and forethought to get your pieces in place, and maximizes your chances of a return. It\'s counting cards, rather than the blessing of Fortuna.\nThe Gambler perk deck is a support deck. Anyone can help the team win, but it takes the Gambler to help the team win big.'],
		cards: [
			{
				name: 'Medical Supplies',
				description: ['Ammo packs you pick up also yield medical supplies and heals you for 16 to 24 health.\nCannot occur more than once every 3 seconds.\nIf the Gambler\'s current health is lower than another player\'s, the heal effect on the Gambler is increased by 20%. Stacks up to three times.'],
				vr_description: 'After dashing the player will heal from 0 up to a maximum of 3 health depending on the amount of stamina consumed. Can only heal a maximum of 50 health every 5 seconds.'
			},
			{
				name: 'Ammo Give Out',
				description: ['When you pick up ammo, you trigger an ammo pickup for 50% of normal pickup to the other players in your team.\nCannot occur more than once every 5 seconds.\nYou gain 20% more health.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 6.',
				stats: [
					{
						type: 'hp',
						value: 1.2,
						multiply: true
					}
				]
			},
			{
				name: 'Sharing Is Caring',
				description: ['When you get healed from picking up ammo packs, your teammates also get healed for 50% of the amount.\nYou gain 20% more health.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 9.',
				stats: [
					{
						type: 'armor',
						value: 1.2,
						multiply: true
					}
				]
			},
			{
				name: 'More Healing 1',
				description: ['Increase health gained from ammo packs by additional 8.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 12.'
			},
			{
				name: 'More Healing 1',
				description: ['Increase health gained from ammo packs by additional 8.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 15.'
			}
		]
	},
	{
		name: 'Grinder',
		description: ['A typical grinder is a hard working individual, able to take control of difficult situations and turn them around.\nThe grinder relies heavily on always being in the front and dishing out punishment, being able to survive due to the fact that he does damage to the enemies regardless of how much damage he has sustained.'],
		cards: [
			{
				name: 'Histamine',
				description: ['Damaging an enemy heals 1 life points every 0.3 seconds for 3 seconds.\nThis effect stacks but cannot occur more than once every 1.5 seconds and only while wearing the Two-piece Suit or Lightweight Ballistic Vest.'],
				vr_description: 'After dashing the player will heal from 0 up to a maximum of 3 health depending on the amount of stamina consumed. Can only heal a maximum of 50 health every 5 seconds.'
			},
			{
				name: 'Adrenaline',
				description: ['Damaging an enemy now heals 2 life points every 0.3 seconds for 3 seconds.\nYou gain 20% more health.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 6.'
			},
			{
				name: 'Endorphins',
				description: ['Damaging an enemy now heals 3 life points every 0.3 seconds for 3 seconds.\nIncreases your chance to pierce enemy armor by 10%.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 9.'
			},
			{
				name: 'Dopamine',
				description: ['Damaging an enemy now heals 4 life points every 0.3 seconds for 3 seconds.\nYou gain 20% more health.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 12.',
				stats: [
					{
						type: 'hp',
						value: 1.2,
						multiply: true
					}
				]
			},
			{
				name: 'Euphoria',
				description: ['Damaging an enemy now heals 4 life points every 0.3 seconds for 4.2 seconds.\nIncrease your chance to pierce enemy armor by 20%.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 15.'
			}
		],
		dlc: 'Sokol Character Pack'
	},
	{
		name: 'Yakuza',
		description: ['The Yakuza are one of the most feared crime syndicates in the world. Ruled by the ninkyo and lead by the Oyabun, the Yakuza are known for their strict code of conduct, organized nature and the tattoos that cover their entire bodies.\nAn outcast and a dropout from society, the Yakuza knows how it is to fend for himself. While he appears gentle, he is not to be taken lightly.'],
		cards: [
			{
				name: 'Koi Irezumi',
				description: ['The lower your health, the more armor recovery rate you have. When your health is below 25%, you will gain up to 20% armor recovery rate.\nNOTE: Entering this state negates third party regeneration effects.'],
				vr_description: 'After dashing the player will regenerate from 2 up to a maximum of 6 armor depending on the amount of stamina consumed. Can only occur 3 times every 3 seconds.'
			},
			{
				name: 'Hebi Irezumi',
				description: ['The lower your health, the more movement speed you gain. When your health is below 25%, you will gain up to 20% movement speed.'],
				vr_description: 'The dash effect is now from 4 up to a maximum of 10.'
			},
			{
				name: 'Tora Irezumi',
				description: ['The lower your health, the more armor recovery rate you have. When your health is below 25%, you will gain up to an additional 20% armor recovery rate.'],
				vr_description: 'The dash effect is now from 6 up to a maximum of 14.'
			},
			{
				name: 'Ryu Irezumi',
				description: ['The lower your health, the more armor recovery rate you have. When your health is below 25%, you will gain up to an additional 20% armor recovery rate.'],
				vr_description: 'The dash effect is now from 8 up to a maximum of 18.'
			},
			{
				name: 'Oni Irezumi',
				description: ['All berserker state effects in this perk deck will start at 50% health instead of 25%.'],
				vr_description: 'The dash effect is now from 10 up to a maximum of 22.'
			}
		],
		dlc: 'Yakuza Character Pack'
	},
	{
		name: 'Ex-President',
		description: ['The Ex-Presidents are one of the most daring heisting crews out there. Great risk takers and brothers in arms. Their lack of fear for their own mortality brought them together and made them as successful as they are.\nAn Ex-President follows no rules and only adheres to the Ozaki 8, a set of trials to honor their nature.'],
		cards: [
			{
				name: 'Point Break',
				description: ['While your armor is up, you will store 4 health for every 1 enemy you or your crew kills.\nWhen your armor has been completely depleted and then starts to regenerate, you will gain health equal to the stored health amount.\nMaximum amount of stored health depends on your equipped armor.'],
				vr_description: 'After dashing the player will heal from 0 up to a maximum of 3 health depending on the amount of stamina consumed. Can only heal a maximum of 50 health every 5 seconds.'
			},
			{
				name: 'The Emerging Force',
				description: ['Increases the amount of health stored from kills by 4.\nYou gain 10% more health.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 6.',
				stats: [
					{
						type: 'hp',
						value: 1.1,
						multiply: true
					}
				]
			},
			{
				name: 'Life of Ice',
				description: ['Increases the maximum health that can be stored by 50%.\nYou gain 10% more health.\nYour chance to dodge is increased by 10%.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 9.',
				stats: [
					{
						type: 'hp',
						value: 1.1,
						multiply: true
					},
					{
						type: 'dodge',
						value: 1.1,
						multiply: true
					}
				]
			},
			{
				name: 'Awakening Earth',
				description: ['Increases the amount of health stored from kills by 4.\nYou gain 20% more health.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 12.',
				stats: [
					{
						type: 'hp',
						value: 1.2,
						multiply: true
					}
				]
			},
			{
				name: 'The Perfect Line',
				description: ['Killing an enemy speeds up your armor recovery time depending on how much armor you have. The more armor the less recovery speed gained per kill.\tArmor recovery speed is reset whenever your armor recovers.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 15.'
			}
		]
	},
	{
		name: 'Maniac',
		description: ['The Maniac Perk Deck is the embodiment of crazy and to never accept bad odds in moments of danger. By pushing through and constantly deal damage, your fellow heisters will be granted a temporary shield making all of you feel Jimmy\'s invulnerable spirit.'],
		cards: [
			{
				name: 'Excitement',
				description: ['100% of damage you deal is converted into Hysteria Stacks, up to 240 every 4 seconds. Max amount of stacks is 600.\nHysteria Stacks:\tYou gain 1 damage absorption for every 30 stacks of Hysteria. Hysteria Stacks decays 60% + 80 every 8 seconds.'],
				vr_description: 'After dashing the player will regenerate from 2 up to a maximum of 6 armor depending on the amount of stamina consumed. Can only occur 3 times every 3 seconds.'
			},
			{
				name: 'Outburst',
				description: ['Members of your crew also gains the effect of your Hysteria Stacks.\nHysteria Stacks from multiple crew members do not stack and only the stacks that gives the highest damage absorption will have an effect.'],
				vr_description: 'The dash effect is now from 4 up to a maximum of 10.'
			},
			{
				name: 'Fervor',
				description: ['Change the decay of your Hysteria Stacks to 60% + 40 every 8 seconds.'],
				vr_description: 'The dash effect is now from 6 up to a maximum of 14.'
			},
			{
				name: 'Recklessness',
				description: ['Change the damage absorption of your Hysteria Stacks on you and your crew to 1 damage absorption for every 25 stacks of Hysteria.'],
				vr_description: 'The dash effect is now from 8 up to a maximum of 18.'  
			},
			{
				name: 'Insanity',
				description: ['Damage absorption from Hysteria Stacks on you is increased by 100%.'],
				vr_description: 'The dash effect is now from 10 up to a maximum of 22.'
			}
		]
	},
	{
		name: 'Anarchist',
		description: ['The Anarchist refuses to acknowledge the arbitrary laws imposed by traditional authority. Kings, queens and presidents hold no sway over the Anarchist mind. Fly free and make your own rules is the motto. This refusal to abide by established truths enables the Anarchist to go where others cannot, employing unconventional tactics to slip through the cracks and reach seemingly impossible objectives.'],
		cards: [
			{
				name: 'Blitzkrieg Bop',
				description: ['Instead of fully regenerating armor when out of combat, The Anarchist will continuously regenerate armor throughout the entire combat. Heavier armor regenerates more armor, but during longer intervals.\nWhen your armor gets depleted you will be immune to health damage for 2 seconds. This cannot occur more often than once every 15 seconds.\nNote: Skills and perks that increases the armor recovery rate are disabled when using this perk deck.'],
				vr_description: 'After dashing the player will regenerate from 1 up to a maximum of 3 armor depending on the amount of stamina consumed. Can only occur 3 times every 5 seconds'
			},
			{
				name: 'Straight Edge',
				description: ['50% of your health is converted into 100% armor.'],
				vr_description: 'The dash effect is now from 2 up to a maximum of 5.',
				stats: [
					{
						type: 'armor',
						'arguments': ['hp'],
						value: 'hp'
					},
					{
						type: 'hp',
						value: 0.5,
						multiply: true
					}
				]
			},
			{
				name: 'Death or Glory',
				description: ['50% of your health is converted into 110% armor.'],
				vr_description: 'The dash effect is now from 3 up to a maximum of 7.',
				stats: [
					{
						type: 'armor',
						'arguments': ['hp'],
						value: '(0.5*hp)*2.1'
					},
					{
						type: 'hp',
						value: 0.5,
						multiply: true
					}
				]
			},
			{
				name: 'Rise Above',
				description: ['50% of your health is converted into 120% armor.'],
				vr_description: 'The dash effect is now from 4 up to a maximum of 9.',
				stats: [
					{
						type: 'armor',
						'arguments': ['hp'],
						value: '(0.5*hp)*2.2'
					},
					{
						type: 'hp',
						value: 0.5,
						multiply: true
					}
				]
			},
			{
				name: 'Lust for Life',
				description: ['Dealing damage will grant you 10 armor - this can only occur once every 1.5 seconds.'],
				vr_description: 'The dash effect is now from 5 up to a maximum of 11.'
			}
		],
		dlc: 'Sydney Character Pack'
	},
	{
		name: 'Biker',
		description: ['Biker gangs are feared all over the world, and the biggest clubs are common household names. To be a biker you need to be tough and loyal, and know that the rules of the club are absolute. Bikers are known to be ruthless and violent people, and they are never afraid to challenge anyone that dare to cross them.\nWhen wearing your patch and riding your bike, you proclaim to everyone that you belong to the 1%. The 1% that refuse to follow the rules of society and proudly carry the title of Outlaw. For a biker, all that matters are your fellow club members and your ride.'],
		cards: [
			{
				name: 'Prospect',
				description: ['Every time you or your crew performs a kill you will gain 5 health and 5 armor. This cannot occur more than 4 times every 4 seconds.'],
				vr_description: 'After dashing the player will regenerate from 2 up to a maximum of 6 armor depending on the amount of stamina consumed. Can only occur 3 times every 3 seconds'
			},
			{
				name: 'Tail Gunner',
				description: ['Every 10% health missing will increase the amount of armor gained from kills by 1.'],
				vr_description: 'The dash effect is now from 4 up to a maximum of 10.'
			},
			{
				name: 'Road Captain',
				description: ['Every 10% health missing will reduce the 4 second cooldown to kill regen by 0.1 second.'],
				vr_description: 'The dash effect is now from 6 up to a maximum of 14.'
			},
			{
				name: 'Sgt-at-Arms',
				description: ['Every 10% armor missing will increase the amount of health gained from kills by 1.'],
				vr_description: 'The dash effect is now from 8 up to a maximum of 18.'
			},
			{
				name: 'Prez',
				description: ['Every 10% armor missing will reduce the 4 second cooldown to kill regen by 0.1 second.'],
				vr_description: 'The dash effect is now from 10 up to a maximum of 22.'
			}
		],
		dlc: 'Biker Character Pack'
	},
	{
		name: 'Kingpin',
		description: ['The Kingpin is the boss, an autocrat whose every whim must be obeyed. But you gotta get the money first. Then when you get the money, you get the power. Remember, the only thing in this world that gives orders...is balls.'],
		cards: [
			{
				name: 'Bad Guy Coming Through',
				description: ['Unlocks and equips the Kingpin Injector. Changing to another perk deck will make the Injector unavailable again. The Injector replaces your current throwable, is equipped in your throwable slot and can be switched out if desired.\nWhile in game you can use the throwable key to activate the injector. Activating the injector will heal you with 75% of all damage taken for 6 seconds.\nYou can still take damage during the effect. The Injector can only be used once every 30 seconds.'],
				vr_description: 'After dashing the player will heal from 0 up to a maximum of 3 health depending on the amount of stamina consumed. Can only heal a maximum of 50 health every 5 seconds.'
			},
			{
				name: 'Play Rough',
				description: ['You gain 10% more health.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 6.',
				stats: [
					{
						type: 'hp',
						value: 1.1,
						multiply: true
					}
				]
			},
			{
				name: 'Public Enemy No. 1',
				description: ['You gain 10% more health.\nEnemies nearby will prefer targeting you, whenever possible, while the Injector effect is active.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 9.',
				stats: [
					{
						type: 'hp',
						value: 1.1,
						multiply: true
					}
				]
			},
			{
				name: 'Balls vs Bullets',
				description: ['You gain 20% more health.\nThe amount of health received during the Injector effect is increased by 25% while below 50% health.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 12.',
				stats: [
					{
						type: 'hp',
						value: 1.2,
						multiply: true
					}
				]
			},
			{
				name: 'Right to the Top',
				description: ['You gain 40% more health.\nFor every 5 points of health gained during the injector effect while at maximum health, the recharge time of the injector is reduced by 1 second.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 15.',
				stats: [
					{
						type: 'hp',
						value: 1.4,
						multiply: true
					}
				]
			}
		],
		dlc: 'Scarface Character Pack'
	},
	{
		name: 'Sicario',
		description: ['The Sicario is a must in every drug cartel. Someone who takes care of all types of problems in a most lethal way. The Sicario never ducks out of a fight, they get the job done - without hesitation or fear.'],
		cards: [
			{
				name: 'Smoker',
				description: ['Unlocks and equips the throwable Smoke Bomb.\nWhen deployed, the smoke bomb creates a smoke screen that lasts for 10 seconds. While standing inside the smoke screen, you and any of your allies automatically avoid 50% of all bullets. Any enemies that stand in the smoke will see their accuracy reduced by 50%.\nAfter the smoke screen dissipates, the Smoke Bomb is on a cooldown for 60 seconds, but killing enemies will reduce this cooldown by 1 second.'],
				vr_description: 'After dashing the player will gain 1% up to a maximum of 6% dodge for 3 seconds depending on the amount of stamina consumed.'
			},
			{
				name: 'Twitch',
				description: ['Every time the player gets shot, 20% dodge chance is gained. This effect is reset once the player dodges and will not occur for the next 4 second.'],
				vr_description: 'The dash effect is now from 1% up to a maximum of 7%.'
			},
			{
				name: 'Subtle',
				description: ['Your chance to dodge is increased by 15%.'],
				vr_description: 'The dash effect is now from 1% up to a maximum of 8%.',
				stats: [
					{
						type: 'dodge',
						value: 1.15,
						multiply: true
					}
				]
			},
			{
				name: 'Agility Shield',
				description: ['Dodging will replenish your armor.'],
				vr_description: 'The dash effect is now from 1% up to a maximum of 9%.'
			},
			{
				name: 'Unseen Shadow',
				description: ['All of your perk deck effects are increased by 100% while you are standing in the smoke screen. While any of your allies are standing in the smoke screen, they gain 10% dodge chance.'],
				vr_description: 'The dash effect is now from 1% up to a maximum of 10%.'
			}
		]
	},
	{
		name: 'Stoic',
		description: ['You are an unbreakable wall of resolve and calm. Discipline of the mind helps the Stoic overcome situations that would make others fall crying into shaking heaps. Combinations of breathing and physical reaction-control learned from buddhist monks will let you keep going long enough to finish the job, no matter what he enemy throws at you.'],
		cards: [
			{
				name: 'Virtue',
				description: ['Unlocks and equips the Stoic Hip Flask.\nDamage taken is now reduced by 75%. The remaining damage will be applied directly.\nThe 75% reduced damage will be applied over-time (12 seconds) instead.\nYou can use the throwable key to activate the Stoic Hip Flask and immediately negate any pending damage. The flask has a 10 second cooldown but time remaining will be lessened by 1 second per enemy killed.'],
				vr_description: 'After dashing the player will heal from 0 up to a maximum of 3 health depending on the amount of stamina consumed. Can only heal a maximum of 50 health every 5 seconds.'
			},
			{
				name: 'Un-moved',
				description: ['All of your armor is converted and applied to your health.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 6.',
				stats: [
					{
						type: 'hp',
						'arguments': ['armor'],
						value: 'armor'
					},
					{
						type: 'armor',
						'arguments': ['armor'],
						value: '-armor'
					}
				]
			},
			{
				name: 'Calm',
				description: ['After not taking damage for 4 seconds any damage-over-time you are still waiting to receive will be negated.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 9.'
			},
			{
				name: 'Imperturbable',
				description: ['When your health is below 35%, the cooldown of your flask will be reduced by 2 seconds for each enemy you kill instead of 1 second.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 12.'
			},
			{
				name: 'Enduring',
				description: ['When damage-over-time is removed you will be healed for an additional 50% of the damage-over-time remaining at that point.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 15.'
			}
		]
	},
	{
		name: 'Tag Team',
		description: ['Some way that experiences are best when shared, even in the case of performance-enhancing aerosol dispensers! For that special heister you like, this is something to bond over while you\'re looting bank vaults and taking care of business.'],
		cards: [
			{
				name: 'Soul Mates',
				description: ['Unlocks and equips the Gas Dispenser.\nTo activate the Gas Dispenser you need to look at another allied unit within a 18 meter radius with clear line of sight and press the throwable key to tag them.\nEach enemy you or the tagged unit kills will now heal you for 15 health and the tagged unit for 7.5 health.\nEach enemy you kill will now extend the duration of the effect by 1.3 seconds and reduce the cooldown timer by 2 seconds.\nThe effect will last for a duration of 2 seconds and has a cooldown of 12 seconds.'],
				vr_description: 'After dashing the player will heal from 0 up to a maximum of 3 health depending on the amount of stamina consumed. Can only heal a maximum of 50 health every 5 seconds.'
			},
			{
				name: 'Scent',
				description: ['Your maximum health is increased by 20%.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 6.',
				stats: [
					{
						type: 'hp',
						value: 1.2,
						multiply: true
					}
				]
			},
			{
				name: 'Synergy',
				description: ['Each enemy you or the tagged unit kills will now grant you 2 absorption up to a maximum of 20.\nThis effect will last until the perk deck item goes out of cooldown.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 9.'
			},
			{
				name: 'Inhale',
				description: ['Your maximum health is increased by 20%.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 12.',
				stats: [
					{
						type: 'hp',
						value: 1.2,
						multiply: true
					}
				]
			},
			{
				name: 'Harmony',
				description: ['Each enemy the tagged unit kills will now reduce your perk deck item cooldown timer by 2 seconds until you are no longer paired.'],
				vr_description: 'The dash effect is now from 0 up to a maximum of 15.'
			}
		],
		dlc: 'H3H3 Character Pack'
	},
	{
		name: 'Hacker',
		description: ['Using your sharp mind and gear, you can bring any security system to its knees with the push of a button. You are never caught unaware by a camera or security guard, but if things do go awry, you can just as easily brute-force your way into enemy comms to deliver a nasty surprise for anyone listening.'],
		cards: [
			{
				name: 'Code Glitch',
				description: ['Unlocks and equips the Pocket ECM Device.\nChanging to another perk deck will make the Pocket ECM Device unavailable again. The Pocket ECM Device replaces your current throwable, it can be switched out if desired.\tWhile in game you can use the throwable key to activate the Pocket ECM Device.\nActivating the Pocket ECM Device before the alarm is raised will trigger the jamming effect, disabling all electronics and pagers for a 6 second duration.\nActivating the Pocket ECM Device after the alarm is raised will trigger the feedback effect, granting a chance to stun enemies on the map every second for a 6 second duration.\nThe Pocket ECM Device has 2 charges with a 100 second cooldown timer, but each kill you perform will shorten the cooldown time by 6 seconds.']
			},
			{
				name: 'OpSec',
				description: ['You gain 20% more health.'],
				stats: [
					{
						type: 'hp',
						value: 1.2,
						multiply: true
					}
				]
			},
			{
				name: 'Bit Decay',
				description: ['Killing an enemy while the feedback effect is active will regenerate 20 health.']
			},
			{
				name: 'Kluge',
				description: ['Killing at least 1 enemy while the feedback or jamming effect is active will grant 20 dodge for 30 seconds.']
			},
			{
				name: 'Botnet',
				description: ['Crew members killing enemies while the feedback effect is active will regenerate 10 health.']
			}
		]
	}
]

export default perks