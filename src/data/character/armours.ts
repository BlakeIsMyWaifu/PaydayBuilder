export interface armourData {
	name: string;
	armour: number;
	concealment: number;
	speed: number;
	dodge: number;
	steadiness: number;
	stamina: number;
	unlock: number | string;
	desciption: string[];
}

const armour: armourData[] = [
	{
		name: 'Two-Piece Suit',
		armour: 20,
		concealment: 30,
		speed: 36.8,
		dodge: 5,
		steadiness: 11,
		stamina: 51.3,
		unlock: 0,
		desciption: [
			'No movement penalty, no visibility.',
			'This is the standard two-piece suit that any self-respecting criminal should wear.',
			'It provides no extra protection but has the highest concealment factor, making it the best choice for a heist where you want to go undetected and blend into the crowd.',
			'Suits are usually reserved for special occasions, such as weddings, funerals and bank robberies.'
		]
	},
	{
		name: 'Ballistic Vest',
		armour: 60,
		concealment: 23,
		speed: 35,
		dodge: -10,
		steadiness: 12,
		stamina: 47.5,
		unlock: 1,
		desciption: [
			'Little movement penalty, low visibility.',
			'The ballistic vest is a standard issue bullet-resistant soft vest that is worn on the torso. It offers good protection from small-caliber handgun and shotgun projectiles, making it essential for anyone in the line of fire.',
			'Ballistic vests are used by police forces, security guards and bodyguards.'
		]
	},
	{
		name: 'Lightweight Ballistic Vest',
		armour: 50,
		concealment: 26,
		speed: 35.9,
		dodge: -5,
		steadiness: 11.5,
		stamina: 50,
		unlock: 7,
		desciption: [
			'Little movement penalty, low visibility.',
			'The lightweight ballistic vest is easy to wear, concealable bullet proof vest. It offers a specially developed trauma liner which provides effective blunt trauma protection, making it a good choice to protect yourself.',
			'Lightweight ballistic vests are used by dignitaries and VIP\'s, sky marshals as well as executive and diplomatic security professionals.'
		]
	},
	{
		name: 'Heavy Ballistic Vest',
		armour: 70,
		concealment: 21,
		speed: 33.3,
		dodge: -15,
		steadiness: 12.9,
		stamina: 45,
		unlock: 12,
		desciption: [
			'Small movement penalty, medium visibility.',
			'The heavy ballistic vest is a hard-plate reinforced vest that is worn on the torso. It is a modern body armor combining a ballistic vests with shoulder and side protection armor components, making it a great protection of choice.',
			'Heavy ballistic vests are worn by soldiers, police tactical units, and hostage rescue teams.'
		]
	},
	{
		name: 'Flak Jacket',
		armour: 90,
		concealment: 18,
		speed: 26.3,
		dodge: -20,
		steadiness: 13.8,
		stamina: 42.5,
		unlock: 21,
		desciption: [
			'Medium movement penalty, medium visibility.',
			'The flak jacket by GenSec Security Industries is a modern take on the classic version. It absorbs the impact from firearm projectiles and shrapnel from explosions.',
			'It combines a heavy ballistic vest with shoulder and side protection armor components, offering spine protection as well.',
			'Flak jackets are worn by Marines, combat soldiers and GenSec FTSU task forces.'
		]
	},
	{
		name: 'Combined Tactical Vest',
		armour: 110,
		concealment: 12,
		speed: 22.8,
		dodge: -25,
		steadiness: 15.7,
		stamina: 40,
		unlock: 31,
		desciption: [
			'Medium movement penalty, high visibility.',
			'The Combined Tactical Vest was developed due to the challenges of modern warfare. It is made of high performance ballistic materials and is designed to carry heavy loads, such as ammo pouches, radios and other accessories.',
			'Combined tactical vests are worn by soldiers, special forces and other organized military units across the world.'
		]
	},
	{
		name: 'Improved Combined Tactical Vest',
		armour: 170,
		concealment: 1,
		speed: 20.1,
		dodge: -55,
		steadiness: 22,
		stamina: 35,
		unlock: 'Iron Man Aced',
		desciption: [
			'Large movement penalty, high visibility.',
			'The Improved Combined Tactical Vest is a stolen experimental prototype made by GenSec Security Industries.',
			'Based on White Mesa technology it uses both soft and hard armor solutions. The perfectly fitted interlocking fiber layers rightly woven together with metal plates are specially angled to deflect projectiles and shield from explosions. In short, it provides complete protection.',
			'It is not for sale and is wanted by GenSec Security Industries.'
		]
	}
]

export default armour