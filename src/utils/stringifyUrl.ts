export const stringifyParams = (searchParams: URLSearchParams): string => {
	const parsedSearchParams = new URLSearchParams(searchParams.toString())

	const skills = parsedSearchParams.get('s')
	if (skills) {
		parsedSearchParams.set('s', skills.replaceAll(',', '%2C').replaceAll('@', '%40'))
	}

	const melee = parsedSearchParams.get('m')
	if (melee) {
		parsedSearchParams.set('m', melee.replaceAll(',', '%2C').replaceAll('@', '%40'))
	}

	const name = parsedSearchParams.get('n')
	if (name) {
		parsedSearchParams.set('n', name.replaceAll(' ', '+'))
	}

	return Object.entries(Object.fromEntries(parsedSearchParams))
		.filter(([_k, v]) => v)
		.map(([k, v]) => `${k}=${typeof v === 'string' ? v : ''}`)
		.join('&')
}