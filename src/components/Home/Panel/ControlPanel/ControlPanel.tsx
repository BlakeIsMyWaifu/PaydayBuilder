import { Title } from 'components/Home/Panel/Panel-Elements'
import { Dispatch, FC, SetStateAction } from 'react'
import { FaGithub } from 'react-icons/fa'

import { ContactIconWrapper, ContactLink, ContactText, ControlPanelContainer, ControlPanelContent } from './ControlPanel-Elements'
import Account from './Sections/Account'
import Appearance from './Sections/Appearance'
import IO from './Sections/IO'

interface SettingsPanelProps {
	toggleControl: boolean;
	setToggleControl: Dispatch<SetStateAction<boolean>>;
}

const ControlPanel: FC<SettingsPanelProps> = ({ toggleControl, setToggleControl }) => {

	return (
		<ControlPanelContainer toggle={toggleControl}>

			<Title>Control Panel</Title>

			<ControlPanelContent>
				<Account />
				<IO setToggleControl={setToggleControl} />
				<Appearance />
			</ControlPanelContent>

			<ContactLink
				href='https://github.com/BlakeIsMyWaifu/PaydayBuilder'
				target='_blank'
				rel='noopener noreferrer'
			>
				<ContactIconWrapper>
					<FaGithub size='100%' />
				</ContactIconWrapper>
				<ContactText>This project is open source</ContactText>
				<ContactText>Click here to contribute</ContactText>
			</ContactLink>

		</ControlPanelContainer >
	)
}

export default ControlPanel
