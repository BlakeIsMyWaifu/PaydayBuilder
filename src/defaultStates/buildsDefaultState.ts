export interface BuildSave {
	id: number;
	name: string;
	data: string;
}

export interface BuildsState {
	current: number;
	builds: Record<number, BuildSave>;
}

const buildsDefaultState: BuildsState = {
	current: 0,
	builds: {
		0: {
			id: 0,
			name: '',
			data: 's=0-90-90-9000&p=0&a=0&t=5&d=0'
		}
	}
}

export default buildsDefaultState