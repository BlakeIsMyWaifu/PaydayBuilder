import { createTRPCRouter } from '../trpc'
import { buildsRouter } from './builds'
import { healthRouter } from './health'
import { sessionRouter } from './session'

export const appRouter = createTRPCRouter({
	builds: buildsRouter,
	health: healthRouter,
	session: sessionRouter
})

export type AppRouter = typeof appRouter
