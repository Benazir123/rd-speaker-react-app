import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/Login";
import Protected from "./Protected";

function App(){  
  return(
         <Routes>
             <Route path="/" element={<LoginForm/>}/> 
             {/* <Route path="home" element={<Home/>}/>  */}
             <Route path="/home" element={<Protected user={localStorage.username}><Home /></Protected>}/>
        </Routes>
     );
}

export default App;