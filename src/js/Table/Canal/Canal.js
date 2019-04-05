import React, { Component } from 'react';
import CanalConfig from '../../canalConfig';
import CanalText from './CanalText';
import CanalIcon from '../../icons/CanalIcon';
import MapLayer from '../MapLayer';

class Canal extends Component {
	render() {
		const { activeLayer, active } = this.props;

		return (
			<div className={`layer layer--canal ${activeLayer === 'canal' ? 'layer--is-active' : 'layer--is-hidden'}`}>
				<div className="resources resources--canal">
					{
						CanalConfig.entries.map(({ id, position }) => 
							<div className="icon" key={id} style={{
								width: '50px',
								height: '50px',
								position: 'absolute',
								top: position.y + 180,
								left: position.x + 190,
								transform: `${active !== id ? 'scale(1, 1)' : 'scale(3, 3)'}`,
								zIndex: `${active !== id ? '2' : '1'}`
								}}
							>
								<CanalIcon />
							</div>
						)
					}
				</div>
				{
					CanalConfig.entries.map(({ name, figures, id, position }) =>
						<CanalText
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


export default MapLayer(Canal, {
  pageName: 'canal',
});

