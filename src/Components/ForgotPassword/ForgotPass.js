import React, { Component, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

class ForgotPass extends Component {
    render() {
        return (
            <Fragment>
                <section>
                    {/* Forgot Password Section */}
                      <div className="sign-inup">
                        <div className="container">
                            <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="sign-form">
                                <div className="sign-inner">
                                    {/* logo */}
                                    <div className="sign-logo" id="logo">
                                    <a href="index.html"><img src="images/logo.png" alt="" /></a>
                                    <a href="index.html"><img className="logo-inverse" src="images/logo.png" alt="" /></a>
                                    </div>
                                    {/* logo */}
                                    {/* form data sec */}
                                    <div className="form-dt">
                                    <div className="form-inpts checout-address-step">
                                        <form>
                                        <div className="form-title"><h6>Request a Password Reset</h6></div>
                                        <div className="form-group pos_rel">
                                            <input id="email[address]" name="emailaddress" type="email" placeholder="Your Email Address" className="form-control lgn_input" required />
                                            <i className="uil uil-envelope lgn_icon" />
                                        </div>
                                        <div className="form-group pos_rel">
                                            <input id="password[old]" name="passwordold" type="password" placeholder="Enter Old Password" className="form-control lgn_input" required />
                                            <i className="uil uil-padlock lgn_icon" />
                                        </div>
                                        <div className="form-group pos_rel">
                                            <input id="password[new]" name="passwordnew" type="password" placeholder="Enter New Password" className="form-control lgn_input" required />
                                            <i className="uil uil-padlock lgn_icon" />
                                        </div>
                                        <button className="login-btn hover-btn" type="submit">Reset Password</button>
                                        </form>
                                    </div>
                                    <div className="signup-link">
                                        <p>Go Back - <a href="sign_in.html">Sign In Now</a></p>
                                    </div>
                                    </div>
                                    {/* form data sec */}
                                </div>
                                </div>
                                {/* copyright sec */}
                                <div className="copyright-text text-center mt-3">
                                <i className="uil uil-copyright" />Akbari Mandi Online 2021  . All rights reserved.
                                </div>
                                {/* copyright sec */}
                            </div>
                            </div>
                        </div>
                        </div>

                    {/* Forgot Password Section */}
                </section>
            </Fragment>
        );
    }
}

export default ForgotPass;
