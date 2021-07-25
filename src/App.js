import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import PrivateRoute  from './components/privateRoute';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <PrivateRoute path="/home" component={HomePage} />
            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
