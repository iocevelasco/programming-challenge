import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import React, { lazy } from 'react'
import Contact from 'ui/pages/Contact/Contact'
import Login from 'ui/pages/Login/Login'
import Register from 'ui/pages/Register/Register'
import PageNotFound from 'ui/pages/PageNotFound/PageNotFound'
import Benchmarks from 'ui/pages/Benchmarks/Benchmarks'
import UserLanding from 'ui/pages/UserLanding/UserLanding'
import Admin from 'ui/pages/Admin/Admin'

const LadingPage = lazy(() => import('ui/pages/Home'))

const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<LadingPage />} />
      {/* <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/benchmarks" element={<Benchmarks />} />
      <Route path="/userlanding" element={<UserLanding />} />
      <Route path="/admin" element={<Admin />} /> */}
    </ReactDomRoutes>
  )
}

export default Routes
