import React from 'react';
import Nav from './components/Nav.js'
import Login from './components/Login.js'
import About from './components/About.js'
import {Link,Route, Switch}  from 'react-router-dom'
import './App.css';


function App() {
  return (
   <div>
     <h1>We will put nav bar here</h1>
     <div>
       <Link to="/login">Login</Link>
       <Link to="/nav">Carousel</Link>
       <Link to="/about">About</Link>
     </div>
     {/* <Nav /> */}
     <Switch>
     <Route component={Login} path="/login"/>
     <Route component={Nav} path="/nav"/>
     <Route component={About} path="/about"/>
     </Switch>
   </div>
  );
}

export default App;
