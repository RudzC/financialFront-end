import React, { Component } from 'react';
import axios from 'axios'

export default class Listing extends Component {

    constructor() {
        super();
        this.state={
            categories:[]
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/category')
        .then(response => {
            this.setState({categories:response.data})
        })
    }
    onDelete(category_id) {
      axios.delete('http://127.0.0.1:8000/api/category/delete/'+category_id, {
        headers: {
          
        },
        data: {
          
        }
      });
    }

    
    // onDelete(category_id) {
    //   axios.delete('http://127.0.0.1:8000/api/category/delete/'+category_id, {headers:{'Content-Type':'application/json'} })
    //   .then(response => {
       
    //   })
    // }

    render(){
    return (
       <div>
           <hr/>
           <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Category Name</th>
      <th scope="col">Status</th>
      <th scope="col">Created date</th>
      <th scope="col">Updated date</th>
    </tr>
  </thead>
  <tbody>
      { 
      this.state.categories.map( (category,index) =>{
          return (
    <tr key={index}>
      <th scope="row">{category.id}</th>
      <td>{category.name}</td>
      <td>{category.active===1?("Active"):("Inactive")}</td>
      <td>{category.created_at}</td>
      <td>{category.updated_at}</td>
      <td><button onClick={this.onDelete(category.id)}>Delete</button></td>
    </tr>)
    })
    }
  </tbody>
</table>
       </div>
    );
}}


