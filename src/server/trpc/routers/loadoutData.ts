import { z } from 'zod'
import { publicProcedure } from '../procedure'
import { createTRPCRouter } from '../trpc'
import findMask from 'utils/findMask'
import characters from 'data/character/characters'
import armours from 'data/character/armours'
import equipments from 'data/character/equipment'
import findWeapon from 'utils/findWeapon'
import { type WeaponFind } from 'data/weapons/guns/weaponTypes'
import throwables, { type ThrowableList } from 'data/weapons/throwables'
import melees from 'data/weapons/melees'
import perkDecks, { type PerkDeckList } from 'data/abilities/perks'

export const loadoutDataRouter = createTRPCRouter({
	getMask: publicProcedure
		.input(z.string())
		.query(({ input }) => findMask(input)),
	getCharacter: publicProcedure
		.input(z.string())
		.query(({ input }) => characters[input] ?? characters['Dallas']),
	getArmour: publicProcedure
		.input(z.string())
		.query(({ input }) => armours[input] ?? armours['Two-Piece Suit']),
	getEquipment: publicProcedure
		.input(z.object({
			primary: z.string(),
			secondary: z.string().nullable()
		}))
		.query(({ input }) => ({
			primary: equipments[input.primary],
			secondary: input.secondary ? equipments[input.secondary] : null
		}
		)),
	getWeapon: publicProcedure
		.input(z.object({
			slot: z.string(),
			type: z.string(),
			name: z.string()
		}))
		.query(({ input }) => {
			return findWeapon(input as WeaponFind)
		}),
	getThrowable: publicProcedure
		.input(z.string())
		.query(({ input }) => throwables[input as ThrowableList] ?? throwables['Frag Grenade']),
	getMelee: publicProcedure
		.input(z.string())
		.query(({ input }) => melees[input] ?? melees['Weapon Butt']),
	getPerkDeck: publicProcedure
		.input(z.string())
		.query(({ input }) => {
			const perkDeck = perkDecks[input as PerkDeckList] ?? perkDecks['Crew Chief']
			const index = Object.keys(perkDecks).indexOf(perkDeck.name)
			return {
				...perkDeck,
				index
			}
		})
})