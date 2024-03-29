import { type inferAsyncReturnType } from '@trpc/server'
import { type CreateNextContextOptions } from '@trpc/server/adapters/next'
import { type Session } from 'next-auth'
import { getServerAuthSession } from 'server/auth'

import { prisma } from '../db'

type CreateContextOptions = {
	session: Session | null;
}

export const createInnerTRPCContext = (opts: CreateContextOptions) => {
	return {
		session: opts.session,
		prisma
	}
}

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
	const { req, res } = opts

	const session = await getServerAuthSession({ req, res })

	return createInnerTRPCContext({
		session
	})
}

export type Context = inferAsyncReturnType<typeof createInnerTRPCContext>
