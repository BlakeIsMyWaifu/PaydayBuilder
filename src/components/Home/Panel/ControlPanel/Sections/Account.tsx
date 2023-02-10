import { signIn, signOut } from 'next-auth/react'
import { FC } from 'react'
import { trpc } from 'utils/trpc'

import Button from '../Button'
import { Section, SectionTitle } from '../ControlPanel-Elements'

const Account: FC = () => {

	const healthCheck = trpc.health.healthCheck.useQuery(undefined, {
		refetchOnMount: false,
		refetchOnWindowFocus: false
	})

	const getSession = trpc.session.getSession.useQuery()

	return (
		<Section>
			<SectionTitle>Account</SectionTitle>
			{
				getSession.isLoading && healthCheck.isLoading
					? <Button text='Loading . . .' callback={() => null} />
					: (
						healthCheck.data
							? (
								getSession.data?.user?.name
									? <Button text='Logout' callback={signOut} />
									: <Button text='Register / Login' callback={signIn} />
							)
							: <Button text='Database Unavailable' callback={() => null} />
					)
			}
		</Section>
	)
}

export default Account