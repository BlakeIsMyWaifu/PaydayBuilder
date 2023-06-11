import barrelExt from '../../modifications/barrelExt'
import boost from '../../modifications/boost'
import gadget from '../../modifications/gadget'
import sight from '../../modifications/sight'
import { type Modification } from '../../weaponTypes'

export const pistolBarrelExt: Modification[] = [
	barrelExt['IPSC Compensator'],
	barrelExt['Roctec Suppressor'],
	barrelExt['Champion\'s Suppressor'],
	barrelExt['Facepunch Compensator'],
	barrelExt['Standard Issue Suppressor'],
	barrelExt['Medved R4 Suppressor'],
	barrelExt['Size Doesn\'t Matter Suppressor'],
	barrelExt['Monolith Suppressor'],
	barrelExt['Asepsis Suppressor'],
	barrelExt['Flash Hider'],
	barrelExt['Budget Suppressor'],
	barrelExt['Jungle Ninja Suppressor'],
	barrelExt['Hurricane Compensator']
]

export const pistolBoost: Modification[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Team Boost']
]

export const pistolBoostConcealment: Modification[] = [
	boost.Concealment,
	boost['Concealment (Extra)'],
	boost.Stability,
	boost.Accuracy,
	boost['Team Boost']
]

export const pistolGadget: Modification[] = [
	gadget['Micro Laser'],
	gadget['Combined Module'],
	gadget['Tactical Pistol Light'],
	gadget['Pocket Laser'],
	gadget['Medved R4 Laser Sight'],
	gadget['Polymer Flashlight']
]

export const pistolSight: Modification[] = [
	sight['Pistol Red Dot Sight x1.5'],
	sight['Riktpunkt Holosight x1.5'],
	sight['SKOLD Micro Reflex Sight x1.5']
]