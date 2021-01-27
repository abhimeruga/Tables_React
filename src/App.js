import './App.css';
import { Tables } from "./Tables/Tables.component";
import { CreateTable } from "./Tables/CreateTable.component"
import { Route } from 'react-router-dom'

function App() {
   
 



  return (
    <div className="body-size container ">
      <h2 className=" p-3 mb-2 bg-info text-white" style={{textAlign:'center'}}>Restaurant</h2>
      {/* <Route path="/createTable" component={CreateTable} exact/>
      <Route path="/" component={Tables} exact/> */}
    </div>
  );
}

export default App;
