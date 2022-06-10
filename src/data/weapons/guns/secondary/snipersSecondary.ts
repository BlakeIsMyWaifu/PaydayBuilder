import content from 'data/source/downloadableContent'

import barrel from '../modifications/barrel'
import bolt from '../modifications/bolt'
import boost from '../modifications/boost'
import gadget from '../modifications/gadget'
import magazine from '../modifications/magazine'
import sight from '../modifications/sight'
import stock from '../modifications/stock'
import { WeaponData } from '../weaponTypes'

export type SecondarySniperList =
	'Pronghorn Sniper Rifle'

const snipers: Record<SecondarySniperList, WeaponData> = {
	'Pronghorn Sniper Rifle': {
		name: 'Pronghorn Sniper Rifle',
		image: 'scout',
		source: content['McShay Weapon Pack'],
		inventorySlot: 'secondary',
		reputation: 19,
		weaponType: 'Sniper',
		firingMode: 'Bolt action',
		cost: 334400,
		stats: {
			magazine: 5,
			totalAmmo: 20,
			rateOfFire: 60,
			damage: 246,
			accuracy: 72,
			stability: 12,
			concealment: 18,
			threat: 28,
			reload: 5.3
		},
		extraStats: {
			tacticalReload: 3.4,
			equipDelays: [0.45, 0.4],
			ammoPickup: [0.7, 1.0],
			recoilHorizontal: [-0.81, 0.81],
			recoilVertical: [8.1, 12.96],
			spread: 1.68,
			damageModifier: [1.0, 1.1]
		},
		modifications: {
			barrel: [
				barrel['Longshot Suppressor']
			],
			bolt: [
				bolt['Quickdraw Speedbolt']
			],
			boost: [
				boost.Concealment,
				boost.Stability,
				boost.Accuracy,
				boost['Team Boost'],
				boost['Total Ammo (Main)']
			],
			gadget: [
				gadget['Assault Light'],
				gadget['Tactical Laser Module'],
				gadget['Compact Laser Module'],
				gadget['Military Laser Module'],
				gadget['LED Combo'],
				gadget['Angled Sight'],
				gadget['Riktpunkt 45 degree Sight'],
				gadget['45 degree red-dot sight'],
				gadget['45 Degree Ironsights'],
				gadget['Riktpunkt Magnifier Gadget'],
				gadget['Signature Magnifier Gadget']
			],
			magazine: [
				magazine['Standoff Extended Magazine']
			],
			sight: [
				sight['The Professional\'s Choice Sight'],
				sight['Surgeon Sight'],
				sight['See More Sight'],
				sight['Combat Sight'],
				sight['Speculator Sight'],
				sight['Trigonom Sight'],
				sight['Holographic Sight'],
				sight['Compact Holosight'],
				sight['Solar Sight'],
				sight['Military Red Dot Sight (1)'],
				sight['Military Red Dot Sight (2)'],
				sight['Milspec Scope'],
				sight['Acough Optic Scope'],
				sight['Compact Profile Sight'],
				sight['Maelstrom Sight'],
				sight['Advanced Combat Sight'],
				sight['Reconnaissance Sight'],
				sight['Theia Magnified Scope'],
				sight['Box Buddy Sight'],
				sight['Iron Sights']
			],
			stock: [
				stock['Stakeout Stock (Pronghorn)'],
				stock['Marksman Stock (Pronghorn)']
			]
		}
	}
}

export default snipers