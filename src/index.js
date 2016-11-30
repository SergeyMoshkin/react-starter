import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';
import Page from './components/Page';
import NotFound from './containers/NotFound';
import { syncHistoryWithStore, analyticsService } from 'react-router-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="page" component={Page} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
