import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { useIsMobile } from 'state/settingsContext'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		user-select: none;
		padding: 0;
		margin: 0;
		font-family: 'PaydayFont';
		text-transform: uppercase;
	}

	p, h1, h2, h3, h4, h5, span, input {
		color: white;
		font-weight: normal;
		text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
	}

	div {
		scrollbar-color: #fff rgba(0, 0, 0, 0);
	}

	button, input {
		color: #0F639F;
		background: none;
		border: none;
		cursor: pointer;
	}
	button:hover, input:hover {
		color: white;
	}

	a {
		text-decoration: none;
	}
`

export interface Theme {
	isMobile: boolean;
}

interface ThemeProps {
	setTheme: Dispatch<SetStateAction<Theme>>;
}

export const Theme: FC<ThemeProps> = ({ setTheme }) => {

	const isMobile = useIsMobile()

	useEffect(() => {
		const theme: Theme = {
			isMobile
		}
		setTheme(theme)
	}, [setTheme, isMobile])

	return null
}