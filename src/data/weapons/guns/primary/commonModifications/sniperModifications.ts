import boost, { type BoostModificationsList } from '../../modifications/boost'
import gadget, { type GadgetModificationsList } from '../../modifications/gadget'
import sight, { type SightModificationsList } from '../../modifications/sight'
import { type Modification } from '../../weaponTypes'

export const sniperBoost: Modification<BoostModificationsList>[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Team Boost'],
	boost['Total Ammo (Main)']
]

export const sniperGadgetMagnifier: Modification<GadgetModificationsList>[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo'],
	gadget['Stealth Laser Module'],
	gadget['Angled Sight'],
	gadget['Riktpunkt 45 degree Sight'],
	gadget['45 degree red-dot sight'],
	gadget['45 Degree Ironsights'],
	gadget['Riktpunkt Magnifier Gadget'],
	gadget['Signature Magnifier Gadget']
]

export const sniperSight: Modification<SightModificationsList>[] = [
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
	sight['Box Buddy Sight']
]