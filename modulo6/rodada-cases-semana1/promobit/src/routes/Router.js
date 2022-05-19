import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/home/homePage";




export default function Router(){
    return(
        <BrowserRouter>
          <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
    )
}