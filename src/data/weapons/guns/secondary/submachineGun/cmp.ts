import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import magazine from '../../modifications/magazine'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { submachineGunBoost, submachineGunCustom, submachineGunGadget, submachineGunSecondarySight, submachineGunSight } from '../commonModifications/submachineGunModifications'

const cmp: WeaponData = {
	name: 'CMP',
	image: 'mp9',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 19,
	weaponType: 'Submachine Gun',
	firingMode: 'Selective firing',
	cost: 418e3,
	stats: {
		magazine: 30,
		totalAmmo: 210,
		rateOfFire: 952,
		damage: 50,
		accuracy: 28,
		stability: 76,
		concealment: 26,
		threat: 8,
		reload: 2.48
	},
	extraStats: {
		tacticalReload: 1.51,
		equipDelays: [0.4, 0.5],
		ammoPickup: [6.3, 11.55],
		recoilHorizontal: [-1.1, 1.1],
		recoilVertical: [-1.32, 1.32],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		barrelExt: [
			barrelExt['Medium Suppressor'],
			barrelExt['Low Profile Suppressor'],
			barrelExt['Stubby Compensator'],
			barrelExt['Medved R4 Suppressor'],
			barrelExt['The Tank Compensator'],
			barrelExt['Fire Breather Nozzle'],
			barrelExt['The Bigger The Better Suppressor'],
			barrelExt['Competitor\'s Compensator'],
			barrelExt['Funnel of Fun Nozzle'],
			barrelExt['Tactical Compensator'],
			barrelExt['Ported Compensator'],
			barrelExt['Tactical Suppressor'],
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake']
		],
		boost: submachineGunBoost,
		custom: submachineGunCustom,
		gadget: submachineGunGadget,
		magazine: [
			magazine['Extended Magazine (CMP)']
		],
		secondarySight: submachineGunSecondarySight,
		sight: submachineGunSight,
		stock: [
			stock['Skeletal Stock (CMP)']
		]
	}
}

export default cmp