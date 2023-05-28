import source from 'data/source/miscSources'

import foregrip from '../../modifications/foregrip'
import magazine from '../../modifications/magazine'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExt, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget, assaultRifleSecondarySight } from '../commonModifications/assaultRifleModifications'

const jp36: WeaponData = {
	name: 'JP36',
	image: 'g36',
	source: source['Base Game'],
	inventorySlot: 'primary',
	reputation: 16,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 349e3,
	stats: {
		magazine: 30,
		totalAmmo: 240,
		rateOfFire: 706,
		damage: 54,
		accuracy: 40,
		stability: 64,
		concealment: 19,
		threat: 13,
		reload: 3.85
	},
	extraStats: {
		tacticalReload: 2.85,
		equipDelays: [0.6, 0.6],
		ammoPickup: [7.2, 13.2],
		recoilHorizontal: [-1.4, 1.4],
		recoilVertical: [0.84, 1.12],
		spread: 3.6,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrelExt: assaultRifleBarrelExt,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		foregrip: [
			foregrip['Compact Foregrip'],
			foregrip['Polizei Special Foregrip'],
			foregrip['JP36 Long Foregrip']
		],
		gadget: assaultRifleGadget,
		magazine: [
			magazine['Speed Pull Magazine']
		],
		secondarySight: assaultRifleSecondarySight,
		sight: [
			sight['Holographic Sight x1.5'],
			sight['The Professional\'s Choice Sight x1.5'],
			sight['Surgeon Sight x1.25'],
			sight['Acough Optic Scope x3.25'],
			sight['Military Red Dot Sight x2'],
			sight['Military Red Dot Sight Special x2'],
			sight['Milspec Scope x2'],
			sight['See More Sight x1.5'],
			sight['Combat Sight x2'],
			sight['Compact Holosight x1.5'],
			sight['Speculator Sight x1.5'],
			sight['Trigonom Sight x1.5'],
			sight['Solar Sight x1.5'],
			sight['JP36 Original Sight x2'],
			sight['Reconnaissance Sight x2'],
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			sight['Z5 Owl Glass Universal Scope x2.5']
		],
		stock: [
			stock['Solid Stock (JP36)'],
			stock['Sniper Stock (JP36)']
		]
	}
}

export default jp36