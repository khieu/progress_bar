import React from 'react';
import ProgressBar from './ProgressBar.jsx';

/*
	This is an Example of a component that uses ProgressBar
*/
export default class SetProgressBar extends React.Component {

	constructor(props) {
		super(props);

		this.state = {	
			min: 10,
			max: '50%',
			header:'Installing',
			reset: false,
			backgroundBar:{borderColor: '#008CBA'},
			progressBar:{backgroundColor: '#008CBA'}
		};
	}

	render() {
		
		const bar = this.state;
		const {...props} = bar;

		return (
			<div className='progress-bar-wrapper'>
				<ProgressBar {...props} />
				<button className='button button-group' onClick={this.start}> Fill</button>			
				<button className='button button-group' onClick={this.reset(0)}> Reset</button>
				<button className='button button-group' onClick={this.reset(25)}> 25%</button>
				<button className='button button-group' onClick={this.reset(50)}> 50%</button>
				<button className='button button-group' onClick={this.reset(75)}> 75%</button>						
			</div>
		);
	}

	start = () => {
		this.setState({
			reset: false
		});
	};

	reset = (min) => {
		return () => {
			this.setState({
				reset: true,
				min: min 
			});
		}
	};

}