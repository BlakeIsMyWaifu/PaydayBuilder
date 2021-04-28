const perkCards = {
	"helmet_popping": {
		"name": "Helmet Popping",
		"description": "Increases your headshot damage by 25%."
	},
	"blending_in": {
		"name": "Blending In",
		"description": "You gain +1 increased concealment.\nWhen wearing armor, your movement speed is 15% less affected.\nYou gain 45% more experience when you complete days and jobs.",
		"stats": [
			{
				"type": "concealment",
				"value": 1
			},
			{
				"type": "speed",
				"value": 1.15,
				"multiply": true,
				"blacklist": ["suit"]
			}
		]
	},
	"walk-in_closet": {
		"name": "Walk-in Closet",
		"description": "Unlocks an armor bag equipment for you to use. The armor bag can be used to change your armor during a heist.\nIncreases your ammo pickup to 135% of the normal rate."
	},
	"fast_and_furious": {
		"name": "Fast and Furious",
		"description": "You do 5% more damage. Does not apply to melee damage, throwables, grenade launchers or rocket launchers.\nIncreases your doctor bag interaction speed by 20%."
	},
	"brute_strength-1": {
		"name": "Brute Strength",
		"description": "You grant 8% damage reduction for players in your group. This bonus is doubled for you when you are under 50% health.",
		"vr_description": "After dashing the player will heal from 0 up to a maximum of 3 health depending on the amount of stamina consumed. Can only heal a maximum of 50 health every 5 seconds."
	},
	"marathon_man": {
		"name": "Marathon Man",
		"description": "You and your crew's stamina is increased by 50%.\nIncreases your shout distance by 25%.\nWhen you are within medium range of an enemy, you receive 6% less damage from enemies.\tNote: Crew perks do not stack.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 6.",
		"stats": [
			{
				"type": "stamina",
				"value": 1.5,
				"multiply": true
			},
			{
				"type": "crewStamina",
				"value": 1.5,
				"multiply": true
			},
			{
				"type": "shout",
				"value": 1.25,
				"multiply": true
			}
		]
	},
	"wolf_pack": {
		"name": "Wolf Pack",
		"description": "Your crew will gain 10% more health.\nYou will gain 20% more health.\nNote: Crew perks do not stack.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 9.",
		"stats": [
			{
				"type": "hp",
				"value": 1.2,
				"multiply": true
			},
			{
				"type": "crewHp",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"testudo": {
		"name": "Testudo",
		"description": "You gain 10% more armor and your crew gains an additional 5% more armor.\nNote: Crew perks do not stack.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 12.",
		"stats": [
			{
				"type": "armor",
				"value": 1.1,
				"multiply": true
			},
			{
				"type": "crewArmor",
				"value": 1.05,
				"multiply": true
			}
		]
	},
	"hostage_situation": {
		"name": "Hostage Situation",
		"description": "You and your crew will gain 6% max health and 12% stamina for each hostage up to 4 times.\nYou and your crew will gain 8% damage reduction for having one or more hostages.\nNote: Crew perks do not stack.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 15.",
		"deck_completion_bonus": true
	},
	"brute_strength-2": {
		"name": "Brute Strength",
		"description": "You gain 10% more health",
		"vr_description": "After dashing the player will heal from 0 up to a maximum of 3 health depending on the amount of stamina consumed. Can only heal a maximum of 50 health every 5 seconds.",
		"stats": [
			{
				"type": "hp",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"meat_shield": {
		"name": "Meat Shield",
		"description": "You are 15% more likely to be targeted when you are close to your crew members.\nYou gain 10% more health.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 6.",
		"stats": [
			{
				"type": "hp",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"giant_strength": {
		"name": "Giant Strength",
		"description": "You gain an additional 20% more health.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 9.",
		"stats": [
			{
				"type": "hp",
				"value": 1.2,
				"multiply": true
			}
		]
	},
	"disturbing_the_peace": {
		"name": "Disturbing the Peace",
		"description": "All firearms have a chance to spread panic among your enemies.\nPanic will make enemies go into short bursts of uncontrollable fear.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 12."
	},
	"800-pound_gorilla": {
		"name": "800-pound Gorilla",
		"description": "You gain an additional 40% more health.\nYou regenerate 3% of your life every 5 seconds.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 15.",
		"deck_completion_bonus": true,
		"stats": [
			{
				"type": "hp",
				"value": 1.4,
				"multiply": true
			},
			{
				"type": "hpRegen",
				"value": 3
			}
		]
	},
	"type_1_armor": {
		"name": "Type I Armor",
		"description": "You gain 10% more armor",
		"vr_description": "After dashing the player will regenerate from 2 up to a maximum of 6 armor depending on the amount of stamina consumed. Can only occur 3 times every 3 seconds.",
		"stats": [
			{
				"type": "armor",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"type_2_armor": {
		"name": "Type II Armor",
		"description": "You gain an additional 10% more armor.",
		"vr_description": "The dash effect is now from 4 up to a maximum of 10.",
		"stats": [
			{
				"type": "armor",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"type_3_armor": {
		"name": "Type III Armor",
		"description": "You gain an additional 10% more armor.",
		"vr_description": "The dash effect is now from 6 up to a maximum of 14.",
		"stats": [
			{
				"type": "armor",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"reinforced_armor": {
		"name": "Reinforced Armor",
		"description": "Your armor recovery rate is increased by 10%.\nWhen your armor gets depleted you will be immune to health damage for 2 seconds. This cannot occur more often than once every 15 seconds.",
		"vr_description": "The dash effect is now from 8 up to a maximum of 18.",
		"stats": [
			{
				"type": "armorRecoveryRate",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"liquid_armor": {
		"name": "Liquid Armor",
		"description": "You gain an additional 5% more armor.\nReduces the armor recovery time for you and your crew by 10%.\nNote: Crew perks do not stack.",
		"vr_description": "The dash effect is now from 10 up to a maximum of 22.",
		"deck_completion_bonus": true,
		"stats": [
			{
				"type": "armor",
				"value": 1.05,
				"multiply": true
			},
			{
				"type": "armorRecoveryRate",
				"value": 1.1,
				"multiply": true
			},
			{
				"type": "crewArmorRecoveryRate",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"subtle-1": {
		"name": "Subtle",
		"description": "Your chance to dodge is increased by 15%.",
		"vr_description": "After dashing the player will gain 1% up to a maximum of 6% dodge for 3 seconds depending on the amount of stamina consumed.",
		"stats": [
			{
				"type": "dodge",
				"value": 1.15,
				"multiply": true
			}
		]
	},
	"elusive": {
		"name": "Elusive",
		"description": "You are 15% less likely to be targeted when you are close to your crew members.",
		"vr_description": "The dash effect is now from 1% up to a maximum of 7%."
	},
	"evasive": {
		"name": "Evasive",
		"description": "Your chance to dodge is increased by an additional 15%.",
		"vr_description": "The dash effect is now from 1% up to a maximum of 8%.",
		"stats": [
			{
				"type": "dodge",
				"value": 1.15,
				"multiply": true
			}
		]
	},
	"shadow_warrior": {
		"name": "Shadow Warrior",
		"description": "Your chance to dodge is increased by an additional 15%.",
		"vr_description": "The dash effect is now from 1% up to a maximum of 9%.",
		"stats": [
			{
				"type": "dodge",
				"value": 1.15,
				"multiply": true
			}
		]
	},
	"killer_instinct": {
		"name": "Killer Instinct",
		"description": "All your weapons have a 25% chance to pierce enemy armor.\nIncreases weapon swapping speed by 80%",
		"vr_description": "The dash effect is now from 1% up to a maximum of 10%.",
		"deck_completion_bonus": true,
		"stats": [
			{
				"type": "swapSpeed",
				"value": 1.80,
				"multiply": true
			}
		]
	},
	"basic_recovery": {
		"name": "Basic Recovery",
		"description": "Your armor recovery rate is increased by 5%.",
		"vr_description": "After dashing the player will regenerate from 2 up to a maximum of 6 armor depending on the amount of stamina consumed. Can only occur 3 times every 3 seconds.",
		"stats": [
			{
				"type": "armorRecoveryRate",
				"value": 1.05,
				"multiply": true
			}
		]
	},
	"ambidexterity": {
		"name": "Ambidexterity",
		"description": "Dual wielded weapons have a -16 stability penalty.\nYour armor recovery rate is increased by an additional 10%.\nAmmo capacity for your akimbo weapons are increased by 50%.",
		"vr_description": "The dash effect is now from 4 up to a maximum of 10.",
		"stats": [
			{
				"type": "armorRecoveryRate",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"advanced_recovery": {
		"name": "Advanced Recovery",
		"description": "Your armor recovery rate is increased by an additional 10%.",
		"vr_description": "The dash effect is now from 6 up to a maximum of 14.",
		"stats": [
			{
				"type": "armorRecoveryRate",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"expert_recovery": {
		"name": "Expert Recovery",
		"description": "Your armor recovery rate is increased by an additional 10%.",
		"vr_description": "The dash effect is now from 8 up to a maximum of 18.",
		"stats": [
			{
				"type": "armorRecoveryRate",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"tooth_and_claw": {
		"name": "Tooth and Claw",
		"description": "Your armor recovery rate is increased by an additional 10%.\nYour armor will recover 1.5 seconds after being broken no matter what the situation.",
		"vr_description": "The dash effect is now from 10 up to a maximum of 22.",
		"deck_completion_bonus": true,
		"stats": [
			{
				"type": "armorRecoveryRate",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"subtle-2": {
		"name": "Subtle",
		"description": "Your chance to dodge is increased by 15%.",
		"vr_description": "After dashing the player will regenerate from 2 up to a maximum of 6 armor depending on the amount of stamina consumed. Can only occur 3 times every 3 seconds",
		"stats": [
			{
				"type": "dodge",
				"value": 1.15,
				"multiply": true
			}
		]
	},
	"basic_composure": {
		"name": "Basic Composure",
		"description": "Your chance to dodge is increased by 5% for ballistic vests.\nYour armor is increased by 20% for ballistic vests.",
		"vr_description": "The dash effect is now from 4 up to a maximum of 10.",
		"stats": [
			{
				"type": "dodge",
				"value": 1.05,
				"multiply": true,
				"whitelist": [
					"light_ballistic",
					"ballistic",
					"heavy_ballistic"
				]
			},
			{
				"type": "armor",
				"value": 1.2,
				"multiply": true,
				"whitelist": [
					"light_ballistic",
					"ballistic",
					"heavy_ballistic"
				]
			}
		]
	},
	"advanced_composure": {
		"name": "Advanced Composure",
		"description": "Your chance to dodge is increased by 10% for ballistic vests.\nYour armor is increased by 20% for ballistic vests.",
		"vr_description": "The dash effect is now from 6 up to a maximum of 14.",
		"stats": [
			{
				"type": "dodge",
				"value": 1.1,
				"multiply": true,
				"whitelist": [
					"light_ballistic",
					"ballistic",
					"heavy_ballistic"
				]
			},
			{
				"type": "armor",
				"value": 1.2,
				"multiply": true,
				"whitelist": [
					"light_ballistic",
					"ballistic",
					"heavy_ballistic"
				]
			}
		]
	},
	"expert_composure": {
		"name": "Expert Composure",
		"description": "Your chance to dodge is increased by 10% for ballistic vests.\nYour armor is increased by 25% for ballistic vests.",
		"vr_description": "The dash effect is now from 8 up to a maximum of 18.",
		"stats": [
			{
				"type": "dodge",
				"value": 1.1,
				"multiply": true,
				"whitelist": [
					"light_ballistic",
					"ballistic",
					"heavy_ballistic"
				]
			},
			{
				"type": "armor",
				"value": 1.25,
				"multiply": true,
				"whitelist": [
					"light_ballistic",
					"ballistic",
					"heavy_ballistic"
				]
			}
		]
	},
	"master_recovery": {
		"name": "Master Recovery",
		"description": "Your armor recovery rate is increased by 10%",
		"vr_description": "The dash effect is now from 10 up to a maximum of 22.",
		"deck_completion_bonus": true,
		"stats": [
			{
				"type": "dodge",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"sneaky": {
		"name": "Sneaky",
		"description": "Your chance to dodge is increased by 20%.",
		"vr_description": "After dashing the player will gain 1% up to a maximum of 6% dodge for 3 seconds depending on the amount of stamina consumed.",
		"stats": [
			{
				"type": "dodge",
				"value": 1.2,
				"multiply": true
			}
		]
	},
	"bag_of_tricks": {
		"name": "Bag of Tricks",
		"description": "Standing still and crouching decreases your chances to be targeted by 10%.\nYou bag corpses 20% faster.",
		"vr_description": "The dash effect is now from 1% up to a maximum of 7%."
	},
	"luck_of_the_irish": {
		"name": "Luck of the Irish",
		"description": "Your chance to dodge is increased by an additional 5%.\nYour chance to be targeted while standing still and crouching is decreased by an additional 5%.\nYou pick locks 20% faster.",
		"vr_description": "The dash effect is now from 1% up to a maximum of 8%",
		"stats": [
			{
				"type": "dodge",
				"value": 1.05,
				"multiply": true
			}
		]
	},
	"dutch_courage": {
		"name": "Dutch Courage",
		"description": "Your chance to dodge is increased by an additional 5%.\nYour chance to be targeted while standing still and crouching is decreased by an additional 5%.\nYou answer pagers 10% faster.",
		"vr_description": "The dash effect is now from 1% up to a maximum of 9%",
		"stats": [
			{
				"type": "dodge",
				"value": 1.05,
				"multiply": true
			}
		]
	},
	"breath_of_fresh_air": {
		"name": "Breath of Fresh Air",
		"description": "Standing still and crouching increases your armor recovery rate by 20%.\nYou gain 10% crouching movement speed.",
		"vr_description": "The dash effect is now from 1% up to a maximum of 10%.",
		"deck_completion_bonus": true
	},
	"overdog": {
		"name": "OVERDOG",
		"description": "When you are surrounded by three enemies or more, you receive 12% less damage from enemies.\nYour second and each consecutive melee hit within 1 second of the last one will deal 10 times its normal damage.",
		"vr_description": "After dashing the player will regenerate from 2 up to a maximum of 6 armor depending on the amount of stamina consumed. Can only occur 3 times every 3 seconds."
	},
	"basic_close_combat": {
		"name": "Basic Close Combat",
		"description": "When you are within medium range of an enemy, you receive 8% less damage from enemies.",
		"vr_description": "The dash effect is now from 4 up to a maximum of 10."
	},
	"advanced_close_combat": {
		"name": "Advanced Close Combat",
		"description": "When you are within medium range of an enemy, you receive an additional 8% less damage from enemies.",
		"vr_description": "The dash effect is now from 6 up to a maximum of 14."
	},
	"expert_close_combat": {
		"name": "Expert Close Combat",
		"description": "When you are within medium range of an enemy, you receive an additional 8% less damage from enemies.",
		"vr_description": "The dash effect is now from 8 up to a maximum of 18."
	},
	"life_drain": {
		"name": "Life Drain",
		"description": "Striking an enemy with your melee weapon regenerates 20% of your health. This cannot occur more than once every 10 seconds.",
		"vr_description": "The dash effect is now from 10 up to a maximum of 22.",
		"deck_completion_bonus": true
	},
	"tension": {
		"name": "Tension",
		"description": "Killing an enemy regenerates 30 armor.\nThis cannot occur more than once every 1 second.\nYou gain an additional 10% more armor.",
		"vr_description": "The dash effect is now from 4 up to a maximum of 10.",
		"stats": [
			{
				"type": "armor",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"clean_hit": {
		"name": "Clean Hit",
		"description": "Killing an enemy with a melee weapon regenerates 10% health.\nThis cannot occur more than once every 1 second.\nWhen you are within medium range of an enemy you receive 8% less damage.",
		"vr_description": "The dash effect is now from 6 up to a maximum of 14."
	},
	"overdose": {
		"name": "Overdose",
		"description": "Killing an enemy at medium range recovers 30 armor.\nThis cannot occur more than once every 1 second.\nYou gain an additional 10% more armor.",
		"vr_description": "The dash effect is now from 8 up to a maximum of 18.",
		"stats": [
			{
				"type": "armor",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"showdown": {
		"name": "Showdown",
		"description": "Killing an enemy at medium range has a 75% chance to spread panic among your enemies.\nPanic will make enemies go into short bursts of uncontrollable fear.\nThis cannot occur more than once every 1 second.",
		"vr_description": "The dash effect is now from 10 up to a maximum of 22.",
		"deck_completion_bonus": true
	},
	"medical_supplies": {
		"name": "Medical Supplies",
		"description": "Ammo packs you pick up also yield medical supplies and heals you for 16 to 24 health.\nCannot occur more than once every 3 seconds.\nIf the Gambler's current health is lower than another player's, the heal effect on the Gambler is increased by 20%. Stacks up to three times.",
		"vr_description": "After dashing the player will heal from 0 up to a maximum of 3 health depending on the amount of stamina consumed. Can only heal a maximum of 50 health every 5 seconds."
	},
	"ammo_give_out": {
		"name": "Ammo Give Out",
		"description": "When you pick up ammo, you trigger an ammo pickup for 50% of normal pickup to the other players in your team.\nCannot occur more than once every 5 seconds.\nYou gain 20% more health.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 6.",
		"stats": [
			{
				"type": "hp",
				"value": 1.2,
				"multiply": true
			}
		]
	},
	"sharing_is_caring": {
		"name": "Sharing Is Caring",
		"description": "When you get healed from picking up ammo packs, your teammates also get healed for 50% of the amount.\nYou gain 20% more health.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 9.",
		"stats": [
			{
				"type": "armor",
				"value": 1.2,
				"multiply": true
			}
		]
	},
	"more_healing_1": {
		"name": "More Healing 1",
		"description": "Increase health gained from ammo packs by additional 8.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 12."
	},
	"more_healing_2": {
		"name": "More Healing 1",
		"description": "Increase health gained from ammo packs by additional 8.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 15.",
		"deck_completion_bonus": true
	},
	"histamine": {
		"name": "Histamine",
		"description": "Damaging an enemy heals 1 life points every 0.3 seconds for 3 seconds.\nThis effect stacks but cannot occur more than once every 1.5 seconds and only while wearing the Two-piece Suit or Lightweight Ballistic Vest.",
		"vr_description": "After dashing the player will heal from 0 up to a maximum of 3 health depending on the amount of stamina consumed. Can only heal a maximum of 50 health every 5 seconds."
	},
	"adrenaline": {
		"name": "Adrenaline",
		"description": "Damaging an enemy now heals 2 life points every 0.3 seconds for 3 seconds.\nYou gain 20% more health.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 6."
	},
	"endorphins": {
		"name": "Endorphins",
		"description": "Damaging an enemy now heals 3 life points every 0.3 seconds for 3 seconds.\nIncreases your chance to pierce enemy armor by 10%.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 9."
	},
	"dopamine": {
		"name": "Dopamine",
		"description": "Damaging an enemy now heals 4 life points every 0.3 seconds for 3 seconds.\nYou gain 20% more health.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 12.",
		"stats": [
			{
				"type": "hp",
				"value": 1.2,
				"multiply": true
			}
		]
	},
	"euphoria": {
		"name": "Euphoria",
		"description": "Damaging an enemy now heals 4 life points every 0.3 seconds for 4.2 seconds.\nIncrease your chance to pierce enemy armor by 20%.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 15.",
		"deck_completion_bonus": true
	},
	"koi_irezumi": {
		"name": "Koi Irezumi",
		"description": "The lower your health, the more armor recovery rate you have. When your health is below 25%, you will gain up to 20% armor recovery rate.\nNOTE: Entering this state negates third party regeneration effects.",
		"vr_description": "After dashing the player will regenerate from 2 up to a maximum of 6 armor depending on the amount of stamina consumed. Can only occur 3 times every 3 seconds."
	},
	"hebi_irezumi": {
		"name": "Hebi Irezumi",
		"description": "The lower your health, the more movement speed you gain. When your health is below 25%, you will gain up to 20% movement speed.",
		"vr_description": "The dash effect is now from 4 up to a maximum of 10."
	},
	"tora_irezumi": {
		"name": "Tora Irezumi",
		"description": "The lower your health, the more armor recovery rate you have. When your health is below 25%, you will gain up to an additional 20% armor recovery rate.",
		"vr_description": "The dash effect is now from 6 up to a maximum of 14."
	},
	"ryu_irezumi": {
		"name": "Ryu Irezumi",
		"description": "The lower your health, the more armor recovery rate you have. When your health is below 25%, you will gain up to an additional 20% armor recovery rate.",
		"vr_description": "The dash effect is now from 8 up to a maximum of 18."
	},
	"oni_irezumi": {
		"name": "Oni Irezumi",
		"description": "All berserker state effects in this perk deck will start at 50% health instead of 25%.",
		"vr_description": "The dash effect is now from 10 up to a maximum of 22.",
		"deck_completion_bonus": true
	},
	"point_break": {
		"name": "Point Break",
		"description": "While your armor is up, you will store 4 health for every 1 enemy you or your crew kills.\nWhen your armor has been completely depleted and then starts to regenerate, you will gain health equal to the stored health amount.\nMaximum amount of stored health depends on your equipped armor.",
		"vr_description": "After dashing the player will heal from 0 up to a maximum of 3 health depending on the amount of stamina consumed. Can only heal a maximum of 50 health every 5 seconds."
	},
	"the_emerging_force": {
		"name": "The Emerging Force",
		"description": "Increases the amount of health stored from kills by 4.\nYou gain 10% more health.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 6.",
		"stats": [
			{
				"type": "hp",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"life_of_ice": {
		"name": "Life of Ice",
		"description": "Increases the maximum health that can be stored by 50%.\nYou gain 10% more health.\nYour chance to dodge is increased by 10%.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 9.",
		"stats": [
			{
				"type": "hp",
				"value": 1.1,
				"multiply": true
			},
			{
				"type": "dodge",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"awakening_earth": {
		"name": "Awakening Earth",
		"description": "Increases the amount of health stored from kills by 4.\nYou gain 20% more health.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 12.",
		"stats": [
			{
				"type": "hp",
				"value": 1.2,
				"multiply": true
			}
		]
	},
	"the_perfect_line": {
		"name": "The Perfect Line",
		"description": "Killing an enemy speeds up your armor recovery time depending on how much armor you have. The more armor the less recovery speed gained per kill.\tArmor recovery speed is reset whenever your armor recovers.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 15.",
		"deck_completion_bonus": true
	},
	"excitement": {
		"name": "Excitement",
		"description": "100% of damage you deal is converted into Hysteria Stacks, up to 240 every 4 seconds. Max amount of stacks is 600.\nHysteria Stacks:\tYou gain 1 damage absorption for every 30 stacks of Hysteria. Hysteria Stacks decays 60% + 80 every 8 seconds.",
		"vr_description": "After dashing the player will regenerate from 2 up to a maximum of 6 armor depending on the amount of stamina consumed. Can only occur 3 times every 3 seconds."
	},
	"outburst": {
		"name": "Outburst",
		"description": "Members of your crew also gains the effect of your Hysteria Stacks.\nHysteria Stacks from multiple crew members do not stack and only the stacks that gives the highest damage absorption will have an effect.",
		"vr_description": "The dash effect is now from 4 up to a maximum of 10."
	},
	"fervor": {
		"name": "Fervor",
		"description": "Change the decay of your Hysteria Stacks to 60% + 40 every 8 seconds.",
		"vr_description": "The dash effect is now from 6 up to a maximum of 14."
	},
	"recklessness": {
		"name": "Recklessness",
		"description": "Change the damage absorption of your Hysteria Stacks on you and your crew to 1 damage absorption for every 25 stacks of Hysteria.",
		"vr_description": "The dash effect is now from 8 up to a maximum of 18."  
	},
	"insanity": {
		"name": "Insanity",
		"description": "Damage absorption from Hysteria Stacks on you is increased by 100%.",
		"vr_description": "The dash effect is now from 10 up to a maximum of 22.",
		"deck_completion_bonus": true   
	},
	"blitzkrieg_bop": {
		"name": "Blitzkrieg Bop",
		"description": "Instead of fully regenerating armor when out of combat, The Anarchist will continuously regenerate armor throughout the entire combat. Heavier armor regenerates more armor, but during longer intervals.\nWhen your armor gets depleted you will be immune to health damage for 2 seconds. This cannot occur more often than once every 15 seconds.\nNote: Skills and perks that increases the armor recovery rate are disabled when using this perk deck.",
		"vr_description": "After dashing the player will regenerate from 1 up to a maximum of 3 armor depending on the amount of stamina consumed. Can only occur 3 times every 5 seconds"
	},
	"straight_edge": {
		"name": "Straight Edge",
		"description": "50% of your health is converted into 100% armor.",
		"vr_description": "The dash effect is now from 2 up to a maximum of 5.",
		"stats": [
			{
				"type": "armor",
				"arguments": ["hp"],
				"value": "hp"
			},
			{
				"type": "hp",
				"value": 0.5,
				"multiply": true
			}
		]
	},
	"death_or_glory": {
		"name": "Death or Glory",
		"description": "50% of your health is converted into 110% armor.",
		"vr_description": "The dash effect is now from 3 up to a maximum of 7.",
		"stats": [
			{
				"type": "armor",
				"arguments": ["hp"],
				"value": "(0.5*hp)*2.1"
			},
			{
				"type": "hp",
				"value": 0.5,
				"multiply": true
			}
		],
		"overrides": "straight_edge"
	},
	"rise_above": {
		"name": "Rise Above",
		"description": "50% of your health is converted into 120% armor.",
		"vr_description": "The dash effect is now from 4 up to a maximum of 9.",
		"stats": [
			{
				"type": "armor",
				"arguments": ["hp"],
				"value": "(0.5*hp)*2.2"
			},
			{
				"type": "hp",
				"value": 0.5,
				"multiply": true
			}
		],
		"overrides": "death_or_glory"
	},
	"lust_for_life": {
		"name": "Lust for Life",
		"description": "Dealing damage will grant you 10 armor - this can only occur once every 1.5 seconds.",
		"vr_description": "The dash effect is now from 5 up to a maximum of 11.",
		"deck_completion_bonus": true
	},
	"prospect": {
		"name": "Prospect",
		"description": "Every time you or your crew performs a kill you will gain 5 health and 5 armor. This cannot occur more than 4 times every 4 seconds.",
		"vr_description": "After dashing the player will regenerate from 2 up to a maximum of 6 armor depending on the amount of stamina consumed. Can only occur 3 times every 3 seconds"
	},
	"tail_gunner": {
		"name": "Tail Gunner",
		"description": "Every 10% health missing will increase the amount of armor gained from kills by 1.",
		"vr_description": "The dash effect is now from 4 up to a maximum of 10."
	},
	"road_captain": {
		"name": "Road Captain",
		"description": "Every 10% health missing will reduce the 4 second cooldown to kill regen by 0.1 second.",
		"vr_description": "The dash effect is now from 6 up to a maximum of 14."
	},
	"sgt-at-arms": {
		"name": "Sgt-at-Arms",
		"description": "Every 10% armor missing will increase the amount of health gained from kills by 1.",
		"vr_description": "The dash effect is now from 8 up to a maximum of 18."
	},
	"prez": {
		"name": "Prez",
		"description": "Every 10% armor missing will reduce the 4 second cooldown to kill regen by 0.1 second.",
		"vr_description": "The dash effect is now from 10 up to a maximum of 22.",
		"deck_completion_bonus": true
	},
	"bad_guy_coming_through": {
		"name": "Bad Guy Coming Through",
		"description": "Unlocks and equips the Kingpin Injector. Changing to another perk deck will make the Injector unavailable again. The Injector replaces your current throwable, is equipped in your throwable slot and can be switched out if desired.\nWhile in game you can use the throwable key to activate the injector. Activating the injector will heal you with 75% of all damage taken for 6 seconds.\nYou can still take damage during the effect. The Injector can only be used once every 30 seconds.",
		"vr_description": "After dashing the player will heal from 0 up to a maximum of 3 health depending on the amount of stamina consumed. Can only heal a maximum of 50 health every 5 seconds."
	},
	"play_rough": {
		"name": "Play Rough",
		"description": "You gain 10% more health.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 6.",
		"stats": [
			{
				"type": "hp",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"public_enemy_no_1": {
		"name": "Public Enemy No. 1",
		"description": "You gain 10% more health.\nEnemies nearby will prefer targeting you, whenever possible, while the Injector effect is active.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 9.",
		"stats": [
			{
				"type": "hp",
				"value": 1.1,
				"multiply": true
			}
		]
	},
	"balls_vs_bullets": {
		"name": "Balls vs Bullets",
		"description": "You gain 20% more health.\nThe amount of health received during the Injector effect is increased by 25% while below 50% health.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 12.",
		"stats": [
			{
				"type": "hp",
				"value": 1.2,
				"multiply": true
			}
		]
	},
	"right_to_the_top": {
		"name": "Right to the Top",
		"description": "You gain 40% more health.\nFor every 5 points of health gained during the injector effect while at maximum health, the recharge time of the injector is reduced by 1 second.",
		 "vr_description": "The dash effect is now from 0 up to a maximum of 15.",
		"deck_completion_bonus": true,
		"stats": [
			{
				"type": "hp",
				"value": 1.4,
				"multiply": true
			}
		]
	},
	"smoker": {
		"name": "Smoker",
		"description": "Unlocks and equips the throwable Smoke Bomb.\nWhen deployed, the smoke bomb creates a smoke screen that lasts for 10 seconds. While standing inside the smoke screen, you and any of your allies automatically avoid 50% of all bullets. Any enemies that stand in the smoke will see their accuracy reduced by 50%.\nAfter the smoke screen dissipates, the Smoke Bomb is on a cooldown for 60 seconds, but killing enemies will reduce this cooldown by 1 second.",
		"vr_description": "After dashing the player will gain 1% up to a maximum of 6% dodge for 3 seconds depending on the amount of stamina consumed."
	},
	"twitch": {
		"name": "Twitch",
		"description": "Every time the player gets shot, 20% dodge chance is gained. This effect is reset once the player dodges and will not occur for the next 4 second.",
		"vr_description": "The dash effect is now from 1% up to a maximum of 7%."
	},
	"subtle-3": {
		"name": "Subtle",
		"description": "Your chance to dodge is increased by 15%.",
		"vr_description": "The dash effect is now from 1% up to a maximum of 8%.",
		"stats": [
			{
				"type": "dodge",
				"value": 1.15,
				"multiply": true
			}
		]
	},
	"agility_shield": {
		"name": "Agility Shield",
		"description": "Dodging will replenish your armor.",
		"vr_description": "The dash effect is now from 1% up to a maximum of 9%."
	},
	"unseen_shadow": {
		"name": "Unseen Shadow",
		"description": "All of your perk deck effects are increased by 100% while you are standing in the smoke screen. While any of your allies are standing in the smoke screen, they gain 10% dodge chance.",
		"vr_description": "The dash effect is now from 1% up to a maximum of 10%.",
		"deck_completion_bonus": true
	},
	"virtue": {
		"name": "Virtue",
		"description": "Unlocks and equips the Stoic Hip Flask.\nDamage taken is now reduced by 75%. The remaining damage will be applied directly.\nThe 75% reduced damage will be applied over-time (12 seconds) instead.\nYou can use the throwable key to activate the Stoic Hip Flask and immediately negate any pending damage. The flask has a 10 second cooldown but time remaining will be lessened by 1 second per enemy killed.",
		"vr_description": "After dashing the player will heal from 0 up to a maximum of 3 health depending on the amount of stamina consumed. Can only heal a maximum of 50 health every 5 seconds."
	},
	"un-moved": {
		"name": "Un-moved",
		"description": "All of your armor is converted and applied to your health.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 6.",
		"stats": [
			{
				"type": "hp",
				"arguments": ["armor"],
				"value": "armor"
			},
			{
				"type": "armor",
				"arguments": ["armor"],
				"value": "-armor"
			}
		]
	},
	"calm": {
		"name": "Calm",
		"description": "After not taking damage for 4 seconds any damage-over-time you are still waiting to receive will be negated.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 9."
	},
	"imperturbable": {
		"name": "Imperturbable",
		"description": "When your health is below 35%, the cooldown of your flask will be reduced by 2 seconds for each enemy you kill instead of 1 second.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 12."
	},
	"enduring": {
		"name": "Enduring",
		"description": "When damage-over-time is removed you will be healed for an additional 50% of the damage-over-time remaining at that point.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 15.",
		"deck_completion_bonus": true
	},
	"soul_mates": {
		"name": "Soul Mates",
		"description": "Unlocks and equips the Gas Dispenser.\nTo activate the Gas Dispenser you need to look at another allied unit within a 18 meter radius with clear line of sight and press the throwable key to tag them.\nEach enemy you or the tagged unit kills will now heal you for 15 health and the tagged unit for 7.5 health.\nEach enemy you kill will now extend the duration of the effect by 1.3 seconds and reduce the cooldown timer by 2 seconds.\nThe effect will last for a duration of 2 seconds and has a cooldown of 12 seconds.",
		"vr_description": "After dashing the player will heal from 0 up to a maximum of 3 health depending on the amount of stamina consumed. Can only heal a maximum of 50 health every 5 seconds."
	},
	"scent": {
		"name": "Scent",
		"description": "Your maximum health is increased by 20%.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 6.",
		"stats": [
			{
				"type": "hp",
				"value": 1.2,
				"multiply": true
			}
		]
	},
	"synergy": {
		"name": "Synergy",
		"description": "Each enemy you or the tagged unit kills will now grant you 2 absorption up to a maximum of 20.\nThis effect will last until the perk deck item goes out of cooldown.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 9."
	},
	"inhale": {
		"name": "Inhale",
		"description": "Your maximum health is increased by 20%.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 12.",
		"stats": [
			{
				"type": "hp",
				"value": 1.2,
				"multiply": true
			}
		]
	},
	"harmony": {
		"name": "Harmony",
		"description": "Each enemy the tagged unit kills will now reduce your perk deck item cooldown timer by 2 seconds until you are no longer paired.",
		"vr_description": "The dash effect is now from 0 up to a maximum of 15.",
		"deck_completion_bonus": true
	},
	"code_glitch": {
		"name": "Code Glitch",
		"description": "Unlocks and equips the Pocket ECM Device.\nChanging to another perk deck will make the Pocket ECM Device unavailable again. The Pocket ECM Device replaces your current throwable, it can be switched out if desired.\tWhile in game you can use the throwable key to activate the Pocket ECM Device.\nActivating the Pocket ECM Device before the alarm is raised will trigger the jamming effect, disabling all electronics and pagers for a 6 second duration.\nActivating the Pocket ECM Device after the alarm is raised will trigger the feedback effect, granting a chance to stun enemies on the map every second for a 6 second duration.\nThe Pocket ECM Device has 2 charges with a 100 second cooldown timer, but each kill you perform will shorten the cooldown time by 6 seconds."
	},
	"opsec": {
		"name": "OpSec",
		"description": "You gain 20% more health.",
		"stats": [
			{
				"type": "hp",
				"value": 1.2,
				"multiply": true
			}
		]
	},
	"bit_decay": {
		"name": "Bit Decay",
		"description": "Killing an enemy while the feedback effect is active will regenerate 20 health."
	},
	"kluge": {
		"name": "Kluge",
		"description": "Killing at least 1 enemy while the feedback or jamming effect is active will grant 20 dodge for 30 seconds."
	},
	"botnet": {
		"name": "Botnet",
		"description": "Crew members killing enemies while the feedback effect is active will regenerate 10 health.",
		"deck_completion_bonus": true
	}
}

export default perkCards