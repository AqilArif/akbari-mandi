import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const CategoryFormat = ({name,image}) => {
    return (
        <>
    
         <div className="item m-2" style={{'position':'relative','top':'60px','zIndex':'9999','height':'400px','width':'200px','padding':'10px'}}>
            <a href="/" className="category-item">
                <div className="cate-img">
                <img src={image} alt="" style={{'width':'50px'}} />
                </div>
                <h4>{name}</h4>
            </a>
        </div>
       
   
        </>
    )
}

export default CategoryFormat
