import React from 'react';
import PropTypes from 'prop-types';

const MapLayer = ({ layerName, config, active, activeLayer, renderIcon, onClick }) => {
	return (
		<div className={`${activeLayer === layerName ? 'is-active' : 'is-hidden'} resources resources--${layerName}`}>
			{
				config.entries.map(({ id, position }) => 
					<div
						className={`icon icon--${layerName}`}
						key={id}
						id={id}
						style={{
							width: '50px',
							height: '50px',
							position: 'absolute',
							top: position.y,
							left: position.x,
							transform: `${active !== id ? 'scale(1, 1)' : 'scale(3, 3)'}`,
							zIndex: `${active !== id ? '2' : '1'}`
						}}
						onClick={e => onClick(e, layerName)}
					>
						{
							renderIcon()
						}
					</div>
				)
			}
		</div>
	);
};

MapLayer.defaultProps = {
	onClick: () => {
		return false;
	}
}

export default MapLayer;