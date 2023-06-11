import armours from 'data/character/armours'
import characters from 'data/character/characters'
import equipments from 'data/character/equipment'
import collaboration from 'data/character/mask/collaboration'
import community from 'data/character/mask/community'
import dlc from 'data/character/mask/dlc'
import event from 'data/character/mask/event'
import infamous from 'data/character/mask/infamous'
import normal from 'data/character/mask/normal'
import { publicProcedure } from 'server/trpc/procedure'
import { createTRPCRouter } from 'server/trpc/trpc'

export const characterDataRouter = createTRPCRouter({
	maskCommunityData: publicProcedure
		.query(() => community),
	maskNormalData: publicProcedure
		.query(() => normal),
	maskDlcData: publicProcedure
		.query(() => dlc),
	maskEventData: publicProcedure
		.query(() => event),
	maskCollaboration: publicProcedure
		.query(() => collaboration),
	maskInfamous: publicProcedure
		.query(() => infamous),

	characterData: publicProcedure
		.query(() => characters),
	armourData: publicProcedure
		.query(() => armours),
	equipmentData: publicProcedure
		.query(() => equipments)
})