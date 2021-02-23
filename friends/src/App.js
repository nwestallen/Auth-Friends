import './App.css';
import {BrowserRouter as Router,
   Switch,
   Route,
   Link
  } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Friend List App</h1>
        </header> 
      </div>
      <Switch>
        <Route path='/friends' component={FriendList} />
        <Route path='/' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
