import { type WeaponData } from '../../weaponTypes'
import argosIII from '../shotgun/argosIII'
import claire12G from '../shotgun/claire12G'
import goliath12G from '../shotgun/goliath12G'
import grimm12G from '../shotgun/grimm12G'
import gsps12G from '../shotgun/gsps12G'
import locomotive12G from '../shotgun/locomotive12G'
import streetSweeper from '../shotgun/streetSweeper'
import theJudge from '../shotgun/theJudge'

export type SecondaryShotgunList =
	| 'Locomotive 12G'
	| 'GSPS 12G'
	| 'Goliath 12G'
	| 'Grimm 12G'
	| 'Street Sweeper'
	| 'The Judge'
	| 'Claire 12G'
	| 'Argos III'

const shotguns: Record<SecondaryShotgunList, WeaponData> = {
	'Locomotive 12G': locomotive12G,
	'GSPS 12G': gsps12G,
	'Goliath 12G': goliath12G,
	'Grimm 12G': grimm12G,
	'Street Sweeper': streetSweeper,
	'The Judge': theJudge,
	'Claire 12G': claire12G,
	'Argos III': argosIII
}

export default shotguns