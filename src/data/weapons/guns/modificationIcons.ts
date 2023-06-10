import { type ModIcon, type ModificationSlot } from './weaponTypes'

const modificationIcons = {
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
} as const satisfies Record<ModificationSlot, ModIcon>

export default modificationIcons