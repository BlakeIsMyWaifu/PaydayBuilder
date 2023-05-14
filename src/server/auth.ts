import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { type GetServerSidePropsContext } from 'next'
import { type DefaultSession, getServerSession, type NextAuthOptions, type Session } from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

import { env } from '../env.mjs'
import { prisma } from './db'

declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: {
			id: string;
		} & DefaultSession['user'];
	}
}

export const authOptions: NextAuthOptions = {
	callbacks: {
		session({ session, user }) {
			if (session.user) {
				session.user.id = user.id
			}
			return session
		}
	},
	adapter: PrismaAdapter(prisma),
	providers: [
		DiscordProvider({
			clientId: env.DISCORD_CLIENT_ID,
			clientSecret: env.DISCORD_CLIENT_SECRET
		})
	]
}

export const getServerAuthSession = (ctx: {
	req: GetServerSidePropsContext['req'];
	res: GetServerSidePropsContext['res'];
}): Promise<Session | null> => {
	return getServerSession(ctx.req, ctx.res, authOptions)
}
