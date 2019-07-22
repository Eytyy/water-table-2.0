import React, { Component } from 'react';

import MapLayer from './MapLayer';
import MapLayerContent from './MapLayerContent';

import damsConfig from '../../../damsConfig';
import DamIcon from '../../../icons/DamIcon';
import DamsText from './DamsText';

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
				renderText={(props) => <DamsText {...props} />}
			/>
		);
	}
}

export default MapLayer(Dams, {
  pageName: 'dams',
});
