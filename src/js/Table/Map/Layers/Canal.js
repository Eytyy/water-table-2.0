import React, { Component } from 'react';

import MapLayer from './MapLayer';
import MapLayerContent from './MapLayerContent';

import CanalIcon from '../../../icons/CanalIcon';
import canalConfig from '../../../canalConfig';
import CanalText from './CanalText';

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
				renderText={(props) => <CanalText {...props} />}
			/>
		);
	}
}


export default MapLayer(Canal, {
  pageName: 'canal',
});

