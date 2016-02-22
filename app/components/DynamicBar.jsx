import React from 'react';
import ProgressBar from './ProgressBar';

/*
	This is an Example of a component that uses ProgressBar
*/
export default class DynamicBar extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			min: 5,
			max: '500px',
			header: 'Reloading',
			reset: true,
			backgroundBar: {
				height: '15px',
				backgroundColor: '#ddd',
				border: '2px solid #ff7373',
				borderRadius: '5px'
			},

			progressBar: {
				backgroundColor: '#ffc1c1',
				height: '100%',
				borderRadius: '5px',
				transition: 'width, 0.5s'
			}
		};
	}

	render() {
		const bar = this.state;
		const {...props} = bar;

		return (
			<div className='progress-bar-wrapper'>
				<ProgressBar {...props}/>
				<input 
					className='input'
					ref={(ref) => this.newValue = ref} 
					type='text' 
				/> 
				<button className='button' onClick={this.reset}> Reset</button>		
			</div>
		);
	}

	reset = () => {
		
		var min = Number(this.newValue.value);

		if (!(min !== NaN && min >=0 && min <= 100)) {
			min = 5;
		}
		this.setState({
			reset: true,
			min: min 
		});
		
 
	};

}