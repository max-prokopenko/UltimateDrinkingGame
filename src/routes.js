import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';


//redux
import store, { dispatch } from './store.js';

const Routes = (props) => (
  
    <Router {...props}>
      <Route path="/" component={App}/>
    </Router>
    
);



export default  Routes;

