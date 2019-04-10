import React from 'react';
import MapLayerText from './MapLayerText';

const MapLayerContent = ({ layerName, activeLayer, active, config, renderIcon, renderText }) => {
	const iconSizes = {
		'supply': {
			w: 30,
			h: 30,
			scale: '2',
		}, 
		'groundwater': {
			w: 30,
			h: 30,
			scale: '2',
		}, 
		'desalination': {
			w: 30,
			h: 30,
			scale: '2',
		},  
		'waste': {
			w: 30,
			h: 30,
			scale: '2',
		},  
		'canal': {
			w: 50,
			h: 30,
			scale: '1.5',
		},  
		'dams': {
			w: 30,
			h: 30,
			scale: '1.5',
		}, 
	}
	const getOpacity = (id) => {
	
		if (typeof active !== 'undefined' && active !== id) {
			if (active === 'default' && (id === 'surface' || id === 'ground')) {
				return '1';
			}
			return '0.5';
		} 
		return '1';
	};

	const getLayerVisibility = () => {
		if (activeLayer === layerName) {
			return true;
		} else {
			if (activeLayer === 'default' && (layerName === 'surface' || layerName === 'groundwater')) {
				return true;
			}
		}
		return false;
	};

	const width = iconSizes[layerName].w;
	const height = iconSizes[layerName].h;
	const scale = iconSizes[layerName].scale;
	const isLayerActive = getLayerVisibility();
	return (
		<div className={`layer layer--${layerName} ${isLayerActive ? 'layer--is-active' : 'layer--is-hidden'}`}>
			<div className={`resources resources--${layerName}`}>
				{
					config.entries.map(({ id, position }) => 
						<div className={`icon icon--${layerName}`} key={id} style={{
							width: `${width}px`,
							height: `${height}px`,
							position: 'absolute',
							top: position.y + 180,
							left: position.x + 190,
							transform: `${active !== id ? 'scale(1, 1)' : `scale(${scale}, ${scale})`}`,
							opacity: getOpacity(id),
							zIndex: `${active !== id ? '2' : '1'}`
							}}
						>
						{
							renderIcon()
						}
						</div>
					)
				}
			</div>
			{
				config.entries.map(({ name, figures, id, position }) => 
					<MapLayerText
						layerName={layerName}
						key={`rx-${id}`}
						active={active}
						name={name}
						figures={figures}
						id={id}
						position={position}
						iconWidth={width}
						iconHeight={height}
					/>
				)
			}
		</div>
	);
};

export default MapLayerContent;