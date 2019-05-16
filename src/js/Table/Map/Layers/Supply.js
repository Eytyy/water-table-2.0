import React, { Component } from 'react';

import MapLayer from './MapLayer';
import MapLayerContent from './MapLayerContent';

import supplyConfig from '../../../supplyConfig';
import SupplyIcon from '../../../icons/SupplyIcon';
import SupplyText from './SupplyText';

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
				renderText={(props) => <SupplyText {...props} />}
			/>
		);
	}
}

export default MapLayer(Supply, {
  pageName: 'supply',
});


