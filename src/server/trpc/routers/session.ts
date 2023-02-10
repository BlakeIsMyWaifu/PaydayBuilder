import { publicProcedure } from '../procedure'
import { createTRPCRouter } from '../trpc'

export const sessionRouter = createTRPCRouter({
	getSession: publicProcedure
		.query(({ ctx }) => {
			return ctx.session
		})
})