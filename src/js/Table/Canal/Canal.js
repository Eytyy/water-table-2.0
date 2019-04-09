import React, { Component } from 'react';

import MapLayer from '../MapLayer';
import MapLayerContent from '../MapLayerContent';
import MapLayerText from '../MapLayerText';

import CanalIcon from '../../icons/CanalIcon';
import canalConfig from '../../canalConfig';

class Canal extends Component {
	render() {
		const { activeLayer, active } = this.props;

		return (
			<MapLayerContent
				layerName="canal"
				activeLayer={activeLayer}
				active={active}
				config={canalConfig}
				renderIcon={() => <CanalIcon />}
				renderText={({ name, figures, id, position }) => (
					<MapLayerText
						layerName="canal"
						key={`rx-${id}`}
						active={active}
						name={name}
						figures={figures}
						id={id}
						position={position}
					/>
				)}
			/>
		);
	}
}


export default MapLayer(Canal, {
  pageName: 'canal',
});

