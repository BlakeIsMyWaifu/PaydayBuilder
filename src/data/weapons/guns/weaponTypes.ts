import { type ContentData } from 'data/source/downloadableContent'
import { type SourceData } from 'data/source/miscSources'

import { type PrimaryWeaponType } from './primary'
import { type AkimboShotguns } from './primary/gunList/akimboShotguns'
import { type AssaultRifle as AssaultRifle } from './primary/gunList/assaultRifles'
import { type LightMachineGun } from './primary/gunList/lightMachineGuns'
import { type ShotgunPrimary } from './primary/gunList/shotgunsPrimary'
import { type SniperPrimary } from './primary/gunList/snipersPrimary'
import { type SpecialPrimary } from './primary/gunList/specialsPrimary'
import { type SecondaryWeaponType } from './secondary'
import { type Pistol } from './secondary/gunList/pistols'
import { type SecondaryShotgun } from './secondary/gunList/shotgunsSecondary'
import { type SecondarySniper } from './secondary/gunList/snipersSecondary'
import { type SpecialSecondary } from './secondary/gunList/specialsSecondary'
import { type SubmachineGun } from './secondary/gunList/submachineGuns'

export type Slot = 'primary' | 'secondary'

export type WeaponType = PrimaryWeaponType | SecondaryWeaponType

export type WeaponModifications = Partial<Record<ModificationSlot, Modification[]>> & { boost: Modification[] }

export type WeaponName =
	| AkimboShotguns
	| AssaultRifle
	| LightMachineGun
	| Pistol
	| SecondaryShotgun
	| SecondarySniper
	| ShotgunPrimary
	| SniperPrimary
	| SpecialPrimary
	| SpecialSecondary
	| SubmachineGun

type FiringMode =
	| 'Selective firing'
	| 'Semi-Automatic'
	| 'Lever action'
	| 'Pump action'
	| 'Break action'
	| 'Fully automatic'
	| 'Bolt action'
	| 'Single shot'
	| 'Double action'
	| 'Single action'

export type WeaponData = DeepReadonly<{
	name: WeaponName;
	image: string;
	source: SourceData | ContentData;
	inventorySlot: 'primary' | 'secondary';
	reputation: number;
	weaponType: WeaponType;
	firingMode: FiringMode;
	cost: number;
	stats: WeaponStats;
	extraStats: WeaponExtraStats;
	modifications: WeaponModifications;
}>

export interface WeaponStats {
	magazine: number;
	totalAmmo: number;
	rateOfFire: number;
	damage: number;
	accuracy: number;
	stability: number;
	concealment: number;
	threat: number;
	reload: number;
}

export interface WeaponExtraStats {
	tacticalReload: number | [number, number] | null;
	equipDelays: [number, number];
	ammoPickup: [number, number] | null;
	recoilHorizontal: [number, number];
	recoilVertical: [number, number];
	spread: number | null;
	damageModifier: [number, number] | null;
}

export interface ModificationStats {
	totalAmmo?: number;
	magazine?: number;
	reload?: number;
	damage?: number;
	accuracy?: number;
	stability?: number;
	concealment?: number;
	threat?: number;
}

export type ModificationSlot =
	| 'ammunition'
	| 'barrel'
	| 'barrelExt'
	| 'bayonet'
	| 'bipod'
	| 'bolt'
	| 'boost'
	| 'chargingHandle'
	| 'custom'
	| 'exclusiveSet'
	| 'extra'
	| 'foregrip'
	| 'gadget'
	| 'grip'
	| 'lowerReceiver'
	| 'magazine'
	| 'receiver'
	| 'secondarySight'
	| 'sight'
	| 'slide'
	| 'stock'
	| 'underbarrel'
	| 'upperReceiver'
	| 'verticalGrip'

export type ModIcon =
	| 'inv_mod_ammo_custom'
	| 'inv_mod_ammo_dragons_breath'
	| 'inv_mod_ammo_explosive'
	| 'inv_mod_ammo_piercing'
	| 'inv_mod_ammo_slug'
	| 'inv_mod_ammo_poison'
	| 'inv_mod_autofire'
	| 'inv_mod_barrel'
	| 'inv_mod_barrel_ext'
	| 'inv_mod_bayonet'
	| 'inv_mod_bipod'
	| 'inv_mod_bolt'
	| 'inv_mod_bonus'
	| 'inv_mod_bonus_stats'
	| 'inv_mod_bonus_team'
	| 'inv_mod_custom'
	| 'inv_mod_extra'
	| 'inv_mod_flashlight'
	| 'inv_mod_foregrip'
	| 'inv_mod_grip'
	| 'inv_mod_laser'
	| 'inv_mod_lower_receiver'
	| 'inv_mod_magazine'
	| 'inv_mod_receiver'
	| 'inv_mod_scope'
	| 'inv_mod_second_sight'
	| 'inv_mod_silencer'
	| 'inv_mod_singlefire'
	| 'inv_mod_slide'
	| 'inv_mod_stock'
	| 'inv_mod_underbarrel'
	| 'inv_mod_upper_receiver'
	| 'inv_mod_vertical_grip'
	| 'inv_mod_weapon_cosmetics'

export type Modification = DeepReadonly<{
	name: string;
	image: string;
	icon: ModIcon;
	slot: ModificationSlot;
	source: SourceData | ContentData;
	cost: number;
	acquisition?: {
		package?: 'Green Mantis' | 'Yellow Bull' | 'Red Spider' | 'Blue Eagle' | 'Purple Snake';
		achievement?: string;
		sideJob?: string;
		bonus?: number;
		infinite?: true;
		coins?: number;
	};
	specialEffect?: string[];
	stats: ModificationStats;
	incompatibleSlot?: ModificationSlot[]; // TODO
}>

export type ModificationCollection = DeepReadonly<Record<string, Modification>>

export interface WeaponFind {
	name: WeaponName;
	type: WeaponType;
	slot: Slot;
}

export interface Weapon {
	id: number;
	weaponFind: WeaponFind;
	modifications: Partial<Record<ModificationSlot, string>>;
	name?: string;
}