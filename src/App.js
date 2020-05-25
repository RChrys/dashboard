import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard"
import Menu from "./components/Menu"
import Login from "./components/Login"
import Home from "./components/Home"
import Post from "./components/Post"
import PrivateRoute from "./components/PrivateRoute"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged : localStorage.getItem("userToken") ? true : false
    }
  }

  log = (etat) => {
    this.setState({
      isLogged : etat
    })
  }


  render(){
    return (
      <div className="App">
        <Router>
          <Menu>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            {!this.state.isLogged ? <Link to="/login">Login</Link> : <Link to="/logout">Logout</Link>}
          </Menu>
          <Switch>
            <Route exact path="/" render={(props) => (<Home isLogged={this.state.isLogged} {...props} />)} />

            <Route path="/login" render={(props) => (<Login isLogged={this.state.isLogged} log={this.log} {...props} />)} />
            <Route path="/logout" render={(props) => (<Login isLogged={this.state.isLogged} log={this.log} {...props} />)} />

            <PrivateRoute path="/dashboard" isLogged={this.state.isLogged} component={Dashboard} />
            <PrivateRoute path="/post/:id" isLogged={this.state.isLogged} render={(props) => (<Post {...props} />)} />

          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
