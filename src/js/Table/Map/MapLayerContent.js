import React from 'react';
import MapLayerText from './MapLayerText';

const MapLayerContent = (props) => {
	const {layerName, activeLayer, active, config, renderIcon, renderText, children} = props;
	const iconSizes = {
		'supply': {
			w: 25,
			h: 25,
			scale: '2',
		}, 
		'groundwater': {
			w: 25,
			h: 25,
			scale: '2',
		}, 
		'desalination': {
			w: 25,
			h: 25,
			scale: '2',
		},  
		'waste': {
			w: 25,
			h: 25,
			scale: '2',
		},  
		'canal': {
			w: 50,
			h: 30,
			scale: '1.5',
		},  
		'dams': {
			w: 25,
			h: 25,
			scale: '1.5',
		}, 
	}

	const getOpacity = (id) => {
		if (typeof active !== 'undefined' && active !== id) {
			if (active === 'natural' && (id === 'surface' || id === 'ground')) {
				return '1';
			}
			return '0.5';
		} 
		return '1';
	};

	const getLayerVisibility = () => {
		if (activeLayer === layerName || (activeLayer === 'natural' && layerName === 'surface')) {
			return true;
		}
		return false;
	};

	const width = iconSizes[layerName].w;
	const height = iconSizes[layerName].h;
	const scale = iconSizes[layerName].scale;
	const isLayerActive = getLayerVisibility();
	return (
		<div className={`layer layer--${layerName} ${isLayerActive ? 'layer--is-active' : 'layer--is-hidden'}`}>
			{ children && children}
			<div className={`resources resources--${layerName}`}>
				{
					config.entries.map(({ id, position }) => 
						<div className={`icon icon--${layerName}`} key={id} style={{
							width: `${width}px`,
							height: `${height}px`,
							position: 'absolute',
							top: position.y,
							left: position.x,
							transform: `${active !== id ? 'scale(1, 1)' : `scale(${scale}, ${scale})`}`,
							opacity: getOpacity(id),
							zIndex: `${active !== id ? '2' : '1'}`
							}}
						>
							{ renderIcon() }
						</div>
					)
				}
			</div>
			{
				config.entries.map((props) => 
					<MapLayerText
						layerName={layerName}
						key={`rx-${props.id}`}
						active={active}
						id={props.id}
						position={props.position}
						iconWidth={width}
						iconHeight={height}
						renderText={renderText}
						entryProps={props}
					/>
				)
			}
		</div>
	);
};

export default MapLayerContent;