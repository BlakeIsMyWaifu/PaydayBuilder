import { type FC } from 'react'
import Selector, { type SelectorProps } from './Selector'

interface PlaceholderSelectorProps {
	setHoverInfo: SelectorProps['setHoverInfo'];
}

const PlaceholderSelector: FC<PlaceholderSelectorProps> = ({ setHoverInfo }) => {
	return <Selector
		title=''
		infoData={null}
		setHoverInfo={setHoverInfo}
	/>
}

export default PlaceholderSelector