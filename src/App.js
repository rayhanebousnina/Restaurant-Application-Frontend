
import './App.css';
import DishesList from './Components/Client-side/DishesView';
import Sidebar from './Components/Admin-side/Sidebar';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Route exact path="">
        <DishesList/>
      </Route>
      <Route path="/dashboard/getOrders">
        <Sidebar/>
      </Route>
    </BrowserRouter>
   
  );
}

export default App;
