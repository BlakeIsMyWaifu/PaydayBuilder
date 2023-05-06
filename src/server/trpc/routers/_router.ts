import { createTRPCRouter } from '../trpc'
import { buildsRouter } from './builds'
import { healthRouter } from './health'
import { loadoutDataRouter } from './loadoutData'
import { sessionRouter } from './session'

export const appRouter = createTRPCRouter({
	builds: buildsRouter,
	health: healthRouter,
	session: sessionRouter,
	loadoutData: loadoutDataRouter
})

export type AppRouter = typeof appRouter
