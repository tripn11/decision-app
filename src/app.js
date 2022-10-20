//every file required for the page rendering or overall app rendering is imported here.
 
import React from 'react'; //any file with jsx must import react
import ReactDOM from 'react-dom'; //any file that renders must have react-dom
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'; //to set the page to a standard, removing margins and other settings that might be added by various browsers
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
