import React from 'react';

const MapControlButton = ({ activeLayer, label, title, renderIcon, onClick }) => {
	const isActive = () => {
		if (activeLayer === label) {
			return true;
		} else if (label === 'default' && (activeLayer === 'surface' || activeLayer === 'groundwater')) {
			return true;
		}
		return false;
	}
	return (
		<div 
			className={`btn-group ${isActive() ? 'is-active' : ''}`}
			onClick={() => { onClick(label); }}
		>
			<i className={`btn-icon icon--${label}`}>
				{renderIcon()}
			</i>
			<span className="btn-label">{title}</span>
		</div>
	)
};

export default MapControlButton;