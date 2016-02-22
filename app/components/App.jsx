import React from 'react';
import SetProgressBar from './SetProgressBar';
import DynamicBar from './DynamicBar';
import ColorDynamicBar from './ColorDynamicBar';
import ProgressBar from './ProgressBar';


export default class App extends React.Component {
	render() {
		return (
			<div>
				<SetProgressBar/>
				<DynamicBar/>
				<ColorDynamicBar/>
				<ProgressBar/>
			</div>
		);
	}

}