import { createTRPCRouter } from '../trpc'
import { buildsRouter } from './builds'
import { decodeRouter } from './decode'
import { encodeRouter } from './encode'
import { healthRouter } from './health'
import { loadoutDataRouter } from './loadoutData'
import { sessionRouter } from './session'

export const appRouter = createTRPCRouter({
	builds: buildsRouter,
	health: healthRouter,
	session: sessionRouter,
	loadoutData: loadoutDataRouter,
	decode: decodeRouter,
	encode: encodeRouter
})

export type AppRouter = typeof appRouter
