import { FC, ReactNode } from 'react'

import { Area, BackLink, BackText, BackWrapper, Title } from './Container-Elements'

export interface ContainerProps {
	columns?: string;
	rows?: string;
	areas?: string;
	title?: string;
	backButton?: boolean;
	children?: ReactNode;
	backLocation?: string;
}

const Container: FC<ContainerProps> = ({
	columns = '3fr 1fr',
	rows = '4rem 8fr 4rem',
	areas = '"title title" "items info" "items back"',
	title,
	backButton = true,
	children,
	backLocation = '/'
}) => {
	return (
		<Area columns={columns} rows={rows} areas={areas}>

			{title && <Title>{title}</Title>}

			{children}

			{
				backButton && <BackWrapper>
					<BackLink href={backLocation} onMouseDown={event => event.preventDefault()}>
						<a>
							<BackText>Back</BackText>
						</a>
					</BackLink>
				</BackWrapper>
			}

		</Area>
	)
}

export default Container
