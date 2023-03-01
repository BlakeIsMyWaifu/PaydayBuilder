import Weapons from 'components/Weapons'
import { type NextPage } from 'next'

const Secondary: NextPage = () => {
	return <Weapons slot='secondary' />
}

Secondary.getInitialProps = () => ({})

export default Secondary