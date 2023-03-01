import { type ParsedUrlQuery } from 'querystring'

export const stringifyUrlQuery = (query: ParsedUrlQuery): string => {
	const nonEncodedQuery = query
	nonEncodedQuery.s = query.s?.toString()
		.replaceAll(',', '%2C')
		.replaceAll('@', '%40')
	nonEncodedQuery.n = query.n?.toString()
		.replaceAll(' ', '+')
	return Object.entries(nonEncodedQuery).map(([k, v]) => `${k}=${typeof v === 'string' ? v : ''}`).join('&')
}