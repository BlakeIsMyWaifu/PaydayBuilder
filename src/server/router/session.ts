import { createRouter } from './context'

export const sessionRouter = createRouter()
	.query('.getSession', {
		resolve({ ctx }) {
			return ctx.session
		}
	})