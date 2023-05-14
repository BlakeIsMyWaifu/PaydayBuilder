import { useRouter } from 'next/router'
import { encode } from 'querystring'
import { useEffect, useState } from 'react'
import { defaultBuild, useBuildsStore } from 'state/useBuildsStore'
import { stringifyParams } from 'utils/stringifyUrl'

import useBuildImport from './useBuildImport'

const useFirstLoadBuildImport = (): boolean => {

	const router = useRouter()

	const { current, builds } = useBuildsStore()

	const [hasImportedURL, setHasImportURL] = useState<boolean>(false)

	const importBuild = useBuildImport()

	// Because react is in strict mode, while in dev mode it creates an extra empty build sometimes
	useEffect(() => {
		if (hasImportedURL || !router.isReady) return

		const importedBuildData = Object.fromEntries(new URLSearchParams(encode(router.query)))

		if (Object.values(importedBuildData).filter(v => v).length) {

			const buildDataParams = new URLSearchParams(defaultBuild)
			Object.entries(importedBuildData).forEach(([k, v]) => {
				if (!v) return
				buildDataParams.set(k, v)
			})

			const urlData = stringifyParams(buildDataParams)

			importBuild(urlData, urlData !== builds[current].data && builds[current].data !== defaultBuild)
		} else {
			importBuild(builds[current].data, false)
		}

		setHasImportURL(true)
		// Don't want to call this every time the build changes, only on page load
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.isReady])

	return hasImportedURL
}

export default useFirstLoadBuildImport