import React from "react";
import Home from "./Pages/Home";
import Company from "./Pages/Company";
import Services from "./Pages/Services";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup";
import CardPage from "./Pages/CardPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="company/" element={<Company />}></Route>
                <Route path="services/" element={<Services />}></Route>
                <Route path="login/" element={<Login />}></Route>
                <Route path="signup/" element={<Signup />}></Route>
                <Route path="/card" element={<CardPage />}></Route>
            </Routes>
        </Router >
    )
}

export default AppRoutes