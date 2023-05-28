import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight, assaultRifleSight } from '../commonModifications/assaultRifleModifications'

const gewehr3: WeaponData = {
	name: 'Gewehr 3',
	image: 'g3',
	source: content['Gage Assault Pack'],
	inventorySlot: 'primary',
	reputation: 52,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 30,
		totalAmmo: 100,
		rateOfFire: 652,
		damage: 99,
		accuracy: 68,
		stability: 48,
		concealment: 12,
		threat: 26,
		reload: 2.0
	},
	extraStats: {
		tacticalReload: 1.4,
		equipDelays: [0.65, 0.6],
		ammoPickup: [3.0, 4.5],
		recoilHorizontal: [-1.8, 1.8],
		recoilVertical: [1.08, 1.44],
		spread: 1.92,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['Assault Kit'],
			barrel['DMR Kit (Gewehr)']
		],
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		foregrip: [
			foregrip['Precision Foregrip'],
			foregrip['Tactical Foregrip (Gewehr)'],
			foregrip['Wooden Foregrip'],
			foregrip['Plastic Foregrip']
		],
		gadget: assaultRifleGadget,
		grip: [
			grip['Retro Grip'],
			grip['Precision Grip']
		],
		secondarySight: assaultRifleSecondarySight,
		sight: assaultRifleSight,
		stock: [
			stock['Precision Stock'],
			stock['Wooden Stock (Gewehr)']
		]
	}
}

export default gewehr3