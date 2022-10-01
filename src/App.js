import React from "react";
import SharedLayout from "./components/SharedLayout";
import Home from "./components/Home";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<SharedLayout/>} >
          <Route index element={<Home/>}/> 
        </Route>
     </Routes>
    </>
  );
}

export default App;
