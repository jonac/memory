import React from 'react';
import { render } from 'react-dom';
import { Router, Route,IndexRoute, browserHistory } from 'react-router';

import MainLayout from '/imports/ui/mainlayout';
import main from '/imports/ui/components/main';

Meteor.startup( () => {
  render( 
    <Router history={ browserHistory }>
      <Route path="/" component={ MainLayout } >

        <IndexRoute component={main} />

      </Route>


    </Router>, 
    document.getElementById( 'app' ) 
  );
});