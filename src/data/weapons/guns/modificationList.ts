import ammunition from './modifications/ammunition'
import barrel from './modifications/barrel'
import barrelExt from './modifications/barrelExt'
import bayonet from './modifications/bayonet'
import bipod from './modifications/bipod'
import boost from './modifications/boost'
import custom from './modifications/custom'
import extra from './modifications/extra'
import foregrip from './modifications/foregrip'
import gadget from './modifications/gadget'
import grip from './modifications/grip'
import lowerReceiver from './modifications/lowerReceiver'
import magazine from './modifications/magazine'
import sight from './modifications/sight'
import slide from './modifications/slide'
import stock from './modifications/stock'
import upperReceiver from './modifications/upperReceiver'
import verticalGrip from './modifications/verticalGrip'
import { ModificationList, ModificationSlot } from './weaponTypes'

const modificationList: Record<ModificationSlot, ModificationList<string>> = {
	ammunition,
	barrel,
	barrelExt,
	bayonet,
	bipod,
	boost,
	custom,
	extra,
	foregrip,
	gadget,
	grip,
	lowerReceiver,
	magazine,
	sight,
	slide,
	stock,
	upperReceiver,
	verticalGrip
}

export default modificationList