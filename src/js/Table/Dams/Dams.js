import React, { Component } from 'react';
import damsConfig from '../../damsConfig';
import DamsText from './DamsText';
import DamIcon from '../../icons/DamIcon';

import MapLayer from '../MapLayer';
import MapLayerContent from '../MapLayerContent';

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
					<DamsText
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

