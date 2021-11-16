import { ContentData } from 'data/source/downloadableContent'
import { SourceData } from 'data/source/miscSources'

import { AkimboShotunsList } from './primary/akimboShotuns'
import { AssaultRifleList } from './primary/assaultRifles'
import { LightMachineGunList } from './primary/lightMachineGuns'
import { PrimaryShotgunList } from './primary/shotgunsPrimary'
import { SniperList } from './primary/snipers'
import { PrimarySpecialList } from './primary/specialsPrimary'
import { PistolList } from './secondary/pistols'
import { SecondaryShotgunList } from './secondary/shotgunsSecondary'
import { SecondarySpecialList } from './secondary/specialsSecondary'
import { SubmachineGunList } from './secondary/submachineGuns'

export type Slot = 'primary' | 'secondary'

type WeaponType = 'Assault Rifle' | 'Shotgun' | 'LMG' | 'Sniper' | 'Akimbo Pistol' | 'Akimbo Shotgun' | 'Akimbo SMG' | 'Special' | 'Pistol' | 'Submachine Gun'

export interface WeaponData {
	name: string;
	image: string;
	source: SourceData | ContentData;
	inventorySlot: 'primary' | 'secondary';
	reputation: number;
	weaponType: WeaponType;
	firingMode: 'Selective firing' | 'Semi-Automatic' | 'Lever Action' | 'Pump action' | 'Break Action' | 'Fully automatic' | 'Bolt action' | 'Single Shot' | 'Double action' | 'Single action';
	cost: number;
	stats: WeaponStats;
	extraStats: WeaponExtraStats;
	modifications?: Partial<Record<ModificationSlot, WeaponModification<string>[]>>;
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

export type ModificationSlot = 'Ammunition' | 'Barrel' | 'Barrel Ext' | 'Boost' | 'Custom' | 'Extra' | 'Foregrip' | 'Gadget' | 'Grip' | 'Magazine' | 'Sight' | 'Stock' | 'Upper Reciever'
type Packages = 'Green Mantis' | 'Yellow Bull' | 'Red Spider' | 'Blue Eagle' | 'Purple Snake'

export interface CompatibleWeapons {
	assaultRifle?: AssaultRifleList[];
	shotgun?: (PrimaryShotgunList | SecondaryShotgunList)[];
	lightMachineGun?: LightMachineGunList[];
	sniper?: SniperList[];
	akimboPistol?: null[];
	akimboShotgun?: AkimboShotunsList[];
	akimboSubmachineGun?: null[];
	special?: (PrimarySpecialList | SecondarySpecialList)[];
	pistol?: PistolList[];
	submachineGun?: SubmachineGunList[];
}

export interface WeaponModification<ModificationName> {
	name: ModificationName;
	image: string;
	slot: ModificationSlot;
	source: SourceData | ContentData;
	cost: number;
	acquisition?: {
		package?: Packages;
		achievement?: string;
		bonus?: number;
		infinite?: true;
	};
	specialEffect?: string[];
	stats: {
		totalAmmo?: number;
		magazine?: number;
		reload?: number;
		damage?: number;
		accuracy?: number;
		stability?: number;
		concealment?: number;
		threat?: number;
	};
	compatibleWeapons: CompatibleWeapons;
	incompatibleSlot?: ModificationSlot[];
}

export type WeaponModificationList<ModificationNameList extends string> = Record<ModificationNameList, WeaponModification<ModificationNameList>>;

type StatBoost = 'accuracy' | 'concealment' | 'damage' | 'income' | 'stability' | 'total ammo'

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
	modifications: Partial<Record<ModificationSlot, WeaponModification<string>>>;
	name?: string;
}