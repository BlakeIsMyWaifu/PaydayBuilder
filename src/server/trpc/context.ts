import { inferAsyncReturnType } from '@trpc/server'
import { CreateNextContextOptions } from '@trpc/server/adapters/next'
import { Session } from 'next-auth'
import { getServerAuthSession } from 'server/auth'

import { prisma } from '../db'

type CreateContextOptions = {
	session: Session | null;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createInnerTRPCContext = async (opts: CreateContextOptions) => {
	return {
		session: opts.session,
		prisma
	}
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createTRPCContext = async (opts: CreateNextContextOptions) => {
	const { req, res } = opts

	const session = await getServerAuthSession({ req, res })

	return await createInnerTRPCContext({
		session
	})
}

export type Context = inferAsyncReturnType<typeof createInnerTRPCContext>
