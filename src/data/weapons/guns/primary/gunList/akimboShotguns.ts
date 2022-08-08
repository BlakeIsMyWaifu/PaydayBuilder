import { WeaponData } from '../../weaponTypes'
import akimboGoliath12G from '../akimboShotgun/akimboGoliath12G'
import akimboJudge from '../akimboShotgun/akimboJudge'
import brothersGrimm12G from '../akimboShotgun/brothersGrimm12G'

export type AkimboShotgunsList =
	'Akimbo Goliath 12G' |
	'Brothers Grimm 12G' |
	'Akimbo Judge'

const akimboShotguns: Record<AkimboShotgunsList, WeaponData> = {
	'Akimbo Goliath 12G': akimboGoliath12G,
	'Brothers Grimm 12G': brothersGrimm12G,
	'Akimbo Judge': akimboJudge
}

export default akimboShotguns