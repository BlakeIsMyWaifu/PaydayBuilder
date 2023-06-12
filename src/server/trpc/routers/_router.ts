import { createTRPCRouter } from '../trpc'
import { buildsRouter } from './builds'
import { characterDataRouter } from './characterData'
import { decodeRouter } from './decode'
import { encodeRouter } from './encode'
import { healthRouter } from './health'
import { loadoutDataRouter } from './loadoutData'
import { sessionRouter } from './session'
import { weaponDataRouter } from './weaponData'

export const appRouter = createTRPCRouter({
	builds: buildsRouter,
	health: healthRouter,
	session: sessionRouter,
	loadoutData: loadoutDataRouter,
	decode: decodeRouter,
	encode: encodeRouter,
	characterData: characterDataRouter,
	weaponData: weaponDataRouter
})

export type AppRouter = typeof appRouter
