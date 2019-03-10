import React from 'react';

const VisualizationControls = () => {
	return (
		<>
			<section className="timeline">
				<h2>Story &amp; Projections</h2>
				<button>1960</button>
				<button>1970</button>
				<button>1980</button>
				<button>1990</button>
				<button>2000</button>
				<button>2010</button>
				<button>2019</button>
			</section>
			<section className="data">
				<section>
					<h2>Water Levels</h2>
				</section>
				<section>
					<h2>Population</h2>
				</section>
			</section>
		</>

	);
};

export default VisualizationControls;