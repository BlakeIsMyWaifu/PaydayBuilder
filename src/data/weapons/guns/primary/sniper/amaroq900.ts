import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import bolt from '../../modifications/bolt'
import extra from '../../modifications/extra'
import gadget from '../../modifications/gadget'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperSight } from '../commonModifications/sniperModifications'

const amaroq900: WeaponData = {
	name: 'Amaroq 900',
	image: 'awp',
	source: content['McShay Weapon Pack 4'],
	inventorySlot: 'primary',
	reputation: 28,
	weaponType: 'Sniper',
	firingMode: 'Bolt action',
	cost: 628e3,
	stats: {
		magazine: 7,
		totalAmmo: 14,
		rateOfFire: 40,
		damage: 1050,
		accuracy: 88,
		stability: 12,
		concealment: 10,
		threat: 26,
		reload: 4.0
	},
	extraStats: {
		tacticalReload: 3.0,
		equipDelays: [0.7, 0.6],
		ammoPickup: [0.45, 0.65],
		recoilHorizontal: [-0.81, 0.81],
		recoilVertical: [8.1, 12.96],
		spread: 0.72,
		damageModifier: [1.0, 1.3]
	},
	modifications: {
		barrel: [
			barrel['Qanuk Barrel'],
			barrel['Pirta Barrel']
		],
		barrelExt: [
			barrelExt['Ijiraq Muzzle Brake'],
			barrelExt['Ice Cap Suppressor']
		],
		bolt: [
			bolt['Dire Speedbolt']
		],
		boost: sniperBoost,
		extra: [
			extra['Snowbound Shell Rack']
		],
		gadget: [
			gadget['Assault Light'],
			gadget['Tactical Laser Module'],
			gadget['Compact Laser Module'],
			gadget['Military Laser Module'],
			gadget['LED Combo'],
			gadget['Stealth Laser Module']
		],
		grip: [ // TODO grip require stock to be equipped
			grip['Lupa Grip'],
			grip['Fenrir Grip'],
			grip['Raiju Grip']
		],
		magazine: [
			magazine['Akhlut Magazine']
		],
		sight: sniperSight,
		stock: [
			stock['Moonlight Stock']
		]
	}
}

export default amaroq900