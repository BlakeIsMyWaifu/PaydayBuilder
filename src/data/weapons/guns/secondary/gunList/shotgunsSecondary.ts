import { type shotgunSecondaryList } from '../../gunList'
import { type WeaponData } from '../../weaponTypes'
import argosIII from '../shotgun/argosIII'
import claire12G from '../shotgun/claire12G'
import goliath12G from '../shotgun/goliath12G'
import grimm12G from '../shotgun/grimm12G'
import gsps12G from '../shotgun/gsps12G'
import locomotive12G from '../shotgun/locomotive12G'
import streetSweeper from '../shotgun/streetSweeper'
import theJudge from '../shotgun/theJudge'

export type SecondaryShotgun = typeof shotgunSecondaryList[number]

const shotgunsSecondary: Record<SecondaryShotgun, WeaponData> = {
	'The Judge': theJudge,
	'Locomotive 12G': locomotive12G,
	'Goliath 12G': goliath12G,
	'Grimm 12G': grimm12G,
	'Claire 12G': claire12G,
	'Street Sweeper': streetSweeper,
	'GSPS 12G': gsps12G,
	'Argos III': argosIII
}

export default shotgunsSecondary