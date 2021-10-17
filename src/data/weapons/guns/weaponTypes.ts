import { contentData } from 'data/source/downloadableContent'
import { sourceData } from 'data/source/miscSources'

type WeaponType = 'Assault Rifle' | 'Shotgun' | 'LMG' | 'Sniper' | 'Akimbo Pistol' | 'Akimbo Shotgun' | 'Special' | 'Pistol' | 'Submachine Gun';

export interface WeaponData {
	name: string;
	image: string;
	source: sourceData | contentData;
	inventorySlot: 'primary' | 'secondary';
	reputation: number;
	weaponType: WeaponType;
	firingMode: 'Selective firing' | 'Semi-Automatic' | 'Lever Action' | 'Pump action' | 'Break Action' | 'Fully automatic' | 'Bolt action' | 'Single Shot' | 'Double action' | 'Single action';
	cost: number;
	stats: WeaponStats;
	extraStats: WeaponExtraStats;
	modifications?: {
		barrelExtension?: string[];
		boost?: string[];
		gadget?: string[];
		grip?: string[];
		lowerReceiver?: string[];
		magazine?: string[];
		slide?: string[];
	}
	skins?: WeaponSkin[];
}

export interface WeaponStats {
	magazine: number;
	totalAmmo: number;
	rateOfFire: number;
	damage: number;
	accuracy: number;
	stability: number;
	concealment: number;
	threat: number;
}

export interface WeaponExtraStats {
	tacticalReload: number | [number, number] | null;
	reload: number;
	equipDelays: [number, number];
	ammoPickup: [number, number] | null;
	recoilHorizontal: [number, number];
	recoilVertical: [number, number];
	spread: number | null;
	damageModifier: [number, number] | null;
}

type ModificationSlot = 'Ammunition' | 'Barrel' | 'Barrel Ext' | 'Boost' | 'Custom' | 'Foregrip' | 'Gadget' | 'Grip' | 'Sight' | 'Stock' | 'Upper Reciever';
type Packages = 'Green Mantis' | 'Yellow Bull' | 'Red Spider' | 'Blue Eagle' | 'Purple Snake';

export interface WeaponModification<ModificationName> {
	name: ModificationName;
	image: string;
	slot: ModificationSlot;
	source: sourceData | contentData;
	cost: number;
	acquisition?: {
		package?: Packages;
		achievement?: string;
		bonus?: number;
		infinite?: true;
	}
	specialEffect?: string[];
	stats: {
		magazine?: number;
		totalAmmo?: number;
		rateOfFire?: number;
		damage?: number;
		accuracy?: number;
		stability?: number;
		concealment?: number;
		threat?: number;
	};
	compatibleWeapons: {
		type?: WeaponType[];
		list?: WeaponData[];
	}
}

type StatBoost = 'accuracy' | 'concealment' | 'damage' | 'income' | 'stability' | 'total ammo';

interface WeaponSkin {
	name: string;
	image: string;
	rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
	statBoost: [number, StatBoost] | [[number, StatBoost], [number, StatBoost]];
	safe: string;
}

export interface Weapon {
	id: number;
	weapon: WeaponData;
	modifications: WeaponModification<string>[];
	name?: string;
}