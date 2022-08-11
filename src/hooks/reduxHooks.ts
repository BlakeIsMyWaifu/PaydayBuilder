import { useDispatch } from 'react-redux'
import { AppDispatch } from 'store'

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()

export interface CustomStatsHook<T extends object> {
	base: T;
	skill: T;
	total: T;
}