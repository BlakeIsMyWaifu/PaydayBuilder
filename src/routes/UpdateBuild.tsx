import { updateData } from 'slices/buildsSlice'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import useBuildURLExport from 'hooks/useBuildURLExport'
import React, { useEffect } from 'react'

const UpdateBuild: React.FC = () => {

	const disptach = useAppDispatch()
	const currentBuildId = useAppSelector(state => state.builds.current)
	const build = useBuildURLExport({ simple: false })

	useEffect(() => {
		disptach(updateData({
			id: currentBuildId,
			data: build
		}))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [build])

	return <></>
}

export default UpdateBuild
