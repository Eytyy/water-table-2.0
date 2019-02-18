// import Particles from './research/particles';

// import Pools, { update as updatePools, updateCurrentStop } from './Pools/Pools';
// import Textures, { update as updateTextures } from './Pools/Textures';

// document.body.style.backgroundColor = '#000';

// const Anim = { //animation settings
// 	'duration': 4000,
// 	'interval' : 10,
// 	'stepUnit' : 1.0,
// 	'currUnit' : 0.0
// };

// let raf;

// let state = {
// 	playing: false
// };

// const animate = () => {
// 	let steps = Anim.duration / Anim.interval; // 300
// 	let step_u = Anim.stepUnit/steps; // 1.0/300
	
// 	updatePools({au: Anim.currUnit});
// 	if (Anim.currUnit >= 1.0){
// 		Anim.currUnit = 0;
// 		updateCurrentStop();
// 	}

// 	Anim.currUnit += step_u;
// 	raf = requestAnimationFrame(animate);
// }

// const startAnimation = () => {
// 	animate();
// }

// const stopAnimation = () => {
// 	cancelAnimationFrame(raf);
// }

// document.body.addEventListener('click', () => {
// 	if (!state.playing) {
// 		startAnimation();
// 	} else {
// 		stopAnimation();
// 	}
// 	state.playing = !state.playing;
// });

// Textures();
// Pools({ au: Anim.currUnit});

import linearAlgebra from './research/linearAlgebra';