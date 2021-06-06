import React, { Component, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import GSHeader from "../GSHeader/GSHeader"
import GSFooter from "../GSFooter/GSFooter"

class Faq extends Component {
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
                                    <li className="breadcrumb-item active" aria-current="page">Frequently Asked Questions</li>
                                    </ol>
                                </nav>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* breadcrumb sec */}
                        <div className="all-product-grid">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                <div className="default-title mt-4">
                                    <h2>Frequently Asked Questions</h2>
                                    <img src="images/line.svg" alt="" />
                                </div>
                                <div className="panel-group accordion pt-1" id="accordion0">
                                    <div className="panel panel-default">
                                    <div className="panel-heading" id="headingOne">
                                        <div className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-target="#collapseOne" href="/" aria-expanded="false" aria-controls="collapseOne">
                                            Registration
                                        </a>
                                        </div>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion0" style={{}}>
                                        <div className="panel-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus erat a efficitur. Praesent vulputate mauris eget augue semper, at eleifend enim aliquam. Vivamus suscipit lacinia neque eget suscipit. Morbi vitae nisl ac justo placerat vulputate ac quis lectus. Vestibulum pellentesque, orci eu ultrices molestie, nisi libero hendrerit eros, vel interdum augue tortor vel urna. Nullam enim dolor, pulvinar in metus vitae, tincidunt dignissim neque. Pellentesque tempor nulla eu neque hendrerit fringilla. Suspendisse ultricies venenatis maximus. Suspendisse erat elit, ultricies eu porta nec, luctus sit amet dui. Fusce feugiat odio semper, hendrerit lectus vitae, convallis nisl. Ut a justo diam. Donec vitae leo lorem. Cras pharetra libero ut urna condimentum, non imperdiet leo posuere.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="panel panel-default">
                                    <div className="panel-heading" id="headingTwo">
                                        <div className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-target="#collapseTwo" href="/" aria-expanded="false" aria-controls="collapseTwo">
                                            Account Related
                                        </a>
                                        </div>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion0">
                                        <div className="panel-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus erat a efficitur. Praesent vulputate mauris eget augue semper, at eleifend enim aliquam. Vivamus suscipit lacinia neque eget suscipit. Morbi vitae nisl ac justo placerat vulputate ac quis lectus. Vestibulum pellentesque, orci eu ultrices molestie, nisi libero hendrerit eros, vel interdum augue tortor vel urna. Nullam enim dolor, pulvinar in metus vitae, tincidunt dignissim neque. Pellentesque tempor nulla eu neque hendrerit fringilla. Suspendisse ultricies venenatis maximus. Suspendisse erat elit, ultricies eu porta nec, luctus sit amet dui. Fusce feugiat odio semper, hendrerit lectus vitae, convallis nisl. Ut a justo diam. Donec vitae leo lorem. Cras pharetra libero ut urna condimentum, non imperdiet leo posuere.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="panel panel-default">
                                    <div className="panel-heading" id="headingThree">
                                        <div className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-target="#collapseThree" href="/" aria-expanded="false" aria-controls="collapseThree">
                                            Payment
                                        </a>
                                        </div>
                                    </div>
                                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion0">
                                        <div className="panel-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus erat a efficitur. Praesent vulputate mauris eget augue semper, at eleifend enim aliquam. Vivamus suscipit lacinia neque eget suscipit. Morbi vitae nisl ac justo placerat vulputate ac quis lectus. Vestibulum pellentesque, orci eu ultrices molestie, nisi libero hendrerit eros, vel interdum augue tortor vel urna. Nullam enim dolor, pulvinar in metus vitae, tincidunt dignissim neque. Pellentesque tempor nulla eu neque hendrerit fringilla. Suspendisse ultricies venenatis maximus. Suspendisse erat elit, ultricies eu porta nec, luctus sit amet dui. Fusce feugiat odio semper, hendrerit lectus vitae, convallis nisl. Ut a justo diam. Donec vitae leo lorem. Cras pharetra libero ut urna condimentum, non imperdiet leo posuere.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="panel panel-default">
                                    <div className="panel-heading" id="headingfour">
                                        <div className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-target="#collapsefour" href="/" aria-expanded="false" aria-controls="collapsefour">
                                            Delivery Related
                                        </a>
                                        </div>
                                    </div>
                                    <div id="collapsefour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfour" data-parent="#accordion0">
                                        <div className="panel-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus erat a efficitur. Praesent vulputate mauris eget augue semper, at eleifend enim aliquam. Vivamus suscipit lacinia neque eget suscipit. Morbi vitae nisl ac justo placerat vulputate ac quis lectus. Vestibulum pellentesque, orci eu ultrices molestie, nisi libero hendrerit eros, vel interdum augue tortor vel urna. Nullam enim dolor, pulvinar in metus vitae, tincidunt dignissim neque. Pellentesque tempor nulla eu neque hendrerit fringilla. Suspendisse ultricies venenatis maximus. Suspendisse erat elit, ultricies eu porta nec, luctus sit amet dui. Fusce feugiat odio semper, hendrerit lectus vitae, convallis nisl. Ut a justo diam. Donec vitae leo lorem. Cras pharetra libero ut urna condimentum, non imperdiet leo posuere.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="panel panel-default">
                                    <div className="panel-heading" id="headingfive">
                                        <div className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-target="#collapsefive" href="/" aria-expanded="false" aria-controls="collapsefive">
                                            Order Related
                                        </a>
                                        </div>
                                    </div>
                                    <div id="collapsefive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfive" data-parent="#accordion0">
                                        <div className="panel-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus erat a efficitur. Praesent vulputate mauris eget augue semper, at eleifend enim aliquam. Vivamus suscipit lacinia neque eget suscipit. Morbi vitae nisl ac justo placerat vulputate ac quis lectus. Vestibulum pellentesque, orci eu ultrices molestie, nisi libero hendrerit eros, vel interdum augue tortor vel urna. Nullam enim dolor, pulvinar in metus vitae, tincidunt dignissim neque. Pellentesque tempor nulla eu neque hendrerit fringilla. Suspendisse ultricies venenatis maximus. Suspendisse erat elit, ultricies eu porta nec, luctus sit amet dui. Fusce feugiat odio semper, hendrerit lectus vitae, convallis nisl. Ut a justo diam. Donec vitae leo lorem. Cras pharetra libero ut urna condimentum, non imperdiet leo posuere.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="panel panel-default">
                                    <div className="panel-heading" id="headingsix">
                                        <div className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-target="#collapsesix" href="/" aria-expanded="false" aria-controls="collapsesix">
                                            Customer Related
                                        </a>
                                        </div>
                                    </div>
                                    <div id="collapsesix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingsix" data-parent="#accordion0">
                                        <div className="panel-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus erat a efficitur. Praesent vulputate mauris eget augue semper, at eleifend enim aliquam. Vivamus suscipit lacinia neque eget suscipit. Morbi vitae nisl ac justo placerat vulputate ac quis lectus. Vestibulum pellentesque, orci eu ultrices molestie, nisi libero hendrerit eros, vel interdum augue tortor vel urna. Nullam enim dolor, pulvinar in metus vitae, tincidunt dignissim neque. Pellentesque tempor nulla eu neque hendrerit fringilla. Suspendisse ultricies venenatis maximus. Suspendisse erat elit, ultricies eu porta nec, luctus sit amet dui. Fusce feugiat odio semper, hendrerit lectus vitae, convallis nisl. Ut a justo diam. Donec vitae leo lorem. Cras pharetra libero ut urna condimentum, non imperdiet leo posuere.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="panel panel-default">
                                    <div className="panel-heading" id="headingseven">
                                        <div className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-target="#collapseseven" href="/" aria-expanded="false" aria-controls="collapseseven">
                                            Return &amp; Refund
                                        </a>
                                        </div>
                                    </div>
                                    <div id="collapseseven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingseven" data-parent="#accordion0">
                                        <div className="panel-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus erat a efficitur. Praesent vulputate mauris eget augue semper, at eleifend enim aliquam. Vivamus suscipit lacinia neque eget suscipit. Morbi vitae nisl ac justo placerat vulputate ac quis lectus. Vestibulum pellentesque, orci eu ultrices molestie, nisi libero hendrerit eros, vel interdum augue tortor vel urna. Nullam enim dolor, pulvinar in metus vitae, tincidunt dignissim neque. Pellentesque tempor nulla eu neque hendrerit fringilla. Suspendisse ultricies venenatis maximus. Suspendisse erat elit, ultricies eu porta nec, luctus sit amet dui. Fusce feugiat odio semper, hendrerit lectus vitae, convallis nisl. Ut a justo diam. Donec vitae leo lorem. Cras pharetra libero ut urna condimentum, non imperdiet leo posuere.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="panel panel-default">
                                    <div className="panel-heading" id="headingeight">
                                        <div className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-target="#collapseeight" href="/" aria-expanded="false" aria-controls="collapseeight">
                                            How Does it Work
                                        </a>
                                        </div>
                                    </div>
                                    <div id="collapseeight" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingeight" data-parent="#accordion0">
                                        <div className="panel-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper faucibus erat a efficitur. Praesent vulputate mauris eget augue semper, at eleifend enim aliquam. Vivamus suscipit lacinia neque eget suscipit. Morbi vitae nisl ac justo placerat vulputate ac quis lectus. Vestibulum pellentesque, orci eu ultrices molestie, nisi libero hendrerit eros, vel interdum augue tortor vel urna. Nullam enim dolor, pulvinar in metus vitae, tincidunt dignissim neque. Pellentesque tempor nulla eu neque hendrerit fringilla. Suspendisse ultricies venenatis maximus. Suspendisse erat elit, ultricies eu porta nec, luctus sit amet dui. Fusce feugiat odio semper, hendrerit lectus vitae, convallis nisl. Ut a justo diam. Donec vitae leo lorem. Cras pharetra libero ut urna condimentum, non imperdiet leo posuere.</p>
                                        </div>
                                    </div>
                                    </div>
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

export default Faq;
