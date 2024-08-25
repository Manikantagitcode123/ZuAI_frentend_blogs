import './App.css'
//import React from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
//import { BrowserRouter ,Switch, Route } from 'react-router-dom';
import ProductList from './components/ProductList'
import Products from './components/Products'
import SingleProduct from './components/SingleProduct'
import Signup from './components/Signup'
import Login from './components/Login'
import ProductsEdit from './components/ProductsEdit'
import Productdelete from './components/productdelete'
//import NotFound from "./components/NotFound"
import Home from './components/Home'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
const App = () => (
  <BrowserRouter>
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />

      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/products" component={ProductList} />
      <ProtectedRoute exact path="/productadd" component={Products} />
      <ProtectedRoute eaxct path="/productdelete" component={Productdelete} />
      <ProtectedRoute eaxct path="/ProductsEdit/:id" component={ProductsEdit} />
      <ProtectedRoute exact path="Cart" component={Cart} />

      <ProtectedRoute
        exact
        path="/singleproduct/:id"
        component={SingleProduct}
      />
    </Switch>
  </BrowserRouter>
)

export default App
