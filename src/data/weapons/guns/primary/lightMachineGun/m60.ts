import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import bipod from '../../modifications/bipod'
import foregrip from '../../modifications/foregrip'
import { type WeaponData } from '../../weaponTypes'
import { lightMachineGunBarrelExt, lightMachineGunBoost, lightMachineGunGadget } from '../commonModifications/lightMachineGunModifications'

const m60: WeaponData = {
	name: 'M60',
	image: 'm60',
	source: content['Fugitive Weapon Pack'],
	inventorySlot: 'primary',
	reputation: 33,
	weaponType: 'LMG',
	firingMode: 'Fully automatic',
	cost: 749e3,
	stats: {
		magazine: 200,
		totalAmmo: 300,
		rateOfFire: 550,
		damage: 120,
		accuracy: 48,
		stability: 20,
		concealment: 1,
		threat: 34,
		reload: 6.25
	},
	extraStats: {
		tacticalReload: 6.25,
		equipDelays: [0.9, 0.9],
		ammoPickup: [7.5, 10.5],
		recoilHorizontal: [-2.5, 3.5],
		recoilVertical: [-0.5, 2.0],
		spread: 3.12,
		damageModifier: [1.0, 0.8]
	},
	modifications: {
		barrel: [
			barrel['Short Barrel (M60)']
		],
		barrelExt: lightMachineGunBarrelExt,
		bipod: [
			bipod['Lion\'s Bipod']
		],
		boost: lightMachineGunBoost,
		foregrip: [
			foregrip['Modernized Foregrip'],
			foregrip['Tactical Foregrip (M60)'],
			foregrip['Tropical Foregrip']
		],
		gadget: lightMachineGunGadget
	}
}

export default m60