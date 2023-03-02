import { type ParsedUrlQuery } from 'querystring'

const filterMapJoin = (entries: [string, string | string[] | undefined][]): string => {
	return entries
		.filter(([_k, v]) => v)
		.map(([k, v]) => `${k}=${typeof v === 'string' ? v : ''}`)
		.join('&')
}

export const stringifyParsedUrlQuery = (query: ParsedUrlQuery): string => {
	const nonEncodedQuery = query
	nonEncodedQuery.s = query.s?.toString()
		.replaceAll(',', '%2C')
		.replaceAll('@', '%40')
	nonEncodedQuery.n = query.n?.toString()
		.replaceAll(' ', '+')
	return filterMapJoin(Object.entries(nonEncodedQuery))
}

export const stringifyUrlSearchParams = (searchParams: URLSearchParams): string => {
	const parsedSearchParams = structuredClone(searchParams)

	const skills = parsedSearchParams.get('s')
	if (skills) {
		skills.replaceAll(',', '%2c').replaceAll('@', '%40')
		parsedSearchParams.set('s', skills)
	}

	const name = parsedSearchParams.get('n')
	if (name) {
		name.replaceAll(' ', '+')
		parsedSearchParams.set('n', name)
	}

	return filterMapJoin(Object.entries(Object.fromEntries(parsedSearchParams)))
}