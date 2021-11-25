import source from 'data/source/miscSources'

import ammunition, { AmmunitionModificationsList } from '../modifications/ammunition'
import barrel from '../modifications/barrel'
import barrelExt, { BarrelExtModificationsList } from '../modifications/barrelExt'
import boost, { BoostModificationsList } from '../modifications/boost'
import custom from '../modifications/custom'
import foregrip from '../modifications/foregrip'
import gadget, { GadgetModificationsList } from '../modifications/gadget'
import lowerReciver from '../modifications/lowerReceiver'
import magazine from '../modifications/magazine'
import { Modification, WeaponData } from '../weaponTypes'

const mainAmmunition: Modification<AmmunitionModificationsList>[] = [
	ammunition['000 Buckshot (Community)'],
	ammunition['000 Buckshot (DLC)'],
	ammunition['HE Round'],
	ammunition.Flechette,
	ammunition['AP Slug'],
	ammunition['Dragon\'s Breath Round']
]

const mainBarrelExt: Modification<BarrelExtModificationsList>[] = [
	barrelExt['Shark Teeth Nozzle'],
	barrelExt['The Silent Killer Suppressor'],
	barrelExt['King\'s Crown Compensator'],
	barrelExt['Shh!'],
	barrelExt['Donald\'s Horizontal Leveller']
]

const mainBoost: Modification<BoostModificationsList>[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Accuracy (- Shotguns)'],
	boost['Team Boost']
]

const mainGadget: Modification<GadgetModificationsList>[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo']
]

export type AkimboShotunsList =
	'Akimbo Goliath 12G Shotguns' |
	'Brothers Grimm 12G Shotguns' |
	'Akimbo Judge Shotguns'

const akimboShotuns: Record<AkimboShotunsList, WeaponData> = {
	'Akimbo Goliath 12G Shotguns': {
		name: 'Akimbo Goliath 12G Shotguns',
		image: 'x_rota',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 0,
		weaponType: 'Akimbo Shotgun',
		firingMode: 'Selective firing',
		cost: 714e3,
		stats: {
			magazine: 12,
			totalAmmo: 72,
			rateOfFire: 333,
			damage: 42,
			accuracy: 56,
			stability: 8,
			concealment: 13,
			threat: 28
		},
		extraStats: {
			tacticalReload: 3.0,
			reload: 3.5,
			equipDelays: [0.5, 0.5],
			ammoPickup: [3.6, 5.4],
			recoilHorizontal: [-1.4, 1.4],
			recoilVertical: [3.92, 3.36],
			spread: 2.64,
			damageModifier: [1.0, 0.6]
		},
		modifications: {
			ammunition: mainAmmunition,
			barrel: [
				barrel['Short Barrel (Goliath)'],
				barrel['Silenced Barrel (Goliath)']
			],
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadget
		}
	},
	'Brothers Grimm 12G Shotguns': {
		name: 'Brothers Grimm 12G Shotguns',
		image: 'x_basset',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 27,
		weaponType: 'Akimbo Shotgun',
		firingMode: 'Selective firing',
		cost: 847e3,
		stats: {
			magazine: 16,
			totalAmmo: 96,
			rateOfFire: 333,
			damage: 18,
			accuracy: 12,
			stability: 12,
			concealment: 21,
			threat: 28
		},
		extraStats: {
			tacticalReload: 3.0,
			reload: 3.5,
			equipDelays: [0.5, 0.5],
			ammoPickup: [3.8, 7.2],
			recoilHorizontal: [-1.35, 1.35],
			recoilVertical: [3.78, 3.24],
			spread: 5.28,
			damageModifier: [1.0, 0.5]
		},
		modifications: {
			ammunition: mainAmmunition,
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			custom: [
				custom['Single Fire'],
				custom['Auto Fire']
			],
			foregrip: [
				foregrip['Little Brother Foregrip']
			],
			gadget: mainGadget,
			magazine: [
				magazine['Big Brother Magazine']
			]
		}
	},
	'Akimbo Judge Shotguns': {
		name: 'Akimbo Judge Shotguns',
		image: 'x_judge',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 0,
		weaponType: 'Akimbo Shotgun',
		firingMode: 'Selective firing',
		cost: 1117200,
		stats: {
			magazine: 10,
			totalAmmo: 40,
			rateOfFire: 500,
			damage: 155,
			accuracy: 52,
			stability: 0,
			concealment: 29,
			threat: 28
		},
		extraStats: {
			tacticalReload: 3.0,
			reload: 3.5,
			equipDelays: [0.5, 0.5],
			ammoPickup: [0.2, 0.6],
			recoilHorizontal: [-1.5, 1.5],
			recoilVertical: [4.2, 3.6],
			spread: 2.88,
			damageModifier: [1.0, 0.7]
		},
		modifications: {
			ammunition: mainAmmunition,
			barrelExt: mainBarrelExt,
			boost: mainBoost,
			gadget: mainGadget,
			lowerReciever: [
				lowerReciver['Custom Reinforced Frame']
			]
		}
	}
}

export default akimboShotuns