import React, { Component } from 'react';
import { broadcastEvent } from '../../api';
import population from '../../../data/population.1';
import { format } from 'd3';

class VisualizationControls extends Component {
	state = {
		activeYear: '1960',
		intro: true,
	};
	years = ['1960', '1970', '1980', '1990', '2000', '2010', '2019'];

	onYearClick = (e) => {
		const nextYear = e.currentTarget.id;
		
		if (this.state.intro) {
			this.toggleIntro();
		}
		
		this.setState({
			activeYear: nextYear,
		});

		broadcastEvent({
			source: 'controller',
			event:  'yearClicked',
			payload: nextYear
		});
		
	}

	toggleIntro = () => {
		const intro = !this.state.intro;
		this.setState({
			intro,
		});
		broadcastEvent({
			source: 'controller',
			event:  'toggleIntro',
			payload: intro
		});
	}

	onIntroClick = () => {
		if (this.state.intro) {
			return;
		}
		this.toggleIntro();
	}

	getPopulation = () => {
		return format(",.0f")(population.find(({ year }) => year === parseInt(this.state.activeYear, 10)).population).replace(/,/g, ' ');
	}
	

	render() {
		return (
			<div className="controller controller__data-viz">
				<section className="controller__section controller__section--intro">
					<button
						className={`intro__btn ${this.state.intro ? 'controller__btn controller__btn--active' : 'controller__btn'}`}
						onClick={this.onIntroClick}
					>
						{'Intro'}
					</button>
				</section>
				<section className="controller__section controller__section--timeline">
					<h2 className="controller__sub-title">Story &amp; Projections</h2>
					<div className="timeline__controls">
						{
							this.years.map(year =>
								<button
									id={year}
									key={year}
									className={`timeline__time ${!this.state.intro && this.state.activeYear === year ? 'controller__btn controller__btn--active' : 'controller__btn'}`}
									onClick={this.onYearClick}
								>
									{ year }
								</button>
							)
						}
					</div>
				</section>
				<section className="controller__section controller__section--data">
					<div className="controller__section--data__item">
						<h2 className="controller__sub-title">Water Levels</h2>
						<div className="data__item__content">
							<span className="data__item__content__value">--</span>
							<span className="data__item__content__label"> mcm</span>
						</div>
					</div>
					<div className="controller__section--data__item data__population">
						<h2 className="controller__sub-title">Population</h2>
						<div className="data__item__content">
							<span className="data__item__content__value">{ this.state.intro ?  '--' : this.getPopulation()}</span>
						</div>
					</div>
				</section>
			</div>
	
		);
	}
}

export default VisualizationControls;