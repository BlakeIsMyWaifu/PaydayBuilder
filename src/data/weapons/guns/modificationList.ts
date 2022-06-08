import ammunition from './modifications/ammunition'
import barrel from './modifications/barrel'
import barrelExt from './modifications/barrelExt'
import bayonet from './modifications/bayonet'
import bipod from './modifications/bipod'
import bolt from './modifications/bolt'
import boost from './modifications/boost'
import custom from './modifications/custom'
import extra from './modifications/extra'
import foregrip from './modifications/foregrip'
import gadget from './modifications/gadget'
import grip from './modifications/grip'
import lowerReceiver from './modifications/lowerReceiver'
import magazine from './modifications/magazine'
import receiver from './modifications/receiver'
import sight from './modifications/sight'
import slide from './modifications/slide'
import stock from './modifications/stock'
import upperReceiver from './modifications/upperReceiver'
import verticalGrip from './modifications/verticalGrip'
import { ModIcon, ModificationList, ModificationSlot } from './weaponTypes'

export const modificationList: Record<ModificationSlot, ModificationList<string>> = {
	ammunition,
	barrel,
	barrelExt,
	bayonet,
	bipod,
	bolt,
	boost,
	custom,
	extra,
	foregrip,
	gadget,
	grip,
	lowerReceiver,
	magazine,
	sight,
	receiver,
	slide,
	stock,
	upperReceiver,
	verticalGrip
}

export const modificationIcons: Record<ModificationSlot, ModIcon> = {
	ammunition: 'inv_mod_ammo_custom',
	barrel: 'inv_mod_barrel',
	barrelExt: 'inv_mod_barrel_ext',
	bayonet: 'inv_mod_bayonet',
	bipod: 'inv_mod_bipod',
	bolt: 'inv_mod_bolt',
	boost: 'inv_mod_bonus_stats',
	custom: 'inv_mod_custom',
	extra: 'inv_mod_extra',
	foregrip: 'inv_mod_foregrip',
	gadget: 'inv_mod_flashlight',
	grip: 'inv_mod_grip',
	lowerReceiver: 'inv_mod_lower_receiver',
	magazine: 'inv_mod_magazine',
	receiver: 'inv_mod_receiver',
	sight: 'inv_mod_scope',
	slide: 'inv_mod_slide',
	stock: 'inv_mod_stock',
	upperReceiver: 'inv_mod_upper_receiver',
	verticalGrip: 'inv_mod_vertical_grip'
}

export default modificationList