import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Form from './components/Form';

ReactDOM.render(<Form />, document.getElementById('root'));
registerServiceWorker();
