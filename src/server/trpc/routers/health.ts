import { publicProcedure } from '../procedure'
import { createTRPCRouter } from '../trpc'

export const healthRouter = createTRPCRouter({
	healthCheck: publicProcedure
		.query(async ({ ctx }) => {
			const test = await ctx.prisma.$queryRaw`SELECT 1`.catch(err => console.error(err))
			return !!test
		})
})