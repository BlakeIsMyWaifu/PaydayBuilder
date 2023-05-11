import { z } from 'zod'
import { publicProcedure } from '../procedure'
import { createTRPCRouter } from '../trpc'
import { type DecodeArmoury, decodeArmour, decodeArmoury, decodeCharacter, decodeCopycat, decodeEquipment, decodeMask, decodeMelee, decodePerkDeck, decodeThrowable, decodeWeapons } from 'utils/decodeBuild'
import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { type Slot } from 'data/weapons/guns/weaponTypes'

export const decodeRouter = createTRPCRouter({
	mask: publicProcedure
		.input(z.string().nullable())
		.mutation(({ input }) => decodeMask(input ?? '100')),
	character: publicProcedure
		.input(z.string().nullable())
		.mutation(({ input }) => decodeCharacter(input ?? '0')),
	armour: publicProcedure
		.input(z.string().nullable())
		.mutation(({ input }) => decodeArmour(input ?? '0')),
	equipment: publicProcedure
		.input(z.string().nullable())
		.mutation(({ input }) => decodeEquipment(input ?? '0')),
	armoury: publicProcedure
		.input(z.tuple([z.string().nullable(), z.union([z.literal('primary'), z.literal('secondary')])]))
		.mutation<[DecodeArmoury[], Slot]>(({ input }) => {
			const data = decodeArmoury(input[0] ?? '', input[1] === 'primary' ? primary : secondary)
			return [data, input[1] as Slot]
		}),
	weapons: publicProcedure
		.input(z.string().nullable())
		.mutation(({ input }) => decodeWeapons(input ?? '0-0')),
	throwable: publicProcedure
		.input(z.string().nullable())
		.mutation(({ input }) => decodeThrowable(input ?? '5')),
	melee: publicProcedure
		.input(z.string().nullable())
		.mutation(({ input }) => decodeMelee(input ?? '0')),
	perkDeck: publicProcedure
		.input(z.string().nullable())
		.mutation(({ input }) => decodePerkDeck(input ?? '0')),
	copycat: publicProcedure
		.input(z.string().nullable())
		.mutation(({ input }) => decodeCopycat(input ?? '1-5'))
})