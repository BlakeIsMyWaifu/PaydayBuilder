import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { defaultBuild, useBuildsStore } from 'state/useBuildsStore'

const useBuildImporter = (): boolean => {

	const router = useRouter()

	const { current, builds, importBuild } = useBuildsStore()

	const [hasImportedURL, setHasImportURL] = useState<boolean>(false)

	useEffect(() => {
		if (hasImportedURL || !router.isReady) return

		if (Object.keys(router.query).length) {
			const nonEncodedQuery = router.query
			nonEncodedQuery.s = router.query.s?.toString()
				.replaceAll(',', '%2C')
				.replaceAll('@', '%40')
			nonEncodedQuery.n = router.query.n?.toString()
				.replaceAll(' ', '+')
			const urlData = Object.entries(nonEncodedQuery).map(([k, v]) => `${k}=${v}`).join('&')
			importBuild(urlData, urlData !== builds[current].data && builds[current].data !== defaultBuild)
		} else {
			importBuild(builds[current].data)
		}

		setHasImportURL(true)
		// Don't want to call this every time the build changes, only on page load
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.isReady])

	useEffect(() => {
		if (!hasImportedURL) return
		router.push(`${router.asPath.split('?').at(0)}/?${builds[current].data}`.replace('//', '/'))
		// If router is added, it will endlessly loop
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [current, builds, hasImportedURL, router.route])

	return hasImportedURL
}

export default useBuildImporter