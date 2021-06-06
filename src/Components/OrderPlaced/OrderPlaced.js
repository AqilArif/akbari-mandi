import React, { Component, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import GSHeader from "../GSHeader/GSHeader"
import GSFooter from "../GSFooter/GSFooter"

class OrderPlaced extends Component {
    render() {
        return (
            <Fragment>
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
                                <li className="breadcrumb-item active" aria-current="page">Order Placed</li>
                                </ol>
                            </nav>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* breadcrumb sec */}
                    <div className="all-product-grid">
                        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                            <div className="order-placed-dt">
                                <i className="uil uil-check-circle icon-circle" />
                                {/* order placed headings */}
                                <h2>Order Successfully Placed</h2>
                                <p>Thank you for your order! will received order timing - <span>(Today, 3.00PM - 5.00PM)</span></p>
                                {/* order placed headings */}
                                {/* order details sec */}
                                <div className="delivery-address-bg">
                                <div className="title585">
                                    <div className="pln-icon"><i className="uil uil-telegram" alt="" /></div>
                                    <h4>Your order will be sent to this address</h4>
                                </div>
                                <ul className="address-placed-dt1">
                                    <li><p><i className="uil uil-map-marker" alt="" />Address :<span>Address...</span></p></li>
                                    <li><p><i className="uil uil-phone" alt="" />Phone Number :<span>+000000000</span></p></li>
                                    <li><p><i className="uil uil-envelope" />Email Address :<span><a href="/" className="__cf_email__" data-cfemail>info@example.com</a></span></p></li>
                                    <li><p><i className="uil uil-card-atm" />Payment Method :<span>Cash on Delivery</span></p></li>
                                </ul>
                                <div className="stay-invoice">
                                    <div className="st-hm">Stay Home<i className="uil uil-smile" /></div>
                                    <a href="/" className="invc-link hover-btn">invoice</a>
                                </div>
                                <div className="placed-bottom-dt">
                                    The payment of <span>PKR 300</span> you'll make when the deliver arrives with your order.
                                </div>
                                </div>
                                {/* order details sec */}
                            </div>
                            </div>
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

export default OrderPlaced;
