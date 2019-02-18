export default ({ x0, y0, width, height, direction, colorStops, context}) => {
	let gradient;

	const addColorStops = (stops) => {
		stops.forEach(({ pos, currColor }) => {
			if (pos <= 1) {
				gradient.addColorStop(pos, currColor);
			}
		});
	};
	
	const createGradient = () => {
		switch (direction) {
			case 'top-to-bottom':
				gradient = context.createLinearGradient(x0, y0, x0, height);
				break;
			case 'bottom-to-top':
				gradient = context.createLinearGradient(x0, height, x0, y0);
				break;
			case 'right-to-left':
				gradient = context.createLinearGradient(width, y0, x0, y0);
				break;
			default:
				gradient = context.createLinearGradient(x0, y0, width, y0);
				break;
		}

		addColorStops(colorStops);

		return gradient;
	};

	return createGradient();
}




