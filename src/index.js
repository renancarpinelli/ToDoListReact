import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchField from './components/SearchField';
import './index.css';
import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import TodoGrid from './components/TodoGrid';


ReactDOM.render(
  <Router history={browserHistory}> 
   <Route path="/" component={App} >
      	<IndexRoute component={TodoGrid} />
   		<Route path="pesquisa" component={SearchField} />
    </Route>
   </Router>,
  document.getElementById('root')
);
