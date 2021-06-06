import React, { Component, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
// import {Link} from "react-router-dom"
import "./GSFooter.css"

class GSFooter extends Component {
    render() {
        return (
            <Fragment>
                {/* Footer Section Starts */}
                    <footer className="footer" style={{'position':'relative','top':'150px'}}>
                    <div className="footer-first-row">
                        <div className="container">
                        <div className="main-title-tt">
                        <div className="main-title-left" style={{'position':'relative','top':'30px','left':'60px'}}>
                            {/* <span>For You</span> */}
                            <div>
                            <h5>
                              Akbari Mandi aims to deliver household happiness by trying to be the best in following 3 things.
                            </h5> <br/>
                            {/* <hr /> */}
                            </div>
                        </div>
                    </div>
                        <div className="row">
                          <div className="col-md-6 col-sm-6">
                            <ul className="call-email" alt="">
                            <li>
                                    <div href="/" className="callemail">
                                        <i className="uil uil-dialpad" alt="" style={{'fontSize':'25px','position':'relative','top':'15px'}} /> 
                                        <span style={{'position':'relative','left':'20px','fontSize':'17px'}}>
                                           Best Prices & Offers
                                        </span>
                                        <p style={{'position':'relative','left':'60px','fontSize':'17px','color':'rgb(0 0 -1 / 0.54)'}}>
                                           Cheaper prices than your local supermarket, great cashback offers to top it off.
                                        </p>
                                    </div>
                                </li> <br/>

                                <li>
                                    <div href="/" className="callemail">
                                        <i className="uil uil-dialpad" alt="" style={{'fontSize':'25px','position':'relative','top':'15px'}} /> 
                                        <span style={{'position':'relative','left':'20px','fontSize':'17px'}}>
                                           Wide Assortment
                                        </span>
                                        <p style={{'position':'relative','left':'60px','fontSize':'17px','color':'rgb(0 0 -1 / 0.54)'}}>
                                           Choose from 5000+ products across food, personal care, household & other categories.
                                        </p>
                                    </div>
                                </li> <br/>

                                <li>
                                    <div href="/" className="callemail">
                                        <i className="uil uil-dialpad" alt="" style={{'fontSize':'25px','position':'relative','top':'15px'}} /> 
                                        <span style={{'position':'relative','left':'20px','fontSize':'17px'}}>
                                           Easy Returns
                                        </span>
                                        <p style={{'position':'relative','left':'60px','fontSize':'17px','color':'rgb(0 0 -1 / 0.54)'}}>
                                           Not satisfied with a product? Return it at the doorstep & get a refund within hours.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                          </div>
                        </div>
                        </div>
                    </div>

                    <div className="footer-first-row">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                            <ul className="call-email" alt="">
                                <li><a href="/" className="callemail"><i className="uil uil-dialpad" alt="" />000-000-000</a></li>
                                <li><a href="/" className="callemail"><i className="uil uil-envelope" alt="" /><span className="__cf_email__" data-cfemail="8be2e5ede4cbeceae6e9e4f8fefbeef9e6eaf9e0eeffa5e8e4e6">info@akbarimandionline.com</span></a></li>
                            </ul>
                            </div>
                            <div className="col-md-6 col-sm-6">
                            <div className="social-links-footer">
                                <ul>
                                <li><a href="/"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="/"><i className="fab fa-instagram" /></a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    <div className="footer-second-row">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                            <h4 className="mt-3">Categories</h4>

                            <div className="second-row-item">
                                <h4 className="font-weight-bolder">Fruits & Vegetables</h4>
                                <ul>
                                <li><a href="/">Vegetables</a></li>
                                <li><a href="/">Fruits</a></li>
                                </ul>
                            </div>

                            <div className="second-row-item">
                                <h4 className="font-weight-bolder">Fresh Meat</h4>
                                <ul>
                                <li><a href="/">Chicken</a></li>
                                <li><a href="/">Mutton</a></li>
                                <li><a href="/">Beef</a></li>
                                <li><a href="/">Marinated Chicken</a></li>
                                </ul>
                            </div>

                            <div className="second-row-item">
                                <h4 className="font-weight-bolder">Fish & Seafood</h4>
                                <ul>
                                <li><a href="/">Boneless Fish</a></li>
                                </ul>
                            </div>

                            <div className="second-row-item">
                                <h4 className="font-weight-bolder">Grocery</h4>
                                <ul>
                                <li><a href="/">Oil & Ghee</a></li>
                                <li><a href="/">Spices, Salt & Sugar</a></li>
                                <li><a href="/">Daalain, Rice & Flour</a></li>
                                <li><a href="/">Sauces, Olives & Pickles</a></li>
                                <li><a href="/">Jam, Honey & Spread</a></li>
                                <li><a href="/">Baking & Desserts</a></li>
                                </ul>
                            </div>
                            <div className="second-row-item">
                                <h4 className="font-weight-bolder">Personal Care</h4>
                                <ul>
                                <li><a href="/">Women Care</a></li>
                                <li><a href="/">Men Care</a></li>
                                <li><a href="/">Skin Care</a></li>
                                <li><a href="/">Hair Care</a></li>
                                <li><a href="/">Soap, Handwash & Shower Gel</a></li>
                                <li><a href="/">Dental Care</a></li>
                                <li><a href="/">Shoe Polish & Brush</a></li>
                                <li><a href="/">Personal Care Accessories</a></li>
                                </ul>
                            </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="second-row-item">
                                <h4 className="font-weight-bolder">Home Care</h4>
                                <ul>
                                <li>
                                    <li><a href="/">Floor, Bath Cleaning</a></li>
                                    <li><a href="/">Laundary</a></li>
                                    <li><a href="/">Kitchen Cleaning</a></li>
                                    <li><a href="/">Others Cleaners</a></li>
                                    <li><a href="/">Repellents Mosquito Killers</a></li>
                                    <li><a href="/">Air Freshners</a></li>
                                    <li><a href="/">Tissue Papers</a></li>
                                    <li><a href="/">Electronics</a></li>
                                    <li><a href="/">Bath Towels</a></li>
                                    <li><a href="/">Disposable Crockery</a></li>
                                    <li><a href="/">Bed Sheets</a></li>
                                    <li><a href="/">Cleaning Accessories</a></li>
                                </li> 

                                {/* <li>
                                    <a href="/" className="font-weight-bolder">Refund & Return Policy</a>
                                </li>
                                <li><a href="/">Name</a></li>
                                <li><a href="/">Name</a></li>
                                <li><a href="/">Name</a></li>
                                <li><a href="/">Name</a></li> */}
                                </ul>
                            </div>

                            <div className="second-row-item">
                                <h4 className="font-weight-bolder">Baby Care</h4>
                                <ul>
                                <li>
                                    <li><a href="/">Diaper & Wipes</a></li>
                                    <li><a href="/">Food & Milk</a></li>
                                    <li><a href="/">Bath & Toothpaste</a></li>
                                    <li><a href="/">Utensils & Accessories</a></li>
                                    <li><a href="/">Repellents Mosquito Killers</a></li>
                                    <li><a href="/">Air Freshners</a></li>
                                    <li><a href="/">Tissue Papers</a></li>
                                    <li><a href="/">Electronics</a></li>
                                    <li><a href="/">Bath Towels</a></li>
                                    <li><a href="/">Disposable Crockery</a></li>
                                    <li><a href="/">Bed Sheets</a></li>
                                    <li><a href="/">Cleaning Accessories</a></li>
                                </li> 
                                </ul>
                            </div>

                            <div className="second-row-item">
                                <h4 className="font-weight-bolder">Bakery & Dairy</h4>
                                <ul>
                                <li>
                                    <li><a href="/">Milk</a></li>
                                    <li><a href="/">Breads</a></li>
                                    <li><a href="/">Eggs</a></li>
                                    <li><a href="/">Cream & Butter</a></li>
                                    <li><a href="/">Cereals & Oats</a></li>
                                    <li><a href="/">Cake & Rus</a></li>
                                    <li><a href="/">Cheese</a></li>
                                    <li><a href="/">Yougart & Lassi</a></li>
                                    <li><a href="/">Bath Towels</a></li>
                                    <li><a href="/">Disposable Crockery</a></li>
                                    <li><a href="/">Bed Sheets</a></li>
                                    <li><a href="/">Cleaning Accessories</a></li>
                                </li> 
                                </ul>
                            </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="second-row-item">
                                <h4 className="font-weight-bolder">Beverages</h4>
                                <ul>
                                <li><a href="/">Sharbat</a></li>
                                <li><a href="/">Cold Drinks</a></li>
                                <li><a href="/">Juices</a></li>
                                <li><a href="/">Tea</a></li>
                                <li><a href="/">Energy Drinks</a></li>
                                <li><a href="/">Mineral & Soda Water</a></li>
                                <li><a href="/">Cold Tea, Coffee </a></li>
                                <li><a href="/">Instant Drinks</a></li>
                                <li><a href="/">Flavoured Milk</a></li>
                                </ul>
                            </div>

                            <div className="second-row-item">
                                <h4 className="font-weight-bolder">Instant Foods</h4>
                                <ul>
                                <li><a href="/">Noodles & Pasta</a></li>
                                <li><a href="/">Biscuits & Cookies</a></li>
                                <li><a href="/">Chips & Nimko</a></li>
                                <li><a href="/">Chocolates</a></li>
                                <li><a href="/">Misc.Foods</a></li>
                                <li><a href="/">Can Food</a></li>
                                </ul>
                            </div>

                            <div className="second-row-item">
                                <h4 className="font-weight-bolder">Frozen & Chilled</h4>
                                <ul>
                                <li><a href="/">French Fries Chips</a></li>
                                <li><a href="/">Frozen Parathay</a></li>
                                <li><a href="/">Chicken By Parts</a></li>
                                <li><a href="/">Sausages & Toppings</a></li>
                                <li><a href="/">Kabab & Kofta</a></li>
                                <li><a href="/">Burger Patties</a></li>
                                <li><a href="/">Nuggets & Snacks</a></li>
                                <li><a href="/">Samosa & Rolls</a></li>
                                <li><a href="/">Frozen Fruits & Vegetables</a></li>
                                </ul>
                            </div>

                            <div className="second-row-item">
                                <h4 className="font-weight-bolder">Pan Shop</h4>
                                <ul>
                                <li><a href="/">Mobile Cards</a></li>
                                <li><a href="/">Cigrettes</a></li>
                                <li><a href="/">Nicotine</a></li>
                                <li><a href="/">Candies</a></li>
                                </ul>
                            </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="second-row-item">
                                <h4 className="font-weight-bolder">Pet Care</h4>
                                <ul>
                                    <li><a href="/">Cat Food</a></li>
                                    <li><a href="/">Dog Food</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        {/* brands Section */}
                          <div className="row">
                              <div className="col-lg-12 col-md-6 col-sm-6">
                                  <div className="second-row-item">
                                  <h4 className="ml-3">Top Brands</h4>
                                    <div>
                                        <button type="button" className="btn btn-set m-1">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>
                                        <button type="button" className="btn btn-set m-2">Nestle (65)</button>


                                        
                                        
                                      </div>
                                  </div>
                              </div>
                          </div>
                        {/* Brands section */}
                        
                        {/* Useful Links */}
                        <div className="row">
                              <div className="col-lg-12 col-md-6 col-sm-6">
                                  <div className="second-row-item">
                                  <h4 className="ml-3">Useful Links</h4>
                                    <div>
                                        <button type="button" className="btn btn-set m-4">Brand Stores</button>
                                        <button type="button" className="btn btn-set m-4">Privacy Policy</button>
                                        <button type="button" className="btn btn-set m-4">Term & Conditions</button>
                                        <button type="button" className="btn btn-set m-4">FAQs</button>
                                        <button type="button" className="btn btn-set m-4">Return & refund</button>
                                        <button type="button" className="btn btn-set m-4">Categories</button> 
                                        <button type="button" className="btn btn-set m-4">Category Sitemap</button> 
                                    </div>
                                  </div>
                              </div>
                          </div>
                        {/* Useful Links */}

                        {/* Footer Content */}
                        <div className="row">
                              <div className="col-lg-12 col-md-6 col-sm-6">
                                  <div className="second-row-item">
                                    <div>
                                        <h1 className="main-hdng">GrocerApp - Online groccery Shopping</h1>
                                        <p className="p-set">
                                          GrocerApp makes shopping easier and more convenient than ever.
                                        </p>

                                        <h1 className="hdng-set">Online grocery store in Pakistan</h1>
                                        <p className="p-set">
                                        Order online. All your favourite products from the low price online supermarket for grocery home delivery in Lahore, <br/> 
                                        Pakistan. Best experience guaranteed.
                                        </p>

                                        <h1 className="hdng-set">One stop shop for all your daily needs</h1>
                                        <p className="p-set">
                                        GrocerApp is a low-price online supermarket that allows you to order products across categories like grocery, <br/>
                                        vegetables, beauty & wellness, household care, baby care, pet care and meats & seafood and <br/>
                                        gets them delivered to your doorstep.
                                        </p>

                                        <h1 className="hdng-set">For best of prices, deals and offers; order online in Lahore, Islamabad, Rawalpindi</h1>
                                        <p className="p-set">
                                        Order online. All your favourite products from the low price online supermarket for grocery home delivery in Lahore, <br/> 
                                        Pakistan. Best experience guaranteed.The delivery service is operational in all areas of Lahore: Ravi, Shalimar, Data Gunj Bakhsh,<br/> 
                                        Samanabad, Gulberg, Allama Iqbal, Nishtar, Pak arab society, Bahria town, SA Gardens, DHA 1 to 7, wapda town, Capital Housing, <br/> 
                                        Cantt and all other areas, Islamabad: Pakistan Secretariat Diplomatic Enclave A-17, Islamabad A-18, Islamabad B-17, <br/> 
                                        Islamabad B-18, Islamabad C-15, Islamabad C-16, Islamabad
                                        </p>

                                        <h1 className="hdng-set">Payment Options</h1>
                                        <p className="p-set">
                                          Credit and Debit Cards, Cash on Delivery (COD) and EasyPaisa (Coming Soon)
                                        </p> 
                                    </div>
                                  </div>
                              </div>
                          </div>
                        {/* Footer Content */}
                        </div>
                    </div>
                    
                    <div className="footer-last-row">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            <div className="copyright-text">
                                <i className="uil uil-copyright" />Akbari Mandi Online 2021  . All rights reserved.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </footer>
                    {/* Footer Section Ends */}

            </Fragment>
        );
    }
}

export default GSFooter;
