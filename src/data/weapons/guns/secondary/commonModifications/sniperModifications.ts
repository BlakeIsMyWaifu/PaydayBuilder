import boost, { type BoostModificationsList } from '../../modifications/boost'
import gadget, { type GadgetModificationsList } from '../../modifications/gadget'
import secondarySight, { type SecondarySightList } from '../../modifications/secondarySight'
import { type Modification } from '../../weaponTypes'

export const sniperBoost: Modification<BoostModificationsList>[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Team Boost'],
	boost['Total Ammo (Main)']
]

export const sniperGadget: Modification<GadgetModificationsList>[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo'],
	gadget['Stealth Laser Module']
]

export const sniperSecondarySight: Modification<SecondarySightList>[] = [
	secondarySight['Riktpunkt 45 degree Sight'],
	secondarySight['Riktpunkt Magnifier Gadget x6.25'],
	secondarySight['Angled Sight'],
	secondarySight['45 degree red-dot sight'],
	secondarySight['45 Degree Ironsights'],
	secondarySight['Signature Magnifier Gadget x6.25']
]