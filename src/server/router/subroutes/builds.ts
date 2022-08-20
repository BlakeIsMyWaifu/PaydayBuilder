import { z } from 'zod'

import { createProtectedRouter } from '../utils/protected-router'

export const buildsRouter = createProtectedRouter()
	.mutation('pushNewBuild', {
		input: z.string(),
		async resolve({ ctx, input }) {
			return await prisma?.build.create({
				data: {
					userId: ctx.session.user.id,
					data: input
				}
			})
		}
	})
	.query('getAllBuilds', {
		async resolve({ ctx }) {
			const builds = await prisma?.user.findUnique({
				where: {
					id: ctx.session.user.id
				},
				select: {
					Build: true
				}
			})
			return builds ? builds.Build : null
		}
	})
	.mutation('deleteBuild', {
		input: z.string(),
		async resolve({ input }) {
			await prisma?.build.delete({
				where: {
					id: input
				}
			})
		}
	})