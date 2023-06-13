import perkDecks from 'data/abilities/perks'

import { publicProcedure } from '../procedure'
import { createTRPCRouter } from '../trpc'

export const abilitiesDataRouter = createTRPCRouter({
	perkDeckData: publicProcedure
		.query(() => perkDecks)
})