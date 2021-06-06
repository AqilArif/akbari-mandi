import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const BrandsProducts = ({image,name,discount,dprice,stock}) => {
    return (
        <Fragment>
              <div className="item mb-5" style={{'position':'relative','top':'0px','zIndex':'9999','width':'250px','padding':'15px' }}>
            <div className="product-item">
                <a href="/" className="product-img">
                <img src={image} alt="" />
                <div className="product-absolute-options">
                    <span className="offer-badge-1">{discount}% off</span>
                    <span className="like-icon" title="wishlist" />
                </div>
                </a>
                <div className="product-text-dt">
                <p>{stock===0 ?<>Available in Stock</>:<>Not Available in stock</>}</p>
                <h4>{name}</h4>
                <div className="product-price">{dprice}</div>
                <div className="qty-cart">
                    <div className="quantity buttons_added">
                    <input type="button" defaultValue="-" className="minus minus-btn" />
                    <input type="number" step={1} name="quantity" defaultValue={1} className="input-text qty text" />
                    <input type="button" defaultValue="+" className="plus plus-btn" />
                    </div>
                    <span className="cart-icon"><i className="uil uil-shopping-cart-alt=" /></span>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default BrandsProducts
