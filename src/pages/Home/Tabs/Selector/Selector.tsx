import { HoverInfo } from 'pages/Home'
import { Dispatch, FC, ReactNode, SetStateAction } from 'react'

import { Container, SelectorLink, Title } from './Selector-Elements'

interface SelectorProps {
	title: string;
	children?: ReactNode;
	infoData?: HoverInfo | null;
	setHoverInfo: Dispatch<SetStateAction<HoverInfo | null>>;
	enableLink?: boolean;
}

const Selector: FC<SelectorProps> = ({ title, children, infoData, setHoverInfo, enableLink = true }) => {

	const inners = (
		<Container
			onMouseDown={event => event.preventDefault()}
			onMouseEnter={() => setHoverInfo(infoData || null)}
			onMouseLeave={() => setHoverInfo(null)}
		>
			{
				enableLink ? <Title>{title}</Title> : <SelectorLink to={`/${title.replaceAll(' ', '')}`}>
					<Title>{title}</Title>
				</SelectorLink>
			}

			{children}
		</Container>
	)

	return enableLink ? (
		<SelectorLink to={`/${title.replaceAll(' ', '')}`}>
			{inners}
		</SelectorLink>
	) : inners
}

export default Selector