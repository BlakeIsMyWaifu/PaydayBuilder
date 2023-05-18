import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import extra from '../../modifications/extra'
import magazine from '../../modifications/magazine'
import underbarrel from '../../modifications/underbarrel'
import { type WeaponData } from '../../weaponTypes'
import { lightMachineGunBoost, lightMachineGunGadget } from '../commonModifications/lightMachineGunModifications'

const campbell74: WeaponData = {
	name: 'Campbell 74',
	image: 'kacchainsaw', // TODO image
	source: content['McShay Weapon Pack 4'],
	inventorySlot: 'primary',
	reputation: 42,
	weaponType: 'LMG',
	firingMode: 'Fully automatic',
	cost: 920e3,
	stats: {
		magazine: 150,
		totalAmmo: 300,
		rateOfFire: 1000,
		damage: 68,
		accuracy: 44,
		stability: 24,
		concealment: 9,
		threat: 34,
		reload: 6.0
	},
	extraStats: {
		tacticalReload: 5.0,
		equipDelays: [0.9, 0.9],
		ammoPickup: [7.5, 10.5],
		recoilHorizontal: [-2.4, 3.36],
		recoilVertical: [-0.48, 1.92],
		spread: 3.36,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrel: [
			barrel['Lugosi Barrel'],
			barrel['Karloff Barrel']
		],
		barrelExt: [
			barrelExt['Medium Suppressor'],
			barrelExt['Low Profile Suppressor'],
			barrelExt['Stubby Compensator'],
			barrelExt['The Tank Compensator'],
			barrelExt['Fire Breather Nozzle'],
			barrelExt['The Bigger The Better Suppressor'],
			barrelExt['Competitor\'s Compensator'],
			barrelExt['Funnel of Fun Nozzle'],
			barrelExt['Tactical Compensator'],
			barrelExt['Ported Compensator'],
			barrelExt['Buckeye Suppressor'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		boost: lightMachineGunBoost,
		extra: [
			extra['Moseley Sling']
		],
		gadget: lightMachineGunGadget,
		magazine: [
			magazine['Perkins Soft Case']
		],
		underbarrel: [
			underbarrel['Infernal Flamethrower']
		]
	}
}

export default campbell74