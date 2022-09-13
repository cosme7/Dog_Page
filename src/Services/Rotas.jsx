import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../Pages/Home/Index"
import Card from "../Pages/Card/Index"

export default function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dogpage' element={<Card />} />
            </Routes>
        </Router>
    )
}