/* global ENACT_PACK_ISOMORPHIC */
import { createRoot, hydrateRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import { Provider } from 'react-redux';

import './index.css';
import MySandstoneApp from './App/App';

const appElement = ( <Provider store={store}><MySandstoneApp /></Provider>);

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
	if (ENACT_PACK_ISOMORPHIC) {
		hydrateRoot(document.getElementById('root'), appElement);
	} else {
		createRoot(document.getElementById('root')).render(appElement);
	}
}

export default appElement;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
// Learn more: https://github.com/enactjs/cli/blob/master/docs/measuring-performance.md
reportWebVitals();
