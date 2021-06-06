import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import GSHeader from "../GSHeader/GSHeader"
import GSFooter from "../GSFooter/GSFooter"

class DshbrdOrder extends Component {
    render() {
        return (
            <Fragment>
                <section>
                    <header>
                        <GSHeader />
                    </header>

                    <div className="wrapper">
                        <div className="gambo-Breadcrumb">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">My Orders</li>
                                    </ol>
                                </nav>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* User Pic Change sec starts */}
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
                                    <h4>Name of user</h4>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* User Pic Change sec ends */}
                        <div className>
                            <div className="container">
                            <div className="row">
                                {/* overview sec */}
                                <div className="col-lg-3 col-md-4">
                                <div className="left-side-tabs">
                                    <div className="dashboard-left-links">
                                    <a href="dashboard_overview.html" className="user-item active"><i className="uil uil-apps" />Overview</a>
                                    <a href="dashboard_my_orders.html" className="user-item"><i className="uil uil-box" />My Orders</a>
                                    <a href="dashboard_my_wishlist.html" className="user-item"><i className="uil uil-heart" />Shopping Wishlist</a>
                                    <Link to="/sign_in" className="user-item"><i className="uil uil-exit" />Logout</Link>
                                    {/* <a href="sign_in.html" className="user-item"><i className="uil uil-exit" />Logout</a> */}
                                    </div>
                                </div>
                                </div>
                                {/* overview sec */}
                                {/* my orders sec */}
                                <div className="col-lg-9 col-md-8">
                                <div className="dashboard-right">
                                    <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-title-tab">
                                        <h4><i className="uil uil-box" />My Orders</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="pdpt-bg">
                                        <div className="pdpt-title">
                                            <h6>Delivery Timing 10 May, 3.00PM - 6.00PM</h6>
                                        </div>
                                        <div className="order-body10">
                                            <ul className="order-dtsll">
                                            <li>
                                                <div className="order-dt-img">
                                                <img src="images/groceries.svg" alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="order-dt47">
                                                <h4>Gambo - Ludhiana</h4>
                                                <p>Delivered - Gambo</p>
                                                <div className="order-title">2 Items <span data-inverted data-tooltip="2kg broccoli, 1kg Apple" data-position="top center">?</span></div>
                                                </div>
                                            </li>
                                            </ul>
                                            <div className="total-dt">
                                            <div className="total-checkout-group">
                                                <div className="cart-total-dil">
                                                <h4>Sub Total</h4>
                                                <span>PKR 25</span>
                                                </div>
                                                <div className="cart-total-dil pt-3">
                                                <h4>Delivery Charges</h4>
                                                <span>Free</span>
                                                </div>
                                            </div>
                                            <div className="main-total-cart">
                                                <h2>Total</h2>
                                                <span>PKR 25</span>
                                            </div>
                                            </div>
                                            <div className="track-order">
                                            <h4>Track Order</h4>
                                            <div className="bs-wizard" style={{borderBottom: 0}}>
                                                <div className="bs-wizard-step complete">
                                                <div className="text-center bs-wizard-stepnum">Placed</div>
                                                <div className="progress"><div className="progress-bar" /></div>
                                                <a href="/" className="bs-wizard-dot" >.</a>
                                                </div>
                                                <div className="bs-wizard-step complete">
                                                <div className="text-center bs-wizard-stepnum">Packed</div>
                                                <div className="progress"><div className="progress-bar" /></div>
                                                <a href="/" className="bs-wizard-dot" >.</a>
                                                </div>
                                                <div className="bs-wizard-step active">
                                                <div className="text-center bs-wizard-stepnum">On the way</div>
                                                <div className="progress"><div className="progress-bar" /></div>
                                                <a href="/" className="bs-wizard-dot" >.</a>
                                                </div>
                                                <div className="bs-wizard-step disabled">
                                                <div className="text-center bs-wizard-stepnum">Delivered</div>
                                                <div className="progress"><div className="progress-bar" /></div>
                                                <a href="/" className="bs-wizard-dot" >.</a>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="alert-offer">
                                            <img src="images/ribbon.svg" alt="" />
                                            Cashback of PKR 2 will be credit to Gambo Super Market wallet 6-12 hours of delivery.
                                            </div>
                                            <div className="call-bill">
                                            <div className="delivery-man">
                                                Delivery Boy - <a href="/"><i className="uil uil-phone" /> Call Us</a>
                                            </div>
                                            <div className="order-bill-slip">
                                                <a href="/" className="bill-btn5 hover-btn">View Bill</a>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="pdpt-bg">
                                        <div className="pdpt-title">
                                            <h6>Delivery Timing 10 May, 3.00PM - 6.00PM</h6>
                                        </div>
                                        <div className="order-body10">
                                            <ul className="order-dtsll">
                                            <li>
                                                <div className="order-dt-img">
                                                <img src="images/groceries.svg" alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="order-dt47">
                                                <h4>Gambo - Ludhiana</h4>
                                                <p>Delivered - Gambo</p>
                                                <div className="order-title">2 Items <span data-inverted data-tooltip="2kg broccoli, 1kg Apple" data-position="top center">?</span></div>
                                                </div>
                                            </li>
                                            </ul>
                                            <div className="total-dt">
                                            <div className="total-checkout-group">
                                                <div className="cart-total-dil">
                                                <h4>Sub Total</h4>
                                                <span>PKR 25</span>
                                                </div>
                                                <div className="cart-total-dil pt-3">
                                                <h4>Delivery Charges</h4>
                                                <span>Free</span>
                                                </div>
                                            </div>
                                            <div className="main-total-cart">
                                                <h2>Total</h2>
                                                <span>PKR 25</span>
                                            </div>
                                            </div>
                                            <div className="track-order">
                                            <h4>Track Order</h4>
                                            <div className="bs-wizard" style={{borderBottom: 0}}>
                                                <div className="bs-wizard-step complete">
                                                <div className="text-center bs-wizard-stepnum">Placed</div>
                                                <div className="progress"><div className="progress-bar" /></div>
                                                <a href="/" className="bs-wizard-dot" >.</a>
                                                </div>
                                                <div className="bs-wizard-step complete">
                                                <div className="text-center bs-wizard-stepnum">Packed</div>
                                                <div className="progress"><div className="progress-bar" /></div>
                                                <a href="/" className="bs-wizard-dot" >.</a>
                                                </div>
                                                <div className="bs-wizard-step complete">
                                                <div className="text-center bs-wizard-stepnum">Arrived</div>
                                                <div className="progress"><div className="progress-bar" /></div>
                                                <a href="/" className="bs-wizard-dot" >.</a>
                                                </div>
                                                <div className="bs-wizard-step complete">
                                                <div className="text-center bs-wizard-stepnum">Delivered</div>
                                                <div className="progress"><div className="progress-bar" /></div>
                                                <a href="/" className="bs-wizard-dot" >.</a>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="call-bill">
                                            <div className="delivery-man">
                                                <a href="/"><i className="uil uil-rss" />Feedback</a>
                                            </div>
                                            <div className="order-bill-slip">
                                                <a href="/" className="bill-btn5 hover-btn">View Bill</a>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                {/* my orders sec */}
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

export default DshbrdOrder;
