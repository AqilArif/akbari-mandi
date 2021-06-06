import React, { Component, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import CategoryFormat from '../Layout/CategoryFormat'
import ProductFormat from '../Layout/ProductFormat'
import {CategoryArray,ProductsArray} from '../Layout/DataSet'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GSHeader from "../GSHeader/GSHeader"
import GSFooter from "../GSFooter/GSFooter"

class Singlebrand extends Component {
    render() {
        var CategorySettings={
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            arrows:true,
            slidesToScroll: 4
        }
        var ProductSettings={
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            arrows:true,
            slidesToScroll: 1
        }
        return (
            <Fragment>
                <section>
                    <GSHeader />
                </section>

                {/* All Categories Slider */}
                <div className="container" style={{'position':'relative','top':'120px'}}>
                {/* <div className="main-title-tt">
                    <div className="main-title-left" style={{'position':'relative','top':'60px'}}>
                        <span>Shop By</span>
                        <h2>Categories</h2>
                    </div>
                </div>       */}
                 <Slider {...CategorySettings}>
                {CategoryArray.map((category)=>{
                    return <CategoryFormat key={category.id} name={category.name} image={category.image}/>
                })}
                </Slider>
                </div>
                {/* All Categories Slider */}

                {/* Single Product */}
                <div className="wrapper" style={{'position':'relative','bottom':'200px'}}>
                    <div className="all-product-grid">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="product-top-dt">
                                <div className="product-left-title">
                                <h2>Laundary</h2>
                                </div>                               
                            </div>
                            </div>
                        </div>
                        <div className="product-list-view">
                            <div className="row">
                            <div className="col-md-12 col-md-6 ">
                                <div className="product-item mb-30">
                                <a href="single_product.html" className="product-img">
                                    <img src="images/product/img-1.jpg" alt="" style={{'width':'30%'}} />
                                    <div className="product-absolute-options">
                                    <span className="offer-badge-1">6% off</span>
                                    <span className="like-icon" title="wishlist" />
                                    </div>
                                </a>
                                <div className="product-text-dt">
                                    <p>Available<span>(In Stock)</span></p>
                                    <h4>Product Title Here</h4>
                                    <div className="product-price">PKR 12 <span>PKR 15</span></div>
                                    <div className="qty-cart">
                                    <div className="quantity buttons_added">
                                        <input type="button" defaultValue="-" className="minus minus-btn" />
                                        <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                        <input type="button" defaultValue="+" className="plus plus-btn" />
                                    </div>
                                    <span className="cart-icon"><i className="uil uil-shopping-cart=" alt="" /></span>
                                    </div>
                                </div>
                                </div>
                            </div>
                        
                            <div className="col-md-12">
                                <div className="more-product-btn">
                                <button className="show-more-btn hover-btn" onclick="window.location.href = '#';">Show More</button>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Single Product */}

                {/* Products related to Laundary */}
                <div className="container" style={{'position':'relative','bottom':'140px'}}>
                <div className="main-title-tt">
                    <div className="main-title-left" style={{'position':'relative','bottom':'40px','left':'20px'}}>
                        {/* <span>For You</span> */}
                        <h2>More Laundary</h2>
                    </div>
                    {/* <a href="/" className="see-more-btn" style={{'position':'relative','bottom':'150px'}}>See All</a> */}
                 </div>

                 <Slider {...ProductSettings} style={{'position':'relative','bottom':'60px'}}>
                {ProductsArray.map((product)=>{
                    return <ProductFormat key={product.id} name={product.name} image={product.image} discount={product.discount} dprice={product.dprice} stock={product.stock}/>
                })}
                </Slider>
                </div>
                {/* Products Related to Laundary */}

                {/* Footer benefit section */}
                <div className="container" style={{'position':'relative','bottom':'130px'}}>
                    <div className="main-title-tt">
                        <div className="main-title-left" style={{'position':'relative','top':'30px','left':'60px'}}>
                            {/* <span>For You</span> */}
                            <div>
                            <h5>
                              GrocerApp aims to deliver household happiness by trying to be the best in following 3 things.
                            </h5>
                            <hr style={{'width':'100%'}}/>
                            {/* <p style={{'color':'rgb(0 0 -1 / 0.54)'}}>
                             Cat Food, Dog Food
                            </p> */}
                            </div>
                        </div>
                    </div> <br/>

                    <div v className="row ml-5">
                        <div className="col-md-12 col-sm-6">
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
                {/* Footer benefit section */}

                {/* You May Also Like */}
                    <div className="container">
                    <div className="main-title-tt">
                        <div className="main-title-left" style={{'position':'relative','bottom':'40px','left':'20px'}}>
                            {/* <span>For You</span> */}
                            <h2>You May Also Like</h2>
                        </div>
                        {/* <a href="/" className="see-more-btn" style={{'position':'relative','bottom':'150px'}}>See All</a> */}
                    </div>

                    <Slider {...ProductSettings} style={{'position':'relative','bottom':'60px'}}>
                    {ProductsArray.map((product)=>{
                        return <ProductFormat key={product.id} name={product.name} image={product.image} discount={product.discount} dprice={product.dprice} stock={product.stock}/>
                    })}
                    </Slider>
                    </div>
                {/* You May Also Like */}

                {/* Most Popular */}
                    <div className="container">
                    <div className="main-title-tt">
                        <div className="main-title-left" style={{'position':'relative','bottom':'40px','left':'20px'}}>
                            {/* <span>For You</span> */}
                            <h2>Most Popular</h2>
                        </div>
                        {/* <a href="/" className="see-more-btn" style={{'position':'relative','bottom':'150px'}}>See All</a> */}
                    </div>

                    <Slider {...ProductSettings} style={{'position':'relative','bottom':'60px'}}>
                    {ProductsArray.map((product)=>{
                        return <ProductFormat key={product.id} name={product.name} image={product.image} discount={product.discount} dprice={product.dprice} stock={product.stock}/>
                    })}
                    </Slider>
                    </div>
                {/* Most Popular */}

                <section>
                    <GSFooter />
                </section>

            </Fragment>
        );
    }
}

export default Singlebrand;
