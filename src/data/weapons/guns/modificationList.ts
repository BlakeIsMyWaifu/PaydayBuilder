import ammunition from './modifications/ammunition'
import barrel from './modifications/barrel'
import barrelExt from './modifications/barrelExt'
import bayonet from './modifications/bayonet'
import bipod from './modifications/bipod'
import bolt from './modifications/bolt'
import boost from './modifications/boost'
import chargingHandle from './modifications/chargingHandle'
import custom from './modifications/custom'
import exclusiveSet from './modifications/exclusiveSet'
import extra from './modifications/extra'
import foregrip from './modifications/foregrip'
import gadget from './modifications/gadget'
import grip from './modifications/grip'
import lowerReceiver from './modifications/lowerReceiver'
import magazine from './modifications/magazine'
import receiver from './modifications/receiver'
import secondarySight from './modifications/secondarySight'
import sight from './modifications/sight'
import slide from './modifications/slide'
import stock from './modifications/stock'
import underbarrel from './modifications/underbarrel'
import upperReceiver from './modifications/upperReceiver'
import verticalGrip from './modifications/verticalGrip'
import { type ModIcon, type ModificationList, type ModificationSlot } from './weaponTypes'

export const modifications: Record<ModificationSlot, ModificationList> = {
	ammunition,
	barrel,
	barrelExt,
	bayonet,
	bipod,
	bolt,
	boost,
	chargingHandle,
	custom,
	exclusiveSet,
	extra,
	foregrip,
	gadget,
	grip,
	lowerReceiver,
	magazine,
	receiver,
	secondarySight,
	sight,
	slide,
	stock,
	underbarrel,
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
	chargingHandle: 'inv_mod_custom',
	custom: 'inv_mod_custom',
	exclusiveSet: 'inv_mod_ammo_explosive', // TODO get real icon
	extra: 'inv_mod_extra',
	foregrip: 'inv_mod_foregrip',
	gadget: 'inv_mod_flashlight',
	grip: 'inv_mod_grip',
	lowerReceiver: 'inv_mod_lower_receiver',
	magazine: 'inv_mod_magazine',
	receiver: 'inv_mod_receiver',
	secondarySight: 'inv_mod_second_sight',
	sight: 'inv_mod_scope',
	slide: 'inv_mod_slide',
	stock: 'inv_mod_stock',
	underbarrel: 'inv_mod_ammo_custom',
	upperReceiver: 'inv_mod_upper_receiver',
	verticalGrip: 'inv_mod_vertical_grip'
}

export default modifications