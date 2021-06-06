import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import GSHeader from "../GSHeader/GSHeader"
import GSFooter from "../GSFooter/GSFooter"

class ContactUs extends Component {
    render() {
        return (
            <Fragment>
                <section>
                    <header>
                        <GSHeader />
                    </header>

                    {/* Contact Us Section Starts */}
                    <div className="wrapper">
                        {/* bread... sec strts */}
                        <div className="gambo-Breadcrumb">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                    </ol>
                                </nav>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* bread... sec ends */}
                        <div className="all-product-grid">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                <div className="panel-group accordion" id="accordion0">
                                    <div className="panel panel-default">
                                    <iframe title="contact-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.9422775101657!2d74.32356931515213!3d31.580630731349757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b42e863ff29%3A0xa87d5ce02ea52d35!2sAkbari%20Mandi%20Walled%20City%20of%20Lahore%2C%20Lahore%2C%20Punjab%2054000!5e0!3m2!1sen!2s!4v1617790061654!5m2!1sen!2s" width="100%" height={600} style={{border: 0}} allowFullScreen loading="lazy" />
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                <div className="contact-title">
                                    <h2>Submit customer service request</h2>
                                    <p>If you have a question about our service or have an issue to report, please send a request and we will get back to you as soon as possible.</p>
                                </div>
                                <div className="contact-form">
                                    <form>
                                    <div className="form-group mt-1">
                                        <label className="control-label">Full Name*</label>
                                        <div className="ui search focus">
                                        <div className="ui left icon input swdh11 swdh19">
                                            <input className="prompt srch_explore" type="text" name="sendername" id="sendername" required placeholder="Your Full" />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-1">
                                        <label className="control-label">Email Address*</label>
                                        <div className="ui search focus">
                                        <div className="ui left icon input swdh11 swdh19">
                                            <input className="prompt srch_explore" type="email" name="emailaddress" id="emailaddress" required placeholder="Your Email Address" />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-1">
                                        <label className="control-label">Subject*</label>
                                        <div className="ui search focus">
                                        <div className="ui left icon input swdh11 swdh19">
                                            <input className="prompt srch_explore" type="text" name="sendersubject" id="sendersubject" required placeholder="Subject" />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-1">
                                        <div className="field">
                                        <label className="control-label">Message*</label>
                                        <textarea rows={2} className="form-control" id="sendermessage" name="sendermessage" required placeholder="Write Message" defaultValue={""} />
                                        </div>
                                    </div>
                                    <button className="next-btn16 hover-btn mt-3" type="submit" data-btntext-sending="Sending...">Submit Request</button>
                                    </form>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <footer>
                            <GSFooter />
                        </footer>

                    {/* Contact Us Section Ends */}
                </section>
            </Fragment>
        );
    }
}

export default ContactUs;
