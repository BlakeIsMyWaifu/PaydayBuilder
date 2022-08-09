import { HoverInfo } from 'components/Home'
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
				enableLink ? <Title>{title}</Title> : <SelectorLink href={`/${title.replaceAll(' ', '')}`}>
					<a>
						<Title>{title}</Title>
					</a>
				</SelectorLink>
			}

			{children}
		</Container>
	)

	return enableLink ? (
		<SelectorLink href={`/${title.replaceAll(' ', '')}`}>
			<a>
				{inners}
			</a>
		</SelectorLink>
	) : inners
}

export default Selector