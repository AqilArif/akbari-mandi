import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Link ,BrowserRouter as Router} from 'react-router-dom'

function CardFormat({name,image,discount,category }) {
    // const {name,image,discount,category} = props
    return (
        <>
        <Router>
        <Link to='/'>
          <div className="item m-2" style={{'position':'relative','top':'160px','zIndex':'9999','height':'400px','width':'400px','padding':'14px'}}>
                <div className="offer-item">
                    <div className="offer-item-img">
                    <div className="gambo-overlay" />
                    <img src={image} alt="" />
                    </div>
                    <div className="offer-text-dt">
                    <div className="offer-top-text-banner">
                        <p style={{color: '#28a745', fontSize: 'medium', fontWeight: 800}}>{discount}% Off</p>
                        <div className="top-text-1">{name}</div>
                        <span>{category}</span>
                    </div>
                    <a href="/" className="Offer-shop-btn hover-btn">Shop Now</a>
                    </div>
                </div>
                </div>   </Link>
                </Router>
        </>
    )
}
export default CardFormat
