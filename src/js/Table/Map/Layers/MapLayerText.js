import React, { Component } from 'react';
import { calculateTextPosition } from '../../../utility';

class MapLayerText extends Component {
	textBox = React.createRef()

	render() {
		const { position, active, id, layerName, iconWidth, iconHeight, renderText, entryProps } = this.props;
		const isActive = typeof active !== 'undefined' && active === id;
		const margin = 50;
		let textWidth = this.textBox.current ? this.textBox.current.offsetwidth : 240;
		let textHeight = this.textBox.current ? this.textBox.current.offsetHeight : 120;
		const maxScreenWidth = 1080;

		const { orientation, positionCSS } = calculateTextPosition({
			x: position.x + 190,
			y: position.y + 180,
			iconWidth,
			iconHeight,
			margin,
			textHeight,
			textWidth,
			maxScreenWidth
		});

		const style = {
			color: '#FFF',
			opacity: isActive ? '1' : '0',
			...positionCSS
		};
	
		return (
			<div ref={this.textBox} style={style} className={`project-description project-description--${layerName.toLowerCase()} project-description--${orientation.x} project-description--${orientation.y}`}>
				{ renderText(entryProps) }
			</div>
		);
	}
}

export default MapLayerText;