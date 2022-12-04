import React from "react";
import { Routes, Route } from "react-router-dom";
import {
    Home,
    SharedLayout,
    Search,
    Login,
    SignUp,
    ForgotPassword
} from "./components";

const Routers = () => {
    return(
        <>
            <Routes>
                <Route path='/' element={<SharedLayout/>} >
                    <Route index element={<Home/>}/> 
                    <Route path="/home" element={<Home/>}/>
                </Route>

                <Route path="/search" element={<Search/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/forgotpassword" element={<ForgotPassword/>}/>
            </Routes>
        </>
    )
}

export default Routers