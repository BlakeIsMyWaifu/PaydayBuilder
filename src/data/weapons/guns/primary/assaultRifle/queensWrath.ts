import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadgetMagnifier, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const queensWrath: WeaponData = {
	name: 'Queen\'s Wrath',
	image: 'l85a2',
	source: content['Clover Character Pack'],
	inventorySlot: 'primary',
	reputation: 24,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 534e3,
	stats: {
		magazine: 30,
		totalAmmo: 150,
		rateOfFire: 723,
		damage: 65,
		accuracy: 64,
		stability: 60,
		concealment: 16,
		threat: 12,
		reload: 4.5
	},
	extraStats: {
		tacticalReload: 3.5,
		equipDelays: [0.75, 0.45],
		ammoPickup: [4.5, 8.25],
		recoilHorizontal: [-1.8, 1.8],
		recoilVertical: [1.2, 1.65],
		spread: 2.16,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['Prodigious Barrel'],
			barrel['Diminutive Barrel']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		foregrip: [
			foregrip['Versatile Foregrip']
		],
		gadget: assaultRifleGadgetMagnifier,
		grip: [
			grip['Delightful Grip']
		],
		magazine: [
			magazine['Vintage Mag.'],
			magazine['Tactical Mag.'],
			magazine['CAR Quadstacked Mag'],
			magazine['Expert Mag'],
			magazine['L5 Magazine'],
			magazine['Speed Pull Magazine']
		],
		sight: assaultRifleSight
	}
}

export default queensWrath