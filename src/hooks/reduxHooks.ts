import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'store'

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export interface CustomStatsHook<T extends object> {
	base: T;
	skill: T;
	total: T;
}