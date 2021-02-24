import './App.css';
import {BrowserRouter as Router,
   Switch,
   Route,
   Link
  } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';
import FriendHeader from './components/Header';

const App = () => {
  return (
    <Router>
      <div>
        <FriendHeader />
      </div>
      <Switch>
        <PrivateRoute path='/friends' component={FriendList} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
