import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import barrelExt from '../../modifications/barrelExt'
import bolt from '../../modifications/bolt'
import exclusiveSet from '../../modifications/exclusiveSet'
import extra from '../../modifications/extra'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { sniperBoost, sniperGadget, sniperSecondarySight } from '../commonModifications/sniperModifications'

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
		exclusiveSet: [
			exclusiveSet['Dragon Lore'],
			exclusiveSet.Badlands
		],
		extra: [
			extra['Snowbound Shell Rack']
		],
		gadget: sniperGadget,
		grip: [ // TODO grip require stock to be equipped
			grip['Lupa Grip'],
			grip['Fenrir Grip'],
			grip['Raiju Grip']
		],
		magazine: [
			magazine['Akhlut Magazine']
		],
		secondarySight: sniperSecondarySight,
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
			sight['Theia Magnified Scope x10'],
			sight['Box Buddy Sight x10'],
			sight['Reconnaissance Sight x2'],
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			sight['Trace Optic x6.25'],
			sight['Keelut Ironsights x1.25'],
			sight['Z5 Owl Glass Universal Scope x2.5'],
			sight['Tuunbaq Scope x4.5 / x10']
		],
		stock: [
			stock['Moonlight Stock']
		]
	}
}

export default amaroq900