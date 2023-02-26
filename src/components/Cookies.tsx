import { type FC, useEffect, useState } from 'react'
import { useSettingsStore } from 'state/useSettingsStore'
import styled from 'styled-components'
import colours from 'utils/colours'

const CookiesContainer = styled.div`
	position: absolute;
	width: 100vw;
	height: 3rem;
	bottom: 0;
	left: 0;
	background-color: ${colours.grey};
	z-index: 100;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 16px;
`

const CookiesText = styled.p`
	font-size: 1.4rem;
	text-transform: none;
`

const CookiesButton = styled.input`
	padding: 2px 4px;
`

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