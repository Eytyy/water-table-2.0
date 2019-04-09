import React, { Component } from 'react';

import MapLayer from '../MapLayer';
import MapLayerContent from '../MapLayerContent';
import MapLayerText from '../MapLayerText';

import damsConfig from '../../damsConfig';
import DamIcon from '../../icons/DamIcon';

class Dams extends Component {
	render() {
		const { activeLayer, active } = this.props;
		return (
			<MapLayerContent
				layerName="dams"
				activeLayer={activeLayer}
				active={active}
				config={damsConfig}
				renderIcon={() => <DamIcon />}
				renderText={({ name, figures, id, position }) => (
					<MapLayerText
						layerName="dams"
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

export default MapLayer(Dams, {
  pageName: 'dams',
});

