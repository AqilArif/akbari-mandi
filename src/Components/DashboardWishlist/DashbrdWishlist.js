import React, { Component, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import GSHeader from "../GSHeader/GSHeader"
import GSFooter from "../GSFooter/GSFooter"
import { Link } from 'react-router-dom';

class DashbrdWishlist extends Component {
    render() {
        return (
            <Fragment>
                {/* Sidebar Open Section */}
                <div className="bs-canvas bs-canvas-left position-fixed bg-cart h-100">
                    <div className="bs-canvas-header side-cart-header p-3 ">
                        <div className="d-inline-block  main-cart-title">My Cart <span>(2 Items)</span></div>
                        <button type="button" className="bs-canvas-close close" aria-label="Close"><i className="uil uil-multiply" /></button>
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
                                <div className="cart-item-price">PKR 50 <span>PKR 80</span></div>
                            </div>
                            <button type="button" className="cart-close-btn"><i className="uil uil-multiply" /></button>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="cart-product-img">
                            <img src="images/product/img-2.jpg" alt="" />
                            </div>
                            <div className="cart-text">
                            <h4>Product Title</h4>
                            <div className="qty-group">
                                <div className="cart-item-price">PKR 50 <span>PKR 80</span></div>
                            </div>
                            <button type="button" className="cart-close-btn"><i className="uil uil-multiply" /></button>
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
                        <Link to="/checkout" className="cart-checkout-btn hover-btn" >Proceed to Checkout</Link>
                        {/* <a href="checkout.html" className="cart-checkout-btn hover-btn">Proceed to Checkout</a> */}
                        </div>
                    </div>
                    </div>

                {/* Sidebar Open Section */}
                <section>
                    <header>
                        <GSHeader />
                    </header>
                    <div className="wrapper">
                        {/* breadcrumb sec */}
                        <div className="gambo-Breadcrumb">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">User Dashboard</li>
                                    </ol>
                                </nav>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* breadcrumb sec */}
                        {/* user pic change sec */}
                        <div className="dashboard-group">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="user-dt">
                                    <div className="user-img">
                                    <img src="images/avatar/img-5.jpg" alt="" />
                                    <div className="img-add">
                                        <input type="file" id="file" />
                                        <label htmlFor="file"><i className="uil uil-camera-plus" /></label>
                                    </div>
                                    </div>
                                    <h4>Name of User</h4>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* user pic change sec */}
                        <div className>
                            <div className="container">
                            <div className="row">
                                {/* overview sec */}
                                <div className="col-lg-3 col-md-4">
                                <div className="left-side-tabs">
                                    <div className="dashboard-left-links">
                                    <a href="dashboard_overview.html" className="user-item active"><i className="uil uil-apps" />Overview</a>
                                    <Link to="dashboard_my_orders" className="user-item"><i className="uil uil-box" />My Orders</Link>
                                    {/* <a href="dashboard_my_orders.html" className="user-item"><i className="uil uil-box" />My Orders</a> */}
                                    <a href="dashboard_my_wishlist.html" className="user-item"><i className="uil uil-heart" />Shopping Wishlist</a>
                                    <Link to="/sign_in" className="user-item"><i className="uil uil-exit" />Logout</Link>
                                    {/* <a href="sign_in.html" className="user-item"><i className="uil uil-exit" />Logout</a> */}
                                    </div>
                                </div>
                                </div>
                                {/* overview sec */}
                                {/* shopping whishlist sec */}
                                <div className="col-lg-9 col-md-8">
                                <div className="dashboard-right">
                                    <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-title-tab">
                                        <h4><i className="uil uil-heart" />Shopping Wishlist</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="pdpt-bg">
                                        <div className="wishlist-body-dtt">
                                            <div className="cart-item">
                                            <div className="cart-product-img">
                                                <img src="images/product/img-11.jpg" alt="" />
                                                <div className="offer-badge">4% OFF</div>
                                            </div>
                                            <div className="cart-text">
                                                <h4>Product Title Here</h4>
                                                <div className="cart-item-price">PKR 15 <span>PKR 18</span></div>
                                                <button type="button" className="cart-close-btn"><i className="uil uil-trash" alt="" /></button>
                                            </div>
                                            </div>
                                            <div className="cart-item">
                                            <div className="cart-product-img">
                                                <img src="images/product/img-2.jpg" alt="" />
                                                <div className="offer-badge">1% OFF</div>
                                            </div>
                                            <div className="cart-text">
                                                <h4>Product Title Here</h4>
                                                <div className="cart-item-price">PKR 9 <span>PKR 10</span></div>
                                                <button type="button" className="cart-close-btn"><i className="uil uil-trash" alt="" /></button>
                                            </div>
                                            </div>
                                            <div className="cart-item">
                                            <div className="cart-product-img">
                                                <img src="images/product/img-14.jpg" alt="" />
                                            </div>
                                            <div className="cart-text">
                                                <h4>Product Title Here</h4>
                                                <div className="cart-item-price">PKR 12</div>
                                                <button type="button" className="cart-close-btn"><i className="uil uil-trash" alt="" /></button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                {/* shopping whishlist sec */}
                            </div>
                            </div>
                        </div>
                        </div>

                        <footer>
                            <GSFooter />
                        </footer>

                </section>
            </Fragment>
        );
    }
}

export default DashbrdWishlist;
