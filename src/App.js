import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Pages/login";
import Home from "./Pages/home";
// import Todo from './Pages/try/thisisthis';
import {Signup} from "./Pages/signup";
// import Switch from "./Pages/try/index"


function App() {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
