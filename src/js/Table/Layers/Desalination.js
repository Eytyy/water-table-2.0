import React, { Component } from 'react';

import MapLayer from './MapLayer';
import MapLayerContent from './MapLayerContent';

import desalinationConfig from '../../desalinationConfig';
import DesalinationIcon from '../../icons/DesalinationIcon';


class Desalination extends Component {
	render() {
		const { activeLayer, active } = this.props;
		return (
			<MapLayerContent
				layerName="desalination"
				activeLayer={activeLayer}
				active={active}
				config={desalinationConfig}
				renderIcon={() => <DesalinationIcon />}
			/>
		);
	}
}

export default MapLayer(Desalination, {
  pageName: 'desalination',
});