import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import bolt from '../../modifications/bolt'
import exclusiveSet from '../../modifications/exclusiveSet'
import grip from '../../modifications/grip'
import lowerReceiver from '../../modifications/lowerReceiver'
import magazine from '../../modifications/magazine'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBoost, assaultRifleGadget } from '../commonModifications/assaultRifleModifications'

const rodion3B: WeaponData = {
	name: 'Rodion 3B',
	image: 'tkb',
	source: content['McShay Weapon Pack 3'],
	inventorySlot: 'primary',
	reputation: 50,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 920e3,
	stats: {
		magazine: 90,
		totalAmmo: 180,
		rateOfFire: 800,
		damage: 60,
		accuracy: 60,
		stability: 36,
		concealment: 16,
		threat: 24,
		reload: 3.5
	},
	extraStats: {
		tacticalReload: 2.5,
		equipDelays: [1.0, 0.5],
		ammoPickup: [5.4, 8.1],
		recoilHorizontal: [-2.1, 2.1],
		recoilVertical: [1.26, 1.68],
		spread: 2.4,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrelExt: [
			barrelExt['Medium Suppressor'],
			barrelExt['Low Profile Suppressor'],
			barrelExt['Stubby Compensator'],
			barrelExt['The Tank Compensator'],
			barrelExt['Fire Breather Nozzle'],
			barrelExt['Competitor\'s Compensator'],
			barrelExt['Funnel of Fun Nozzle'],
			barrelExt['Tactical Compensator'],
			barrelExt['Ported Compensator'],
			barrelExt['Taktika Muzzle Brake'],
			barrelExt['Marmon Compensator'],
			barrelExt['Verdunkeln Muzzle Brake'],
			barrelExt['KS12-A Burst Muzzle'],
			barrelExt['Fyodor Muzzle Brake'],
			barrelExt['Federation Suppressor'],
			barrelExt['Rami Suppressor'],
			barrelExt['Dourif Muzzle']
		],
		bolt: [
			bolt['Taktika Deluxe Charging Handle']
		],
		boost: assaultRifleBoost,
		exclusiveSet: [
			exclusiveSet.Strelok
		],
		gadget: assaultRifleGadget,
		grip: [
			grip['AK Rubber Grip'],
			grip['AK Plastic Grip'],
			grip['AK Wood Grip'],
			grip['Aluminum Grip'],
			grip['Verge AK Grip'],
			grip['Ergonomic AK Grip'],
			grip['Ultimatum AK Grip']
		],
		lowerReceiver: [
			lowerReceiver['Arkady Ammo Pouch']
		],
		magazine: [
			magazine['Siberian Speed Pull Magazine']
		],
		sight: [
			sight['Holographic Sight x1.5'],
			sight['The Professional\'s Choice Sight x1.5'],
			sight['Surgeon Sight x1.25'],
			sight['See More Sight x1.5'],
			sight['Combat Sight x2'],
			sight['Compact Holosight x1.5'],
			sight['Speculator Sight x1.5'],
			sight['Trigonom Sight x1.5'],
			sight['Solar Sight x1.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Svidetel Iron Sight'],
			sight['Angular Rail']
		],
		stock: [
			stock['Shoulder Pad']
		]
	}
}

export default rodion3B