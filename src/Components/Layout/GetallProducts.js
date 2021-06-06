import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GSHeader from "../GSHeader/GSHeader";
import GSFooter from "../GSFooter/GSFooter";
import { GetallProductsFormat } from "./GetallProductsFormat";

class GetallProducts extends Component {
  constructor() {
    super();
    this.state = {
      products: null,
    };
  }
  componentDidMount() {
    fetch("/api/product")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
    console.log("hello", this.state.products);
  }
  render() {
    return (
      <Fragment>
        <section>
          <GSHeader />
        </section>

        <section>
          <div className="wrapper">
            <div className="all-product-grid">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="product-top-dt">
                      <div className="product-left-title">
                        <h2>All &amp; Products</h2>
                      </div>
                      <a href="/" className="filter-btn pull-bs-canvas-right">
                        Filters
                      </a>
                      <div className="product-sort">
                        <div className="input-group mb-3">
                          <select
                            className="form-select ui selection dropdown vchrt-dropdown "
                            id="inputGroupSelect02"
                          >
                            <option selected>Popularity</option>
                            <option value={1}>Price - Low to High</option>
                            <option value={2}>Price - High to Low</option>
                            <option value={3}>Alphabetical</option>
                            <option value={4}>Saving - High to Low</option>
                            <option value={5}>Saving - Low to High</option>
                            <option value={6}>6% Off - High to Low</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                  <div className="row">
                        {console.log(this.state.products)}

                        {this.state.products
                          ? this.state.products.map((products) => (
                            <div className="col-lg-3 col-md-6">
                            <div className="product-item mb-30">
                        
                              <GetallProductsFormat
                                key={products.id}
                                name={products.name}
                                image={products.product_image[0].image}
                                discount={products.discount}
                                dprice={products.dprice}
                                stock={products.stock}
                              />
                              </div>
                              </div>
                            ))
                          : null}

                        {/* <a href="single_product.html" className="product-img">
                                        <img src="images/product/img-1.jpg" alt="" />
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
                                    </div> */}

                    <div className="col-md-12">
                      <div className="more-product-btn">
                        <button
                          className="show-more-btn hover-btn"
                          onclick="window.location.href = '#';"
                        >
                          Show More
                        </button>
                      </div>
                    </div>
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

export default GetallProducts;
