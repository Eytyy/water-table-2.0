import React, { Component } from 'react';

import MapLayer from '../MapLayer';
import MapLayerContent from '../MapLayerContent';

import desalinationConfig from '../../desalinationConfig';
import DesalinationText from './DesalinationText';
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
				renderText={({ name, figures, id, position }) => (
					<DesalinationText
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

export default MapLayer(Desalination, {
  pageName: 'desalination',
});
