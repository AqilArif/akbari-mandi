import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import BestValues from '../src/Components/BestValues Component/BestValues';
import AboutUs from './Components/AboutUs/AboutUs';
import Checkout from './Components/CheckOut/Checkout';
import ContactUs from './Components/ContactUs/ContactUs';
import DshbrdOrder from './Components/DashboardOrder/DshbrdOrder';
import DashbrdWishlist from './Components/DashboardWishlist/DashbrdWishlist';
import Faq from './Components/Faq/Faq';
import ForgotPass from './Components/ForgotPassword/ForgotPass';
// import GSFooter from './Components/GSFooter Component/GSFooter';
import GSHeader from './Components/GSHeader/GSHeader';
import OrderPlaced from './Components/OrderPlaced/OrderPlaced'
import Policies from './Components/Policies/Policies';
import Shop from './Components/Shop/Shop';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Layout/Home'
import OurBrands from './Components/OurBrands/OurBrands';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import DashboardOverview from './Components/Dashboard Overview/DashboardOverview';
import Specificbrand from './Components/OurBrands/Specificbrand';
import Singlebrand from './Components/OurBrands/Singlebrand';
import GetallProducts from './Components/Layout/GetallProducts';
import SpfCategory from './Components/Layout/SpfCategory';
import GetSingleSubCat from './Components/Layout/GetSingleSubCat'


class App extends Component {
  render() {
    return (
      <Fragment>

        <Router>
          {/* <GSHeader /> */}
          <Switch>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>

            <Route path="/shop">
              <Shop></Shop>
            </Route>

            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>

            <Route path="/dashboard_my_whishlist">
              <DashbrdWishlist></DashbrdWishlist>
            </Route>

            <Route path="/checkout">
              <Checkout></Checkout>
            </Route>

            <Route path="/dashboard_my_orders">
              <DshbrdOrder></DshbrdOrder>
            </Route>

            <Route path="/sign_in">
              <SignIn></SignIn>
            </Route>

            <Route path="/forgot_password">
              <ForgotPass></ForgotPass>
            </Route>

            <Route path="/order_placed">
              <OrderPlaced></OrderPlaced>
            </Route>

            <Route path="/faq">
              <Faq></Faq>
            </Route>

            <Route path="/refund_and_return_policy">
              <Policies></Policies>
            </Route>

            <Route path="/sign_up">
              <SignUp></SignUp>
            </Route>

            <Route path="/product/single_product/:id">
              <SingleProduct></SingleProduct>
            </Route>

            <Route path="/dashboard_overview">
              <DashboardOverview></DashboardOverview>
            </Route>

            <Route path="/our_brands">
              <OurBrands></OurBrands>
            </Route>

            <Route path="/specific_brand/:id">
              <Specificbrand></Specificbrand>
            </Route>

            <Route path="/single_brand">
              <Singlebrand></Singlebrand>
            </Route>

            <Route path="/getall_products">
              <GetallProducts></GetallProducts>
            </Route>

            <Route path="/spfc_ctrg/:id">
              <SpfCategory></SpfCategory>
            </Route>
            <Route path="/subcategory/:id">
              <GetSingleSubCat/>
            </Route>

            <Route path="/">
              <GSHeader></GSHeader>
              <Home></Home>
            </Route>

            
            

          </Switch>
        </Router>

        {/* <Home/> */}
        {/* <GSHeader /> */}
        {/* <BestValues /> */}
        {/* <GSFooter /> */}
      </Fragment>
    );
  }
}

export default App;
