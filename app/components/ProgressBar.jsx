import React from 'react';
import classNames from 'classnames';


export default class ProgressBar extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			progress: props.min ? props.min : 5
		};
	}

	componentWillReceiveProps = (nextProps) => {
		clearInterval(this.autoIncrement);
		if (!nextProps.reset){
			this.start();
		} else {
			this.setState({
				progress: nextProps.min
			});
		}
	};

	render() {
		const progress = this.state.progress + '%';
		const header = this.props.header ? this.props.header : 'Loading';
		// check if there's extra classNames pass to progressBar
		const progressClassName = classNames('progress-bar', this.props.classNames);
		// check if there is customized style css
		var style = this.props.progressBar ? this.props.progressBar : {};
		// update width using progress state propertu
		style = Object.assign(
			{}, 
			style, 
			{width: progress}
		);
		// check if there is customized background css
		var backgroundStyle = this.props.backgroundBar ? this.props.backgroundBar : {};
		// set the max length of the bar to max value 
		backgroundStyle = Object.assign(
			{}, 
			backgroundStyle, 
			{
				width: this.props.max ? this.props.max : '35%'
			}
		);

		return (
			<div className='progress-bar-component'>
				<div className='header'>
					{header}: {progress}
				</div>
				<div className='background-bar' style={backgroundStyle}>
					<span className={progressClassName} style={style}></span>
				</div>	
			</div>
		);
	}

	/* This function refills the progress bar automatically.
	* it should only be used for demonstration purpose, in reality the actual
	* progress should be updated by the owner component of ProgressBar.
	*/
	start = () => {

		var width = this.state.progress;
		this.autoIncrement = setInterval(increment.bind(this), 200);
		function increment() {
			if (width >= 100) {
				clearInterval(this.autoIncrement);
			} else {
				var increment = Math.floor(Math.random() * 5) + 1;

			  	width = (width+increment >= 100) ? 100 : width+increment;

			  	this.setState({
			  		progress: width
			  	});
			}
		};
	};
}