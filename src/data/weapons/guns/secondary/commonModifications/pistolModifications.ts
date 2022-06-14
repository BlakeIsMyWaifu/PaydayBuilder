import barrelExt, { BarrelExtModificationsList } from '../../modifications/barrelExt'
import boost, { BoostModificationsList } from '../../modifications/boost'
import gadget, { GadgetModificationsList } from '../../modifications/gadget'
import sight, { SightModificationsList } from '../../modifications/sight'
import { Modification } from '../../weaponTypes'

export const pistolBarrelExt: Modification<BarrelExtModificationsList>[] = [
	barrelExt['IPSC Compensator'],
	barrelExt['Facepunch Compensator'],
	barrelExt['Flash Hider'],
	barrelExt['Roctec Suppressor'],
	barrelExt['Champion\'s Suppressor'],
	barrelExt['Standard Issue Suppressor'],
	barrelExt['Size Doesn\'t Matter Suppressor'],
	barrelExt['Monolith Suppressor'],
	barrelExt['Asepsis Suppressor'],
	barrelExt['Budget Suppressor'],
	barrelExt['Jungle Ninja Suppressor'],
	barrelExt['Hurricane Compensator']
]

export const pistolBoost: Modification<BoostModificationsList>[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Team Boost']
]

export const pistolGadget: Modification<GadgetModificationsList>[] = [
	gadget['Tactical Pistol Light'],
	gadget['Pocket Laser'],
	gadget['Micro Laser'],
	gadget['Combined Module'],
	gadget['Polymer Flashlight']
]

export const pistolSight: Modification<SightModificationsList>[] = [
	sight['Pistol Red Dot Sight'],
	sight['SKOLD Micro Reflex Sight'],
	sight['Riktpunkt Holosight']
]