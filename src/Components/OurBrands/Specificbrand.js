import React, { useState, useEffect, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Slider from "react-slick"
// import { Link } from "react-router-dom";
// import ProductFormat from '../Layout/ProductFormat'
// import {ProductsArray} from '../Layout/DataSet'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GSHeader from "../GSHeader/GSHeader";
import GSFooter from "../GSFooter/GSFooter";
import BrandPic from "../OurBrands/reckitt.webp";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCmp from '../Shop/ProductCmp'

const Specificbrand = () => {
  const [spf_brand, setBrand] = useState(null);
  const [brand_product , setBrandProduct] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    getBrandData();
    getBrandProduct()
  }, [id]);



  const getBrandData = async () => {
    const res = await axios.get(`/api/web/brand/${id}`);
    console.log(res.data.brand);
    setBrand(res.data.brand);
  };

  const getBrandProduct = async()=>{
    const res = await axios.get(`/api/web/brand-product/${id}`);
    console.log("message",res.data.products);
    setBrandProduct(res.data.products);

  }
  // var ProductSettings={
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 5,
  //     arrows:true,
  //     slidesToScroll: 1
  // }
  return spf_brand === null ? (
    <>Loading....</>
  ) : (
    <Fragment>
      <section>
        <GSHeader />
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-6 ml-4">
              <img
                src={spf_brand.image}
                alt=""
                style={{
                  height: "250px",
                  position: "relative",
                  top: "170px",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </section>{" "}
      <br /> <br />
      {/* Products Related to brand */}
      <div className="container">
        <div className="main-title-tt">
          <div
            className="main-title-left"
            style={{ position: "relative", top: "30px", left: "20px" }}
          >
            {/* <span>For You</span> */}
            {/* <h2>Fruits & Vegetables</h2> */}
          </div>
        </div>
      </div>
      {/* Products Related to brand */}
      <div className="wrapper">
        <div className="all-product-grid">
          <div className="container">
            <div className="product-list-view">
              <div className="row">
              {!brand_product ? <h1>Loading....</h1>:brand_product.map((product) => {
                    return (
                        
                        <>
                      <div className="col-lg-3 col-md-6" key={product.id}>
                        <ProductCmp
                          name={product.name}
                          id={product.id}
                          price={product.price}
                          discount={product.discount}
                          in_stock={product.in_stock}
                          single_main_image={product.single_main_image}
                        />
                        
                      </div>
                      </>
                      
                    );
                    
                  })}

                
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
      </div>
      {/* Products Related to brand */}
      <section>
        <GSFooter />
      </section>
      {/* <h1>hello this is specific brand page</h1> */}
    </Fragment>
  );
};

export default Specificbrand;
