import ammunition from '../../modifications/ammunition'
import barrelExt from '../../modifications/barrelExt'
import boost from '../../modifications/boost'
import gadget from '../../modifications/gadget'
import { type Modification } from '../../weaponTypes'

export const akimboShotgunAmmunition: Modification[] = [
	ammunition['Tombstone Slug'],
	ammunition['000 Buckshot'],
	ammunition['HE Round'],
	ammunition.Flechette,
	ammunition['AP Slug'],
	ammunition['Dragon\'s Breath Round']
]

export const akimboShotgunBarrelExt: Modification[] = [
	barrelExt['Shark Teeth Nozzle'],
	barrelExt['The Silent Killer Suppressor'],
	barrelExt['King\'s Crown Compensator'],
	barrelExt['Shh!'],
	barrelExt['Donald\'s Horizontal Leveller']
]

export const akimboShotgunBoost: Modification[] = [
	boost.Concealment,
	boost.Stability,
	boost.Accuracy,
	boost['Team Boost']
]

export const akimboShotgunGadget: Modification[] = [
	gadget['Assault Light'],
	gadget['Tactical Laser Module'],
	gadget['Compact Laser Module'],
	gadget['Military Laser Module'],
	gadget['LED Combo'],
	gadget['Stealth Laser Module']
]