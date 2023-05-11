import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { defaultBuild, useBuildsStore } from 'state/useBuildsStore'

const useUpdateURL = (hasImportedURL: boolean): void => {

	const router = useRouter()

	const { current, builds } = useBuildsStore()

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
}

export default useUpdateURL