export const spaceBetween = (str: string): string => {
	return str.replace(/([A-Z])/g, ' $1')
}

export const capitalizeEachWord = (str: string): string => {
	return str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
}