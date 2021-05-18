export default (event: React.WheelEvent, ref: React.RefObject<HTMLDivElement>) => {
	const div = ref.current
	if (!div) return
	const containerScrollPosition = div.scrollLeft
	div.scrollTo({
		top: 0,
		left: containerScrollPosition + event.deltaY,
		behavior: 'auto'
	})
}