import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css//bootstrap.min.css";
import GSHeader from "../GSHeader/GSHeader";
import GSFooter from "../GSFooter/GSFooter";
import ProductCmp from '../Shop/ProductCmp'

const GetSingleSubCat = () => {
  const [singleSubProduct , setSingleSubCatProduct] = useState([])
  let { id } = useParams();
  
  useEffect(() => {
    getProductData();
  }, [id]);

  const getProductData = async () => {
    const res = await axios.get(`/api/web/subcategory-product/${id}`);
    console.log(res.data.products);
    setSingleSubCatProduct(res.data.products);
  };
  return  (
  
    <Fragment>
      <section>
        <header>
          <GSHeader />
        </header>
        {/* All Products Section Starts */}

        <div className="wrapper">
          {/* breadcrumb section */}
          <div className="gambo-Breadcrumb">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Vegetables &amp; Fruits
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* breadcrumb section */}
          <div className="all-product-grid">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="product-top-dt">
                    <div className="product-left-title">
                      <h2>Vegetables &amp; Fruits</h2>
                    </div>
                    <a href="/" className="filter-btn pull-bs-canvas-right">
                      Filters
                    </a>
                    <div className="product-sort">
                      <div className="input-group mb-3">
                        <select
                          className="form-select ui selection dropdown vchrt-dropdown "
                          id="inputGroupSelect02"
                        >
                          <option selected>Popularity</option>
                          <option value={1}>Price - Low to High</option>
                          <option value={2}>Price - High to Low</option>
                          <option value={3}>Alphabetical</option>
                          <option value={4}>Saving - High to Low</option>
                          <option value={5}>Saving - Low to High</option>
                          <option value={6}>6% Off - High to Low</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list-view">
                <div className="row">
                  {!singleSubProduct ? <h1>Loading....</h1>:singleSubProduct.map((product) => {
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

        <footer>
          <GSFooter />
        </footer>

        {/* All Products Section Ends */}
      </section>
    </Fragment>
  ) 
   
};

export default GetSingleSubCat;
