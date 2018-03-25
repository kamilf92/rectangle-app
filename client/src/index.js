import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app/App';
import registerServiceWorker from './registerServiceWorker';
import KeenClient from './services/KeenClient';

KeenClient.initAutoTracking({
	recordClicks: true,
	recordPageViews: true
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();