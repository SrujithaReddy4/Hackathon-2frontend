import { BrowserRouter, Link, Route, Switch} from "react-router-dom";
import './App.css';
import {Products} from "./Products";
import {Contactus} from "./Contactus";
import {AppBar} from '@material-ui/core';

function App() {
 return(
   <div>
     <BrowserRouter>
     <AppBar position="static">
       <nav>
     <Link to="/">Home</Link><br/>
     <Link to="/products">Products</Link><br/>
     <Link to="/Contactus">Contactus</Link><br/>
     </nav>
     </AppBar>
     
     <Switch>
         <Route path="/products"> 
         <Products /></Route>
         <Route path="/Contactus"> 
         <Contactus /></Route>
         <Route path="/"> 
         <Home /> </Route> 
     </Switch>
     </BrowserRouter>
   </div>
 )
}
function Home() {
  return (
    <div>
      <h2>Welcome to Rental Equipment portal!!!</h2>
    </div>
  );
}

export default App;


