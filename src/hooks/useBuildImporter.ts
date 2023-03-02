import { encode } from 'querystring'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { defaultBuild, useBuildsStore } from 'state/useBuildsStore'
import { stringifyUrlSearchParams } from 'utils/stringifyUrl'

const useBuildImporter = (): boolean => {

	const router = useRouter()

	const { current, builds, importBuild } = useBuildsStore()

	const [hasImportedURL, setHasImportURL] = useState<boolean>(false)

	useEffect(() => {
		if (hasImportedURL || !router.isReady) return

		const importedBuildData = Object.fromEntries(new URLSearchParams(encode(router.query)))

		if (Object.values(importedBuildData).filter(v => v).length) {

			const buildDataParams = new URLSearchParams(defaultBuild)
			Object.entries(importedBuildData).forEach(([k, v]) => {
				if (!v) return
				buildDataParams.set(k, v)
			})

			const urlData = stringifyUrlSearchParams(buildDataParams)

			importBuild(urlData, urlData !== builds[current].data && builds[current].data !== defaultBuild)
		} else {
			importBuild(builds[current].data, false)
		}

		setHasImportURL(true)
		// Don't want to call this every time the build changes, only on page load
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.isReady])

	useEffect(() => {
		if (!hasImportedURL) return

		const base = router.asPath.split('?').at(0) ?? ''

		const defaultBuildParams = new URLSearchParams(defaultBuild)
		const buildDataObject = Object.fromEntries(new URLSearchParams(builds[current].data))
		const buildData = new URLSearchParams()
		Object.entries(buildDataObject).forEach(([k, v]) => {
			if (v !== defaultBuildParams.get(k)) {
				buildData.set(k, v)
			}
		})

		const connecter = buildData.toString().length ? '/?' : ''

		router.push(`${base}${connecter}${buildData.toString()}`.replace('//', '/')).catch(console.error)
		// If router is added, it will endlessly loop
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [current, builds, hasImportedURL, router.route])

	return hasImportedURL
}

export default useBuildImporter