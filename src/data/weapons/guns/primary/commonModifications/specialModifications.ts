import boost, { BoostModificationsList } from '../../modifications/boost'
import gadget, { GadgetModificationsList } from '../../modifications/gadget'
import sight, { SightModificationsList } from '../../modifications/sight'
import { Modification } from '../../weaponTypes'

export const specialBoost: Modification<BoostModificationsList>[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Team Boost']
]

export const specialBoostTotalAmmo: Modification<BoostModificationsList>[] = [
	...specialBoost,
	boost['Total Ammo (Main)']
]

export const specialGadget: Modification<GadgetModificationsList>[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo'],
	gadget['Stealth Laser Module']
]

export const specialSight: Modification<SightModificationsList>[] = [
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
	sight['Acough Optic Scope']
]