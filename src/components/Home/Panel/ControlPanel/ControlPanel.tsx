import { ClosePanel, Container, PanelContent, Title, TopWrapper } from 'components/Home/Panel/panelElements'
import { type Dispatch, type FC, type SetStateAction } from 'react'
import { useIsMobile } from 'state/settingsContext'
import styled from 'styled-components'

import Account from './Sections/Account'
import Appearance from './Sections/Appearance'
import Contact from './Sections/Contact'
import IO from './Sections/IO'

const ControlPanelContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: start;
`

const ControlPanelContent = styled(PanelContent)`
	height: 100%;
	display: flex;
	flex-direction: column;
`

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

interface SettingsPanelProps {
	toggleControl: boolean;
	setToggleControl: Dispatch<SetStateAction<boolean>>;
}

const ControlPanel: FC<SettingsPanelProps> = ({ toggleControl, setToggleControl }) => {

	const isMobile = useIsMobile()

	return (
		<ControlPanelContainer toggle={toggleControl}>

			<TopWrapper>
				<Title>Control Panel</Title>

				{isMobile && <ClosePanel onClick={() => setToggleControl(false)} />}
			</TopWrapper>

			<Wrapper>
				<ControlPanelContent>
					<Account />
					<IO setToggleControl={setToggleControl} />
					<Appearance />
				</ControlPanelContent>

				<Contact/>
			</Wrapper>

		</ControlPanelContainer >
	)
}

export default ControlPanel
