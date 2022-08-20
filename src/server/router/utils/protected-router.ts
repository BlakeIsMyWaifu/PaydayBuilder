import * as trpc from '@trpc/server'

import { createRouter } from './context'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createProtectedRouter() {
	return createRouter().middleware(({ ctx, next }) => {
		if (!ctx.session || !ctx.session.user) {
			throw new trpc.TRPCError({ code: 'UNAUTHORIZED' })
		}
		return next({
			ctx: {
				...ctx,
				session: { ...ctx.session, user: ctx.session.user }
			}
		})
	})
}
