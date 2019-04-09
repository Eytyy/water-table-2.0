import React, { Component } from 'react';

import MapLayer from './MapLayer';
import MapLayerContent from './MapLayerContent';

import supplyConfig from '../../supplyConfig';
import SupplyIcon from '../../icons/SupplyIcon';

class Supply extends Component {
	render() {
		const { activeLayer, active } = this.props;

		return (
			<MapLayerContent
				layerName="supply"
				activeLayer={activeLayer}
				active={active}
				config={supplyConfig}
				renderIcon={() => <SupplyIcon />}
			/>
		);
	}
}

export default MapLayer(Supply, {
  pageName: 'supply',
});


