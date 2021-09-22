import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import SignUpPatient from "./pages/SignUpPatient";
import SignUpDoctor from "./pages/SignUpDoctor";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        asd
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/feed" exact component={Feed} />
        <Route path="/signup" exact component={SignUpPatient} />
        <Route path="/signupDoctor" exact component={SignUpDoctor} />
      </Switch>
    </Router>
  );
}

export default App;
