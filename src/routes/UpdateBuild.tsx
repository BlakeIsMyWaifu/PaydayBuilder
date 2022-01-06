import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import useBuildURLExport from 'hooks/useBuildURLExport'
import useBuildURLImport from 'hooks/useBuildURLImport'
import useMountEffect from 'hooks/useMountEffect'
import { LoadedBuild } from 'pages/Home/Home'
import React, { useEffect, useState } from 'react'
import { updateData } from 'slices/buildsSlice'

const UpdateBuild: React.FC = () => {

	const { current, builds } = useAppSelector(state => state.builds)

	const [loadedBuild, setLoadedBuild] = useState<LoadedBuild>({ data: '', addNewBuild: false })
	useBuildURLImport(loadedBuild.data, loadedBuild.addNewBuild)

	useMountEffect(() => {
		setLoadedBuild({ data: builds[current].data, addNewBuild: false })
	})

	const disptach = useAppDispatch()
	const build = useBuildURLExport({ simple: false })

	useEffect(() => {
		disptach(updateData({
			id: current,
			data: build
		}))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [build])

	return <></>
}

export default UpdateBuild
