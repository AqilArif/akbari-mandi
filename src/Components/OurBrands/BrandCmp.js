import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const BrandCmp = ({ name, image, id }) => {
  return (
    <Fragment>
      <Link to={`specific_brand/${id}`}>
        <div className="client-wrapper" style={{'cursor':'pointer'}}>
          <div className="wrap-img">
            <img
              src={image}
              className="img-responsive clients-img"
              alt=""
              width="100"
            />
          </div>

          <div className="card-box">
            <h3 className="client-name text-success mbr-fonts-style display-5">{name}</h3>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default BrandCmp;
