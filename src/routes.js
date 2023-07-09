import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./signin/signin";
import SignUp from "./signup/signup";
import ThanksSignIn from "./signin/thanks";

let Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/register" element={<SignUp/>} />
            <Route path="/thanks-signin" element={<ThanksSignIn />} />
        </Routes>
    </BrowserRouter>
)

export default Router