export interface ContentData {
	name: ContentList;
	rarity: ContentRarity;
	type: ContentType;
	released: string;
	price: string;
	platform: Platform;
	bundleContent?: ContentList[]; // TODO add bundle contents
}

interface Platform {
	360: boolean;
	pc: boolean;
	ps4: boolean;
	xb1: boolean;
	ps3: boolean;
}

export type ContentRarity = 'Pre-order' | 'Paid' | 'Secret' | 'Free' | 'Event' | 'Collaboration' | 'Bundle' | 'Community' | 'Infamous'

export type ContentType = 'Pre-order' | 'Soundtrack' | 'Heist' | 'Feature' | 'Weapon' | 'Mask' | 'Character' | 'Weapon mod' | 'Bundle' | 'Weapon Pack' | 'Weapon Mod' | 'Outfit' | 'Weapon Skin'

type ContentList =
	| 'Career Criminal Content'
	| 'Lootbag'
	| 'The Official Soundtrack'
	| 'The Diamond Store Heist'
	| 'Party Time'
	| 'The First Annual Payday Halloween Special!'
	| 'Armored Transport'
	| 'Gage Weapon Pack #01'
	| 'The Charlie Santa Heist'
	| 'A Merry Payday Christmas Soundtrack'
	| 'Sweet Tooth Mask!'
	| 'The Infamy Update'
	| 'Gage Weapon Pack #02'
	| 'The Death Wish Update'
	| 'The Election Day Heist'
	| 'Gage Mod Courier'
	| 'Gage Sniper Pack'
	| 'The Shadow Raid Heist'
	| 'Humble Mask Pack'
	| 'The Big Bank Heist'
	| 'Swag Bag Bundle'
	| 'The Ultimate Steal Edition'
	| 'Gage Shotgun Pack'
	| 'Gage Assault Pack'
	| 'The Big Fat Music Update'
	| 'The Heist Soundtrack'
	| 'Hotline Miami'
	| 'Hotline Miami Exclusive Content'
	| 'John Wick Character Pack'
	| 'The Art Gallery Heist'
	| 'Hoxton Breakout Heist'
	| 'Old Hoxton Character Pack'
	| 'Thespian Mask Pack DLC'
	| 'Humble Mask Pack 2'
	| 'The Second Annual Payday Halloween Special!'
	| 'Gage Historical Pack'
	| 'Alienware Alpha Mask Pack'
	| 'Alienware Alpha Mauler'
	| 'The White Xmas Heist'
	| 'Clover Character Pack'
	| 'The Diamond Heist'
	| 'Gage Weapon Pack Bundle'
	| 'GOTY Edition'
	| 'Heist Bundle'
	| 'New Year Update'
	| 'Dragan Character Pack'
	| 'The Bomb Heists'
	| 'The Butcher\'s AK/CAR Mod Pack'
	| 'Infamy 2.0'
	| 'Hotline Miami Mask Pack'
	| 'Jacket Character Pack'
	| 'The COMPLETELY OVERKILL Pack'
	| 'The OVERKILL Pack'
	| 'Spring Break Heist Updates'
	| 'Bonnie Character Pack'
	| 'The Car Shop Heist'
	| 'The Butcher Mod Pack 2'
	| 'SpeedRunners'
	| 'Hoxton Revenge Heist'
	| 'The Butcher\'s BBQ Pack'
	| 'The Butcher\'s Western Pack'
	| 'The Meltdown Heist'
	| 'The Alesso Heist'
	| 'The OVERKILL B-Sides Soundtrack'
	| 'Hardtime Lootbag'
	| 'StarVR Mask Pack'
	| 'Humble Mask Pack 3'
	| 'Humble Mask Pack 4'
	| 'The Jack Mask Pack'
	| 'The Joker Mask Pack'
	| 'The King Mask Pack'
	| 'The Queen Mask Pack'
	| 'Sokol Character Pack'
	| 'The Golden Grin Casino Heist'
	| 'Gage Ninja Pack'
	| 'Bobblehead DLC'
	| 'Yakuza Character Pack'
	| 'The PAYDAYCON 2015 Mask Pack'
	| 'Gage Chivalry Pack'
	| 'The FBI Files'
	| 'The Black Market Update'
	| 'The Aftershock Heist'
	| 'The Dallas Heist Pack I'
	| 'The Dallas Heist Pack II'
	| 'The Third Annual Payday Halloween Special!'
	| 'Bodhi Character Pack'
	| 'The Point Break Heists'
	| 'Santa\'s Workshop Heist'
	| 'The Goat Simulator Heist'
	| 'Dead by Daylight Mask Pack'
	| 'Wolf Pack'
	| 'The COMPLETELY OVERKILL Pack II'
	| 'Jimmy Character Pack'
	| 'Hardcore Henry Heists'
	| 'Dead by Daylight Mask Pack 2'
	| 'Sydney Character Pack'
	| 'Dead by Daylight Mask Pack 3'
	| 'Back to the Basics'
	| 'Dead by Daylight Mask Pack 4'
	| 'Dead by Daylight Mask Pack 5'
	| 'Humble Mask Pack 5'
	| 'The Solus Project Mask Pack'
	| 'Biker Character Pack'
	| 'The Biker Heist'
	| 'The COMPLETELY OVERKILL Pack III'
	| '4 Million?!'
	| 'Fable Mask Pack'
	| 'THE BIG SCORE DLC Bundle!'
	| 'August Event'
	| 'New Difficulties'
	| 'The New Safe House'
	| 'Mafia Mask Pack'
	| 'Concussion Grenade'
	| 'Hoxton Safe'
	| 'The Medic'
	| 'Chains Mask Pack'
	| 'Mutators'
	| 'New Shotgun'
	| 'Panic Room'
	| 'John Wick Weapon Pack'
	| 'The Fourth Annual Payday Halloween Special!'
	| 'PAYDAYCON 2016'
	| 'Gage Spec Ops Pack'
	| 'The 45th Mask'
	| 'Stealing Xmas'
	| 'Scarface Character Pack'
	| 'Scarface Heist'
	| 'Year of the Fire Rooster!'
	| 'Shadow Warrior Collaboration'
	| 'Sydney Mega Mask'
	| 'John Wick Heists'
	| 'Gage Russian Weapon Pack'
	| 'April Fool'
	| 'Heat Street'
	| 'Crime Spree, Armor Skins & Screen Filters'
	| 'Search for Kento day 6'
	| 'Pen Melee Weapon'
	| 'Loading Screen Hints'
	| 'Green Bridge'
	| 'Sangres Character Pack'
	| 'Antisphere Mask Pack'
	| 'THE Most Wanted DLC Bundle!'
	| 'Ultimate Edition'
	| 'Ultimate Edition Upgrade'
	| 'WW2 Weapon Pack'
	| 'h3h3 Character Pack'
	| 'VR'
	| 'Offshore Payday'
	| 'The Crimewave Collection'
	| 'Gage vs Bikers'
	| 'Legacy Collection'
	| 'Border Crossing Heist'
	| 'Cartel Optics Mod Pack'
	| 'Tailor Pack 1'
	| 'Border Crossing Bundle'
	| 'Weapon Color Pack 1'
	| 'Federales Weapon Pack'
	| 'Tailor Pack 2'
	| 'San Martín Bank Heist'
	| 'San Martín Bundle'
	| 'Breakfast in Tijuana'
	| 'Fugitive Weapon Pack'
	| 'Weapon Color Pack 2'
	| 'Breakfast in Tijuana Bundle'
	| 'Infamy 3.0'
	| 'Tailor Pack 3'
	| 'Gunslinger Weapon Pack'
	| 'Weapon Color Pack 3'
	| 'Buluc\'s Mansion Heist'
	| 'Buluc\'s Mansion Bundle'
	| 'Jiu Feng Smuggler Pack'
	| 'Dragon Pack'
	| 'Jiu Feng Smuggler Pack 2'
	| 'Guardians Tailor Pack'
	| 'Jiu Feng Smuggler Pack 3'
	| 'Mega City Tailor Pack'
	| 'Winter Ghosts Tailor Pack'
	| 'Jiu Feng Smuggler Pack 4'
	| 'Golden Dagger Tailor Pack'
	| 'Mountain Master Heist'
	| 'Midland Bundle'
	| 'Southbound Tailor Pack'
	| 'McShay Weapon Pack'
	| 'Midland Ranch Heist'
	| 'Lost in Transit Bundle'
	| 'High Octane Tailor Pack'
	| '9th Anniversary Event'
	| 'Tijuana Music Pack'
	| 'McShay Weapon Pack 2'
	| 'Payday 11th Anniversary'
	| 'Lost in Transit Heist'
	| 'Payday Halloween Stream 2022' // ! missing masks
	| 'Street Smart Tailor Pack'
	| 'Hostile Takeover Bundle'
	| 'McShay Mod Pack'
	| 'A Criminal Carol'
	| 'McShay Weapon Pack 3'

const pcExclusive: Platform = {
	360: false,
	pc: true,
	ps4: false,
	xb1: false,
	ps3: false
}

const content: Record<ContentList, ContentData> = {
	'Career Criminal Content': {
		name: 'Career Criminal Content',
		rarity: 'Pre-order',
		type: 'Pre-order',
		released: '2013, August 13',
		price: '$49.99',
		platform: {
			360: true,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: true
		}
	},
	'Lootbag': {
		name: 'Lootbag',
		rarity: 'Pre-order',
		type: 'Pre-order',
		released: '2013, August 13',
		price: '$19.99',
		platform: {
			360: true,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: true
		}
	},
	'The Official Soundtrack': {
		name: 'The Official Soundtrack',
		rarity: 'Paid',
		type: 'Soundtrack',
		released: '2013, August 13',
		price: '$2.99',
		platform: {
			360: true,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: true
		}
	},
	'The Diamond Store Heist': {
		name: 'The Diamond Store Heist',
		rarity: 'Free',
		type: 'Heist',
		released: '2013, September 13',
		price: 'Free',
		platform: {
			360: true,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: true
		}
	},
	'Party Time': {
		name: 'Party Time',
		rarity: 'Free',
		type: 'Feature',
		released: '2013, October 18',
		price: 'Free',
		platform: {
			360: true,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: true
		}
	},
	'The First Annual Payday Halloween Special!': {
		name: 'The First Annual Payday Halloween Special!',
		rarity: 'Free',
		type: 'Heist',
		released: '2013, October 31',
		price: 'Free',
		platform: {
			360: true,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: true
		}
	},
	'Armored Transport': {
		name: 'Armored Transport',
		rarity: 'Paid',
		type: 'Heist',
		released: '2013, November 14',
		price: '$3.99',
		platform: {
			360: true,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: true
		}
	},
	'Gage Weapon Pack #01': {
		name: 'Gage Weapon Pack #01',
		rarity: 'Paid',
		type: 'Weapon',
		released: '2013, December 5',
		price: '$2.99',
		platform: {
			360: true,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: true
		}
	},
	'The Charlie Santa Heist': {
		name: 'The Charlie Santa Heist',
		rarity: 'Free',
		type: 'Heist',
		released: '2013, December 16',
		price: 'Free',
		platform: pcExclusive
	},
	'A Merry Payday Christmas Soundtrack': {
		name: 'A Merry Payday Christmas Soundtrack',
		rarity: 'Paid',
		type: 'Soundtrack',
		released: '2013, December 19',
		price: '$0.99',
		platform: {
			360: true,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: true
		}
	},
	'Sweet Tooth Mask!': {
		name: 'Sweet Tooth Mask!',
		rarity: 'Free',
		type: 'Mask',
		released: '2014, January 8',
		price: 'Free',
		platform: {
			360: false,
			pc: false,
			ps4: false,
			xb1: false,
			ps3: true
		}
	},
	'The Infamy Update': {
		name: 'The Infamy Update',
		rarity: 'Free',
		type: 'Feature',
		released: '2014, January 22',
		price: 'Free',
		platform: {
			360: true,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: true
		}
	},
	'Gage Weapon Pack #02': {
		name: 'Gage Weapon Pack #02',
		rarity: 'Paid',
		type: 'Weapon',
		released: '2014, January 30',
		price: '$2.99',
		platform: {
			360: true,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: true
		}
	},
	'The Death Wish Update': {
		name: 'The Death Wish Update',
		rarity: 'Free',
		type: 'Feature',
		released: '2014, February 27',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Election Day Heist': {
		name: 'The Election Day Heist',
		rarity: 'Free',
		type: 'Heist',
		released: '2014, March 20',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Gage Mod Courier': {
		name: 'Gage Mod Courier',
		rarity: 'Paid',
		type: 'Weapon mod',
		released: '2014, April 10',
		price: '$2.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Gage Sniper Pack': {
		name: 'Gage Sniper Pack',
		rarity: 'Paid',
		type: 'Weapon',
		released: '2014, May 8',
		price: '$2.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Shadow Raid Heist': {
		name: 'The Shadow Raid Heist',
		rarity: 'Free',
		type: 'Heist',
		released: '2014, May 29',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Humble Mask Pack': {
		name: 'Humble Mask Pack',
		rarity: 'Event',
		type: 'Mask',
		released: '2014, June 9',
		price: '$1.49',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Big Bank Heist': {
		name: 'The Big Bank Heist',
		rarity: 'Paid',
		type: 'Heist',
		released: '2014, June 17',
		price: '$3.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Swag Bag Bundle': {
		name: 'Swag Bag Bundle',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2014, June 25',
		price: '$7.99',
		platform: {
			360: true,
			pc: false,
			ps4: false,
			xb1: false,
			ps3: true
		}
	},
	'The Ultimate Steal Edition': {
		name: 'The Ultimate Steal Edition',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2014, June 25',
		price: '$19.99',
		platform: pcExclusive
	},
	'Gage Shotgun Pack': {
		name: 'Gage Shotgun Pack',
		rarity: 'Paid',
		type: 'Weapon',
		released: '2014, July 3',
		price: '$2.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Gage Assault Pack': {
		name: 'Gage Assault Pack',
		rarity: 'Paid',
		type: 'Weapon',
		released: '2014, September 4',
		price: '$2.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Big Fat Music Update': {
		name: 'The Big Fat Music Update',
		rarity: 'Free',
		type: 'Feature',
		released: '2014, September 18',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Heist Soundtrack': {
		name: 'The Heist Soundtrack',
		rarity: 'Paid',
		type: 'Soundtrack',
		released: '2014, September 18',
		price: '$3.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Hotline Miami': {
		name: 'Hotline Miami',
		rarity: 'Paid',
		type: 'Heist',
		released: '2014, September 30',
		price: '$3.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Hotline Miami Exclusive Content': {
		name: 'Hotline Miami Exclusive Content',
		rarity: 'Collaboration',
		type: 'Mask',
		released: '2014, September 30',
		price: '$9.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'John Wick Character Pack': {
		name: 'John Wick Character Pack',
		rarity: 'Free',
		type: 'Character',
		released: '2014, October 22',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Art Gallery Heist': {
		name: 'The Art Gallery Heist',
		rarity: 'Free',
		type: 'Heist',
		released: '2014, October 24',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Hoxton Breakout Heist': {
		name: 'Hoxton Breakout Heist',
		rarity: 'Free',
		type: 'Heist',
		released: '2014, October 27',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Old Hoxton Character Pack': {
		name: 'Old Hoxton Character Pack',
		rarity: 'Free',
		type: 'Character',
		released: '2014, October 27',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Thespian Mask Pack DLC': {
		name: 'Thespian Mask Pack DLC',
		rarity: 'Free',
		type: 'Mask',
		released: '2014, October 29',
		price: 'Free',
		platform: {
			360: true,
			pc: false,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Humble Mask Pack 2': {
		name: 'Humble Mask Pack 2',
		rarity: 'Event',
		type: 'Mask',
		released: '2014, October 30',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Second Annual Payday Halloween Special!': {
		name: 'The Second Annual Payday Halloween Special!',
		rarity: 'Free',
		type: 'Feature',
		released: '2014, October 30',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Gage Historical Pack': {
		name: 'Gage Historical Pack',
		rarity: 'Paid',
		type: 'Weapon',
		released: '2014, November 13',
		price: '$2.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Alienware Alpha Mask Pack': {
		name: 'Alienware Alpha Mask Pack',
		rarity: 'Event',
		type: 'Mask',
		released: '2014, November 21',
		price: '$499.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Alienware Alpha Mauler': {
		name: 'Alienware Alpha Mauler',
		rarity: 'Event',
		type: 'Weapon',
		released: '2014, November 21',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The White Xmas Heist': {
		name: 'The White Xmas Heist',
		rarity: 'Free',
		type: 'Heist',
		released: '2014, December 4',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Clover Character Pack': {
		name: 'Clover Character Pack',
		rarity: 'Paid',
		type: 'Character',
		released: '2014, December 16',
		price: '$2.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Diamond Heist': {
		name: 'The Diamond Heist',
		rarity: 'Paid',
		type: 'Heist',
		released: '2014, December 16',
		price: '$3.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Gage Weapon Pack Bundle': {
		name: 'Gage Weapon Pack Bundle',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2014, December 18',
		price: '$17.99',
		platform: pcExclusive
	},
	'GOTY Edition': {
		name: 'GOTY Edition',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2014, December 18',
		price: '$49.99',
		platform: pcExclusive
	},
	'Heist Bundle': {
		name: 'Heist Bundle',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2014, December 18',
		price: '$13.99',
		platform: pcExclusive
	},
	'New Year Update': {
		name: 'New Year Update',
		rarity: 'Free',
		type: 'Weapon',
		released: '2015, January 2',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Dragan Character Pack': {
		name: 'Dragan Character Pack',
		rarity: 'Paid',
		type: 'Character',
		released: '2015, January 22',
		price: '$4.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Bomb Heists': {
		name: 'The Bomb Heists',
		rarity: 'Paid',
		type: 'Heist',
		released: '2015, January 22',
		price: '$6.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Butcher\'s AK/CAR Mod Pack': {
		name: 'The Butcher\'s AK/CAR Mod Pack',
		rarity: 'Paid',
		type: 'Weapon mod',
		released: '2015, February 26',
		price: '$4.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Infamy 2.0': {
		name: 'Infamy 2.0',
		rarity: 'Free',
		type: 'Feature',
		released: '2015, March 5',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Hotline Miami Mask Pack': {
		name: 'Hotline Miami Mask Pack',
		rarity: 'Collaboration',
		type: 'Mask',
		released: '2015, March 10',
		price: '$14.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Jacket Character Pack': {
		name: 'Jacket Character Pack',
		rarity: 'Collaboration',
		type: 'Character',
		released: '2015, March 10',
		price: '$5.00',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The COMPLETELY OVERKILL Pack': {
		name: 'The COMPLETELY OVERKILL Pack',
		rarity: 'Secret',
		type: 'Mask',
		released: '2015, March 12',
		price: '$19.99',
		platform: pcExclusive
	},
	'The OVERKILL Pack': {
		name: 'The OVERKILL Pack',
		rarity: 'Paid',
		type: 'Weapon',
		released: '2015, March 12',
		price: '$4.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Spring Break Heist Updates': {
		name: 'Spring Break Heist Updates',
		rarity: 'Free',
		type: 'Heist',
		released: '2015, March 13',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Bonnie Character Pack': {
		name: 'Bonnie Character Pack',
		rarity: 'Free',
		type: 'Character',
		released: '2015, March 16',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Car Shop Heist': {
		name: 'The Car Shop Heist',
		rarity: 'Free',
		type: 'Heist',
		released: '2015, March 18',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Butcher Mod Pack 2': {
		name: 'The Butcher Mod Pack 2',
		rarity: 'Free',
		type: 'Weapon mod',
		released: '2015, March 19',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'SpeedRunners': {
		name: 'SpeedRunners',
		rarity: 'Collaboration',
		type: 'Mask',
		released: '2015, March 20',
		price: '$14.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Hoxton Revenge Heist': {
		name: 'Hoxton Revenge Heist',
		rarity: 'Free',
		type: 'Heist',
		released: '2015, March 21',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Butcher\'s BBQ Pack': {
		name: 'The Butcher\'s BBQ Pack',
		rarity: 'Paid',
		type: 'Weapon',
		released: '2015, March 25',
		price: '$4.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Butcher\'s Western Pack': {
		name: 'The Butcher\'s Western Pack',
		rarity: 'Paid',
		type: 'Weapon',
		released: '2015, April 30',
		price: '$4.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Meltdown Heist': {
		name: 'The Meltdown Heist',
		rarity: 'Free',
		type: 'Heist',
		released: '2015, May 7',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Alesso Heist': {
		name: 'The Alesso Heist',
		rarity: 'Paid',
		type: 'Heist',
		released: '2015, May 21',
		price: '$6.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The OVERKILL B-Sides Soundtrack': {
		name: 'The OVERKILL B-Sides Soundtrack',
		rarity: 'Paid',
		type: 'Soundtrack',
		released: '2015, May 21',
		price: '$0.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Hardtime Lootbag': {
		name: 'Hardtime Lootbag',
		rarity: 'Pre-order',
		type: 'Pre-order',
		released: '2015, June 12',
		price: '$19.99',
		platform: {
			360: false,
			pc: false,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'StarVR Mask Pack': {
		name: 'StarVR Mask Pack',
		rarity: 'Free',
		type: 'Mask',
		released: '2015, June 13',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Humble Mask Pack 3': {
		name: 'Humble Mask Pack 3',
		rarity: 'Event',
		type: 'Mask',
		released: '2015, June 13',
		price: '$5.49',
		platform: pcExclusive
	},
	'Humble Mask Pack 4': {
		name: 'Humble Mask Pack 4',
		rarity: 'Event',
		type: 'Mask',
		released: '2015, June 13',
		price: '$7.49',
		platform: pcExclusive
	},
	'The Jack Mask Pack': {
		name: 'The Jack Mask Pack',
		rarity: 'Event',
		type: 'Mask',
		released: '2015, June 13',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Joker Mask Pack': {
		name: 'The Joker Mask Pack',
		rarity: 'Event',
		type: 'Mask',
		released: '2015, June 13',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The King Mask Pack': {
		name: 'The King Mask Pack',
		rarity: 'Event',
		type: 'Mask',
		released: '2015, June 13',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Queen Mask Pack': {
		name: 'The Queen Mask Pack',
		rarity: 'Event',
		type: 'Mask',
		released: '2015, June 13',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Sokol Character Pack': {
		name: 'Sokol Character Pack',
		rarity: 'Paid',
		type: 'Character',
		released: '2015, June 25',
		price: '$4.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Golden Grin Casino Heist': {
		name: 'The Golden Grin Casino Heist',
		rarity: 'Paid',
		type: 'Heist',
		released: '2015, June 25',
		price: '$6.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Gage Ninja Pack': {
		name: 'Gage Ninja Pack',
		rarity: 'Paid',
		type: 'Weapon',
		released: '2015, July 16',
		price: '$4.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Bobblehead DLC': {
		name: 'Bobblehead DLC',
		rarity: 'Event',
		type: 'Mask',
		released: '2015, August 6',
		price: '$28.16',
		platform: pcExclusive
	},
	'Yakuza Character Pack': {
		name: 'Yakuza Character Pack',
		rarity: 'Paid',
		type: 'Character',
		released: '2015, August 27',
		price: '$4.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The PAYDAYCON 2015 Mask Pack': {
		name: 'The PAYDAYCON 2015 Mask Pack',
		rarity: 'Event',
		type: 'Mask',
		released: '2015, September 3',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Gage Chivalry Pack': {
		name: 'Gage Chivalry Pack',
		rarity: 'Paid',
		type: 'Weapon',
		released: '2015, September 10',
		price: '$4.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The FBI Files': {
		name: 'The FBI Files',
		rarity: 'Free',
		type: 'Feature',
		released: '2015, September 24',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Black Market Update': {
		name: 'The Black Market Update',
		rarity: 'Free',
		type: 'Feature',
		released: '2015, October 15',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Aftershock Heist': {
		name: 'The Aftershock Heist',
		rarity: 'Free',
		type: 'Heist',
		released: '2015, October 17',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Dallas Heist Pack I': {
		name: 'The Dallas Heist Pack I',
		rarity: 'Free',
		type: 'Heist',
		released: '2015, October 20',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Dallas Heist Pack II': {
		name: 'The Dallas Heist Pack II',
		rarity: 'Free',
		type: 'Heist',
		released: '2015, October 23',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Third Annual Payday Halloween Special!': {
		name: 'The Third Annual Payday Halloween Special!',
		rarity: 'Free',
		type: 'Heist',
		released: '2015, October 29',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Bodhi Character Pack': {
		name: 'Bodhi Character Pack',
		rarity: 'Free',
		type: 'Character',
		released: '2015, December 3',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Point Break Heists': {
		name: 'The Point Break Heists',
		rarity: 'Paid',
		type: 'Heist',
		released: '2015, December 3',
		price: '$6.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Santa\'s Workshop Heist': {
		name: 'Santa\'s Workshop Heist',
		rarity: 'Free',
		type: 'Heist',
		released: '2015, December 11',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Goat Simulator Heist': {
		name: 'The Goat Simulator Heist',
		rarity: 'Paid',
		type: 'Heist',
		released: '2016, January 14',
		price: '$6.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Dead by Daylight Mask Pack': {
		name: 'Dead by Daylight Mask Pack',
		rarity: 'Free',
		type: 'Mask',
		released: '2016, February 4',
		price: 'DbD Steam Community',
		platform: pcExclusive
	},
	'Wolf Pack': {
		name: 'Wolf Pack',
		rarity: 'Paid',
		type: 'Heist',
		released: '2016, February 11',
		price: '$6.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The COMPLETELY OVERKILL Pack II': {
		name: 'The COMPLETELY OVERKILL Pack II',
		rarity: 'Secret',
		type: 'Mask',
		released: '2016, February 26',
		price: 'Previous DLC',
		platform: pcExclusive
	},
	'Jimmy Character Pack': {
		name: 'Jimmy Character Pack',
		rarity: 'Free',
		type: 'Character',
		released: '2016, March 24',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Hardcore Henry Heists': {
		name: 'Hardcore Henry Heists',
		rarity: 'Free',
		type: 'Heist',
		released: '2016, March 31',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Dead by Daylight Mask Pack 2': {
		name: 'Dead by Daylight Mask Pack 2',
		rarity: 'Free',
		type: 'Mask',
		released: '2016, April 21',
		price: 'DbD Steam Community',
		platform: pcExclusive
	},
	'Sydney Character Pack': {
		name: 'Sydney Character Pack',
		rarity: 'Paid',
		type: 'Character',
		released: '2016, May 12',
		price: '$4.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Dead by Daylight Mask Pack 3': {
		name: 'Dead by Daylight Mask Pack 3',
		rarity: 'Free',
		type: 'Mask',
		released: '2016, May 25',
		price: 'DbD Steam Community',
		platform: pcExclusive
	},
	'Back to the Basics': {
		name: 'Back to the Basics',
		rarity: 'Free',
		type: 'Heist',
		released: '2016, June 9',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Dead by Daylight Mask Pack 4': {
		name: 'Dead by Daylight Mask Pack 4',
		rarity: 'Free',
		type: 'Mask',
		released: '2016, June 9',
		price: 'DbD Steam Community',
		platform: pcExclusive
	},
	'Dead by Daylight Mask Pack 5': {
		name: 'Dead by Daylight Mask Pack 5',
		rarity: 'Collaboration',
		type: 'Mask',
		released: '2016, June 9',
		price: '$29.99',
		platform: pcExclusive
	},
	'Humble Mask Pack 5': {
		name: 'Humble Mask Pack 5',
		rarity: 'Event',
		type: 'Mask',
		released: '2016, June 9',
		price: '$9.49',
		platform: pcExclusive
	},
	'The Solus Project Mask Pack': {
		name: 'The Solus Project Mask Pack',
		rarity: 'Free',
		type: 'Mask',
		released: '2016, June 9',
		price: 'Solus Steam Community',
		platform: pcExclusive
	},
	'Biker Character Pack': {
		name: 'Biker Character Pack',
		rarity: 'Paid',
		type: 'Character',
		released: '2016, June 16',
		price: '$4.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Biker Heist': {
		name: 'The Biker Heist',
		rarity: 'Paid',
		type: 'Heist',
		released: '2016, June 16',
		price: '$6.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The COMPLETELY OVERKILL Pack III': {
		name: 'The COMPLETELY OVERKILL Pack III',
		rarity: 'Secret',
		type: 'Mask',
		released: '2016, June 24',
		price: 'Previous DLC',
		platform: pcExclusive
	},
	'4 Million?!': {
		name: '4 Million?!',
		rarity: 'Free',
		type: 'Mask',
		released: '2016, June 30',
		price: 'Free',
		platform: pcExclusive
	},
	'Fable Mask Pack': {
		name: 'Fable Mask Pack',
		rarity: 'Free',
		type: 'Mask',
		released: '2016, August 13',
		price: 'Free',
		platform: pcExclusive
	},
	'THE BIG SCORE DLC Bundle!': {
		name: 'THE BIG SCORE DLC Bundle!',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2016, September 9',
		price: '$39.99',
		platform: {
			360: false,
			pc: false,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'August Event': {
		name: 'August Event',
		rarity: 'Event',
		type: 'Mask',
		released: '2016, September 22',
		price: 'Free',
		platform: pcExclusive
	},
	'New Difficulties': {
		name: 'New Difficulties',
		rarity: 'Free',
		type: 'Feature',
		released: '2016, October 8',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The New Safe House': {
		name: 'The New Safe House',
		rarity: 'Free',
		type: 'Feature',
		released: '2016, October 9',
		price: 'Free',
		platform: pcExclusive
	},
	'Mafia Mask Pack': {
		name: 'Mafia Mask Pack',
		rarity: 'Free',
		type: 'Mask',
		released: '2016, October 10',
		price: 'Free',
		platform: pcExclusive
	},
	'Concussion Grenade': {
		name: 'Concussion Grenade',
		rarity: 'Free',
		type: 'Weapon',
		released: '2016, October 11',
		price: 'Free',
		platform: pcExclusive
	},
	'Hoxton Safe': {
		name: 'Hoxton Safe',
		rarity: 'Free',
		type: 'Heist',
		released: '2016, October 12',
		price: 'Free',
		platform: pcExclusive
	},
	'The Medic': {
		name: 'The Medic',
		rarity: 'Free',
		type: 'Feature',
		released: '2016, October 13',
		price: 'Free',
		platform: pcExclusive
	},
	'Chains Mask Pack': {
		name: 'Chains Mask Pack',
		rarity: 'Free',
		type: 'Mask',
		released: '2016, October 14',
		price: 'Free',
		platform: pcExclusive
	},
	'Mutators': {
		name: 'Mutators',
		rarity: 'Free',
		type: 'Feature',
		released: '2016, October 15',
		price: 'Free',
		platform: pcExclusive
	},
	'New Shotgun': {
		name: 'New Shotgun',
		rarity: 'Free',
		type: 'Weapon',
		released: '2016, October 16',
		price: 'Free',
		platform: pcExclusive
	},
	'Panic Room': {
		name: 'Panic Room',
		rarity: 'Free',
		type: 'Heist',
		released: '2016, October 17',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'John Wick Weapon Pack': {
		name: 'John Wick Weapon Pack',
		rarity: 'Paid',
		type: 'Weapon',
		released: '2016, October 21',
		price: '$4.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The Fourth Annual Payday Halloween Special!': {
		name: 'The Fourth Annual Payday Halloween Special!',
		rarity: 'Free',
		type: 'Heist',
		released: '2016, November 3',
		price: 'Free',
		platform: pcExclusive
	},
	'PAYDAYCON 2016': {
		name: 'PAYDAYCON 2016',
		rarity: 'Event',
		type: 'Mask',
		released: '2016, November 11',
		price: 'Free',
		platform: pcExclusive
	},
	'Gage Spec Ops Pack': {
		name: 'Gage Spec Ops Pack',
		rarity: 'Paid',
		type: 'Weapon',
		released: '2016, November 25',
		price: '$4.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'The 45th Mask': {
		name: 'The 45th Mask',
		rarity: 'Free',
		type: 'Mask',
		released: '2016, November 25',
		price: 'Free',
		platform: pcExclusive
	},
	'Stealing Xmas': {
		name: 'Stealing Xmas',
		rarity: 'Free',
		type: 'Heist',
		released: '2016, December 8',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Scarface Character Pack': {
		name: 'Scarface Character Pack',
		rarity: 'Paid',
		type: 'Character',
		released: '2016, December 16',
		price: '$4.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Scarface Heist': {
		name: 'Scarface Heist',
		rarity: 'Paid',
		type: 'Heist',
		released: '2016, December 16',
		price: '$6.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Year of the Fire Rooster!': {
		name: 'Year of the Fire Rooster!',
		rarity: 'Free',
		type: 'Mask',
		released: '2017, January 26',
		price: 'Free',
		platform: pcExclusive
	},
	'Shadow Warrior Collaboration': {
		name: 'Shadow Warrior Collaboration',
		rarity: 'Free',
		type: 'Mask',
		released: '2017, February 1',
		price: 'Free',
		platform: pcExclusive
	},
	'Sydney Mega Mask': {
		name: 'Sydney Mega Mask',
		rarity: 'Event',
		type: 'Mask',
		released: '2017, February 1',
		price: '$10',
		platform: pcExclusive
	},
	'John Wick Heists': {
		name: 'John Wick Heists',
		rarity: 'Paid',
		type: 'Heist',
		released: '2017, February 9',
		price: '$6.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Gage Russian Weapon Pack': {
		name: 'Gage Russian Weapon Pack',
		rarity: 'Paid',
		type: 'Weapon',
		released: '2017, March 23',
		price: '$4.99',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'April Fool': {
		name: 'April Fool',
		rarity: 'Free',
		type: 'Mask',
		released: '2017, April 1',
		price: 'Free',
		platform: pcExclusive
	},
	'Heat Street': {
		name: 'Heat Street',
		rarity: 'Free',
		type: 'Heist',
		released: '2017, April 4',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Crime Spree, Armor Skins & Screen Filters': {
		name: 'Crime Spree, Armor Skins & Screen Filters',
		rarity: 'Free',
		type: 'Feature',
		released: '2017, April 6',
		price: 'Free',
		platform: pcExclusive
	},
	'Search for Kento day 6': {
		name: 'Search for Kento day 6',
		rarity: 'Free',
		type: 'Weapon',
		released: '2017, April 8',
		price: 'Free',
		platform: pcExclusive
	},
	'Pen Melee Weapon': {
		name: 'Pen Melee Weapon',
		rarity: 'Event',
		type: 'Weapon',
		released: '2017, April 8',
		price: 'Free',
		platform: pcExclusive
	},
	'Loading Screen Hints': {
		name: 'Loading Screen Hints',
		rarity: 'Free',
		type: 'Feature',
		released: '2017, April 10',
		price: 'Free',
		platform: pcExclusive
	},
	'Green Bridge': {
		name: 'Green Bridge',
		rarity: 'Free',
		type: 'Heist',
		released: '2017, April 12',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Sangres Character Pack': {
		name: 'Sangres Character Pack',
		rarity: 'Free',
		type: 'Character',
		released: '2017, May 4',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Antisphere Mask Pack': {
		name: 'Antisphere Mask Pack',
		rarity: 'Collaboration',
		type: 'Mask',
		released: '2017, June 1',
		price: '$11.99',
		platform: pcExclusive
	},
	'THE Most Wanted DLC Bundle!': {
		name: 'THE Most Wanted DLC Bundle!',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2017, June 6',
		price: '$19.99',
		platform: {
			360: false,
			pc: false,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Ultimate Edition': {
		name: 'Ultimate Edition',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2017, June 12',
		price: '$44.99',
		platform: pcExclusive
	},
	'Ultimate Edition Upgrade': {
		name: 'Ultimate Edition Upgrade',
		rarity: 'Bundle',
		type: 'Weapon',
		released: '2017, June 12',
		price: 'Free',
		platform: pcExclusive
	},
	'WW2 Weapon Pack': {
		name: 'WW2 Weapon Pack',
		rarity: 'Free',
		type: 'Weapon Pack',
		released: '2017, August 31',
		price: 'Free',
		platform: pcExclusive
	},
	'h3h3 Character Pack': {
		name: 'h3h3 Character Pack',
		rarity: 'Paid',
		type: 'Character',
		released: '2017, November 22',
		price: '$4.99',
		platform: pcExclusive
	},
	'VR': {
		name: 'VR',
		rarity: 'Free',
		type: 'Feature',
		released: '2018, March 15',
		price: 'Free',
		platform: pcExclusive
	},
	'Offshore Payday': {
		name: 'Offshore Payday',
		rarity: 'Secret',
		type: 'Feature',
		released: '2018, November 1',
		price: 'Free',
		platform: pcExclusive
	},
	'The Crimewave Collection': {
		name: 'The Crimewave Collection',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2019, April 29',
		price: '$29.99',
		platform: {
			360: false,
			pc: false,
			ps4: true,
			xb1: true,
			ps3: false
		}
	},
	'Gage vs Bikers': {
		name: 'Gage vs Bikers',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2019, October 25',
		price: '$9.98',
		platform: pcExclusive
	},
	'Legacy Collection': {
		name: 'Legacy Collection',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2019, October 25',
		price: '$20.16',
		platform: pcExclusive
	},
	'Border Crossing Heist': {
		name: 'Border Crossing Heist',
		rarity: 'Paid',
		type: 'Heist',
		released: '2019, November 7',
		price: '$6.99',
		platform: pcExclusive
	},
	'Cartel Optics Mod Pack': {
		name: 'Cartel Optics Mod Pack',
		rarity: 'Paid',
		type: 'Weapon Mod',
		released: '2019, November 7',
		price: '$2.99',
		platform: pcExclusive
	},
	'Tailor Pack 1': {
		name: 'Tailor Pack 1',
		rarity: 'Paid',
		type: 'Outfit',
		released: '2019, November 7',
		price: '$2.99',
		platform: pcExclusive
	},
	'Border Crossing Bundle': {
		name: 'Border Crossing Bundle',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2019, November 7',
		price: '$9.99',
		platform: pcExclusive
	},
	'Weapon Color Pack 1': {
		name: 'Weapon Color Pack 1',
		rarity: 'Paid',
		type: 'Weapon Skin',
		released: '2020, February 27',
		price: '$2.99',
		platform: pcExclusive
	},
	'Federales Weapon Pack': {
		name: 'Federales Weapon Pack',
		rarity: 'Paid',
		type: 'Weapon Pack',
		released: '2020, February 27',
		price: '$2.99',
		platform: pcExclusive
	},
	'Tailor Pack 2': {
		name: 'Tailor Pack 2',
		rarity: 'Paid',
		type: 'Outfit',
		released: '2020, February 27',
		price: '$2.99',
		platform: pcExclusive
	},
	'San Martín Bank Heist': {
		name: 'San Martín Bank Heist',
		rarity: 'Paid',
		type: 'Heist',
		released: '2020, February 27',
		price: '$6.99',
		platform: pcExclusive
	},
	'San Martín Bundle': {
		name: 'San Martín Bundle',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2020, February 27',
		price: '$9.88',
		platform: pcExclusive
	},
	'Breakfast in Tijuana': {
		name: 'Breakfast in Tijuana',
		rarity: 'Paid',
		type: 'Heist',
		released: '2020, February 27',
		price: '$6.99',
		platform: pcExclusive
	},
	'Fugitive Weapon Pack': {
		name: 'Fugitive Weapon Pack',
		rarity: 'Paid',
		type: 'Weapon Pack',
		released: '2020, February 27',
		price: '$2.99',
		platform: pcExclusive
	},
	'Weapon Color Pack 2': {
		name: 'Weapon Color Pack 2',
		rarity: 'Paid',
		type: 'Weapon Skin',
		released: '2020, February 27',
		price: '$2.99',
		platform: pcExclusive
	},
	'Breakfast in Tijuana Bundle': {
		name: 'Breakfast in Tijuana Bundle',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2020, February 27',
		price: '$9.98',
		platform: pcExclusive
	},
	'Infamy 3.0': {
		name: 'Infamy 3.0',
		rarity: 'Free',
		type: 'Feature',
		released: '2020, November 11',
		price: 'Free',
		platform: pcExclusive
	},
	'Tailor Pack 3': {
		name: 'Tailor Pack 3',
		rarity: 'Paid',
		type: 'Outfit',
		released: '2020, November 11',
		price: '$2.99',
		platform: pcExclusive
	},
	'Gunslinger Weapon Pack': {
		name: 'Gunslinger Weapon Pack',
		rarity: 'Paid',
		type: 'Weapon Pack',
		released: '2020, November 11',
		price: '$2.99',
		platform: pcExclusive
	},
	'Weapon Color Pack 3': {
		name: 'Weapon Color Pack 3',
		rarity: 'Paid',
		type: 'Weapon Skin',
		released: '2020, November 11',
		price: '$2.99',
		platform: pcExclusive
	},
	'Buluc\'s Mansion Heist': {
		name: 'Buluc\'s Mansion Heist',
		rarity: 'Paid',
		type: 'Heist',
		released: '2020, November 11',
		price: '$6.99',
		platform: pcExclusive
	},
	'Buluc\'s Mansion Bundle': {
		name: 'Buluc\'s Mansion Bundle',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2020, November 11',
		price: '$10.04',
		platform: pcExclusive
	},
	'Jiu Feng Smuggler Pack': {
		name: 'Jiu Feng Smuggler Pack',
		rarity: 'Paid',
		type: 'Weapon Pack',
		released: '2021, February 24',
		price: '$3.99',
		platform: pcExclusive
	},
	'Dragon Pack': {
		name: 'Dragon Pack',
		rarity: 'Paid',
		type: 'Outfit',
		released: '2021, March 17',
		price: '$6.99',
		platform: pcExclusive
	},
	'Jiu Feng Smuggler Pack 2': {
		name: 'Jiu Feng Smuggler Pack 2',
		rarity: 'Paid',
		type: 'Weapon Pack',
		released: '2021, May 20',
		price: '$3.99',
		platform: pcExclusive
	},
	'Guardians Tailor Pack': {
		name: 'Guardians Tailor Pack',
		rarity: 'Paid',
		type: 'Outfit',
		released: '2021, June 16',
		price: '$2.99',
		platform: pcExclusive
	},
	'Jiu Feng Smuggler Pack 3': {
		name: 'Jiu Feng Smuggler Pack 3',
		rarity: 'Paid',
		type: 'Weapon Pack',
		released: '2021, September 22',
		price: '$3.99',
		platform: pcExclusive
	},
	'Mega City Tailor Pack': {
		name: 'Mega City Tailor Pack',
		rarity: 'Paid',
		type: 'Outfit',
		released: '2021, October 13',
		price: '$2.99',
		platform: pcExclusive
	},
	'Winter Ghosts Tailor Pack': {
		name: 'Winter Ghosts Tailor Pack',
		rarity: 'Paid',
		type: 'Outfit',
		released: '2021, December 15',
		price: '$2.99',
		platform: pcExclusive
	},
	'Jiu Feng Smuggler Pack 4': {
		name: 'Jiu Feng Smuggler Pack 4',
		rarity: 'Paid',
		type: 'Weapon Pack',
		released: '2022, February 16',
		price: '$3.99',
		platform: pcExclusive
	},
	'Golden Dagger Tailor Pack': {
		name: 'Golden Dagger Tailor Pack',
		rarity: 'Paid',
		type: 'Outfit',
		released: '2022, March 9',
		price: '$2.99',
		platform: pcExclusive
	},
	'Mountain Master Heist': {
		name: 'Mountain Master Heist',
		rarity: 'Paid',
		type: 'Heist',
		released: '2022, March 9',
		price: '$6.99',
		platform: pcExclusive
	},
	'Midland Bundle': {
		name: 'Midland Bundle',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2022, April 20',
		price: '$9.99',
		platform: pcExclusive
	},
	'Southbound Tailor Pack': {
		name: 'Southbound Tailor Pack',
		rarity: 'Paid',
		type: 'Outfit',
		released: '2022, April 22',
		price: '$2.99',
		platform: pcExclusive
	},
	'McShay Weapon Pack': {
		name: 'McShay Weapon Pack',
		rarity: 'Paid',
		type: 'Weapon Pack',
		released: '2022, May 11',
		price: '$3.99',
		platform: pcExclusive
	},
	'Midland Ranch Heist': {
		name: 'Midland Ranch Heist',
		rarity: 'Paid',
		type: 'Heist',
		released: '2022, March 9',
		price: '$6.99',
		platform: pcExclusive
	},
	'Lost in Transit Bundle': {
		name: 'Lost in Transit Bundle',
		rarity: 'Paid',
		type: 'Bundle',
		released: '2022, July 13',
		price: '$9.99',
		platform: pcExclusive
	},
	'High Octane Tailor Pack': {
		name: 'High Octane Tailor Pack',
		rarity: 'Paid',
		type: 'Outfit',
		released: '2022, July 13',
		price: '$2.99',
		platform: pcExclusive
	},
	'9th Anniversary Event': {
		name: '9th Anniversary Event',
		rarity: 'Event',
		type: 'Feature',
		released: '2022, August 11',
		price: 'Free',
		platform: pcExclusive
	},
	'Tijuana Music Pack': {
		name: 'Tijuana Music Pack',
		rarity: 'Paid',
		type: 'Soundtrack',
		released: '2022, August 31',
		price: '$3.99',
		platform: pcExclusive
	},
	'McShay Weapon Pack 2': {
		name: 'McShay Weapon Pack 2',
		rarity: 'Paid',
		type: 'Weapon Pack',
		released: '2022, September 21',
		price: '$3.99',
		platform: pcExclusive
	},
	'Payday 11th Anniversary': {
		name: 'Payday 11th Anniversary',
		rarity: 'Event',
		type: 'Feature',
		released: '2022, October 18',
		price: 'Free',
		platform: pcExclusive
	},
	'Lost in Transit Heist': {
		name: 'Lost in Transit Heist',
		rarity: 'Paid',
		type: 'Heist',
		released: '2022, September 21',
		price: '$6.99',
		platform: pcExclusive
	},
	'Payday Halloween Stream 2022': {
		name: 'Payday Halloween Stream 2022',
		rarity: 'Free',
		type: 'Outfit',
		released: '2022, October 31',
		price: 'Free',
		platform: pcExclusive
	},
	'Street Smart Tailor Pack': {
		name: 'Street Smart Tailor Pack',
		rarity: 'Paid',
		type: 'Outfit',
		released: '2022, November 16',
		price: '$2.99',
		platform: pcExclusive
	},
	'Hostile Takeover Bundle': {
		name: 'Hostile Takeover Bundle',
		rarity: 'Paid',
		type: 'Bundle',
		released: '2022, November 16',
		price: '$9.99',
		platform: pcExclusive
	},
	'McShay Mod Pack': {
		name: 'McShay Mod Pack',
		rarity: 'Paid',
		type: 'Weapon Pack',
		released: '2022, December 15',
		price: '$2.99',
		platform: pcExclusive
	},
	'A Criminal Carol': {
		name: 'A Criminal Carol',
		rarity: 'Free',
		type: 'Feature',
		released: '2022, December 15',
		price: 'Free',
		platform: pcExclusive
	},
	'McShay Weapon Pack 3': {
		name: 'McShay Weapon Pack 3',
		rarity: 'Paid',
		type: 'Weapon Pack',
		released: '2023, February 1',
		price: '$3.99',
		platform: pcExclusive
	}
}

export default content