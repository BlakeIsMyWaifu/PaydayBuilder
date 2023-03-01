import Weapons from 'components/Weapons'
import { type NextPage } from 'next'

const Primary: NextPage = () => {
	return <Weapons slot='primary' />
}

Primary.getInitialProps = () => ({})

export default Primary