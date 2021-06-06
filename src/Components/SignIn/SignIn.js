import React, { Component, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom"

class SignIn extends Component {
    render() {
        return (
            <Fragment>
                {/* SignIn Sec */}
                    <div className="sign-inup">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="sign-form">
                            <div className="sign-inner">
                                <div className="sign-logo" id="logo">
                                <a href="index.html"><img src="images/logo.png" alt="" /></a>
                                <a href="index.html"><img className="logo-inverse" src="images/logo.png" alt="" /></a>
                                </div>
                                <div className="form-dt">
                                <div className="form-inpts checout-address-step">
                                    <form>
                                    <div className="form-title"><h6>Sign In</h6></div>
                                    <div className="form-group pos_rel">
                                        <input id="phone[number]" name="phone" type="text" placeholder="Enter Phone Number" className="form-control lgn_input" required />
                                        <i className="uil uil-mobile-android" alt="lgn_icon" />
                                    </div>
                                    <div className="form-group pos_rel">
                                        <input id="password1" name="password1" type="password" placeholder="Enter Password" className="form-control lgn_input" required />
                                        <i className="uil uil-padlock lgn_icon" />
                                    </div>
                                    <button className="login-btn hover-btn" type="submit">Sign In Now</button>
                                    </form>
                                </div>
                                <div className="password-forgor">
                                    <Link to="/forgot_password">Forgot Password?</Link>
                                    {/* <a href="forgot_password.html">Forgot Password?</a> */}
                                </div>
                                <div className="signup-link">
                                    <Link to="/sign_up">
                                       <p>Don't have an account? - 
                                           <a href="sign_up.html">Sign Up Now</a>
                                       </p>
                                    </Link>
                                    {/* <p>Don't have an account? - <a href="sign_up.html">Sign Up Now</a></p> */}
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="copyright-text text-center mt-3">
                            <i className="uil uil-copyright" />Akbari Mandi Online 2021  . All rights reserved.
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* SignIn Sec */}

            </Fragment>
        );
    }
}

export default SignIn;
