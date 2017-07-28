import React from 'react';
import ReactDom from 'react-dom';
import TodoApp from './todo/form';
import { Registro } from './registro/registro';
import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

const App = () => (
  <div>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/todoApp">Todo App</Link>
      <Link to="/registro">Todo App</Link>

    </nav>
    <div>
    <Switch>
    <Route path="/dashboard" component={TodoApp}/>
    <Route path="/todoApp" component={TodoApp}/>
    <Route path="/registro" component={Registro} />
    </Switch>
    </div>
  </div>
)
ReactDom.render((
	<Router>
	<App />	
	</Router>),
	document.getElementById('root'))
