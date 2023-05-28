import barrelExt, { type BarrelExtModificationsList } from '../../modifications/barrelExt'
import boost, { type BoostModificationsList } from '../../modifications/boost'
import gadget, { type GadgetModificationsList } from '../../modifications/gadget'
import { type Modification } from '../../weaponTypes'

export const lightMachineGunBarrelExt: Modification<BarrelExtModificationsList>[] = [
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

export const lightMachineGunBoost: Modification<BoostModificationsList>[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Team Boost']
]

export const lightMachineGunGadget: Modification<GadgetModificationsList>[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo'],
	gadget['Stealth Laser Module']
]