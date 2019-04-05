import React, { Component } from 'react';
import { socket } from '../../api';
import wastewaterConfig from '../../wastewaterConfig';
import WasteWaterText from './WasteWaterText';
import TreatmentPlantIcon from '../../icons/TreatmentPlantIcon';
import MapLayer from '../MapLayer';
import MapLayerContent from '../MapLayerContent';


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
				renderText={({ name, figures, id, position }) => (
					<WasteWaterText
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

export default MapLayer(WasteWater, {
  pageName: 'waste',
});



