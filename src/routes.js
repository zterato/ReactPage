import React from 'react';
import { BrowserRouter, Switch, route, Route } from 'react-router-dom';

import Home from './Home';

function Routes(){
    return(
       <BrowserRouter>
          <Switch>
              <Route path="/" component={Home} />
              <Route path="/home" component={Home} />
          </Switch>
       </BrowserRouter>
    );
};

export default Routes;