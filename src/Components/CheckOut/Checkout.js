import React, { Component, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import GSHeader from "../GSHeader/GSHeader"
import GSFooter from "../GSFooter/GSFooter"
import {Link} from "react-router-dom" 

class CheckOut extends Component {
    render() {
        return (
            <Fragment>
                <section>
                    <GSHeader />
                </section>

                <div className="wrapper">
                    {/* Breadcrumb sec starts */}
                    <div className="gambo-Breadcrumb">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                                </ol>
                            </nav>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Breadcrumb sec ends */}
                    {/* onclick info section starts */}
                    <div className="all-product-grid">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-7">
                            <div id="checkout_wizard" className="checkout accordion left-chck145">
                                <div className="checkout-step">
                                <div className="checkout-card" id="headingTwo">
                                    <span className="checkout-step-number">1</span>
                                    <h4 className="checkout-step-title">
                                    <button className="wizard-btn collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Delivery Address</button>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#checkout_wizard">
                                    <div className="checkout-step-body">
                                    <div className="checout-address-step">
                                        <div className="row">
                                        <div className="col-lg-12">
                                            <form className>
                                            <div className="form-group">
                                                <div className="product-radio">
                                                <ul className="product-now">
                                                    <li>
                                                    <input type="radio" id="ad1" name="address1" defaultChecked />
                                                    <label htmlFor="ad1">Home</label>
                                                    </li>
                                                    <li>
                                                    <input type="radio" id="ad2" name="address1" />
                                                    <label htmlFor="ad2">Office</label>
                                                    </li>
                                                    <li>
                                                    <input type="radio" id="ad3" name="address1" />
                                                    <label htmlFor="ad3">Other</label>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                            <div className="address-fieldset">
                                                <div className="row">
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="form-group">
                                                    <label className="control-label">Name*</label>
                                                    <input id="name" name="name" type="text" placeholder="Name" className="form-control input-md" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="form-group">
                                                    <label className="control-label">Email Address*</label>
                                                    <input id="email1" name="email1" type="text" placeholder="Email Address" className="form-control input-md" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                    <label className="control-label">Flat / House / Office No.*</label>
                                                    <input id="flat" name="flat" type="text" placeholder="Address" className="form-control input-md" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                    <label className="control-label">Street / Society / Office Name*</label>
                                                    <input id="street" name="street" type="text" placeholder="Street Address" className="form-control input-md" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="form-group">
                                                    <label className="control-label">Pincode*</label>
                                                    <input id="pincode" name="pincode" type="text" placeholder="Pincode" className="form-control input-md" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="form-group">
                                                    <label className="control-label">Locality*</label>
                                                    <input id="Locality" name="locality" type="text" placeholder="Enter City" className="form-control input-md" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                    <div className="address-btns">
                                                        <button className="save-btn14 hover-btn">Save</button>
                                                        <a className="collapsed ml-auto next-btn16 hover-btn" role="button" data-toggle="collapse" data-parent="#checkout_wizard" href="#collapseThree"> Next </a>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </form>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="checkout-step">
                                <div className="checkout-card" id="headingThree">
                                    <span className="checkout-step-number">2</span>
                                    <h4 className="checkout-step-title">
                                    <button className="wizard-btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Delivery Time &amp; Date </button>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#checkout_wizard">
                                    <div className="checkout-step-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="control-label">Select Date and Time*</label>
                                            <div className="date-slider-group">
                                            <div className="owl-carousel date-slider owl-theme">
                                                <div className="item">
                                                <div className="date-now">
                                                    <input type="radio" id="dd1" name="address1" defaultChecked />
                                                    <label htmlFor="dd1">Today</label>
                                                </div>
                                                </div>
                                                <div className="item">
                                                <div className="date-now">
                                                    <input type="radio" id="dd2" name="address1" />
                                                    <label htmlFor="dd2">Tomorrow</label>
                                                </div>
                                                </div>
                                                <div className="item">
                                                <div className="date-now">
                                                    <input type="radio" id="dd3" name="address1" />
                                                    <label htmlFor="dd3">10 May 2020</label>
                                                </div>
                                                </div>
                                                <div className="item">
                                                <div className="date-now">
                                                    <input type="radio" id="dd4" name="address1" />
                                                    <label htmlFor="dd4">11 May 2020</label>
                                                </div>
                                                </div>
                                                <div className="item">
                                                <div className="date-now">
                                                    <input type="radio" id="dd5" name="address1" />
                                                    <label htmlFor="dd5">12 May 2020</label>
                                                </div>
                                                </div>
                                                <div className="item">
                                                <div className="date-now">
                                                    <input type="radio" id="dd6" name="address1" />
                                                    <label htmlFor="dd6">13 May 2020</label>
                                                </div>
                                                </div>
                                                <div className="item">
                                                <div className="date-now">
                                                    <input type="radio" id="dd7" name="address1" />
                                                    <label htmlFor="dd7">14 May 2020</label>
                                                </div>
                                                </div>
                                                <div className="item">
                                                <div className="date-now">
                                                    <input type="radio" id="dd8" name="address1" />
                                                    <label htmlFor="dd8">15 May 2020</label>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="time-radio">
                                            <div className="ui form">
                                                <div className="grouped fields">
                                                <div className="field">
                                                    <div className="ui radio checkbox chck-rdio">
                                                    <input type="radio" name="fruit" defaultChecked tabIndex={0} className="hidden" />
                                                    <label>8.00AM - 10.00AM</label>
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="ui radio checkbox chck-rdio">
                                                    <input type="radio" name="fruit" tabIndex={0} className="hidden" />
                                                    <label>10.00AM - 12.00PM</label>
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="ui radio checkbox chck-rdio">
                                                    <input type="radio" name="fruit" tabIndex={0} className="hidden" />
                                                    <label>12.00PM - 2.00PM</label>
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="ui radio checkbox chck-rdio">
                                                    <input type="radio" name="fruit" tabIndex={0} className="hidden" />
                                                    <label>2.00PM - 4.00PM</label>
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="ui radio checkbox chck-rdio">
                                                    <input type="radio" name="fruit" tabIndex={0} className="hidden" />
                                                    <label>4.00PM - 6.00PM</label>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <a className="collapsed next-btn16 hover-btn" role="button" data-toggle="collapse" href="#collapseFour"> Proccess to payment </a>
                                    </div>
                                </div>
                                </div>
                                <div className="checkout-step">
                                <div className="checkout-card" id="headingFour">
                                    <span className="checkout-step-number">3</span>
                                    <h4 className="checkout-step-title">
                                    <button className="wizard-btn collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Payment</button>
                                    </h4>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#checkout_wizard">
                                    <div className="checkout-step-body">
                                    <div className="payment_method-checkout">
                                        <div className="row">
                                        <div className="col-md-12">
                                            <div className="rpt100">
                                            <ul className="radio--group-inline-container_1">
                                                <li>
                                                <div className="radio-item_1">
                                                    <input id="cashondelivery1" defaultValue="cashondelivery" name="paymentmethod" type="radio" data-minimum={50.0} />
                                                    <label htmlFor="cashondelivery1" className="radio-label_1">Cash on Delivery</label>
                                                </div>
                                                </li>
                                                <li>
                                                <div className="radio-item_1">
                                                    <input id="card1" defaultValue="card" name="paymentmethod" type="radio" data-minimum={50.0} />
                                                    <label htmlFor="card1" className="radio-label_1">Credit / Debit Card</label>
                                                </div>
                                                </li>
                                            </ul>
                                            </div>
                                            <div className="form-group return-departure-dts" data-method="cashondelivery">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                <div className="pymnt_title">
                                                    <h4>Cash on Delivery</h4>
                                                    <p>Cash on Delivery will not be available if your order value exceeds PKR 10.</p>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="form-group return-departure-dts" data-method="card">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                <div className="pymnt_title mb-4">
                                                    <h4>Credit / Debit Card</h4>
                                                </div>
                                                </div>
                                                <div className="col-lg-6">
                                                <div className="form-group mt-1">
                                                    <label className="control-label">Holder Name*</label>
                                                    <div className="ui search focus">
                                                    <div className="ui left icon input swdh11 swdh19">
                                                        <input className="prompt srch_explore" type="text" name="holdername" defaultValue id="holder[name]" required maxLength={64} placeholder="Holder Name" />
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="col-lg-6">
                                                <div className="form-group mt-1">
                                                    <label className="control-label">Card Number*</label>
                                                    <div className="ui search focus">
                                                    <div className="ui left icon input swdh11 swdh19">
                                                        <input className="prompt srch_explore" type="text" name="cardnumber" defaultValue id="card[number]" required maxLength={64} placeholder="Card Number" />
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="col-lg-4">
                                                <div className="form-group mt-1">
                                                    <label className="control-label">Expiration Month*</label>
                                                    <select className="ui fluid search dropdown form-dropdown" name="card[expire-month]">
                                                    <option value>Month</option>
                                                    <option value={1}>January</option>
                                                    <option value={2}>February</option>
                                                    <option value={3}>March</option>
                                                    <option value={4}>April</option>
                                                    <option value={5}>May</option>
                                                    <option value={6}>June</option>
                                                    <option value={7}>July</option>
                                                    <option value={8}>August</option>
                                                    <option value={9}>September</option>
                                                    <option value={10}>October</option>
                                                    <option value={11}>November</option>
                                                    <option value={12}>December</option>
                                                    </select>
                                                </div>
                                                </div>
                                                <div className="col-lg-4">
                                                <div className="form-group mt-1">
                                                    <label className="control-label">Expiration Year*</label>
                                                    <div className="ui search focus">
                                                    <div className="ui left icon input swdh11 swdh19">
                                                        <input className="prompt srch_explore" type="text" name="card[expire-year]" maxLength={4} placeholder="Year" />
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="col-lg-4">
                                                <div className="form-group mt-1">
                                                    <label className="control-label">CVV*</label>
                                                    <div className="ui search focus">
                                                    <div className="ui left icon input swdh11 swdh19">
                                                        <input className="prompt srch_explore" name="card[cvc]" maxLength={3} placeholder="CVV" />
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <Link to="/order_placed" className="next-btn16 hover-btn">Place Order</Link>
                                            {/* <a href="/" className="next-btn16 hover-btn">Place Order</a> */}
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-5">
                            {/* product sec starts */}
                            <div className="pdpt-bg mt-0">
                                <div className="pdpt-title">
                                <h4>Order Summary</h4>
                                </div>
                                <div className="right-cart-dt-body">
                                <div className="cart-item border_radius">
                                    <div className="cart-product-img">
                                    <img src="images/product/img-11.jpg" alt="" />
                                    <div className="offer-badge">4% OFF</div>
                                    </div>
                                    <div className="cart-text">
                                    <h4>Product Title Here</h4>
                                    <div className="cart-item-price">PKR 15 <span>PKR 18</span></div>
                                    <button type="button" className="cart-close-btn"><i className="uil uil-multiply" /></button>
                                    </div>
                                </div>
                                </div>
                                <div className="total-checkout-group">
                                <div className="cart-total-dil">
                                    <h4>Gambo Super Market</h4>
                                    <span>PKR 15</span>
                                </div>
                                <div className="cart-total-dil pt-3">
                                    <h4>Delivery Charges</h4>
                                    <span>PKR 1</span>
                                </div>
                                </div>
                                <div className="cart-total-dil saving-total ">
                                <h4>Total Saving</h4>
                                <span>PKR 3</span>
                                </div>
                                <div className="main-total-cart">
                                <h2>Total</h2>
                                <span>PKR 16</span>
                                </div>
                                <div className="payment-secure">
                                <i className="uil uil-padlock" />Secure checkout
                                </div>
                            </div>
                            {/* product sec ends */}
                            {/*checkout security sec starts  */}
                            <div className="checkout-safety-alerts">
                                <p><i className="uil uil-sync" />100% Replacement Guarantee</p>
                                <p><i className="uil uil-check-square" />100% Genuine Products</p>
                                <p><i className="uil uil-shield-check" />Secure Payments</p>
                            </div>
                            {/*checkout security sec ends  */}
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* onclick section ends */}
                    </div>

                    <footer>
                        <GSFooter />
                    </footer>

            </Fragment>
        );
    }
}

export default CheckOut;
