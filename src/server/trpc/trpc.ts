import { initTRPC } from '@trpc/server'
import superjson from 'superjson'

import { createTRPCContext } from './context'

export const t = initTRPC.context<typeof createTRPCContext>().create({
	transformer: superjson,
	errorFormatter: ({ shape }) => {
		return shape
	}
})

export const createTRPCRouter = t.router