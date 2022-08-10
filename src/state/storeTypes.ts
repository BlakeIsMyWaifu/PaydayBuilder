import { StateCreator } from 'zustand'

export type Slice<T extends object, K extends object> = StateCreator<T, [], [], K>