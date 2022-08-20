import superjson from 'superjson'

import { buildsRouter } from './subroutes/builds'
import { sessionRouter } from './subroutes/session'
import { createRouter } from './utils/context'

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('session.', sessionRouter)
	.merge('builds.', buildsRouter)

export type AppRouter = typeof appRouter
