import content from 'data/source/downloadableContent'

import ammunition from '../../modifications/ammunition'
import barrel from '../../modifications/barrel'
import gadget from '../../modifications/gadget'
import { type WeaponData } from '../../weaponTypes'
import { specialBoost, specialGadget, specialSight } from '../commonModifications/specialModifications'

const arbiter: WeaponData = {
	name: 'Arbiter',
	image: 'arbiter',
	source: content['Gage Spec Ops Pack'],
	inventorySlot: 'secondary',
	reputation: 47,
	weaponType: 'Special',
	firingMode: 'Semi-Automatic',
	cost: 920e3,
	stats: {
		magazine: 5,
		totalAmmo: 15,
		rateOfFire: 80,
		damage: 480,
		accuracy: 96,
		stability: 96,
		concealment: 18,
		threat: 37,
		reload: 4.5
	},
	extraStats: {
		tacticalReload: 3.34,
		equipDelays: [0.6, 0.6],
		ammoPickup: [0.05, 0.65],
		recoilHorizontal: [-0.3, 0.3],
		recoilVertical: [1.74, 1.8],
		spread: 0.24,
		damageModifier: null
	},
	modifications: {
		ammunition: [
			ammunition['Incendiary Round']
		],
		barrel: [
			barrel['Bombardier Barrel'],
			barrel['Long Barrel (Arbiter)']
		],
		boost: specialBoost,
		gadget: [
			...specialGadget,
			gadget['Riktpunkt Magnifier Gadget'],
			gadget['Signature Magnifier Gadget']
		],
		sight: specialSight
	}
}

export default arbiter