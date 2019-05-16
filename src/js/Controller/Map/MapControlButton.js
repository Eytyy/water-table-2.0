import React from 'react';

const MapControlButton = ({ activeLayer, label, title, renderIcon, onClick, parent, children, defaultChild }) => {
	const isActive = () => {
		if (activeLayer === label || (parent && parent === activeLayer && defaultChild)){
			return true;
		} else if (children) {
			const isParentOfActiveSub = children.indexOf(activeLayer) >= 0;
			return isParentOfActiveSub;
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