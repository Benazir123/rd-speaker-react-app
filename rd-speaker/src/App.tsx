import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./pages/Login";
import Protected from "./Protected";
import About from "./pages/About";

function App(){  
  return(

        <Routes>
          <Route path="/" element={<LoginForm/>}/> 
             {/* <Route path="home" element={<Home/>}/>  */}
             {/* <Route path="/home" element={<Protected user={localStorage.username}><Home /></Protected>}/> */}
          <Route path="/home" element={<Home />}>
               <Route index element={<About/>} />
          </Route>
        </Routes>
     );
}

export default App;