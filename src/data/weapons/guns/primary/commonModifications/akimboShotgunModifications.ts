import ammunition, { AmmunitionModificationsList } from '../../modifications/ammunition'
import barrelExt, { BarrelExtModificationsList } from '../../modifications/barrelExt'
import boost, { BoostModificationsList } from '../../modifications/boost'
import gadget, { GadgetModificationsList } from '../../modifications/gadget'
import { Modification } from '../../weaponTypes'

export const akimboShotgunAmmunition: Modification<AmmunitionModificationsList>[] = [
	ammunition['000 Buckshot (Community)'],
	ammunition['000 Buckshot (DLC)'],
	ammunition['HE Round'],
	ammunition.Flechette,
	ammunition['AP Slug'],
	ammunition['Dragon\'s Breath Round']
]

export const akimboShotgunBarrelExt: Modification<BarrelExtModificationsList>[] = [
	barrelExt['Shark Teeth Nozzle'],
	barrelExt['The Silent Killer Suppressor'],
	barrelExt['King\'s Crown Compensator'],
	barrelExt['Shh!'],
	barrelExt['Donald\'s Horizontal Leveller']
]

export const akimboShotgunBoost: Modification<BoostModificationsList>[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Accuracy (- Shotguns)'],
	boost['Team Boost']
]

export const akimboShotgunGadget: Modification<GadgetModificationsList>[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo']
]