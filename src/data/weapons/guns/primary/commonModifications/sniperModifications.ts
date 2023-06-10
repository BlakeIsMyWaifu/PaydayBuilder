import boost from '../../modifications/boost'
import gadget from '../../modifications/gadget'
import secondarySight from '../../modifications/secondarySight'
import sight from '../../modifications/sight'
import { type Modification } from '../../weaponTypes'

export const sniperBoost: Modification[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Team Boost'],
	boost['Total Ammo']
]

export const sniperGadget: Modification[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo'],
	gadget['Stealth Laser Module']
]

export const sniperSecondarySight: Modification[] = [
	secondarySight['Riktpunkt 45 degree Sight'],
	secondarySight['Riktpunkt Magnifier Gadget x6.25'],
	secondarySight['Angled Sight'],
	secondarySight['45 degree red-dot sight'],
	secondarySight['45 Degree Ironsights'],
	secondarySight['Signature Magnifier Gadget x6.25']
]

export const sniperSight: Modification[] = [
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
	sight['CASSIAN Iron Sights x1'],
	sight['Compact Profile Sight x1.5'],
	sight['Maelstrom Sight x1.5'],
	sight['CASSIAN Elite Score x4.5'],
	sight['Biometric Analyzer x1.25'],
	sight['Advanced Combat Sight x3.25'],
	sight['CASSIAN Sharp Sight x3.25'],
	sight['Trace Optic x6.25'],
	sight['Z5 Owl Glass Universal Scope x2.5'],
	sight['Tuunbaq Scope x4.5 / x10']
]