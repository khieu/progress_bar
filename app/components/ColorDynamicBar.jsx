import React from 'react';
import ProgressBar from './ProgressBar';

/*
	This is an Example of a component that uses ProgressBar
*/
export default class ColorDynamicBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			min: 0,
			max: '395px',
			header: 'Poverty Rate',
			reset: true,
			backgroundBar: {
				height: '15px',
				backgroundColor: '#ddd',
				border: '1px',
				borderRadius: '5px'
			},

			progressBar: {
				backgroundColor: '#f63a0f',
				height: '100%',
				borderRadius: '5px',
				transition: '0.5s',
				transitionProperty: 'width, background-color'
			},
		};
	}

	render() {
		const bar = this.state;
		const {...props} = bar;

		return (
			<div className='progress-bar-wrapper'>
				<ProgressBar {...props}/>
				<button className='button button-group' onClick={this.reset(5)}> 5%</button>
				<button className='button button-group' onClick={this.reset(25)}> 25%</button>
				<button className='button button-group' onClick={this.reset(50)}> 50%</button>
				<button className='button button-group' onClick={this.reset(75)}> 75%</button>
				<button className='button button-group' onClick={this.reset(100)}> 100%</button>							
			</div>
		);
	}

	reset = (min) => {
		return () => {
			this.setState({
				reset: true,
				classNames: 'progress'+min ,
				min: min
			});
		}
	};

}