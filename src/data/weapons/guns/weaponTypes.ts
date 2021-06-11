import { contentData } from 'data/source/downloadableContent'
import { sourceData } from 'data/source/miscSources'

export interface weaponData {
	name: string;
	image: string;
	source: sourceData | contentData;
	inventorySlot: 'primary' | 'secondary';
	reputation: number;
	weaponType: 'Assault Rifle' | 'Shotgun' | 'LMG' | 'Sniper' | 'Akimbo Pistol';
	firingMode: 'Selective firing' | 'Semi-Automatic' | 'Lever Action' | 'Pump action' | 'Break Action' | 'Fully automatic';
	cost: number;
	stats: weaponStats;
	extraStats: weaponExtraStats;
	modifications?: {
		barrelExtension?: string[],
		boost?: string[],
		gadget?: string[],
		grip?: string[],
		lowerReceiver?: string[],
		magazine?: string[]
		slide?: string[]
	}
	skins?: weaponSkin[]
}

interface weaponStats {
	magazine: number;
	totalAmmo: number;
	rateOfFire: number;
	damage: number;
	accuracy: number;
	stability: number;
	concealment: number;
	threat: number;
}

interface weaponExtraStats {
	tacticalReload: number | [number, number];
	reload: number;
	equipDelays: number | [number, number];
	ammoPickup: [number, number];
	recoilHorizontal: number | [number, number];
	recoilVertical: [number, number];
	spread: number | [number, number];
	damageModifier: number | [number, number];
}

export interface weaponModifications {
	name: string;
	image: string;
	cost: [number, string[]];
	slot: string;
	sourceType: 'normal' | 'dlc' | 'community' | 'event' | 'infamous' | 'collaboration';
	source: string;
	notes: string;
	stats: weaponStats;
	extraStats?: weaponExtraStats;
	compatibleWeapons: {
		type?: string[];
		list?: string[];
	}
}

interface weaponSkin {
	name: string;
	image: string;
	rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
	statBoost: [number, 'stability'];
	safe: string;
}

export interface weaponTypes {
	[key: string]: weaponData[];
}