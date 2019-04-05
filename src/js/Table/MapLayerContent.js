import React from 'react';

const MapLayerContent = ({ layerName, activeLayer, active, config, renderIcon, renderText }) => {
	
	return (
		<div className={`layer layer--${layerName} ${activeLayer === layerName ? 'layer--is-active' : 'layer--is-hidden'}`}>
			<div className={`resources resources--${layerName}`}>
				{
					config.entries.map(({ id, position }) => 
						<div className="icon" key={id} style={{
							width: '50px',
							height: '50px',
							position: 'absolute',
							top: position.y + 180,
							left: position.x + 190,
							transform: `${active !== id ? 'scale(1, 1)' : 'scale(3, 3)'}`,
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