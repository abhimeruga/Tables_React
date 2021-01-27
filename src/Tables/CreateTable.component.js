import React, { Component } from 'react'
import axios from 'axios'

export class CreateTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             type:'',
             total_seats:0,
             occupied_seats: 0
        }
        this.formHandler = this.formHandler.bind(this);
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm = (event) => {
        const config = {
            method: 'post',
            url: 'http://localhost:2000/tables',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : JSON.stringify(this.state)
          };
          axios(config)
            .then((response) => {
              console.log(response);
              
            })
            .catch(function (error) {
              console.log(error);
        });
        this.props.history.push('/');
        
        
    }
    formHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Name : </label>
                    <input type="text" name="name" className="form-control" onChange={this.formHandler} id="exampleFormControlInput1" placeholder="Table Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Type : </label>
                    <input type="text" name="type" className="form-control" onChange={this.formHandler} id="exampleFormControlInput1" placeholder="Veg/Non-Veg" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Total seats : </label>
                    <input type="number" name="total_seats" className="form-control" onChange={this.formHandler} id="exampleFormControlInput1" placeholder="Total number of seats" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">occupied_seats : </label>
                    <input type="number" name="occupied_seats" className="form-control" onChange={this.formHandler} id="exampleFormControlInput1" placeholder="number of seats occupied" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>                
            </div>
        )
    }
}

export default CreateTable
