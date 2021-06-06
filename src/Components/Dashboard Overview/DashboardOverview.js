import React, { Component, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import GSHeader from "../GSHeader/GSHeader"
import GSFooter from "../GSFooter/GSFooter"

class DashboardOverview extends Component {
    render() {
        return (
            <Fragment>
                <section>
                    <GSHeader />
                </section>

                <section>
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
                                <h4>Name of user</h4>
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
                                <a href="dashboard_my_orders.html" className="user-item"><i className="uil uil-box" />My Orders</a>
                                <a href="dashboard_my_wishlist.html" className="user-item"><i className="uil uil-heart" />Shopping Wishlist</a>
                                <a href="sign_in.html" className="user-item"><i className="uil uil-exit" />Logout</a>
                                </div>
                            </div>
                            </div>
                            {/* overview sec */}

                            {/* further overview sec  */}
                            <div className="col-lg-9 col-md-8">
                            <div className="dashboard-right">
                                <div className="row">
                                <div className="col-md-12">
                                    <div className="main-title-tab">
                                    <h4><i className="uil uil-apps" />Overview</h4>
                                    </div>
                                    <div className="welcome-text">
                                    <h2>Hi! Asad</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="pdpt-bg">
                                    <div className="pdpt-title">
                                        <h4>My Rewards</h4>
                                    </div>
                            
                                    <div className="col-lg-12 col-md-12">
                                        <div className="pdpt-bg mb-50">
                                        <div className="pdpt-title">
                                            <h4>My Orders</h4>
                                        </div>
                                        <div className="ddsh-body">
                                            <h2>2 Recently Purchases</h2>
                                            <ul className="order-list-145">
                                            <li>
                                                <div className="smll-history">
                                                <div className="order-title">2 Items <span data-inverted data-tooltip="2kg broccoli, 1kg Apple" data-position="top center">?</span></div>
                                                <div className="order-status">On the way</div>
                                                <p>PKR 22</p>
                                                </div>
                                            </li>
                                            </ul>
                                        </div>
                                        <a href="/" className="more-link14">All Orders <i className="uil uil-angle-double-right" /></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* further overview sec  */}
                          </div>
                         </div>
                       </div>
                    </div>

                </section>

                <section>
                    <GSFooter />
                </section>
            </Fragment>
        );
    }
}

export default DashboardOverview;
