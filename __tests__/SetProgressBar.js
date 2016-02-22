jest.dontMock('../app/components/SetProgressBar.jsx');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

const SetProgressBar = require('../app/components/SetProgressBar.jsx').default;

describe('SetProgressBar', () => {
	
	it('display the default header', () =>{

		var progress = TestUtils.renderIntoDocument(
			<SetProgressBar />
		);

		var changeMinButtons = TestUtils.scryRenderedDOMComponentsWithTag(
			progress,
			'button'
		);
		// test click the 75% button
		TestUtils.Simulate.click(changeMinButtons[4]);
		expect(progress.state.min).toBe(75);
		// test click the 50% button
		TestUtils.Simulate.click(changeMinButtons[3]);
		expect(progress.state.min).toBe(50);
		// test click the 25% button
		TestUtils.Simulate.click(changeMinButtons[2]);
		expect(progress.state.min).toBe(25);
		// test click the reset button
		TestUtils.Simulate.click(changeMinButtons[1]);
		expect(progress.state.min).toBe(0);
	});
});