import React, { Fragment } from "react";
import "bootstrap/dist/css//bootstrap.min.css";
import { Link } from "react-router-dom";
import ProductImage from './ProductImg'

const ProductCmp = ({ name, price, discount, in_stock, id,single_main_image }) => {
  return (
    <Fragment>
      <div className="product-item mb-30">
        <Link to={`/product/single_product/${id}`}>
          <a href="single_product.html" className="product-img">
         \<ProductImage  image={single_main_image}/>
           
            <div className="product-absolute-options">
              <span className="offer-badge-1">{discount}% off</span>
              <span className="like-icon" title="wishlist" />
            </div>
          </a>
        </Link>
        <div className="product-text-dt">
          {in_stock === true ? (
            <p>
              Available<span>(In Stock)</span>
            </p>
          ) : (
            <p>
            Not Available<span>(Out of Stock)</span>
          </p>
          )}

          <h4>{name}</h4>
          <div className="product-price">
            {(price - price * (discount / 100)).toFixed()} <span>{price}</span>
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
              <input type="button" defaultValue="+" className="plus plus-btn" />
            </div>
            <span className="cart-icon">
              <i className="uil uil-shopping-cart=" alt="" />
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};



export default ProductCmp;
