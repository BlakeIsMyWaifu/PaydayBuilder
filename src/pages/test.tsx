import type { NextPage } from 'next'
import { trpc } from 'utils/trpc'

const Test: NextPage = () => {
	const { data } = trpc.useQuery([
		'example.hello',
		{ text: 'from tRPC' }
	])

	return (
		<div>{data ? <p>{data.greeting}</p> : <p>Loading..</p>}</div>
	)
}

export default Test
