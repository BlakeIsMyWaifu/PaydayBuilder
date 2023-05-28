import barrelExt, { type BarrelExtModificationsList } from '../../modifications/barrelExt'
import boost, { type BoostModificationsList } from '../../modifications/boost'
import custom, { type CustomModificationsList } from '../../modifications/custom'
import gadget, { type GadgetModificationsList } from '../../modifications/gadget'
import secondarySight, { type SecondarySightList } from '../../modifications/secondarySight'
import sight, { type SightModificationsList } from '../../modifications/sight'
import { type Modification } from '../../weaponTypes'

export const assaultRifleBarrelExt: Modification<BarrelExtModificationsList>[] = [
	barrelExt['Medium Suppressor'],
	barrelExt['Low Profile Suppressor'],
	barrelExt['Stubby Compensator'],
	barrelExt['The Tank Compensator'],
	barrelExt['Fire Breather Nozzle'],
	barrelExt['The Bigger The Better Suppressor'],
	barrelExt['Competitor\'s Compensator'],
	barrelExt['Funnel of Fun Nozzle'],
	barrelExt['Tactical Compensator'],
	barrelExt['Ported Compensator'],
	barrelExt['Marmon Compensator'],
	barrelExt['Verdunkeln Muzzle Brake'],
	barrelExt['KS12-A Burst Muzzle'],
	barrelExt['KS12-S Long Silencer'],
	barrelExt['Rami Suppressor'],
	barrelExt['Dourif Muzzle']
]

export const assaultRifleBarrelExtPlus: Modification<BarrelExtModificationsList>[] = [
	barrelExt['Medium Suppressor'],
	barrelExt['Low Profile Suppressor'],
	barrelExt['Stubby Compensator'],
	barrelExt['The Tank Compensator'],
	barrelExt['Fire Breather Nozzle'],
	barrelExt['The Bigger The Better Suppressor'],
	barrelExt['Competitor\'s Compensator'],
	barrelExt['Funnel of Fun Nozzle'],
	barrelExt['Tactical Compensator'],
	barrelExt['PBS Suppressor'],
	barrelExt['Ported Compensator'],
	barrelExt['Taktika Muzzle Brake'],
	barrelExt['Marmon Compensator'],
	barrelExt['Verdunkeln Muzzle Brake'],
	barrelExt['KS12-A Burst Muzzle'],
	barrelExt['KS12-S Long Silencer'],
	barrelExt['Fyodor Muzzle Brake'],
	barrelExt['Federation Suppressor'],
	barrelExt['Rami Suppressor'],
	barrelExt['Dourif Muzzle']
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
	gadget['Stealth Laser Module']
]

export const assaultRifleSecondarySight: Modification<SecondarySightList>[] = [
	secondarySight['Riktpunkt 45 degree Sight'],
	secondarySight['Riktpunkt Magnifier Gadget x6.25'],
	secondarySight['45 degree red-dot sight'],
	secondarySight['45 Degree Ironsights'],
	secondarySight['Signature Magnifier Gadget x6.25']
]

export const assaultRifleSight: Modification<SightModificationsList>[] = [
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