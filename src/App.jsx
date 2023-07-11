import { BrowserRouter ,Routes,Route  } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Categories from "./Component/Categories";
import Products from "./Component/Products";
import 'bootstrap/dist/css/bootstrap.css';

function App(){
 
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element ={<Home/>}> </Route>    
        <Route path ="/Login" element = {<Login/>}></Route> 
        <Route path ="/Categories" element = {<Categories/>}/>           
        <Route path ="/Products/:id" element = {<Products/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
