export interface contentData {
	name: string;
	rarity: contentRarity;
	type: contentType;
	released: string;
	price: string;
	platform: {
		pc: boolean;
		ps4: boolean;
		xb1: boolean;
		ps3: boolean;
		360: boolean;
	}
}

type contentRarity = 'Pre-order' | 'Paid' | 'Secret' | 'Free' | 'Event' | 'Collaboration' | 'Bundle'

type contentType = 'Pre-order' | 'Soundtrack' | 'Heist' | 'Feature' | 'Weapon' | 'Mask' | 'Character' | 'Weapon mod' | 'Bundle' | 'Weapon Pack' | 'Weapon Mod' | 'Outfit' | 'Weapon Skin'

interface content {
	'Career Criminal Content': contentData;
	'Lootbag': contentData;
	'The Official Soundtrack': contentData;
	'The Diamond Store Heist': contentData;
	'Party Time': contentData;
	'The First Annual Payday Halloween Special!': contentData;
	'Armored Transport': contentData;
	'Gage Weapon Pack #01': contentData;
	'The Charlie Santa Heist': contentData;
	'A Merry Payday Christmas Soundtrack': contentData;
	'Sweet Tooth Mask!': contentData;
	'The Infamy Update': contentData;
	'Gage Weapon Pack #02': contentData;
	'The Death Wish Update': contentData;
	'The Election Day Heist': contentData;
	'Gage Mod Courier': contentData;
	'Gage Sniper Pack': contentData;
	'The Shadow Raid Heist': contentData;
	'Humble Mask Pack': contentData;
	'The Big Bank Heist': contentData;
	'Swag Bag Bundle': contentData;
	'The Ultimate Steal Edition': contentData;
	'Gage Shotgun Pack': contentData;
	'Gage Assault Pack': contentData;
	'The Big Fat Music Update': contentData;
	'The Heist Soundtrack': contentData;
	'Hotline Miami': contentData;
	'Hotline Miami Exclusive Content': contentData;
	'John Wick Character Pack': contentData;
	'The Art Gallery Heist': contentData;
	'Hoxton Breakout Heist': contentData;
	'Old Hoxton Character Pack': contentData;
	'Thespian Mask Pack DLC': contentData;
	'Humble Mask Pack 2': contentData;
	'The Second Annual Payday Halloween Special!': contentData;
	'Gage Historical Pack': contentData;
	'Alienware Alpha Mask Pack': contentData;
	'Alienware Alpha Mauler': contentData;
	'The White Xmas Heist': contentData;
	'Clover Character Pack': contentData;
	'The Diamond Heist': contentData;
	'Gage Weapon Pack Bundle': contentData;
	'GOTY Edition': contentData;
	'Heist Bundle': contentData;
	'New Year Update': contentData;
	'Dragan Character Pack': contentData;
	'The Bomb Heists': contentData;
	'The Butcher\'s AK/CAR Mod Pack': contentData;
	'Infamy 2.0': contentData;
	'Hotline Miami Mask Pack': contentData;
	'Jacket Character Pack': contentData;
	'The COMPLETELY OVERKILL Pack': contentData;
	'The OVERKILL Pack': contentData;
	'Spring Break Heist Updates': contentData;
	'Bonnie Character Pack': contentData;
	'The Car Shop Heist': contentData;
	'The Butcher Mod Pack 2': contentData;
	'SpeedRunners': contentData;
	'Hoxton Revenge Heist': contentData;
	'The Butcher\'s BBQ Pack': contentData;
	'The Butcher\'s Western Pack': contentData;
	'The Meltdown Heist': contentData;
	'The Alesso Heist': contentData;
	'The OVERKILL B-Sides Soundtrack': contentData;
	'Hardtime Lootbag': contentData;
	'StarVR Mask Pack': contentData;
	'Humble Mask Pack 3': contentData;
	'Humble Mask Pack 4': contentData;
	'The Jack Mask Pack': contentData;
	'The Joker Mask Pack': contentData;
	'The King Mask Pack': contentData;
	'The Queen Mask Pack': contentData;
	'Sokol Character Pack': contentData;
	'The Golden Grin Casino Heist': contentData;
	'Gage Ninja Pack': contentData;
	'Bobblehead DLC': contentData;
	'Yakuza Character Pack': contentData;
	'The PAYDAYCON 2015 Mask Pack': contentData;
	'Gage Chivalry Pack': contentData;
	'The FBI Files': contentData;
	'The Black Market Update': contentData;
	'The Aftershock Heist': contentData;
	'The Dallas Heist Pack I': contentData;
	'The Dallas Heist Pack II': contentData;
	'The Third Annual Payday Halloween Special!': contentData;
	'Bodhi Character Pack': contentData;
	'The Point Break Heists': contentData;
	'Santa\'s Workshop Heist': contentData;
	'The Goat Simulator Heist': contentData;
	'Dead by Daylight Mask Pack': contentData;
	'Wolf Pack': contentData;
	'The COMPLETELY OVERKILL Pack II': contentData;
	'Jimmy Character Pack': contentData;
	'Hardcore Henry Heists': contentData;
	'Dead by Daylight Mask Pack 2': contentData;
	'Sydney Character Pack': contentData;
	'Dead by Daylight Mask Pack 3': contentData;
	'Back to the Basics': contentData;
	'Dead by Daylight Mask Pack 4': contentData;
	'Dead by Daylight Mask Pack 5': contentData;
	'Humble Mask Pack 5': contentData;
	'The Solus Project Mask Pack': contentData;
	'Biker Character Pack': contentData;
	'The Biker Heist': contentData;
	'The COMPLETELY OVERKILL Pack III': contentData;
	'4 Million?!': contentData;
	'Fable Mask Pack': contentData;
	'THE BIG SCORE DLC Bundle!': contentData;
	'August Event': contentData;
	'New Difficulties': contentData;
	'The New Safe House': contentData;
	'Mafia Mask Pack': contentData;
	'Concussion Grenade': contentData;
	'Hoxton Safe': contentData;
	'The Medic': contentData;
	'Chains Mask Pack': contentData;
	'Mutators': contentData;
	'New Shotgun': contentData;
	'Panic Room': contentData;
	'John Wick Weapon Pack': contentData;
	'The Fourth Annual Payday Halloween Special!': contentData;
	'PAYDAYCON 2016': contentData;
	'Gage Spec Ops Pack': contentData;
	'The 45th Mask': contentData;
	'Stealing Xmas': contentData;
	'Scarface Character Pack': contentData;
	'Scarface Heist': contentData;
	'Year of the Fire Rooster!': contentData;
	'Shadow Warrior Collaboration': contentData;
	'Sydney Mega Mask': contentData;
	'John Wick Heists': contentData;
	'Gage Russian Weapon Pack': contentData;
	'April Fool': contentData;
	'Heat Street': contentData;
	'Crime Spree, Armor Skins & Screen Filters': contentData;
	'Search for Kento day 6': contentData;
	'Pen Melee Weapon': contentData;
	'Loading Screen Hints': contentData;
	'Green Bridge': contentData;
	'Sangres Character Pack': contentData;
	'Antisphere Mask Pack': contentData;
	'THE Most Wanted DLC Bundle!': contentData;
	'Ultimate Edition': contentData;
	'Ultimate Edition Upgrade': contentData;
	'WW2 Weapon Pack': contentData;
	'h3h3 Character Pack': contentData;
	'VR': contentData;
	'Offshore Payday': contentData;
	'The Crimewave Collection': contentData;
	'Gage vs Bikers': contentData;
	'Legacy Collection': contentData;
	'Border Crossing Heist': contentData;
	'Cartel Optics Mod Pack': contentData;
	'Tailor Pack 1': contentData;
	'Border Crossing Bundle': contentData;
	'Weapon Color Pack 1': contentData;
	'Federales Weapon Pack': contentData;
	'Tailor Pack 2': contentData;
	'San Martín Bank Heist': contentData;
	'San Martín Bundle': contentData;
	'Breakfast in Tijuana': contentData;
	'Fugitive Weapon Pack': contentData;
	'Weapon Color Pack 2': contentData;
	'Breakfast in Tijuana Bundle': contentData;
	'Infamy 3.0': contentData;
	'Tailor Pack 3': contentData;
	'Gunslinger Weapon Pack': contentData;
	'Weapon Color Pack 3': contentData;
	'Buluc\'s Mansion Heist': contentData;
	'Buluc\'s Mansion Bundle': contentData;
	'Jiu Feng Smuggler Pack': contentData;
	'Jiu Feng Smuggler Pack 2': contentData;
}

const downloadableContent: content = {
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		rarity:'Bundle' ,
		type: 'Bundle',
		released: '2014, December 18',
		price: '$17.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'GOTY Edition': {
		name: 'GOTY Edition',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2014, December 18',
		price: '$49.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Heist Bundle': {
		name: 'Heist Bundle',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2014, December 18',
		price: '$13.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Humble Mask Pack 4': {
		name: 'Humble Mask Pack 4',
		rarity: 'Event',
		type: 'Mask',
		released: '2015, June 13',
		price: '$7.49',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Dead by Daylight Mask Pack 5': {
		name: 'Dead by Daylight Mask Pack 5',
		rarity: 'Collaboration',
		type: 'Mask',
		released: '2016, June 9',
		price: '$29.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Humble Mask Pack 5': {
		name: 'Humble Mask Pack 5',
		rarity: 'Event',
		type: 'Mask',
		released: '2016, June 9',
		price: '$9.49',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'The Solus Project Mask Pack': {
		name: 'The Solus Project Mask Pack',
		rarity: 'Free',
		type: 'Mask',
		released: '2016, June 9',
		price: 'Solus Steam Community',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'4 Million?!': {
		name: '4 Million?!',
		rarity: 'Free',
		type: 'Mask',
		released: '2016, June 30',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Fable Mask Pack': {
		name: 'Fable Mask Pack',
		rarity: 'Free',
		type: 'Mask',
		released: '2016, August 13',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Mafia Mask Pack': {
		name: 'Mafia Mask Pack',
		rarity: 'Free',
		type: 'Mask',
		released: '2016, October 10',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Concussion Grenade': {
		name: 'Concussion Grenade',
		rarity: 'Free',
		type: 'Weapon',
		released: '2016, October 11',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Hoxton Safe': {
		name: 'Hoxton Safe',
		rarity: 'Free',
		type: 'Heist',
		released: '2016, October 12',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'The Medic': {
		name: 'The Medic',
		rarity: 'Free',
		type: 'Feature',
		released: '2016, October 13',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Chains Mask Pack': {
		name: 'Chains Mask Pack',
		rarity: 'Free',
		type: 'Mask',
		released: '2016, October 14',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Mutators': {
		name: 'Mutators',
		rarity: 'Free',
		type: 'Feature',
		released: '2016, October 15',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'New Shotgun': {
		name: 'New Shotgun',
		rarity: 'Free',
		type: 'Weapon',
		released: '2016, October 16',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'PAYDAYCON 2016': {
		name: 'PAYDAYCON 2016',
		rarity: 'Event',
		type: 'Mask',
		released: '2016, November 11',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Shadow Warrior Collaboration': {
		name: 'Shadow Warrior Collaboration',
		rarity: 'Free',
		type: 'Mask',
		released: '2017, February 1',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Sydney Mega Mask': {
		name: 'Sydney Mega Mask',
		rarity: 'Event',
		type: 'Mask',
		released: '2017, February 1',
		price: '$10',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Search for Kento day 6': {
		name: 'Search for Kento day 6',
		rarity: 'Free',
		type: 'Weapon',
		released: '2017, April 8',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Pen Melee Weapon': {
		name: 'Pen Melee Weapon',
		rarity: 'Event',
		type: 'Weapon',
		released: '2017, April 8',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Loading Screen Hints': {
		name: 'Loading Screen Hints',
		rarity: 'Free',
		type: 'Feature',
		released: '2017, April 10',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Ultimate Edition Upgrade': {
		name: 'Ultimate Edition Upgrade',
		rarity: 'Bundle',
		type: 'Weapon',
		released: '2017, June 12',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'WW2 Weapon Pack': {
		name: 'WW2 Weapon Pack',
		rarity: 'Free',
		type: 'Weapon Pack',
		released: '2017, August 31',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'h3h3 Character Pack': {
		name: 'h3h3 Character Pack',
		rarity: 'Paid',
		type: 'Character',
		released: '2017, November 22',
		price: '$4.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'VR': {
		name: 'VR',
		rarity: 'Free',
		type: 'Feature',
		released: '2018, March 15',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Offshore Payday': {
		name: 'Offshore Payday',
		rarity: 'Secret',
		type: 'Feature',
		released: '2018, November 1',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
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
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Legacy Collection': {
		name: 'Legacy Collection',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2019, October 25',
		price: '$20.16',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Border Crossing Heist': {
		name: 'Border Crossing Heist',
		rarity: 'Paid',
		type: 'Heist',
		released: '2019, November 7',
		price: '$6.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Cartel Optics Mod Pack': {
		name: 'Cartel Optics Mod Pack',
		rarity: 'Paid',
		type: 'Weapon Mod',
		released: '2019, November 7',
		price: '$2.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Tailor Pack 1': {
		name: 'Tailor Pack 1',
		rarity: 'Paid',
		type: 'Outfit',
		released: '2019, November 7',
		price: '$2.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Border Crossing Bundle': {
		name: 'Border Crossing Bundle',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2019, November 7',
		price: '$9.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Weapon Color Pack 1': {
		name: 'Weapon Color Pack 1',
		rarity: 'Paid',
		type: 'Weapon Skin',
		released: '2020, February 27',
		price: '$2.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Federales Weapon Pack': {
		name: 'Federales Weapon Pack',
		rarity: 'Paid',
		type: 'Weapon Pack',
		released: '2020, February 27',
		price: '$2.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Tailor Pack 2': {
		name: 'Tailor Pack 2',
		rarity: 'Paid',
		type: 'Outfit',
		released: '2020, February 27',
		price: '$2.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'San Martín Bank Heist': {
		name: 'San Martín Bank Heist',
		rarity: 'Paid',
		type: 'Heist',
		released: '2020, February 27',
		price: '$6.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'San Martín Bundle': {
		name: 'San Martín Bundle',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2020, February 27',
		price: '$9.88',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Breakfast in Tijuana': {
		name: 'Breakfast in Tijuana',
		rarity: 'Paid',
		type: 'Heist',
		released: '2020, February 27',
		price: '$6.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Fugitive Weapon Pack': {
		name: 'Fugitive Weapon Pack',
		rarity: 'Paid',
		type: 'Weapon Pack',
		released: '2020, February 27',
		price: '$2.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Weapon Color Pack 2': {
		name: 'Weapon Color Pack 2',
		rarity: 'Paid',
		type: 'Weapon Skin',
		released: '2020, February 27',
		price: '$2.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Breakfast in Tijuana Bundle': {
		name: 'Breakfast in Tijuana Bundle',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2020, February 27',
		price: '$9.98',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Infamy 3.0': {
		name: 'Infamy 3.0',
		rarity: 'Free',
		type: 'Feature',
		released: '2020, November 11',
		price: 'Free',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Tailor Pack 3': {
		name: 'Tailor Pack 3',
		rarity: 'Paid',
		type: 'Outfit',
		released: '2020, November 11',
		price: '$2.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Gunslinger Weapon Pack': {
		name: 'Gunslinger Weapon Pack',
		rarity: 'Paid',
		type: 'Weapon Pack',
		released: '2020, November 11',
		price: '$2.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Weapon Color Pack 3': {
		name: 'Weapon Color Pack 3',
		rarity: 'Paid',
		type: 'Weapon Skin',
		released: '2020, November 11',
		price: '$2.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Buluc\'s Mansion Heist': {
		name: 'Buluc\'s Mansion Heist',
		rarity: 'Paid',
		type: 'Heist',
		released: '2020, November 11',
		price: '$6.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Buluc\'s Mansion Bundle': {
		name: 'Buluc\'s Mansion Bundle',
		rarity: 'Bundle',
		type: 'Bundle',
		released: '2020, November 11',
		price: '$10.04',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Jiu Feng Smuggler Pack': {
		name: 'Jiu Feng Smuggler Pack',
		rarity: 'Paid',
		type: 'Weapon Pack',
		released: '2021, February 24',
		price: '$3.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	},
	'Jiu Feng Smuggler Pack 2': {
		name: 'Jiu Feng Smuggler Pack 2',
		rarity: 'Paid',
		type: 'Weapon Pack',
		released: '2021, May 20',
		price: '$3.99',
		platform: {
			360: false,
			pc: true,
			ps4: false,
			xb1: false,
			ps3: false
		}
	}
}

export default downloadableContent