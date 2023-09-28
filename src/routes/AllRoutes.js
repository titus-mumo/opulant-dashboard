import { Home } from "../pages/home";
import {Analytics} from "../pages/analytics";
import { Routes, Route } from "react-router-dom";
import { AddProduct } from "../pages/AddProduct";
import { Edit } from "../pages/Edit";

import React from 'react'

export const AllRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/analytics' element={<Analytics />} />
              <Route path='/add_product' element={<AddProduct />} />
              <Route path='/edit_product/:id' element={<Edit />} />
          </Routes>
    </div>
  )
}
