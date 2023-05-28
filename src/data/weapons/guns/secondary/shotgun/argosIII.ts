import content from 'data/source/downloadableContent'

import barrelExt from '../../modifications/barrelExt'
import exclusiveSet from '../../modifications/exclusiveSet'
import extra from '../../modifications/extra'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBoost, shotgunGadget } from '../commonModifications/shotgunModifications'

const argosIII: WeaponData = {
	name: 'Argos III',
	image: 'ultima',
	source: content['Jiu Feng Smuggler Pack 4'],
	inventorySlot: 'secondary',
	reputation: 34,
	weaponType: 'Shotgun',
	firingMode: 'Semi-Automatic',
	cost: 618400,
	stats: {
		magazine: 7,
		totalAmmo: 35,
		rateOfFire: 270,
		damage: 110,
		accuracy: 48,
		stability: 40,
		concealment: 24,
		threat: 28,
		reload: 3.0
	},
	extraStats: {
		tacticalReload: [3.4, 0.57],
		equipDelays: [0.6, 0.6],
		ammoPickup: [0.88, 1.23],
		recoilHorizontal: [-0.4, 0.4],
		recoilVertical: [3.8, 4.0],
		spread: 3.12,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrelExt: [
			barrelExt['Shark Teeth Nozzle'],
			barrelExt['The Silent Killer Suppressor'],
			barrelExt['King\'s Crown Compensator'],
			barrelExt['Shh!'],
			barrelExt['Donald\'s Horizontal Leveller'],
			barrelExt['Try-Core Compensator']
		],
		boost: shotgunBoost,
		exclusiveSet: [
			exclusiveSet['Triple Tech Threat']
		],
		extra: [
			extra['ShellSwitch M8 Ammo Cache']
		],
		gadget: shotgunGadget,
		sight: [
			sight['Holographic Sight x1.5'],
			sight['The Professional\'s Choice Sight x1.5'],
			sight['Surgeon Sight x1.25'],
			sight['Military Red Dot Sight x2'],
			sight['Military Red Dot Sight Special x2'],
			sight['Milspec Scope x2'],
			sight['See More Sight x1.5'],
			sight['Combat Sight x2'],
			sight['Compact Holosight x1.5'],
			sight['Speculator Sight x1.5'],
			sight['Trigonom Sight x1.5'],
			sight['Solar Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['CASSIAN Sharp Sight x3.25']
		],
		stock: [
			stock['Flak Frame Null Stock']
		]
	}
}

export default argosIII