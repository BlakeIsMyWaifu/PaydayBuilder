import dynamic from 'next/dynamic'

const Index = dynamic(() => import('../index'), {
	ssr: false
})

// eslint-disable-next-line react/display-name
export default (): JSX.Element => <Index />