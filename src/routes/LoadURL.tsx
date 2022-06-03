import useBuildURLImport from 'hooks/useBuildURLImport'
import useMountEffect from 'hooks/useMountEffect'
import useQuery from 'hooks/useQuery'
import { FC } from 'react'
import { Navigate } from 'react-router-dom'

const LoadURL: FC = () => {

	const query = useQuery()

	const setData = useBuildURLImport()

	useMountEffect(() => {
		setData({ data: query.toString(), addNewBuild: true })
	})

	return query.toString().length ? <Navigate to='/' /> : <></>
}

export default LoadURL
