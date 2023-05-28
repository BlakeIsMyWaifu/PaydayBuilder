import ammunition, { type AmmunitionModificationsList } from '../../modifications/ammunition'
import barrelExt, { type BarrelExtModificationsList } from '../../modifications/barrelExt'
import boost, { type BoostModificationsList } from '../../modifications/boost'
import gadget, { type GadgetModificationsList } from '../../modifications/gadget'
import { type Modification } from '../../weaponTypes'

export const akimboShotgunAmmunition: Modification<AmmunitionModificationsList>[] = [
	ammunition['Tombstone Slug'],
	ammunition['000 Buckshot'],
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
	boost['Team Boost']
]

export const akimboShotgunGadget: Modification<GadgetModificationsList>[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo'],
	gadget['Stealth Laser Module']
]