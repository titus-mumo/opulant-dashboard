import { Home } from "../pages/home";
import {Analytics} from "../pages/analytics";
import { Routes, Route } from "react-router-dom";

import React from 'react'

export const AllRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/analytics' element={<Analytics />} />
          </Routes>
    </div>
  )
}
