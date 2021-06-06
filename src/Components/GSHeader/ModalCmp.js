import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const ModalCmp = ({item:{name ,image}}) => {
    return (
        <>
            <li>
                                <a href="/" className="single-cat-item">
                                <div className="icon">
                                    <img src={image} alt="" />
                                </div>
                                <div className="text"> {name} </div>
                                </a>
                            </li>
        </>
    
    )
}

export default ModalCmp