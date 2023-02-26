type ObjectKeys<T> =
	T extends object ? (keyof T)[] :
	T extends number ? [] :
	T extends Array<unknown> | string ? string[] :
	never;

type TupleEntry<T extends readonly unknown[], I extends unknown[] = [], R = never> =
	T extends readonly [infer Head, ...infer Tail] ?
	TupleEntry<Tail, [...I, unknown], R | [`${I['length']}`, Head]> :
	R

// eslint-disable-next-line @typescript-eslint/ban-types
type ObjectEntry<T extends {}> =
	T extends object ?
	{ [K in keyof T]: [K, Required<T>[K]] }[keyof T] extends infer E ?
	E extends [infer K, infer V] ?
	K extends string | number ?
	[`${K}`, V] :
	never :
	never :
	never :
	never

// eslint-disable-next-line @typescript-eslint/ban-types
type Entry<T extends {}> =
	T extends readonly [unknown, ...unknown[]] ?
	TupleEntry<T> :
	T extends ReadonlyArray<infer U> ?
	[`${number}`, U] :
	ObjectEntry<T>

export const typedObject = {
	keys: <T extends object>(object: T): ObjectKeys<T> => Object.keys(object) as ObjectKeys<T>,
	entries: <T extends object>(object: T) => Object.entries(object) as unknown as ReadonlyArray<Entry<T>>
} as const