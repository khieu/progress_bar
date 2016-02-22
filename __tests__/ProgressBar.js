jest.autoMockOff();

const React = require('react');
const TestUtils = require('react-addons-test-utils');

const ProgressBar = require('../app/components/ProgressBar.jsx').default;

describe('ProgressBar', () => {

	it('display the default header', () =>{

		var progress = TestUtils.renderIntoDocument(
			<ProgressBar />
		);

		var progressBar = TestUtils.findRenderedDOMComponentWithClass(
			progress,
			'header'
		);
		// test whether the default ProgressBar will display default Header when there's no
		// header input
		expect(progressBar.textContent).toBe('Loading: 5%');
	});
});