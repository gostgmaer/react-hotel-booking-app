import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/HomePage/Homepage";
import Hoteldetails from "../Pages/Hoteldetails/Hoteldetails";
import List from "../Pages/List/List";
import SignIn from "../Pages/login/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/hotels" element={<List />} />
      <Route path="/hotel/:id" element={<Hoteldetails />} />
      <Route path="/login" element={<SignIn />} />
    </Routes>
  );
}

// <Route path="/login" exact component={Login} />
