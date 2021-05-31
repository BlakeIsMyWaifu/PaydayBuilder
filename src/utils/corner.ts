import { css } from 'styled-components';

export default css`
	background:
		linear-gradient(to right, #fff 2px, transparent 2px) 0 0,
		linear-gradient(to right, #fff 2px, transparent 2px) 0 100%,
		linear-gradient(to left, #fff 2px, transparent 2px) 100% 0,
		linear-gradient(to left, #fff 2px, transparent 2px) 100% 100%,
		linear-gradient(to bottom, #fff 2px, transparent 2px) 0 0,
		linear-gradient(to bottom, #fff 2px, transparent 2px) 100% 0,
		linear-gradient(to top, #fff 2px, transparent 2px) 0 100%,
		linear-gradient(to top, #fff 2px, transparent 2px) 100% 100%;

	background-repeat: no-repeat;
	background-size: 20px 20px;
`