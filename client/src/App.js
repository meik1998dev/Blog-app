import React, {Component} from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import CreatePost from './components/CreatePost';
import ViewPost from './components/ViewPost';
import EditPost from './components/EditPost';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    let token = localStorage.getItem('token');
    axios.defaults.headers.common = {'Authorization': token};
  }

  render() {
    return(
      <Router>
        <div>
          <Header></Header>
          <div className="container">
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/registration" component={Registration} />
                <Route exact path="/post/create" component={CreatePost} />
                <Route exact path="/post/view/:id" component={ViewPost} />
                <Route exact path="/post/edit/:id" component={EditPost} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
