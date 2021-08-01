
import './App.css';
import DishesList from './Components/Client-side/DishesView';
import { BrowserRouter, Route } from "react-router-dom";
import VerticalTabs from './Components/Admin-side/Dashboard';

function App() {
  return (

    <BrowserRouter>
      <Route exact path="/home/getDish">
        <DishesList/>
      </Route>
      <Route path="/dashboard">
        <VerticalTabs/>
      </Route>
    </BrowserRouter>
   
  );
}

export default App;
