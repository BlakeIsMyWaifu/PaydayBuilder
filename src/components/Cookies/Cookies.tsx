import { FC, useEffect, useState } from 'react'
import { useSettingsStore } from 'state/useSettingsStore'

import { CookiesButton, CookiesContainer, CookiesText } from './Cookies-Elements'

const Cookies: FC = () => {

	const acceptedCookies = useSettingsStore(state => state.acceptedCookies)
	const acceptCookies = useSettingsStore(state => state.acceptCookies)

	const [cookies, setCookies] = useState(true)

	useEffect(() => {
		setCookies(acceptedCookies)
	}, [acceptedCookies])

	return !cookies ? (
		<CookiesContainer>
			<CookiesText>
				This site uses cookies for storing login sessions
			</CookiesText>
			<CookiesButton
				type='button'
				onClick={acceptCookies}
				value='Accept'
			/>
		</CookiesContainer>
	) : null
}

export default Cookies