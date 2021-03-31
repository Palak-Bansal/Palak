import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
//import Hook from './Hook';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
