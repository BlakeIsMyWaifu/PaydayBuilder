import App from 'App'
import { FC } from 'react'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import store from 'store'

const Index: FC = () => (
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
)

export default Index