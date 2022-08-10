import useMountEffect from 'hooks/useMountEffect'
import { useRouter } from 'next/router'
import { FC } from 'react'

const _error: FC = () => {

	const router = useRouter()

	useMountEffect(() => {
		router.push('/')
	})

	return null
}

export default _error