import { z } from 'zod'

import { protectedProcedure } from '../procedure'
import { createTRPCRouter } from '../trpc'

export const buildsRouter = createTRPCRouter({
	pushNewBuild: protectedProcedure
		.input(z.string())
		.mutation(async ({ ctx, input }) => {
			return await ctx.prisma.build.create({
				data: {
					userId: ctx.session.user.id,
					data: input
				}
			})
		}),
	getAllBuilds: protectedProcedure
		.query(async ({ ctx }) => {
			const builds = await ctx.prisma.user.findUnique({
				where: {
					id: ctx.session.user.id
				},
				select: {
					Build: true
				}
			})
			return builds ? builds.Build : null
		}),
	deleteBuild: protectedProcedure
		.input(z.string())
		.mutation(async ({ ctx, input }) => {
			await ctx.prisma.build.delete({
				where: {
					id: input
				}
			})
		})
})