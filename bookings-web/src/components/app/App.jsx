import React from 'react';
import {BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom';
import Getaways from '../../containers/Getaways';
import DetailPage from '../../containers/Details';

export default function App() {
  return ( 
  <Router>
    <Switch>
    <Route
            exact path="/"
            
            component={Getaways}
          />
     <Route
            exact
            path="/:id"
            component={DetailPage}
          />
    </Switch>
  </Router>
  
  
  );
}