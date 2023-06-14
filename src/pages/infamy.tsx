import Container from 'components/Container'
import { type NextPage } from 'next'
import { useState } from 'react'
import styled from 'styled-components'

const Section = styled.section`
	grid-area: wrapper;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`

const Text = styled.h1`
	font-size: 2rem;
`

interface CheckboxWrapperProps {
	backgroundColour: string;
}

const CheckboxWrapper = styled.div<CheckboxWrapperProps>`
	border: 2px ${props => props.backgroundColour} solid;
	background-color: ${props => props.backgroundColour};
	width: 200px;
	height: 200px;
	border-radius: 0.5rem;

	&:active {
		transform: scale(0.95);
	}
`

const CheckboxInput = styled.input`
	display: none;
`

const CheckboxLabel = styled.label`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 8px;
	cursor: pointer;
`

const CheckboxImage = styled.img`
	height: calc(200px - 3rem);
	width: calc(200px - 3rem);
`

const Infamy: NextPage = () => {

	const [checkbox, setCheckbox] = useState(true)

	return (
		<Container
			title='Infamy'
			desktopLayout={{
				columns: 'auto',
				rows: '4rem auto 4rem',
				areas: '"title" "wrapper" "back"'
			}}
			mobileLayout={{
				columns: 'auto 75px',
				rows: '3rem auto 60px',
				areas: '"title title" "wrapper wrapper" ". back"'
			}}
		>
			<Section>
				<Text>Infamy lowers the required skill points spent to unlock the top skill of every tree from 18 to 16</Text>

				<CheckboxWrapper backgroundColour={checkbox ? 'rgba(255, 26, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'}>
					<CheckboxInput
						type='checkbox'
						id='infamy'
						checked={checkbox}
						onChange={() => setCheckbox(state => !state)}
					/>
					<CheckboxLabel htmlFor='infamy'>
						<CheckboxImage src={checkbox ? '/images/masks/dallas.webp' : '/images/masks/dallas_clean.webp'} />
						<Text>{checkbox ? 'Disable' : 'Enable'} Infamy</Text>
					</CheckboxLabel>
				</CheckboxWrapper>
			</Section>
		</Container>
	)
}

export default Infamy
