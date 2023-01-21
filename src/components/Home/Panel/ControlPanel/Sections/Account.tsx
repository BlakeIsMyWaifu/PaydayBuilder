import { signIn, signOut } from 'next-auth/react'
import { FC } from 'react'
import { trpc } from 'utils/trpc'

import Button from '../Button'
import { Section, SectionTitle } from '../ControlPanel-Elements'

const Account: FC = () => {

	const { data, isLoading } = trpc.useQuery([
		'session.getSession'
	])

	return (
		<Section>
			<SectionTitle>Account</SectionTitle>
			{
				isLoading
					? <Button text='Loading . . .' callback={() => null} />
					: (
						data?.user?.name
							? <Button text='Logout' callback={signOut} />
							: <Button text='Login' callback={signIn} />
					)
			}
		</Section>
	)
}

export default Account