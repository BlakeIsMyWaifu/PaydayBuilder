import barrelExt from '../../modifications/barrelExt'
import boost from '../../modifications/boost'
import custom from '../../modifications/custom'
import gadget from '../../modifications/gadget'
import secondarySight from '../../modifications/secondarySight'
import sight from '../../modifications/sight'
import { type Modification } from '../../weaponTypes'

export const submachineGunBarrelExt: Modification[] = [
	barrelExt['Medium Suppressor'],
	barrelExt['Low Profile Suppressor'],
	barrelExt['Stubby Compensator'],
	barrelExt['Medved R4 Suppressor'],
	barrelExt['The Tank Compensator'],
	barrelExt['Fire Breather Nozzle'],
	barrelExt['The Bigger The Better Suppressor'],
	barrelExt['Competitor\'s Compensator'],
	barrelExt['Funnel of Fun Nozzle'],
	barrelExt['Tactical Compensator'],
	barrelExt['Ported Compensator'],
	barrelExt['Marmon Compensator'],
	barrelExt['Verdunkeln Muzzle Brake'],
	barrelExt['Rami Suppressor'],
	barrelExt['Dourif Muzzle']
]

export const submachineGunBoost: Modification[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Team Boost']
]

export const submachineGunCustom: Modification[] = [
	custom['Single Fire'],
	custom['Auto Fire']
]

export const submachineGunGadget: Modification[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo'],
	gadget['Stealth Laser Module']
]

export const submachineGunGadgetSmall: Modification[] = [
	gadget['Micro Laser'],
	gadget['Combined Module'],
	gadget['Tactical Pistol Light'],
	gadget['Pocket Laser'],
	gadget['Medved R4 Laser Sight'],
	gadget['Polymer Flashlight']
]

export const submachineGunSecondarySight: Modification[] = [
	secondarySight['Riktpunkt Magnifier Gadget x6.25'],
	secondarySight['Signature Magnifier Gadget x6.25']
]

export const submachineGunSight: Modification[] = [
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
	sight['Reconnaissance Sight x2'],
	sight['Compact Tactical Box Sight x2.5'],
	sight['Compact Profile Sight x1.5'],
	sight['Maelstrom Sight x1.5'],
	sight['CASSIAN Elite Score x4.5'],
	sight['Biometric Analyzer x1.25'],
	sight['Advanced Combat Sight x3.25'],
	sight['CASSIAN Sharp Sight x3.25'],
	sight['Z5 Owl Glass Universal Scope x2.5']
]