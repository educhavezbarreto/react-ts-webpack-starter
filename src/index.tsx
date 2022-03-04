import 'babel-polyfill';
import './style.css';
import {render} from 'react-dom';
import App from './App';

render(<App />, document.getElementById('app'));
