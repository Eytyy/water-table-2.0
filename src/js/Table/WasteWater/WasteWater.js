import React, { Component } from 'react';
import { socket } from '../../api';
import WasteWaterConfig from '../../wastewaterConfig';
import WasteWaterText from './WasteWaterText';
import TreatmentPlantIcon from '../../icons/TreatmentPlantIcon';
import MapLayer from '../MapLayer';

class WasteWater extends Component {
	render() {
		const { activeLayer, active } = this.props;

		return (
			<div className={`layer layer--waste ${activeLayer === 'waste' ? 'layer--is-active' : 'layer--is-hidden'}`}>
				<div className="resources resources--waste-plants">
					{
						WasteWaterConfig.entries.map(({ id, position }) => 
							<div className="icon" key={id} style={{
								width: '50px',
								height: '50px',
								position: 'absolute',
								top: position.y + 180,
								left: position.x + 190,
								transform: `${active !== id ? 'scale(1, 1)' : 'scale(3, 3)'}`,
								opacity: `${ typeof active !== 'undefined' && active !== id ? '0.2' : '1'}`,
								zIndex: `${active !== id ? '2' : '1'}`
								}}
							>
								<TreatmentPlantIcon />
							</div>
						)
					}
				</div>
				{
					WasteWaterConfig.entries.map(({ name, figures, id, position }) =>
						<WasteWaterText
							key={`rx-${id}`}
							active={active}
							name={name}
							figures={figures}
							id={id}
							position={position}
						/>
					)
				}
			</div>
			
		);
	}
}

export default MapLayer(WasteWater, {
  pageName: 'waste',
});



