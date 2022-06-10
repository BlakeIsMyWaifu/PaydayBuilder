import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import useBuildURLExport from 'hooks/useBuildURLExport'
import useBuildURLImport from 'hooks/useBuildURLImport'
import useMountEffect from 'hooks/useMountEffect'
import { FC, useEffect } from 'react'
import { updateData } from 'slices/buildsSlice'

const UpdateBuild: FC = () => {

	const { current, builds } = useAppSelector(state => state.builds)

	const setData = useBuildURLImport()

	useMountEffect(() => {
		setData({ data: builds[current].data, addNewBuild: false })
	})

	const dispatch = useAppDispatch()
	const build = useBuildURLExport({ simple: false })

	useEffect(() => {
		dispatch(updateData({
			id: current,
			data: build
		}))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [build, dispatch])

	return <></>
}

export default UpdateBuild
