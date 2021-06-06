import React, { useState, useEffect, Fragment } from "react";
// import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GSHeader from "../GSHeader/GSHeader";
import GSFooter from "../GSFooter/GSFooter";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCmp from "../Shop/ProductCmp";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const [related_product, setRelatedProduct] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    const res = await axios.get(`/api/web/product/${id}`);
    console.log("status", res.data.product);
    setSingleProduct(res.data.product);
    setRelatedProduct(res.data.related_products);
    console.log("related", res.data.related_products);
  };

  // var settings={
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 5
  // }
  return singleProduct === null ? (
    <>Loading.....</>
  ) : (
    <Fragment>
      <section>
        <header>
          <GSHeader />
        </header>
      </section>

      <section>
        <div className="wrapper">
          <div className="gambo-Breadcrumb">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="shop_grid.html">Vegetables &amp; Fruits</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Product Title
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="all-product-grid">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="product-dt-view">
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div id="sync1" className="owl-carousel owl-theme">
                          {singleProduct.product_images.map((img) => {
                            return (
                              <div key={img.id} className="item">
                                <img src={img.image} />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-8">
                        <div className="product-dt-right">
                          <h2>{singleProduct.name}</h2>{" "}
                          <div className="no-stock">
                            <p className="pd-no">
                              Product No.<span>12345</span>
                            </p>
                            {singleProduct.in_stock ? (
                              <>
                                <p className="stock-qty">
                                  Available<span>(Instock)</span>
                                </p>
                              </>
                            ) : (
                              <>
                                <p className="stock-qty">
                                  Not Available<span>(Out of stock)</span>
                                </p>
                              </>
                            )}
                          </div>
                          <div className="product-radio">
                            <ul className="product-now">
                              <li>
                                <input type="radio" id="p2" name="product1" />
                                <label htmlFor="p2">1kg</label>
                              </li>
                              <li>
                                <input type="radio" id="p3" name="product1" />
                                <label htmlFor="p3">2kg</label>
                              </li>
                              <li>
                                <input type="radio" id="p4" name="product1" />
                                <label htmlFor="p4">3kg</label>
                              </li>
                            </ul>
                          </div>
                          <p className="pp-descp">
                            {singleProduct.description}
                          </p>
                          <div className="product-group-dt">
                            <ul>
                              <li>
                                <div className="main-price color-discount">
                                  Discount Price
                                  <span>{singleProduct.discount}</span>
                                </div>
                              </li>
                              <li>
                                <div className="main-price mrp-price">
                                  MRP Price<span>{singleProduct.price}</span>
                                </div>
                              </li>
                            </ul>
                            <ul className="gty-wish-share">
                              <li>
                                <div className="qty-product">
                                  <div className="quantity buttons_added">
                                    <input
                                      type="button"
                                      defaultValue="-"
                                      className="minus minus-btn"
                                    />
                                    <input
                                      type="number"
                                      step={1}
                                      name="quantity"
                                      defaultValue={1}
                                      className="input-text qty text"
                                    />
                                    <input
                                      type="button"
                                      defaultValue="+"
                                      className="plus plus-btn"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <span
                                  className="like-icon save-icon"
                                  title="wishlist"
                                />
                              </li>
                            </ul>
                            <ul className="ordr-crt-share">
                              <li>
                                <button className="add-cart-btn hover-btn">
                                  <i className="uil uil-shopping-cart" alt="" />
                                  Add to Cart
                                </button>
                              </li>
                              <li>
                                <button className="order-btn hover-btn">
                                  Order Now
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div className="pdp-details">
                            <ul>
                              <li>
                                <div className="pdp-group-dt">
                                  <div className="pdp-icon">
                                    <i className="uil uil-usd-circle" />
                                  </div>
                                  <div className="pdp-text-dt">
                                    <span>Lowest Price Guaranteed</span>
                                    <p>
                                      Get difference refunded if you find it
                                      cheaper anywhere else.
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="pdp-group-dt">
                                  <div className="pdp-icon">
                                    <i className="uil uil-cloud-redo" />
                                  </div>
                                  <div className="pdp-text-dt">
                                    <span>Easy Returns &amp; Refunds</span>
                                    <p>
                                      Return products at doorstep and get refund
                                      in seconds.
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="pdpt-bg">
                    <div className="pdpt-title">
                      <h4>More Like This</h4>
                    </div>
                    <div className="pdpt-body scrollstyle_4">
                      <div className="">
                        {!related_product ? (
                          <h1>Loading....</h1>
                        ) : (
                          related_product.map((product) => {
                            return (
                              <>
                                <div
                                  className="cart-item border_radius"
                                  key={product.id}
                                >
                                  <ProductCmp
                                    name={product.name}
                                    id={product.id}
                                    price={product.price}
                                    discount={product.discount}
                                    in_stock={product.in_stock}
                                    product_images={product.product_images}
                                  />
                                </div>
                              </>
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <div className="pdpt-bg">
                    <div className="pdpt-title">
                      <h4>Product Details</h4>
                    </div>
                    <div className="pdpt-body scrollstyle_4">
                      <div className="pdct-dts-1">
                        <div className="pdct-dt-step">
                          <h4>Description</h4>
                          <p>{singleProduct.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section145">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title-tt">
                    <div className="main-title-left">
                      <span>For You</span>
                      <h2>Top Featured Products</h2>
                    </div>
                    <a href="/" className="see-more-btn">
                      See All
                    </a>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="owl-carousel featured-slider owl-theme">
                    {/* <Slider {...settings}> */}

                    <div className="item">
                      <div className="product-item">
                        <a
                          href="single_product_view.html"
                          className="product-img"
                        >
                          <img src="images/product/img-1.jpg" alt="" />
                          <div className="product-absolute-options">
                            <span className="offer-badge-1">6% off</span>
                            <span className="like-icon" title="wishlist" />
                          </div>
                        </a>
                        <div className="product-text-dt">
                          <p>
                            Available<span>(In Stock)</span>
                          </p>
                          <h4>Product Title Here</h4>
                          <div className="product-price">
                            PKR 12 <span>PKR 15</span>
                          </div>
                          <div className="qty-cart">
                            <div className="quantity buttons_added">
                              <input
                                type="button"
                                defaultValue="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step={1}
                                name="quantity"
                                defaultValue={1}
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="plus plus-btn"
                              />
                            </div>
                            <span className="cart-icon">
                              <i className="uil uil-shopping-cart" alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="product-item">
                        <a
                          href="single_product_view.html"
                          className="product-img"
                        >
                          <img src="images/product/img-2.jpg" alt="" />
                          <div className="product-absolute-options">
                            <span className="offer-badge-1">2% off</span>
                            <span className="like-icon" title="wishlist" />
                          </div>
                        </a>
                        <div className="product-text-dt">
                          <p>
                            Available<span>(In Stock)</span>
                          </p>
                          <h4>Product Title Here</h4>
                          <div className="product-price">
                            PKR 10 <span>PKR 13</span>
                          </div>
                          <div className="qty-cart">
                            <div className="quantity buttons_added">
                              <input
                                type="button"
                                defaultValue="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step={1}
                                name="quantity"
                                defaultValue={1}
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="plus plus-btn"
                              />
                            </div>
                            <span className="cart-icon">
                              <i className="uil uil-shopping-cart" alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="product-item">
                        <a
                          href="single_product_view.html"
                          className="product-img"
                        >
                          <img src="images/product/img-3.jpg" alt="" />
                          <div className="product-absolute-options">
                            <span className="offer-badge-1">5% off</span>
                            <span className="like-icon" title="wishlist" />
                          </div>
                        </a>
                        <div className="product-text-dt">
                          <p>
                            Available<span>(In Stock)</span>
                          </p>
                          <h4>Product Title Here</h4>
                          <div className="product-price">
                            PKR 5 <span>PKR 8</span>
                          </div>
                          <div className="qty-cart">
                            <div className="quantity buttons_added">
                              <input
                                type="button"
                                defaultValue="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step={1}
                                name="quantity"
                                defaultValue={1}
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="plus plus-btn"
                              />
                            </div>
                            <span className="cart-icon">
                              <i className="uil uil-shopping-cart" alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="product-item">
                        <a
                          href="single_product_view.html"
                          className="product-img"
                        >
                          <img src="images/product/img-4.jpg" alt="" />
                          <div className="product-absolute-options">
                            <span className="offer-badge-1">3% off</span>
                            <span className="like-icon" title="wishlist" />
                          </div>
                        </a>
                        <div className="product-text-dt">
                          <p>
                            Available<span>(In Stock)</span>
                          </p>
                          <h4>Product Title Here</h4>
                          <div className="product-price">
                            PKR 15 <span>PKR 20</span>
                          </div>
                          <div className="qty-cart">
                            <div className="quantity buttons_added">
                              <input
                                type="button"
                                defaultValue="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step={1}
                                name="quantity"
                                defaultValue={1}
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="plus plus-btn"
                              />
                            </div>
                            <span className="cart-icon">
                              <i className="uil uil-shopping-cart" alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="product-item">
                        <a
                          href="single_product_view.html"
                          className="product-img"
                        >
                          <img src="images/product/img-5.jpg" alt="" />
                          <div className="product-absolute-options">
                            <span className="offer-badge-1">2% off</span>
                            <span className="like-icon" title="wishlist" />
                          </div>
                        </a>
                        <div className="product-text-dt">
                          <p>
                            Available<span>(In Stock)</span>
                          </p>
                          <h4>Product Title Here</h4>
                          <div className="product-price">
                            PKR 9 <span>PKR 10</span>
                          </div>
                          <div className="qty-cart">
                            <div className="quantity buttons_added">
                              <input
                                type="button"
                                defaultValue="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step={1}
                                name="quantity"
                                defaultValue={1}
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="plus plus-btn"
                              />
                            </div>
                            <span className="cart-icon">
                              <i className="uil uil-shopping-cart" alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="product-item">
                        <a
                          href="single_product_view.html"
                          className="product-img"
                        >
                          <img src="images/product/img-5.jpg" alt="" />
                          <div className="product-absolute-options">
                            <span className="offer-badge-1">2% off</span>
                            <span className="like-icon" title="wishlist" />
                          </div>
                        </a>
                        <div className="product-text-dt">
                          <p>
                            Available<span>(In Stock)</span>
                          </p>
                          <h4>Product Title Here</h4>
                          <div className="product-price">
                            PKR 9 <span>PKR 10</span>
                          </div>
                          <div className="qty-cart">
                            <div className="quantity buttons_added">
                              <input
                                type="button"
                                defaultValue="-"
                                className="minus minus-btn"
                              />
                              <input
                                type="number"
                                step={1}
                                name="quantity"
                                defaultValue={1}
                                className="input-text qty text"
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="plus plus-btn"
                              />
                            </div>
                            <span className="cart-icon">
                              <i className="uil uil-shopping-cart" alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </Slider> */}

                    {/* <div className="item">
                                <div className="product-item">
                                    <a href="single_product_view.html" className="product-img">
                                    <img src="images/product/img-5.jpg" alt="" />
                                    <div className="product-absolute-options">
                                        <span className="offer-badge-1">2% off</span>
                                        <span className="like-icon" title="wishlist" />
                                    </div>
                                    </a>
                                    <div className="product-text-dt">
                                    <p>Available<span>(In Stock)</span></p>
                                    <h4>Product Title Here</h4>
                                    <div className="product-price">PKR 9 <span>PKR 10</span></div>
                                    <div className="qty-cart">
                                        <div className="quantity buttons_added">
                                        <input type="button" defaultValue="-" className="minus minus-btn" />
                                        <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                        <input type="button" defaultValue="+" className="plus plus-btn" />
                                        </div>
                                        <span className="cart-icon"><i className="uil uil-shopping-cart" alt="" /></span>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <div className="item">
                                <div className="product-item">
                                    <a href="single_product_view.html" className="product-img">
                                    <img src="images/product/img-6.jpg" alt="" />
                                    <div className="product-absolute-options">
                                        <span className="offer-badge-1">2% off</span>
                                        <span className="like-icon" title="wishlist" />
                                    </div>
                                    </a>
                                    <div className="product-text-dt">
                                    <p>Available<span>(In Stock)</span></p>
                                    <h4>Product Title Here</h4>
                                    <div className="product-price">PKR 7 <span>PKR 8</span></div>
                                    <div className="qty-cart">
                                        <div className="quantity buttons_added">
                                        <input type="button" defaultValue="-" className="minus minus-btn" />
                                        <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                        <input type="button" defaultValue="+" className="plus plus-btn" />
                                        </div>
                                        <span className="cart-icon"><i className="uil uil-shopping-cart" alt="" /></span>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <div className="item">
                                <div className="product-item">
                                    <a href="single_product_view.html" className="product-img">
                                    <img src="images/product/img-7.jpg" alt="" />
                                    <div className="product-absolute-options">
                                        <span className="offer-badge-1">1% off</span>
                                        <span className="like-icon" title="wishlist" />
                                    </div>
                                    </a>
                                    <div className="product-text-dt">
                                    <p>Available<span>(In Stock)</span></p>
                                    <h4>Product Title Here</h4>
                                    <div className="product-price">PKR 6.95 <span>PKR 7</span></div>
                                    <div className="qty-cart">
                                        <div className="quantity buttons_added">
                                        <input type="button" defaultValue="-" className="minus minus-btn" />
                                        <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                        <input type="button" defaultValue="+" className="plus plus-btn" />
                                        </div>
                                        <span className="cart-icon"><i className="uil uil-shopping-cart" alt="" /></span>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <div className="item">
                                <div className="product-item">
                                    <a href="single_product_view.html" className="product-img">
                                    <img src="images/product/img-8.jpg" alt="" />
                                    <div className="product-absolute-options">
                                        <span className="offer-badge-1">3% off</span>
                                        <span className="like-icon" title="wishlist" />
                                    </div>
                                    </a>
                                    <div className="product-text-dt">
                                    <p>Available<span>(In Stock)</span></p>
                                    <h4>Product Title Here</h4>
                                    <div className="product-price">PKR 8 <span>PKR 10</span></div>
                                    <div className="qty-cart">
                                        <div className="quantity buttons_added">
                                        <input type="button" defaultValue="-" className="minus minus-btn" />
                                        <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                                        <input type="button" defaultValue="+" className="plus plus-btn" />
                                        </div>
                                        <span className="cart-icon"><i className="uil uil-shopping-cart" alt="" /></span>
                                    </div>
                                    </div>
                                </div>
                                </div> */}
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
};

export default SingleProduct;
