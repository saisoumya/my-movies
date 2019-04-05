import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import MoviesHub from './Components/MoviesHub'
import MovieDetail from './Components/MovieDetail';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/home" component={MoviesHub}></Route>
          <Route path="/SignUp" component={SignUp}></Route>
          <Route path="/movie=:movieName" component={MovieDetail}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
