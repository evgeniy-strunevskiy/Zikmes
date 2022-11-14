import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Form } from '../Form'
import { Home } from '../../pages/Home'
import { Login } from '../../pages/Login'
import { NotFound } from '../../pages/NotFound'
import { Header } from '../Header/Header'
import { Layout } from '../Layout/Layout'

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Login />}/>
          <Route path='home' element={<Home />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  )
}
