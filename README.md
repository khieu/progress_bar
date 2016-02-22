# progress_bar
A dynamic progress bar component (ProgressBar) created by React. There are also 3 example components that utilize ProgressBar Component.

Run
----------
  Install dependencies: `npm install`. <br/>
  Run `npm start` to start the examples. <br/>
  Browse at `http://localhost:8080/`
  
  
Test
----------
  run `npm test`
  
Notes 
----------

To customize the ProgressBar Component, simply pass `min,max,header` as `props` to ProgressBar.<br/>
To change css, pass css objects to `backgrounBar` and ProgressBar props in ProgressBar. <br/>
To use the dynamic color change, pass appropriate `classNames` to ProgressBar.<br/>
<br/>
The start function in the ProgressBar component automatically refills the bar and is only for demonstration purpose. It can be triggered by setting the `reset` props to false. In reality the actual progess shouldn't be determined by this function<br/>
  
Further Improvement
----------

Right now the css of the color-changing feature (the bar's color changes regarding the %) is not customizable yet. The current mechanism only manipulates className of the progres bar in order to change color.<br/>
Another idea would be to allow customizable shape progress bar (eg. radial progress bar).<br/>
The current tests are rather simple. More robust tests like testing the change in css are needed in the future.<br/>
