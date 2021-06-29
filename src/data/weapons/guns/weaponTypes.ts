import { contentData } from 'data/source/downloadableContent'
import { sourceData } from 'data/source/miscSources'

export interface weaponData {
	name: string;
	image: string;
	source: sourceData | contentData;
	inventorySlot: 'primary' | 'secondary';
	reputation: number;
	weaponType: 'Assault Rifle' | 'Shotgun' | 'LMG' | 'Sniper' | 'Akimbo Pistol' | 'Akimbo Shotgun' | 'Special';
	firingMode: 'Selective firing' | 'Semi-Automatic' | 'Lever Action' | 'Pump action' | 'Break Action' | 'Fully automatic' | 'Bolt action' | 'Single Shot' | 'Double action';
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

export interface weaponStats {
	magazine: number;
	totalAmmo: number;
	rateOfFire: number;
	damage: number;
	accuracy: number;
	stability: number;
	concealment: number;
	threat: number;
}

export interface weaponExtraStats {
	tacticalReload: number | [number, number] | null;
	reload: number;
	equipDelays: number | [number, number];
	ammoPickup: [number, number] | null;
	recoilHorizontal: number | [number, number];
	recoilVertical: number | [number, number];
	spread: number | null;// | [number, number] | null;
	damageModifier: number | [number, number] | null;
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