import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

/* Importar componentes */
import App from './components/App/App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
