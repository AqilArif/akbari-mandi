import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GSHeader.css";
import Logo from "../../images/logo.png";
import Categorycmp from "./Categorycmp";
import axios from "axios";

const GSHeader = () => {
  const [categoryData, setCategory] = useState([]);
  const [sub_cat, setSubcat] = useState([]);
  const [loading , setLoading] = useState(false);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const res = await axios.get("/api/web/category");
    console.log(res.data);
    setCategory(res.data.categories);
  };

  const getSubCategory = async (id) => {
    setLoading(true);
    const res = await axios.get(`/api/web/subcategory`);
    console.log(res.data);
    setLoading(false);
    setSubcat(res.data.subcategories);
  };

  return (
    <Fragment>
      <div
        id="category_model"
        class="header-cate-model main-gambo-model modal fade"
        tabindex="-1"
        role="dialog"
        aria-modal="false"
      >
        <div class="modal-dialog category-area" role="document">
          <div class="category-area-inner">
            <div class="modal-header">
              <button
                type="button"
                class="close btn-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i class="uil uil-multiply"></i>
              </button>
            </div>
            <div class="category-model-content modal-content">
              <div class="cate-header">
                <h4>Products by Category</h4>
              </div>

              <ul class="category-by-cat">
                {categoryData.map((category) => {
                  return (
                    <Categorycmp
                      id={category.id}
                      name={category.name}
                      image={category.image}
                      key={category.id}
                    />
                  );
                })}
                {/* <li>
                  <a href="/" class="single-cat-item">
                    <div class="icon">
                      <img
                        src="http://apis.akbarimandi.online/images/category/1619355464-grocery.jpg"
                        alt=""
                      />
                    </div>
                    <div class="text"> Grocery & Staples </div>
                  </a>
                </li>


             

             

            

             


                <li>
                  <a href="/" class="single-cat-item">
                    <div class="icon">
                      <img src="images/category/icon-9.svg" alt="" />
                    </div>
                    <div class="text"> Pet Care </div>
                  </a>
                </li> 
                
                */}
              </ul>

              <a href="/" class="morecate-btn">
                <i class="uil uil-apps"></i>More Categories
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="search_model"
        className="header-cate-model main-gambo-model modal fade"
        tabIndex={-1}
        role="dialog"
        aria-modal="false"
      >
        <div className="modal-dialog search-ground-area" role="document">
          <div className="category-area-inner">
            <div className="modal-header">
              <button
                type="button"
                className="close btn-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="uil uil-multiply" />
              </button>
            </div>
            <div className="category-model-content modal-content">
              <div className="search-header">
                <form action="#">
                  <input type="search" placeholder="Search for products..." />
                  <button type="submit">
                    <i className="uil uil-search" />
                  </button>
                </form>
              </div>
              <div className="search-by-cat">
                <a href="/" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-1.svg" alt="" />
                  </div>
                  <div className="text">Fruits and Vegetables</div>
                </a>
                <a href="/" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-2.svg" alt="" />
                  </div>
                  <div className="text"> Grocery &amp; Staples </div>
                </a>
                <a href="/" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-3.svg" alt="" />
                  </div>
                  <div className="text"> Dairy &amp; Eggs </div>
                </a>
                <a href="/" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-4.svg" alt="" />
                  </div>
                  <div className="text"> Beverages </div>
                </a>
                <a href="/" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-5.svg" alt="" />
                  </div>
                  <div className="text"> Snacks </div>
                </a>
                <a href="/" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-6.svg" alt="" />
                  </div>
                  <div className="text"> Home Care </div>
                </a>
                <a href="/" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-7.svg" alt="" />
                  </div>
                  <div className="text"> Noodles &amp; Sauces </div>
                </a>
                <a href="/" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-8.svg" alt="" />
                  </div>
                  <div className="text"> Personal Care </div>
                </a>
                <a href="/" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-9.svg" alt="" />
                  </div>
                  <div className="text"> Pet Care </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bs-canvas bs-canvas-left position-fixed bg-cart h-100">
        <div className="bs-canvas-header side-cart-header p-3 ">
          <div className="d-inline-block  main-cart-title">
            My Cart <span>(2 Items)</span>
          </div>
          <button
            type="button"
            className="bs-canvas-close close"
            aria-label="Close"
          >
            <i className="uil uil-multiply" />
          </button>
        </div>
        <div className="bs-canvas-body">
          <div className="cart-top-total">
            <div className="cart-total-dil">
              <h4>Akbari Mandi Online</h4>
            </div>
            <div className="cart-total-dil pt-2">
              <h4>Delivery Charges</h4>
              <span>PKR 200</span>
            </div>
          </div>
          <div className="side-cart-items">
            <div className="cart-item">
              <div className="cart-product-img">
                <img src="images/product/img-1.jpg" alt="" />
              </div>
              <div className="cart-text">
                <h4>Product Title</h4>
                <div className="qty-group">
                  <div className="cart-item-price">
                    PKR 50 <span>PKR 80</span>
                  </div>
                </div>
                <button type="button" className="cart-close-btn">
                  <i className="uil uil-multiply" />
                </button>
              </div>
            </div>
            <div className="cart-item">
              <div className="cart-product-img">
                <img src="images/product/img-2.jpg" alt="" />
              </div>
              <div className="cart-text">
                <h4>Product Title</h4>
                <div className="qty-group">
                  <div className="cart-item-price">
                    PKR 50 <span>PKR 80</span>
                  </div>
                </div>
                <button type="button" className="cart-close-btn">
                  <i className="uil uil-multiply" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bs-canvas-footer">
          <div className="cart-total-dil saving-total ">
            <h4>Total Saving</h4>
            <span>PKR 100</span>
          </div>
          <div className="main-total-cart">
            <h2>Total</h2>
            <span>PKR 350</span>
          </div>
          <div className="checkout-cart">
            <Link to="/checkout" className="cart-checkout-btn hover-btn">
              Proceed to Checkout
            </Link>
            {/* <a href="checkout.html" className="cart-checkout-btn hover-btn">Proceed to Checkout</a> */}
          </div>
        </div>
      </div>

      {/* Header Section Starts */}
      <header className="header clearfix">
        {/* Top Header Starts */}
        <div className="top-header-group">
          <div className="top-header">
            <div className="res_main_logo">
              <a href="index.html">
                <img src="images/logo.png" alt="" />
              </a>
            </div>
            {/* logo */}
            <div className="main_logo" id="logo">
              <a href="index.html">
                <img src={Logo} alt="" />
              </a>
              <a href="index.html">
                <img className="logo-inverse" src="images/logo.png" alt="" />
              </a>
            </div>
            {/* logo */}
            <div className="search120">
              <div className="ui search">
                <div className="ui left icon input swdh10">
                  <input
                    className="prompt srch10"
                    type="text"
                    placeholder="Search for products.."
                  />
                  <i className="uil uil-search" alt="icon icon1" />
                </div>
              </div>
            </div>
            <div className="header_right">
              <ul>
                <li>
                  <a href="/" className="offer-link">
                    <i className="uil uil-phone" alt="" />
                    00-000-000
                  </a>
                </li>
                <li>
                  <a href="/" className="offer-link">
                    <i className="uil uil-gift" />
                    Offers
                  </a>
                </li>
                <li>
                  <a href="/" className="offer-link">
                    <i className="uil uil-question-circle" />
                    Help
                  </a>
                </li>
                <li>
                  <Link
                    to="/dashboard_my_whishlist"
                    className="nav-link option_links"
                  >
                    <i className="uil uil-heart icon_wishlist" />
                    <span className="noti_count1">3</span>
                  </Link>
                  {/* <a href="dashboard_my_wishlist.html" className="option_links" title="Wishlist"><i className="uil uil-heart icon_wishlist" /><span className="noti_count1">3</span></a> */}
                </li>

                <li className="ui dropdown">
                  <div className="dropdown show">
                    <a
                      className="btn  dropdown-toggle"
                      href="/"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src="images/avatar/img-5.jpg"
                        alt=""
                        style={{
                          width: "30px",
                          borderRadius: "50px",
                          position: "relative",
                          right: "7px",
                        }}
                      />
                      <span className="user__name active pt-5">User Name</span>
                      {/* <i className="uil uil-angle-down" /> */}

                      {/* Dropdown link */}
                    </a>
                    <div className="dropdown-menu">
                      <Link to="/dashboard_overview" className="dropdown-item">
                        <i className="uil uil-apps icon__1" />
                        Dashboard
                      </Link>
                      <a className="dropdown-item" href="/">
                        <i className="uil uil-box icon__1" />
                        My Orders
                      </a>
                      <a className="dropdown-item" href="/">
                        <i className="uil uil-heart icon__1" />
                        My Wishlist
                      </a>
                      <a className="dropdown-item" href="/">
                        <i className="uil uil-info-circle icon__1" />
                        Faq
                      </a>
                      <a className="dropdown-item" href="/">
                        <i className="uil uil-lock pl-1" alt="icon__1" /> &nbsp;{" "}
                        <span>Logout</span>{" "}
                      </a>
                    </div>
                  </div>
                  {/* <a href="/" className="opts_account">
                      <img src="images/avatar/img-5.jpg" alt="" />
                      <span className="user__name">User Name</span>
                      <i className="uil uil-angle-down" />
                  </a>
                  <div className="menu dropdown_account">
                  <a href="/" className="item channel_item"><i className="uil uil-apps icon__1" />Dashbaord</a>
                  <a href="/" className="item channel_item"><i className="uil uil-box icon__1" />My Orders</a>
                  <a href="/" className="item channel_item"><i className="uil uil-heart icon__1" />My Wishlist</a>
                  <a href="/" className="item channel_item"><i className="uil uil-info-circle icon__1" />Faq</a>
                  <a href="/" className="item channel_item"><i className="uil uil-lock" alt="icon__1" />Logout</a>
                  </div>*/}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Top Header Ends */}
        {/* Sub Header Ya Nav ka component bna skty hain  */}
        <div className="sub-header-group">
          <div className="sub-header">
            <div className="ui dropdown">
              <a
                href="/"
                className="category_drop hover-btn"
                data-toggle="modal"
                data-target="#category_model"
                title="Categories"
              >
                <i className="uil uil-apps" />
                <span className="cate__icon">Products By Category</span>
              </a>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light py-3">
              <div className="container-fluid">
                <button
                  className="navbar-toggler menu_toggle_btn"
                  type="button"
                  data-target="#navbarSupportedContent"
                >
                  <i className="uil uil-bars" />
                </button>
                <div
                  className="collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav main_nav align-self-stretch">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                      {/* <a href="index.html" className="nav-link active" title="Home">Home</a> */}
                    </li>

                    <li className="nav-item">
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
                      {/* <a href="about.html" className="nav-link new_item" title="About">About</a> */}
                    </li>

                    <li className="nav-item">
                      <Link to="/shop" className="nav-link">
                        Shop
                      </Link>
                      {/* <a href="shop.html" className="nav-link" title="Shop">Shop</a> */}
                    </li>
                    <li className="nav-item">
                      <div class="dropdown">
                        <button
                          class="btn btn-white dropdown-toggle nav-link"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          onClick={() => getSubCategory()}
                        >
                          Sub Categories
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                          
                        >
                          { loading?<>Loading....</> :sub_cat.map((sub_data) => {
                            return (
                              <Fragment>
                                <Link to={`/subcategory/${sub_data.id}`}
                                  
                                  key={sub_data.id}
                                  className="dropdown-item"
                                >
                                   {sub_data.name}
                                </Link>
                              </Fragment>
                            );
                          })}
                        </div>
                      </div>
                    </li>

                    <li className="nav-item">
                      <Link to="/contact" className="nav-link">
                        Contact
                      </Link>
                      {/* <a href="contact.html" className="nav-link" title="Contact">Contact</a> */}
                    </li>

                    <li className="nav-item">
                      <Link to="/our_brands" className="nav-link">
                        Our Brands
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="catey__icon">
              <a
                href="/"
                className="cate__btn"
                data-toggle="modal"
                data-target="#category_model"
                title="Categories"
              >
                <i className="uil uil-apps" />
              </a>
            </div>
            <div className="header_cart order-1">
              <a
                href="/"
                className="cart__btn hover-btn pull-bs-canvas-left"
                title="Cart"
              >
                <i className="uil uil-shopping-cart" alt="" />
                <span>Cart</span>
                <ins>2</ins>
                <i className="uil uil-angle-down" />
              </a>
            </div>
            <div className="search__icon order-1">
              <a
                href="/"
                className="search__btn hover-btn"
                data-toggle="modal"
                data-target="#search_model"
                title="Search"
              >
                <i className="uil uil-search" />
              </a>
            </div>
          </div>
        </div>
        {/* Sub Header Ya Nav ka component bna skty hain  */}
      </header>
      {/* Header Section Ends */}
    </Fragment>
  );
};

export default GSHeader;
