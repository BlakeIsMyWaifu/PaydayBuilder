import useBuildURLImport from 'hooks/useBuildURLImport'
import useQuery from 'hooks/useQuery'
import React from 'react'
import { Navigate } from 'react-router-dom'

const LoadURL: React.FC = () => {

	const query = useQuery()

	useBuildURLImport(query.toString(), true)

	return query.toString().length ? <Navigate to='/' /> : <></>
}

export default LoadURL
