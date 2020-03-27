import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Listing from './Listing';
import Add from './Add';

export default class Category extends Component {
    render(){
    return (
       <div>
           <Router>
               <div>
                   <hr/>
                   <Link to="/category" className="btn btn-primary">Listing </Link> &nbsp;
                   <Link to="/category/add" className="btn btn-primary">Add</Link>
                   <Route exact path="/category" component={Listing} />
                   <Route exact path="/category/add" component={Add} />
               </div>
           </Router>
       </div>
    );
}}


