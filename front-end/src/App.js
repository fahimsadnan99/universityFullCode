import React from 'react'
import {Switch, Route} from "react-router-dom"
import About from './Components/About/About'
import Address from './Components/Address/Address'
import Cart from './Components/Cart/Cart'
import Footer from './Components/Footer/Footer'
import Gallery from './Components/Gallery/Gallery'
import Home from './Components/Home/Home'
import Logout from './Components/Logout/Logout'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import Shop from './Components/Shop/Shop'
import Signin from './Components/User/Signin'
import Signup from './Components/User/signup'
import UserDeshbord from "./Components/User/Dashbord"
import AdminRouter from "./Components/PrivateRoute/AdminRoute"
import AdminDashbord from './Components/Admin/Dashbord'
import Profile from './Components/User/Profile'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/gallery">
          <Gallery></Gallery>
        </Route>
        <Route exact path="/signin">
          <Signin></Signin>
        </Route>
        <Route exact path="/signup">
          <Signup></Signup>
        </Route>
        <Route exact path="/cart">
          <Cart></Cart>
        </Route>

        <Route exact path="/logout">
          <Logout></Logout>
        </Route>

        <PrivateRoute exact path="/address">
          <Address></Address>
        </PrivateRoute>
        <PrivateRoute exact path="/user/deshbord">
          <UserDeshbord></UserDeshbord>
        </PrivateRoute>

       

        <AdminRouter exact path="/admin/deshbord">
          <AdminDashbord></AdminDashbord>
        </AdminRouter>
        
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App
