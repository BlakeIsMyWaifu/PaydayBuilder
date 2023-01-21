import { createNextApiHandler } from '@trpc/server/adapters/next'
import { appRouter } from 'server/router'
import { createContext } from 'server/router/utils/context'

export default createNextApiHandler({
	router: appRouter,
	createContext,
	onError: ({ error }) => {
		console.error(error)
	}
})
