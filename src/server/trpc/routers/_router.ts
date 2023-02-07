import { createTRPCRouter } from '../trpc'
import { buildsRouter } from './builds'
import { sessionRouter } from './session'

export const appRouter = createTRPCRouter({
	builds: buildsRouter,
	session: sessionRouter
})

export type AppRouter = typeof appRouter
