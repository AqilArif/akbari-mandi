import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const BestValues = ({image}) => {
    return (
        <>
         <div className="col-lg-4 col-md-6" style={{'position':'relative','bottom':'80px','zIndex':'9999','width':'250px','padding':'15px'}} >
            <a href="/" className="best-offer-item">
                <img src={image} alt="" />
            </a>
         </div>
   
        </>
    )
}

export default BestValues
