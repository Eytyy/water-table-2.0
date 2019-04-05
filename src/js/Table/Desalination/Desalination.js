import React, { Component } from 'react';
import DesalinationConfig from '../../desalinationConfig';
import DesalinationText from './DesalinationText';
import DesalinationIcon from '../../icons/DesalinationIcon';
import MapLayer from '../MapLayer';

class Desalination extends Component {
	render() {
		const { activeLayer, active } = this.props;

		return (
			<div className={`layer layer--desalination ${activeLayer === 'desalination' ? 'layer--is-active' : 'layer--is-hidden'}`}>
				<div className="resources resources--desalination">
					{
						DesalinationConfig.entries.map(({ id, position }) => 
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
								<DesalinationIcon />
							</div>
						)
					}
				</div>
				{
					DesalinationConfig.entries.map(({ name, figures, id, position }) =>
						<DesalinationText
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


export default MapLayer(Desalination, {
  pageName: 'desalination',
});

