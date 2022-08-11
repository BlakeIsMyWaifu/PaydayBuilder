import { StateCreator } from 'zustand'

type DevTools = ['zustand/devtools', never]

export type Slice<T extends object, K extends object> = StateCreator<T, [DevTools], [], K>

export const createActionName = (storeName: string) => (actionName: string): [false, string] => [false, `${storeName}/${actionName}`]