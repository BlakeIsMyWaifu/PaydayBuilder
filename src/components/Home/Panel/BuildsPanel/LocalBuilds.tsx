import useBuildImport from 'hooks/useBuildImport'
import { type Dispatch, type FC, type SetStateAction, useEffect, useState } from 'react'
import { FaFolderOpen, FaTrash, FaUndoAlt, FaUpload } from 'react-icons/fa'
import { type BuildSave, defaultBuild, useBuildsStore } from 'state/useBuildsStore'
import { blue, red } from 'utils/colours'
import { trpc } from 'utils/trpc'

import { BuildButton, BuildName, BuildSectionTitle, BuildWrapper } from './buildsPanelElements'

interface LocalBuildsProps {
	setToggleBuilds: Dispatch<SetStateAction<boolean>>;
}

const LocalBuilds: FC<LocalBuildsProps> = ({ setToggleBuilds }) => {

	const { current, builds, removeBuild, updateName, changeBuild } = useBuildsStore()
	const importBuild = useBuildImport()

	const [clientBuilds, setClientBuilds] = useState<Record<number, BuildSave>>({})

	useEffect(() => {
		setClientBuilds(builds)
	}, [setClientBuilds, builds])

	const utils = trpc.useContext()

	const pushNewBuild = trpc.builds.pushNewBuild.useMutation({
		async onSuccess() {
			await utils.builds.getAllBuilds.invalidate()
		}
	})

	const { data: sessionData, isLoading } = trpc.session.getSession.useQuery()

	return (
		<>
			<BuildSectionTitle>Local Builds</BuildSectionTitle>

			{
				Object.values(clientBuilds).map(({ id, name, data: buildData }) => {
					const isLastBuild = Object.keys(builds).length > 1
					const isLoggedIn = !isLoading && !!sessionData

					return <BuildWrapper key={id}>
						<BuildName
							type='text'
							placeholder='New Build . . .'
							value={name}
							onChange={event => {
								updateName(event.target.value, id)
							}}
						/>

						{
							id !== current ? <BuildButton title='Open Build' onClick={() => {
								changeBuild(id)
								importBuild(buildData, false)
								setToggleBuilds(false)
							}}> <FaFolderOpen /> </BuildButton> : <BuildButton title='Reset Build' onClick={() => {
								importBuild(defaultBuild, false)
							}}> <FaUndoAlt /> </BuildButton>
						}

						<BuildButton
							title='Delete Build'
							colour={isLastBuild ? blue : red}
							onClick={() => {
								if (isLastBuild) {
									const prevId = Object.values(builds).reverse().find(value => value.id !== id)?.id ?? 0
									changeBuild(prevId)
									removeBuild(id)
									importBuild(builds[prevId].data, false)
								}
							}}
						> <FaTrash /> </BuildButton>

						<BuildButton
							title={isLoggedIn ? 'Upload Build' : 'Log in to cloud save'}
							disabled={!isLoggedIn}
							colour={isLoggedIn ? blue : red}
							onClick={() => {
								if (pushNewBuild.isLoading) return
								pushNewBuild.mutate(builds[current].data)
							}}
						> <FaUpload /> </BuildButton>
					</BuildWrapper>
				})
			}
		</>
	)
}

export default LocalBuilds