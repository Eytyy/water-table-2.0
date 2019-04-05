import React, { Component } from 'react';
import SupplyConfig from '../../supplyConfig';
import SupplyText from './SupplyText';
import SupplyIcon from '../../icons/SupplyIcon';
import MapLayer from '../MapLayer';

class Supply extends Component {
	render() {
		const { activeLayer, active } = this.props;

		return (
			<div className={`layer layer--supply ${activeLayer === 'supply' ? 'layer--is-active' : 'layer--is-hidden'}`}>
				<div className="resources resources--supply">
					{
						SupplyConfig.entries.map(({ id, position }) => 
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
								<SupplyIcon />
							</div>
						)
					}
				</div>
				{
					SupplyConfig.entries.map(({ name, figures, id, position }) =>
						<SupplyText
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

export default MapLayer(Supply, {
  pageName: 'supply',
});


