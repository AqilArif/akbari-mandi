import React, { Component, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import GSHeader from "../GSHeader/GSHeader"
import GSFooter from "../GSFooter/GSFooter"

class Policies extends Component {
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
                                    <li className="breadcrumb-item active" aria-current="page">Refund &amp; Return Policy</li>
                                    </ol>
                                </nav>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="all-product-grid">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                <div className="job-main-dt">
                                    <h2 className="font-weight-bolder">Gambo Refund &amp; Return Policy</h2>
                                    <span>These Refund &amp; Return Policy ("Refund - Return") were last updated on May 18, 2020.</span>
                                </div>
                                <div className="job-des-dt142 policy-des-dt">
                                    <h4 className="font-weight-bolder">Return Policy</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum turpis vitae facilisis tempus. Donec in blandit risus, eget pretium mauris. Aliquam nec venenatis massa. Ut vel nulla id velit dictum rutrum nec vel ex. Phasellus sit amet faucibus massa, in feugiat augue. Maecenas eget dapibus turpis, a finibus justo. Suspendisse pretium lorem non lorem faucibus, non sagittis nisi finibus. Sed efficitur massa ac nibh condimentum interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse luctus, ex ut congue interdum, nibh turpis malesuada orci, vel vulputate arcu velit condimentum orci. Ut sed dictum lacus.</p>
                                </div>
                                <div className="job-des-dt142 policy-des-dt">
                                    <h4 className="font-weight-bolder">Refund Policy</h4>
                                    <p>Donec maximus lorem vitae risus molestie sollicitudin. Ut sem lorem, consequat et tortor sit amet, viverra porttitor erat. Suspendisse aliquet arcu vel auctor maximus. Nunc in euismod purus. Aliquam non varius quam. Sed eros magna, tempus ullamcorper auctor vitae, pretium eu elit. Integer sagittis eu purus eget venenatis. Ut rhoncus tempor velit vitae consequat. Quisque consequat, enim eu cursus eleifend, velit mi viverra arcu, sed elementum dolor odio eget neque.</p>
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

export default Policies;
