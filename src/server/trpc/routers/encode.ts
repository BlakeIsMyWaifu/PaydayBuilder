import { type PerkDeckList } from 'data/abilities/perks'
import { type MaskList } from 'data/character/masks'
import { type Weapon } from 'data/weapons/guns/weaponTypes'
import { type ThrowableList } from 'data/weapons/throwables'
import { type AbilityStateSlice } from 'state/useAbilitiesStore'
import { encodeArmour, encodeArmoury, encodeCharacter, encodeCopycat, encodeCrewManagement,encodeEquipment, encodeInfamy, encodeMask, encodeMelee, encodePerkDeck, encodeSkills, encodeThrowable, type EncodeWeapons, encodeWeapons } from 'utils/encodeBuild'
import { z } from 'zod'

import { publicProcedure } from '../procedure'
import { createTRPCRouter } from '../trpc'

const armoury = z.record(z.object({
	id: z.number(),
	weaponFind: z.object({
		name: z.string(),
		type: z.string(),
		slot: z.string()
	}),
	modifications: z.record(z.string())
}))

const crew = z.object({
	weapon: z.string(),
	ability: z.string(),
	boost: z.string()
})

export const encodeRouter = createTRPCRouter({
	mask: publicProcedure
		.input(z.string())
		.mutation(({ input }) => encodeMask(input as MaskList)),
	character: publicProcedure
		.input(z.string())
		.mutation(({ input }) => encodeCharacter(input)),
	armour: publicProcedure
		.input(z.string())
		.mutation(({ input }) => encodeArmour(input)),
	equipment: publicProcedure
		.input(z.object({
			primary: z.string(),
			secondary: z.string().nullable()
		}))
		.mutation(({ input }) => encodeEquipment(input)),
	armoury: publicProcedure
		.input(armoury)
		.mutation(({ input }) => encodeArmoury(input as Record<number, Weapon>)),
	weapons: publicProcedure
		.input(z.object({
			primary: z.object({
				id: z.number(),
				armoury
			}),
			secondary: z.object({
				id: z.number(),
				armoury
			})
		}))
		.mutation(({ input }) => encodeWeapons(input as EncodeWeapons)),
	throwable: publicProcedure
		.input(z.string())
		.mutation(({ input }) => encodeThrowable(input as ThrowableList)),
	melee: publicProcedure
		.input(z.string())
		.mutation(({ input }) => encodeMelee(input)),
	skills: publicProcedure
		.input(z.record(z.record(z.object({
			tier: z.number(),
			points: z.number(),
			upgrades: z.record(z.union([z.literal('locked'), z.literal('available'), z.literal('basic'), z.literal('aced')]))
		}))))
		.mutation(({ input }) => encodeSkills(input)),
	perkDeck: publicProcedure
		.input(z.string())
		.mutation(({ input }) => encodePerkDeck(input as PerkDeckList)),
	copycat: publicProcedure
		.input(z.tuple([z.number(), z.number(), z.number(), z.number(), z.number()]))
		.mutation(({ input }) => encodeCopycat(input)),
	crewManagement: publicProcedure
		.input(z.tuple([crew, crew, crew]))
		.mutation(({ input }) => encodeCrewManagement(input as AbilityStateSlice['crewManagement'])),
	infamy: publicProcedure
		.input(z.boolean())
		.mutation(({ input }) => encodeInfamy(input))
})