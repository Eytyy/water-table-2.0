// import Pool from './Pool';
// import { DeadSeaTopConfig, DeadSeaBottomConfig, AzraqConfig, JafarConfig, TabariahConfig, AqabaConfig } from './config';

// const canvas = document.createElement('canvas');
// const ctx = canvas.getContext('2d');
// const width = 1080;
// const height = 1920;

// canvas.id = 'pools';
// canvas.width = width;
// canvas.height = height;

// document.body.appendChild(canvas);

// // DeadSea 1
// const DeadSeaTop = new Pool(DeadSeaTopConfig);
// // DeadSea2
// const DeadSeaBottom = new Pool(DeadSeaBottomConfig);

// // Azraq
// const Azraq = new Pool(AzraqConfig);

// // Jafar
// const Jafar = new Pool(JafarConfig);

// // Aqaba
// const Aqaba = new Pool(AqabaConfig);

// // Tabariah
// const Tabariah = new Pool(TabariahConfig);

// const Pools = [DeadSeaTop, DeadSeaBottom, Azraq, Jafar, Aqaba, Tabariah];

// const init = ({ au }) => {
// 	Pools.map(pool => pool.init({ ctx, au }));
// }

// export const update = ({ au }) => {
// 	ctx.clearRect(0, 0, width, height);
// 	Pools.map(pool => pool.update({ au, ctx }));
// }

// export const updateCurrentStop = () => {
// 	Pools.map(pool => pool.updateCurrentStop() );
// }

// export default init;


import React, { Component } from 'react';

class Pools extends Component {
	render() {
		return (
			<canvas width="1080" height="1920" ref={this.pools}></canvas>
		);
	}
}

export default Pools;