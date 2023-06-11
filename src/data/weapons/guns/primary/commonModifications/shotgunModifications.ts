import ammunition from '../../modifications/ammunition'
import barrelExt from '../../modifications/barrelExt'
import boost from '../../modifications/boost'
import custom from '../../modifications/custom'
import gadget from '../../modifications/gadget'
import secondarySight from '../../modifications/secondarySight'
import sight from '../../modifications/sight'
import { type Modification } from '../../weaponTypes'

export const shotgunAmmunition: Modification[] = [
	ammunition['Tombstone Slug'],
	ammunition['000 Buckshot'],
	ammunition['HE Round'],
	ammunition.Flechette,
	ammunition['AP Slug'],
	ammunition['Dragon\'s Breath Round']
]

export const shotgunBarrelExt: Modification[] = [
	barrelExt['Shark Teeth Nozzle'],
	barrelExt['The Silent Killer Suppressor'],
	barrelExt['King\'s Crown Compensator'],
	barrelExt['Shh!'],
	barrelExt['Donald\'s Horizontal Leveller']
]

export const shotgunBoost: Modification[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Accuracy (- Shotguns)'],
	boost['Team Boost']
]

export const shotgunCustom: Modification[] = [
	custom['Single Fire'],
	custom['Auto Fire']
]

export const shotgunGadget: Modification[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo'],
	gadget['Stealth Laser Module']
]

export const shotgunSecondarySight: Modification[] = [
	secondarySight['Riktpunkt Magnifier Gadget x6.25'],
	secondarySight['Signature Magnifier Gadget x6.25']
]

export const shotgunSight: Modification[] = [
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