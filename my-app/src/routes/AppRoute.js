import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage.js";

function AppRoute() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
}

export default AppRoute;
