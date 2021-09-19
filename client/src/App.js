import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn/SignIn';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path= "/" exact component={Home}/>
        <Route path= "/signin" exact component={SignIn}/>
        <Route path= "signup" exact component={SignIn}/>
      </Switch>
    </Router>
  );
}

export default App;
