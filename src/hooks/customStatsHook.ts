export interface CustomStatsHook<T extends object> {
	base: T;
	skill: T;
	total: T;
}