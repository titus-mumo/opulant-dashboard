import { Home } from "../pages/home";
import {Analytics} from "../pages/analytics";
import { Routes, Route } from "react-router-dom";
import { AddProduct } from "../pages/AddProduct";
import { Edit } from "../pages/Edit";
import { Search } from "../pages/Search";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";

import React from 'react'

export const AllRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/add_product' element={<AddProduct />} />
        <Route path='/edit_product/:id' element={<Edit />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element= {<Signup />} />
      </Routes>
  )
}
