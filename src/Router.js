import React, { Component } from 'react';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import Signup from   "./SignUp";



class Routers extends Component {
  render() {
    return (   <div >
      <Router>
     
          <Switch>
       
            <Route path="/SignUp"   exact component={Signup}></Route>
          </Switch>
      
      </Router>  </div>
    );
  }
}

export default Routers;
