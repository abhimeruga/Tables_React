import React, { Component } from 'react'
import axios  from 'axios';
import { Link } from "react-router-dom";

export class Tables extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             tablesData : [],
        }
        this.deleteTable = this.deleteTable.bind(this);
    }
    
deleteTable = ( query ) => {
    const queryData = `{"name":"${query}"}`;
    const config = {
        method: 'delete',
        url: 'http://localhost:2000/tables',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : queryData
      };
    axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          window.location.reload()
        })
        .catch(function (error) {
          console.log(error);
    });
}
    
componentDidMount(){
    axios.get('http://localhost:2000/tables')
        .then( (response) => {
          this.setState(()=>{
              return ({
                  tablesData: JSON.parse(JSON.stringify(response.data))
              })
          }, ()=>{
              console.log(this.state.tablesData)
          })
        })
        .catch(function (error) {
          console.log(error);
        });
       
        
        
    }

    render() {
        return (<>
            <Link to="/createTable" > Create Table </Link>
            <div style={{
                display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around',
                
            }}>
     
     

                { 
                this.state.tablesData.map((table)=>{
                    return ( 
                <div className="card alert alert-primary" style={{width: '18rem', margin:'10px'}}>
                     <div className="card-body">
                       <h5 className="card-title">Name : {table.name}</h5>
                       <h6 className="card-subtitle mb-2 text-muted">Type : {table.type}</h6>
                       <p className="card-text">Seats available : {table.total_seats}</p>
                       <p className="card-text">Occupied Seats : {table.occupied_seats}</p>
                       <a href="javascript(0)" className="card-link ">Edit Table    </a>
                       <button className="btn btn-btn alert-danger" onClick={()=>{this.deleteTable(table.name)}} >Delete Table   </button>
                     </div>
                   </div>)
                })
                }
            </div>
        </>)
    }
}

export default Tables
