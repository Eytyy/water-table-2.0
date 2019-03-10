// import Texture from './Texture';
// import { DeadSeaTopConfig, DeadSeaBottomConfig, AzraqConfig, JafarConfig, TabariahConfig, AqabaConfig } from './config';

// const canvas = document.createElement('canvas');
// const ctx = canvas.getContext('2d');
// const width = 1080;
// const height = 1920;
// let image;

// canvas.id = 'pools-textures';
// canvas.width = width;
// canvas.height = height;

// document.body.appendChild(canvas);

// // DeadSea 1
// const DeadSeaTop = new Texture(DeadSeaTopConfig);

// // DeadSea2
// const DeadSeaBottom = new Texture(DeadSeaBottomConfig);

// // Azraq
// const Azraq = new Texture(AzraqConfig);

// // Jafar
// const Jafar = new Texture(JafarConfig);

// // Aqaba
// const Aqaba = new Texture(AqabaConfig);

// // Tabariah
// const Tabariah = new Texture(TabariahConfig);

// const Textures = [DeadSeaTop, DeadSeaBottom, Azraq, Jafar, Aqaba, Tabariah];

// const init = () => {
// 	Textures.map(texture => texture.draw({image , ctx}));
// };

// export const update = () => {
// 	ctx.clearRect(0, 0, width, height);
// 	Textures.map(texture => texture.draw());
// }

// export default init;

import React, { Component } from 'react';

class Textures extends Component {
	textures = React.createRef()
	ctx = this.texture.getContext('2d');
	render() {
		return (
			<canvas width="1080" height="1920" ref={this.textures}></canvas>
		);
	}
}

export default Textures;