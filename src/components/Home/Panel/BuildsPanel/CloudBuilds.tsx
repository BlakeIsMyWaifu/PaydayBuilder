import { FC } from 'react'
import { FaDownload, FaTrash } from 'react-icons/fa'
import { useBuildsStore } from 'state/useBuildsStore'
import { trpc } from 'utils/trpc'

import { BuildButton, BuildName, BuildSectionTitle, BuildWrapper } from './BuildsPanel-Elements'

const ServerBuilds: FC = () => {

	const importBuild = useBuildsStore(state => state.importBuild)

	const utils = trpc.useContext()

	const builds = trpc.useQuery(['builds.getAllBuilds'])

	const deleteBuild = trpc.useMutation(['builds.deleteBuild'], {
		onSuccess() {
			utils.invalidateQueries(['builds.getAllBuilds'])
		}
	})

	return (
		<>
			<BuildSectionTitle>Cloud Builds</BuildSectionTitle>

			{
				builds.isLoading
					? <p>Loading . . .</p>
					: builds.data?.map(({ data, id }) => {
						const parameters = new URLSearchParams(data)
						const name = parameters.get('n') ?? 'New Build . . .'

						return <BuildWrapper key={id}>
							<BuildName
								type='text'
								value={name}
								disabled
							/>

							<BuildButton
								title='Delete Build'
								onClick={() => {
									if (deleteBuild.isLoading) return
									deleteBuild.mutate(id)
								}}
							> <FaTrash /></BuildButton>

							<BuildButton
								title='Download Build'
								onClick={() => {
									importBuild(data, true)
								}}
							><FaDownload /></BuildButton>
						</BuildWrapper>
					})
			}
		</>
	)
}

export default ServerBuilds