import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

//import connect helper.* as actions wireing up class app 
import Header from './Header';//replace from const header to inport header 
import Landing from './Landing';
const Dashboard = () => <h2>Dashboad</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

//refactor app to class components structur ,lyfecicle action creator
class App extends Component {
componentDidMount() {
 this.props.fetchUser();
}
 render() {
  return (
    <div className="container">
    <BrowserRouter>
      <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
      </div>
    </BrowserRouter>
    </div>
 );
}
}

//header is always top dont need to path route 
//exact ..jsx assume mean is exact = {true} but dont have to write like so 
//exact ...if sowing landing ...current route is exactly "/".../surveys is only see dashboard
//dont have to specify emaily .com /   only / is fine 
//browser router path component 


export default connect(null, actions)(App);