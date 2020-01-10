import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

/* Importar ArtistContext provider */
import { Provider } from './context/context';

/* Importar componentes */
import App from './components/App/App';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById('root'));

serviceWorker.unregister();
