import { type WeaponData } from '../../weaponTypes'
import akimboGoliath12G from '../akimboShotgun/akimboGoliath12G'
import akimboJudge from '../akimboShotgun/akimboJudge'
import akimboVd12 from '../akimboShotgun/akimboVd12'
import brothersGrimm12G from '../akimboShotgun/brothersGrimm12G'

export type AkimboShotgunsList =
	| 'Akimbo Goliath 12G'
	| 'Brothers Grimm 12G'
	| 'Akimbo Judge'
	| 'Akimbo VD-12'

const akimboShotguns: Record<AkimboShotgunsList, WeaponData> = {
	'Akimbo Goliath 12G': akimboGoliath12G,
	'Brothers Grimm 12G': brothersGrimm12G,
	'Akimbo Judge': akimboJudge,
	'Akimbo VD-12': akimboVd12
}

export default akimboShotguns