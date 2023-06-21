import { signIn, signOut } from 'next-auth/react'
import { type FC } from 'react'
import { trpc } from 'utils/trpc'

import Button from '../Button'
import { Section, SectionTitle } from './sectionsElements'

const Account: FC = () => {

	const healthCheck = trpc.health.healthCheck.useQuery()

	const getSession = trpc.session.getSession.useQuery(undefined, {
		staleTime: 60 * 1000 * 5
	})

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
									? <Button text='Logout' callback={() => void signOut} />
									: <Button text='Register / Login' callback={() => void signIn} />
							)
							: <Button text='Database Unavailable' callback={() => null} />
					)
			}
		</Section>
	)
}

export default Account