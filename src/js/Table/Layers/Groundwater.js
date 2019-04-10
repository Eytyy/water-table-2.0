import React, { Component } from 'react';

import MapLayer from './MapLayer';
import MapLayerContent from './MapLayerContent';

import groundwaterconfig from '../../groundwaterconfig';
import GroundWaterIcon from '../../icons/GroundWaterIcon';

class Groundwater extends Component {
	render() {
		const { activeLayer, active } = this.props;
		return (
			<MapLayerContent
				layerName="groundwater"
				activeLayer={activeLayer}
				active={active}
				config={groundwaterconfig}
				renderIcon={() => <GroundWaterIcon />}
			/>
		);
	}
}

export default MapLayer(Groundwater, {
  pageName: 'groundwater',
});

