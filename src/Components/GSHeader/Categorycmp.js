import React from "react";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Categorycmp = ({ name, image, id }) => {
  return (
    <Fragment>
      <li>
        <Link to={`/spfc_ctrg/${id}`} className="single-cat-item">
          <div className="icon">
            <img src={image} alt="" />
          </div>
          <div className="text"> {name} </div>
        </Link>
      </li>
    </Fragment>
  );
};

export default Categorycmp;
