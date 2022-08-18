import superjson from 'superjson'

import { createRouter } from './context'
import { sessionRouter } from './session'

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('session', sessionRouter)

export type AppRouter = typeof appRouter
