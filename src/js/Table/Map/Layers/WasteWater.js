import React, { Component } from 'react';

import MapLayer from './MapLayer';
import MapLayerContent from './MapLayerContent';

import wastewaterConfig from '../../../wastewaterConfig';
import TreatmentPlantIcon from '../../../icons/TreatmentPlantIcon';
import WasteWaterText from './WasteWaterText';

class WasteWater extends Component {
	render() {
		const { activeLayer, active } = this.props;

		return (
			<MapLayerContent
				layerName="waste"
				activeLayer={activeLayer}
				active={active}
				config={wastewaterConfig}
				renderIcon={() => <TreatmentPlantIcon />}
				renderText={(props) => <WasteWaterText {...props} />}
			/>
		);
	}
}

export default MapLayer(WasteWater, {
  pageName: 'waste',
});


