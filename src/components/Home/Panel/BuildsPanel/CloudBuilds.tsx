import { type FC } from 'react'
import { FaDownload, FaTrash } from 'react-icons/fa'
import { trpc } from 'utils/trpc'

import { BuildButton, BuildName, BuildSectionTitle, BuildWrapper } from './buildsPanelElements'
import useBuildImport from 'hooks/useBuildImport'

const CloudBuilds: FC = () => {

	const importBuild = useBuildImport()

	const utils = trpc.useContext()

	const builds = trpc.builds.getAllBuilds.useQuery()

	const deleteBuild = trpc.builds.deleteBuild.useMutation({
		async onSuccess() {
			await utils.builds.getAllBuilds.invalidate()
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

export default CloudBuilds