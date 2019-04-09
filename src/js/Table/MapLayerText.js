import React, { Component } from 'react';
import { calculateTextPosition } from '../utility';

class MapLayerText extends Component {
	textBox = React.createRef()

	render() {
		const { position, figures, active, id, name, layerName } = this.props;
		const iconWidth = 50;
		const iconHeight = 50;
		const isActive = typeof active !== 'undefined' && active === id;
		const margin = 0;
		let textWidth = this.textBox.current ? this.textBox.current.offsetwidth : 240;
		let textHeight = this.textBox.current ? this.textBox.current.offsetHeight : 120;
		const maxScreenWidth = 1080;

		const { orientation, positionCSS } = calculateTextPosition({ x: position.x + 190, y: position.y + 180, iconWidth, iconHeight, margin, textHeight, textWidth, maxScreenWidth });

		const style = {
			color: '#FFF',
			opacity: isActive ? '1' : '0',
			...positionCSS
		};
	
		return (
			<div ref={this.textBox} style={style} className={`resources-text resources-text--${layerName.toLowerCase()} resources-text--${orientation.x} resources-text--${orientation.y}`}>
				<h2 className="resource-text__title">{name}</h2>
				<div className="resource-text__group">
					{
						figures.map(({ label, value }) =>
							<div key={`${id}-${label}`} className="resource-text__group__item">
								<div className="resource-text__figure-label">{label}</div>
								<div className="resource-text__figure-value">{value}</div>
							</div>
						)
					}
				</div>
			</div>
		);
	}
}

export default MapLayerText;