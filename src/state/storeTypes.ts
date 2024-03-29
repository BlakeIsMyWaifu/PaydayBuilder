import { type StateCreator, type StoreMutators } from 'zustand'

export type DevTools = ['zustand/devtools', never]

export type SubscribeWithSelector = ['zustand/subscribeWithSelector', never]

export type Persist<T = unknown> = ['zustand/persist', T]

export type Slice<
	Store extends object,
	Slice extends object,
	Middleware extends [keyof StoreMutators<unknown, unknown>, unknown][] = [DevTools]
	> = StateCreator<Store, Middleware, [], Slice>

export const createActionName = <T extends string>(storeName: string) => (actionName: T): [false, string] => [false, `${storeName}/${actionName}`]