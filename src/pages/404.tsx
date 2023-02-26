import useMountEffect from 'hooks/useMountEffect'
import { type NextPage } from 'next'
import { useRouter } from 'next/router'

const _error: NextPage = () => {

	const router = useRouter()

	useMountEffect(() => {
		router.push('/').catch(console.error)
	})

	return null
}

export default _error