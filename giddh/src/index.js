import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth0ProviderHistory from './auth0-provider-history';
import { BrowserRouter as Router} from 'react-router-dom';

import "./index.css";


ReactDOM.render(
  <Router>
    <Auth0ProviderHistory>
      <App />
    </Auth0ProviderHistory>
  </Router>,
  document.getElementById('root')
);

