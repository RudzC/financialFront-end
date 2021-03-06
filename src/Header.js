import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import About from './About';
import Home from './Home';
import Category from './category/Category';

export default class Header extends Component {
    render(){
    return (
        
<Router>
    
<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category">Category</Link>
            </li>


            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
            </button>
            </form>
  </div>      
</nav>
        <div className="row">
            <div className="col-md-12   ">
               <Route exact path='/' component={Home}/>
               <Route exact path='/about' component={About}/>
               <Route exact path='/category' component={Category}/>
            </div>
        </div>
</div>
</Router>

    );
}
}


