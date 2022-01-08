import { Dispatch } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'store'

export const useAppDispatch = (): Dispatch<any> => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export interface CustomStatsHook<T> {
	base: T;
	skill: T;
	total: T;
}