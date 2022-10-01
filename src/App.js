import React from "react";
import SharedLayout from "./components/SharedLayout";
import Home from "./components/Home";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Search from "./components/Search";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<SharedLayout/>} >
          <Route index element={<Home/>}/> 
          <Route path="/home" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
        </Route>

        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
     </Routes>
    </>
  );
}

export default App;
