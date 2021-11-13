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

export const assaultRifleList: AssaultRifleList[] = [
	'AMCAR Rifle',
	'Commando 553 Rifle',
	'Eagle Heavy Rifle',
	'Union 5.56 Rifle',
	'AK Rifle',
	'CAR-4 Rifle',
	'UAR Rifle',
	'KETCHNOV Byk-1 Assault Rifle',
	'Cavity 9mm',
	'AK.762',
	'JP36 Rifle',
	'AK17 Rifle',
	'Golden AK.762 Rifle',
	'Bootleg Rifle',
	'Queen\'s Wrath Rifle',
	'Galant Rifle',
	'M308 Rifle',
	'Clarion Rifle',
	'Lion\'s Roar Rifle',
	'Valkyria Rifle',
	'AK5 Rifle',
	'Gecko 7.62 Rifle',
	'Tempest-21 Rifle',
	'AMR-16 Rifle',
	'Little Friend 7.62 Assault Rifle',
	'Falcon Rifle',
	'Gewehr 3 Rifle'
]

export const shotgunList: (PrimaryShotgunList | SecondaryShotgunList)[] = [
	// primary
	'Predator 12G Shotgun',
	'Breaker 12G Shotgun',
	'Reinfeld 880 Shotgun',
	'Mosconi 12G Tactical Shotgun',
	'M1014 Shotgun',
	'Raven Shotgun',
	'IZHMA 12G Shotgun',
	'Reinfeld 88 Shotgun',
	'Mosconi 12G Shotgun',
	'Joceline O/U 12G Shotgun',
	'Steakout 12G Shotgun',
	// secondary
	'Locomotive 12G Shotgun',
	'GSPS 12G Shotgun',
	'Goliath 12G Shotgun',
	'Grimm 12G Shotgun',
	'Street Sweeper Shotgun',
	'The Judge Shotgun',
	'Claire 12G Shotgun'
]

export const lightMachineGunList: LightMachineGunList[] = [
	'RPK Light Machine Gun',
	'KSP 58 Light Machine Gun',
	'M60 Light Machine Gun',
	'KSP Light Machine Gun',
	'Buzzsaw 42 Light Machine Gun',
	'Brenner-21 Light Machine Gun'
]

export const sniperList: SniperList[] = [
	'Rattlesnake Sniper Rifle',
	'R700 Sniper Rifle',
	'Bernetti Rangehitter Sniper Rifle',
	'Káng Arms X1 Sniper Rifle',
	'Platypus 70 Sniper Rifle',
	'Lebensauger .308 Sniper Rifle',
	'Desertfox Sniper Rifle',
	'Contractor .308 Sniper Rifle',
	'R93 Sniper Rifle',
	'Repeater 1874 Sniper Rifle',
	'Grom Sniper Rifle',
	'Nagant Sniper Rifle',
	'Thanatos .50 cal Sniper Rifle'
]

export const akimboShotgunList: AkimboShotunsList[] = [
	'Akimbo Goliath 12G Shotguns',
	'Brothers Grimm 12G Shotguns',
	'Akimbo Judge Shotguns'
]

export const specialList: (PrimarySpecialList | SecondarySpecialList)[] = [
	// primary
	'OVE9000 Saw',
	'Plainsrider Bow',
	'Light Crossbow',
	'Airbow',
	'English Longbow',
	'XL 5.56 Microgun',
	'DECA Technologies Compound Bow',
	'Vulcan Minigun',
	'Heavy Crossbow',
	'Piglet Grenade Launcher',
	'Flamethrower Mk.1',
	'GL40 Grenade Launcher',
	// secondary
	'Pistol Crossbow',
	'Compact 40mm Grenade Launcher',
	'HRL-7 Rocket Launcher',
	'China Puff 40mm Grenade Launcher',
	'Commando 101 Rocket Launcher',
	'MA-17 Flamethrower',
	'Arbiter Grenade Launcher',
	'OVE9000 Saw'
]

export const pistolList: PistolList[] = [
	'Interceptor 45 Pistol',
	'Chimano 88 Pistol',
	'Gruber Kurz Pistol',
	'Signature .40 Pistol',
	'Crosskill Pistol',
	'Bernetti 9 Pistol',
	'Bronco .44 Pistol',
	'Crosskill Chunky Compact Pistol',
	'White Streak Pistol',
	'Baby Deagle',
	'M13 9mm Pistol',
	'Chimano Custom Pistol',
	'Broomstick Pistol',
	'Parabellum Pistol',
	'5/7 AP Pistol',
	'Castigo .44 Revolver',
	'Contractor Pistol',
	'Frenchman Model 87 Revolver',
	'Chimano Compact Pistol',
	'Crosskill Guard Pistol',
	'LEO Pistol',
	'STRYK 18c Pistol',
	'Bernetti Auto Pistol',
	'Czech 92 Pistol',
	'Igor Automatik Pistol',
	'HOLT 9mm Pistol',
	'Peacemaker .45 Revolver',
	'Matever .357 Revolver',
	'Deagle Pistol'
]

export const submachineGunList: SubmachineGunList[] = [
	'Swedish K Submachine Gun',
	'SpecOps Submachine Gun',
	'Mark 10 Submachine Gun',
	'CR 805B Submachine Gun',
	'AK Gen 21 Tactical Submachine Gun',
	'Jacket\'s Piece',
	'Compact-5 Submachine Gun',
	'Chicago Typewriter Submachine Gun',
	'Miyaka 10 Special Submachine Gun',
	'Cobra Submachine Gun',
	'CMP Submachine Gun',
	'Para Submachine Gun',
	'Micro Uzi Submachine Gun',
	'Signature Submachine Gun',
	'Jackal Submachine Gun',
	'MP40 Submachine Gun',
	'Heather Submachine Gun',
	'Krinkov Submachine Gun',
	'Blaster 9mm Submachine Gun',
	'Kobus 90 Submachine Gun',
	'Kross Vertex Submachine Gun',
	'Tatonka Submachine Gun',
	'Patchett L2A1 Submachine Gun',
	'Uzi Submachine Gun'
]

export default {
	assaultRifleList,
	shotgunList,
	lightMachineGunList,
	sniperList,
	akimboShotgunList,
	specialList,
	pistolList,
	submachineGunList
}