import React from 'react';

const MapLayerContent = ({ layerName, activeLayer, active, config, renderIcon, renderText }) => {
	const iconSizes = {
		'supply': {
			w: '30px',
			h: '30px',
			scale: '2',
		}, 
		'desalination': {
			w: '30px',
			h: '30px',
			scale: '2',
		},  
		'waste': {
			w: '30px',
			h: '30px',
			scale: '2',
		},  
		'canal': {
			w: '30px',
			h: '30px',
			scale: '1.5',
		},  
		'dams': {
			w: '30px',
			h: '30px',
			scale: '1.5',
		}, 
	}
	const getOpacity = (id) => {
		if (typeof active !== 'undefined' && active !== id) {
			return '0.5';
		} 
		return '1';
	};
	return (
		<div className={`layer layer--${layerName} ${activeLayer === layerName ? 'layer--is-active' : 'layer--is-hidden'}`}>
			<div className={`resources resources--${layerName}`}>
				{
					config.entries.map(({ id, position }) => 
						<div className={`icon icon--${layerName}`} key={id} style={{
							width: iconSizes[layerName].w,
							height: iconSizes[layerName].h,
							position: 'absolute',
							top: position.y + 180,
							left: position.x + 190,
							transform: `${active !== id ? 'scale(1, 1)' : `scale(${iconSizes[layerName].scale}, ${iconSizes[layerName].scale})`}`,
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
				config.entries.map(({ name, figures, id, position }) => renderText({ name, figures, id, position }))
			}
		</div>
	);
};

export default MapLayerContent;