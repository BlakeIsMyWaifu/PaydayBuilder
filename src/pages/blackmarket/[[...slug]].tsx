import Blackmarket from 'components/Blackmarket'
import Container from 'components/Container'
import { useRouter } from 'next/router'
import { FC } from 'react'

const BlackmarketSlug: FC = () => {

	const router = useRouter()
	const { slug } = router.query
	if (typeof slug !== 'object') return null
	const [slot, id, modType] = slug

	if (typeof slot !== 'string' || typeof id !== 'string' || typeof modType === 'object') return <Container>
		<h1>Invalid URL parameters</h1>
	</Container>

	return <Blackmarket slot={slot} id={id} modtype={modType} />
}

export default BlackmarketSlug