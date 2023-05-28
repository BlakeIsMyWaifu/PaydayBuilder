import barrelExt, { type BarrelExtModificationsList } from '../../modifications/barrelExt'
import boost, { type BoostModificationsList } from '../../modifications/boost'
import custom, { type CustomModificationsList } from '../../modifications/custom'
import gadget, { type GadgetModificationsList } from '../../modifications/gadget'
import secondarySight, { type SecondarySightList } from '../../modifications/secondarySight'
import sight, { type SightModificationsList } from '../../modifications/sight'
import { type Modification } from '../../weaponTypes'

export const submachineGunBarrelExt: Modification<BarrelExtModificationsList>[] = [
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

export const submachineGunBoost: Modification<BoostModificationsList>[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Team Boost']
]

export const submachineGunCustom: Modification<CustomModificationsList>[] = [
	custom['Single Fire'],
	custom['Auto Fire']
]

export const submachineGunGadget: Modification<GadgetModificationsList>[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo'],
	gadget['Stealth Laser Module']
]

export const submachineGunGadgetSmall: Modification<GadgetModificationsList>[] = [
	gadget['Micro Laser'],
	gadget['Combined Module'],
	gadget['Tactical Pistol Light'],
	gadget['Pocket Laser'],
	gadget['Medved R4 Laser Sight'],
	gadget['Polymer Flashlight']
]

export const submachineGunSecondarySight: Modification<SecondarySightList>[] = [
	secondarySight['Riktpunkt Magnifier Gadget x6.25'],
	secondarySight['Signature Magnifier Gadget x6.25']
]

export const submachineGunSight: Modification<SightModificationsList>[] = [
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