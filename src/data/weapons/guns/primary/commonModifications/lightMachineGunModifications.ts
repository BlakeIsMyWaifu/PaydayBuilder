import barrelExt from '../../modifications/barrelExt'
import boost from '../../modifications/boost'
import gadget from '../../modifications/gadget'
import { type Modification } from '../../weaponTypes'

export const lightMachineGunBarrelExt: Modification[] = [
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
	barrelExt['Rami Suppressor'],
	barrelExt['Dourif Muzzle']
]

export const lightMachineGunBoost: Modification[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Team Boost']
]

export const lightMachineGunGadget: Modification[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo'],
	gadget['Stealth Laser Module']
]