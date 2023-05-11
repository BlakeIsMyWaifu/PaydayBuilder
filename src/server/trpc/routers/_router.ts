import { createTRPCRouter } from '../trpc'
import { buildsRouter } from './builds'
import { decodeRouter } from './decode'
import { healthRouter } from './health'
import { loadoutDataRouter } from './loadoutData'
import { sessionRouter } from './session'

export const appRouter = createTRPCRouter({
	builds: buildsRouter,
	health: healthRouter,
	session: sessionRouter,
	loadoutData: loadoutDataRouter,
	decode: decodeRouter
})

export type AppRouter = typeof appRouter
