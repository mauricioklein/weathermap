import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Form } from './components';
import './index.css'

ReactDOM.render(<Form />, document.getElementById('root'));
registerServiceWorker();
