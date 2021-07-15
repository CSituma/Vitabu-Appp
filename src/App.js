import React, { Component } from 'react'
import Register from "./Components/Forms/Register"
import Login from "./Components/Forms/Login"
import About from "./Components/Layout/About"
import Home from "./Components/Layout/Home"
import Navbar from "./Components/Layout/Navbar/Navbar"
import Dashboard from "./Components/Layout/Dashboard"
import Feed from "./Components/Layout/Feed"
//import Posts from './Components/Forms/Records'
import PrivateRoute from './Components/Layout/PrivateRoute'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Records from './Components/Forms/Record'
import Post from './Components/Forms/Record'

class App extends Component {
  
  render() {
    return (
     
         <Router>    
            <Navbar/> 
             <Switch>
        <Route path='/'exact component={Home}/>     
         <Route path='/About'component={About}/>
        <Route  exact path='/Dashboard'component={Dashboard}/>
        <Route path='/Login'component={Login}/>
        <Route path='/Post'component={Post}/>
        <Route path='/Register'component={Register}/>
        <Route path='/Feed'component={Feed}/>
    
          </Switch>   
      </Router>

  
    )
  }
}

export default App;
