import barrelExt, { BarrelExtModificationsList } from '../../modifications/barrelExt'
import boost, { BoostModificationsList } from '../../modifications/boost'
import custom, { CustomModificationsList } from '../../modifications/custom'
import gadget, { GadgetModificationsList } from '../../modifications/gadget'
import sight, { SightModificationsList } from '../../modifications/sight'
import { Modification } from '../../weaponTypes'

export const assaultRifleBarrelExt: Modification<BarrelExtModificationsList>[] = [
	barrelExt['Low Profile Suppressor'],
	barrelExt['Medium Suppressor'],
	barrelExt['The Bigger The Better Suppressor'],
	barrelExt['Stubby Compensator'],
	barrelExt['The Tank Compensator'],
	barrelExt['Fire Breather Nozzle'],
	barrelExt['Tactical Compensator'],
	barrelExt['Competitor\'s Compensator'],
	barrelExt['Funnel of Fun Nozzle'],
	barrelExt['Ported Compensator']
]

export const assaultRifleBoost: Modification<BoostModificationsList>[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Team Boost']
]

export const assaultRifleCustom: Modification<CustomModificationsList>[] = [
	custom['Single Fire'],
	custom['Auto Fire']
]

export const assaultRifleGadget: Modification<GadgetModificationsList>[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo'],
	gadget['Stealth Laser Module'],
	gadget['Riktpunkt 45 degree Sight'],
	gadget['45 degree red-dot sight'],
	gadget['45 Degree Ironsights']
]

export const assaultRifleGadgetMagnifier: Modification<GadgetModificationsList>[] = [
	...assaultRifleGadget,
	gadget['Riktpunkt Magnifier Gadget'],
	gadget['Signature Magnifier Gadget']
]

export const assaultRifleSight: Modification<SightModificationsList>[] = [
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
	sight['Reconnaissance Sight']
]