import './App.css'
//import React from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
//import { BrowserRouter ,Switch, Route } from 'react-router-dom';
import BlogsList from './components/BlogsList'
import Blogsadd from './components/Blogsadd'
import SingleProduct from './components/Singleblog'
import Signup from './components/Signup'
import Login from './components/Login'
import BlogEdit from './components/BlogEdit'
import Blogdelete from './components/Blogdelete'
//import NotFound from "./components/NotFound"
import Home from './components/Home'

import ProtectedRoute from './components/ProtectedRoute'
const App = () => (
  <BrowserRouter>
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />

      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/blogs" component={BlogsList} />
      <ProtectedRoute exact path="/blogadd" component={Blogsadd} />
      <ProtectedRoute eaxct path="/blogdelete" component={Blogdelete} />
      <ProtectedRoute eaxct path="/blogEdit/:id" component={BlogEdit} />

      <ProtectedRoute exact path="/singleblog/:id" component={SingleProduct} />
    </Switch>
  </BrowserRouter>
)

export default App
