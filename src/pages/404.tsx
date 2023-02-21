import useMountEffect from 'hooks/useMountEffect'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const _error: NextPage = () => {

	const router = useRouter()

	useMountEffect(() => {
		router.push('/')
	})

	return null
}

export default _error