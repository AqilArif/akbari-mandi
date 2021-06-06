import React, { Component, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

class BestValues extends Component {
    render() {
        return (
            <Fragment>
                <section style={{'position':'relative','top':'150px'}}>
                    {/* Best Values Section Starts */}
                        <div className="section145">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-12">
                                <div className="main-title-tt">
                                <div className="main-title-left">
                                    <span>Offers</span>
                                    <h2>Best Values</h2>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="/" className="best-offer-item">
                                <img src="images/best-offers/offer-1.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="/" className="best-offer-item">
                                <img src="images/best-offers/offer-2.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="/" className="best-offer-item offr-none">
                                <img src="images/best-offers/offer-3.jpg" alt="" />
                                <div className="cmtk_dt">
                                    <div className="product_countdown-timer offer-counter-text" data-countdown="2021/01/06" />
                                </div>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* 4th Best Values Section Ends */}

                </section>
            </Fragment>
        );
    }
}

export default BestValues;
