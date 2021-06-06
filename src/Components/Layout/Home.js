import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryFormat from "./CategoryFormat";
import CardFormat from "./CardFormat";
import { CategoryArray, ProductsArray, SliderSet } from "./DataSet";
// import CardFormat from './CardFormat'
import ProductFormat from "./ProductFormat";
// import BestValues from './BestValues'
import GSFooter from "../GSFooter/GSFooter";
// Images Imports  //
import banner1 from "../Layout/banner1.webp";
import banner2 from "../Layout/banner2.webp";
import banner3 from "../Layout/banner3.webp";
import brand1 from "../Layout/nestle.webp";
import brand2 from "../Layout/reckitt.webp";
import brand3 from "../Layout/unilever.webp";
import brand4 from "../Layout/hygiene.webp";
import brand5 from "../Layout/lifebuoy.webp";
import brand6 from "../Layout/dove.webp";
import pic1 from "../Layout/categories/yp1.webp";
import pic2 from "../Layout/categories/yp2.webp";
import pic3 from "../Layout/categories/yp3.webp";
import pic4 from "../Layout/categories/yp4.webp";
import pic5 from "../Layout/categories/veg1.webp";
import pic6 from "../Layout/categories/veg2.webp";
import meat1 from "../Layout/categories/meat1.webp";
import meat2 from "../Layout/categories/meat2.webp";
import meat3 from "../Layout/categories/meat3.webp";
import meat4 from "../Layout/categories/meat4.webp";
import seafood1 from "../Layout/categories/seafood1.webp";
import grocery1 from "../Layout/categories/grocery1.webp";
import grocery2 from "../Layout/categories/grocery2.webp";
import grocery3 from "../Layout/categories/grocery3.webp";
import grocery4 from "../Layout/categories/grocery4.webp";
import pcare1 from "../Layout/categories/pcare1.webp";
import pcare2 from "../Layout/categories/pcare2.webp";
import pcare3 from "../Layout/categories/pcare3.webp";
import pcare4 from "../Layout/categories/pcare4.webp";
import dfruit1 from "../Layout/categories/dfruit1.webp";
import hcare1 from "../Layout/categories/hcare1.webp";
import hcare2 from "../Layout/categories/hcare2.webp";
import hcare3 from "../Layout/categories/hcare3.webp";
import hcare4 from "../Layout/categories/hcare4.webp";
import bcare1 from "../Layout/categories/bcare1.webp";
import bcare2 from "../Layout/categories/bcare2.webp";
import bcare3 from "../Layout/categories/bcare3.webp";
import dairy1 from "../Layout/categories/dairy1.webp";
import dairy2 from "../Layout/categories/dairy2.webp";
import dairy3 from "../Layout/categories/dairy3.webp";
import dairy4 from "../Layout/categories/dairy4.webp";
import beverages1 from "../Layout/categories/beverages1.webp";
import beverages2 from "../Layout/categories/beverages2.webp";
import beverages3 from "../Layout/categories/beverages3.webp";
import beverages4 from "../Layout/categories/beverages4.webp";
import instant1 from "../Layout/categories/yp1.webp";
import instant2 from "../Layout/categories/yp2.webp";
import instant3 from "../Layout/categories/yp3.webp";
import instant4 from "../Layout/categories/yp4.webp";
import frozen1 from "../Layout/categories/frozen1.webp";
import frozen2 from "../Layout/categories/frozen2.webp";
import frozen3 from "../Layout/categories/frozen3.webp";
import frozen4 from "../Layout/categories/frozen3.webp";
import pan1 from "../Layout/categories/pan1.webp";
import pan2 from "../Layout/categories/pan2.webp";
import pan3 from "../Layout/categories/pan3.webp";
import pan4 from "../Layout/categories/pan4.webp";
import pet1 from "../Layout/categories/pet1.webp";
import pet2 from "../Layout/categories/pet2.webp";
// Images Imports  //

class Home extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1008,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
            breakpoint: 1526,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
        },
        {
            breakpoint: 771,
            settings: {
              slidesToShow: 1,
              width: 100,
              slidesToScroll: 1,
            },
        },
        {
          breakpoint: 386,
          settings: {
            slidesToShow: 1,
            width: 100,
            slidesToScroll: 1,
          },
      },
      ],
    };
    var CategorySettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      arrows: true,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1008,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
            breakpoint: 1526,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1182,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
        },
        {
            breakpoint: 771,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
        },
        {
            breakpoint: 390,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
        },
      ],
    };
    var ProductSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      arrows: true,
      slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
            },
            },
            {
            breakpoint: 1008,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
            },
            {
                breakpoint: 1526,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1182,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                },
            },
            {
                breakpoint: 771,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                },
            },
            {
                breakpoint: 390,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                },
            },
        ],
    };

    // ('.single-item').slick();

    return (
      <Fragment>
        <Slider {...settings}>
          {SliderSet.map((slider) => {
            return (
              <CardFormat
                link={slider.link}
                key={slider.id}
                image={slider.image}
                name={slider.name}
                discount={slider.discount}
                category={slider.category}
              />
            );
          })}
        </Slider>
        <div
          className="container"
          style={{ position: "relative", top: "50px" }}
        >
          {/* <div className="main-title-tt">
                    <div className="main-title-left" style={{'position':'relative','top':'60px'}}>
                        <span>Shop By</span>
                        <h2>Categories</h2>
                    </div>
                </div>       */}
          <Slider {...CategorySettings}>
            {CategoryArray.map((category) => {
              return (
                <CategoryFormat
                  key={category.id}
                  name={category.name}
                  image={category.image}
                />
              );
            })}
          </Slider>
        </div>
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", bottom: "40px", left: "20px" }}
            >
              {/* <span>For You</span> */}
              <h2>Super Saver Week</h2>
            </div>
            <Link to="/getall_products">
              <a
                href="/"
                className="see-more-btn"
                style={{ position: "relative", bottom: "20px" }}
              >
                See All
              </a>
            </Link>
          </div>

          <Slider
            {...ProductSettings}
            style={{ position: "relative", bottom: "60px" }}
          >
            {ProductsArray.map((product) => {
              return (
                <ProductFormat
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  discount={product.discount}
                  dprice={product.dprice}
                  stock={product.stock}
                />
              );
            })}
          </Slider>
        </div>
        <div className="container">
          <Slider>
            <div>
              <img src={banner1} alt="" style={{ width: "100%" }} />
            </div>

            <div>
              <img src={banner2} alt="" style={{ width: "100%" }} />
            </div>

            <div>
              <img src={banner3} alt="" style={{ width: "100%" }} />
            </div>
          </Slider>
        </div>
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "20px" }}
            >
              {/* <span>For You</span> */}
              <h2>Featured Products</h2>
            </div>
          </div>

          <Slider
            {...ProductSettings}
            style={{ position: "relative", bottom: "-10px" }}
          >
            {ProductsArray.map((product) => {
              return (
                <ProductFormat
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  discount={product.discount}
                  dprice={product.dprice}
                  stock={product.stock}
                />
              );
            })}
          </Slider>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 ml-3">
              <div>
                <img src={banner3} alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "20px" }}
            >
              {/* <span>For You</span> */}
              <h2>Fruits & Vegetables</h2>
            </div>
          </div>

          <Slider
            {...ProductSettings}
            style={{ position: "relative", bottom: "-10px" }}
          >
            {ProductsArray.map((product) => {
              return (
                <ProductFormat
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  discount={product.discount}
                  dprice={product.dprice}
                  stock={product.stock}
                />
              );
            })}
          </Slider>
        </div>
        {/* 
                <div className="container" style={{'display':'flex','position':'sticky'}} >

                <div className="main-title-tt">
                    <div className="main-title-left">
                        <span>Offers</span>
                        <h2>Best Values</h2>
                    </div>
                </div>
                    {BestValuesArray.map((Best)=>{
                        return <BestValues key={Best.id} image={Best.image} />
                    })}
                </div> */}
        {/* <div className="container">
                <div className="main-title-tt">
                    <div className="main-title-left">
                        <span>For You</span>
                        <h2>New Products</h2>
                    </div>
                    <a href="/" className="see-more-btn">See All</a>
                 </div>

                 <Slider {...ProductSettings} >
                {ProductsArray.map((product)=>{
                    return <ProductFormat key={product.id} name={product.name} image={product.image} discount={product.discount} dprice={product.dprice} stock={product.stock}/>
                })}
                </Slider>
                </div> */}
        {/* Top Brands Section */}
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "60px" }}
            >
              {/* <span>For You</span> */}
              <h2>Top Brands</h2>
            </div>
          </div>{" "}
          <br />
          <div className="row ml-5">
            <div className="col-md-4">
              <div>
                <img
                  src={brand1}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Nestle
              </h5>
            </div>

            <div className="col-md-4">
              <Link to="/reckitt_brand">
                <div>
                  <img
                    src={brand2}
                    alt=""
                    style={{ width: "80%", cursor: "pointer" }}
                  />
                </div>
              </Link>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Reckitt
              </h5>
            </div>

            <div className="col-md-4">
              <div>
                <img
                  src={brand3}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Unilever
              </h5>
            </div>
          </div>{" "}
          <br /> <br />
          <div className="row ml-5">
            <div className="col-md-4">
              <div>
                <img
                  src={brand4}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                RB Hygiene Home
              </h5>
            </div>

            <div className="col-md-4">
              <div>
                <img
                  src={brand5}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                LifeBuoy
              </h5>
            </div>

            <div className="col-md-4">
              <div>
                <img
                  src={brand6}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Dove By Unilever
              </h5>
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        {/* Top brands Section */}
        {/* young people */}
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "60px" }}
            >
              {/* <span>For You</span> */}
              <h2>Young People Buy</h2>
            </div>
          </div>{" "}
          <br />
          <div className="row ml-5">
            <div className="col-md-3">
              <div>
                <img
                  src={pic1}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chocolates
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={pic2} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chips & Nimko
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={pic3} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Biscuits & Cookies
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={pic4} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Cold Drinks
              </h5>
            </div>
          </div>
        </div>
        {/* young people */}
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "20px" }}
            >
              {/* <span>For You</span> */}
              <h2>Daalain, Rice & Flour</h2>
            </div>
          </div>

          <Slider
            {...ProductSettings}
            style={{ position: "relative", bottom: "-10px" }}
          >
            {ProductsArray.map((product) => {
              return (
                <ProductFormat
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  discount={product.discount}
                  dprice={product.dprice}
                  stock={product.stock}
                />
              );
            })}
          </Slider>
        </div>
        {/* Fruits & Veg Category */}
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "60px" }}
            >
              {/* <span>For You</span> */}
              <div>
                <h2>Fruits & Vegetables</h2>
                <p style={{ color: "rgb(0 0 -1 / 0.54)" }}>
                  Fruits, Vegetables, Potato, Tomato, Brocoli, Onion, Banana
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="row ml-5">
            <div className="col-md-3">
              <div>
                <img
                  src={pic5}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chocolates
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={pic6} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chips & Nimko
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={pic5} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Biscuits & Cookies
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={pic6} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Cold Drinks
              </h5>
            </div>
          </div>
        </div>
        {/* Fruits & Veg Category */}
        {/* Fresh Meat */}
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "60px" }}
            >
              {/* <span>For You</span> */}
              <div>
                <h2>Fresh Meat</h2>
                <p style={{ color: "rgb(0 0 -1 / 0.54)" }}>
                  Mutton, Beef, Chicken, Fish
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="row ml-5">
            <div className="col-md-3">
              <div>
                <img
                  src={meat1}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chocolates
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={meat2} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chips & Nimko
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={meat3} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Biscuits & Cookies
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={meat4} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Cold Drinks
              </h5>
            </div>
          </div>
        </div>
        {/* Fresh Meat */}
        {/* Fish & Seafood */}
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "60px" }}
            >
              {/* <span>For You</span> */}
              <div>
                <h2>Fish & Seafood</h2>
                <p style={{ color: "rgb(0 0 -1 / 0.54)" }}>
                  Boneless fish, Prawns, Fish
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="row ml-5">
            <div className="col-md-3">
              <div>
                <img
                  src={seafood1}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chocolates
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={seafood1} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chips & Nimko
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={seafood1} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Biscuits & Cookies
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={seafood1} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Cold Drinks
              </h5>
            </div>
          </div>
        </div>
        {/* Fish & Seafood */}
        {/* Grocery Category */}
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "60px" }}
            >
              {/* <span>For You</span> */}
              <div>
                <h2>Grocery</h2>
                <p style={{ color: "rgb(0 0 -1 / 0.54)" }}>
                  Oil, Daalain, Spices & Herbs, Flour, Jams, Sauces, Desserts,
                  Olives, Pickels
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="row ml-5">
            <div className="col-md-3">
              <div>
                <img
                  src={grocery1}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chocolates
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={grocery2} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chips & Nimko
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={grocery3} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Biscuits & Cookies
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={grocery4} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Cold Drinks
              </h5>
            </div>
          </div>
        </div>
        {/* Grocery Category */}
        {/* Personal Care Category */}
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "60px" }}
            >
              {/* <span>For You</span> */}
              <div>
                <h2>Personal Care</h2>
                <p style={{ color: "rgb(0 0 -1 / 0.54)" }}>
                  Shampoo, Conditioner, Female Hygiene, Soap, Body Spray, Hand
                  Wash, Lotion, Creams, Razors, Gel
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="row ml-5">
            <div className="col-md-3">
              <div>
                <img
                  src={pcare1}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chocolates
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={pcare2} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chips & Nimko
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={pcare3} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Biscuits & Cookies
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={pcare4} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Cold Drinks
              </h5>
            </div>
          </div>
        </div>
        {/* Personal Care Category */}
        {/* Dry Fruits Category */}
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "60px" }}
            >
              {/* <span>For You</span> */}
              <div>
                <h2>Dry Fruit & Nuts</h2>
                <p style={{ color: "rgb(0 0 -1 / 0.54)" }}>
                  Peanuts, cashew nuts, almonds etc
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="row ml-5">
            <div className="col-md-3">
              <div>
                <img
                  src={dfruit1}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chocolates
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={dfruit1} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chips & Nimko
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={dfruit1} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Biscuits & Cookies
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={dfruit1} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Cold Drinks
              </h5>
            </div>
          </div>
        </div>
        {/* Dry Fruits Category */}
        {/* Home Care */}
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "60px" }}
            >
              {/* <span>For You</span> */}
              <div>
                <h2>Home Care</h2>
                <p style={{ color: "rgb(0 0 -1 / 0.54)" }}>
                  Cleaners, Detergents, Tissue, Repellents, Laundry
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="row ml-5">
            <div className="col-md-3">
              <div>
                <img
                  src={hcare1}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chocolates
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={hcare2} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chips & Nimko
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={hcare3} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Biscuits & Cookies
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={hcare4} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Cold Drinks
              </h5>
            </div>
          </div>
        </div>
        {/* Home Care */}
        {/* Baby Care */}
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "60px" }}
            >
              {/* <span>For You</span> */}
              <div>
                <h2>Baby Care</h2>
                <p style={{ color: "rgb(0 0 -1 / 0.54)" }}>
                  Diapers, Lotions, Baby Food
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="row ml-5">
            <div className="col-md-3">
              <div>
                <img
                  src={bcare1}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chocolates
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={bcare2} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chips & Nimko
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={bcare3} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Biscuits & Cookies
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={bcare1} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Cold Drinks
              </h5>
            </div>
          </div>
        </div>
        {/* Baby Care */}
        {/* Bakery & Dairy */}
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "60px" }}
            >
              {/* <span>For You</span> */}
              <div>
                <h2>Bakery & Dairy</h2>
                <p style={{ color: "rgb(0 0 -1 / 0.54)" }}>
                  Milk, Butter, Cheese, Bread
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="row ml-5">
            <div className="col-md-3">
              <div>
                <img
                  src={dairy1}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chocolates
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={dairy2} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chips & Nimko
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={dairy3} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Biscuits & Cookies
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={dairy4} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Cold Drinks
              </h5>
            </div>
          </div>
        </div>
        {/* Bakery & Dairy */}
        {/* Beverages */}
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "60px" }}
            >
              {/* <span>For You</span> */}
              <div>
                <h2>Beverages</h2>
                <p style={{ color: "rgb(0 0 -1 / 0.54)" }}>
                  Tea, Cold Drinks, Sharbat, Juices, Energy Drinks, Instant
                  Drinks
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="row ml-5">
            <div className="col-md-3">
              <div>
                <img
                  src={beverages1}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chocolates
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={beverages2} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chips & Nimko
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={beverages3} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Biscuits & Cookies
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={beverages4} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Cold Drinks
              </h5>
            </div>
          </div>
        </div>
        {/* Beverages */}
        {/* Instant Food */}
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "60px" }}
            >
              {/* <span>For You</span> */}
              <div>
                <h2>Instant Food</h2>
                <p style={{ color: "rgb(0 0 -1 / 0.54)" }}>
                  Biscuits, Noodles, Chocolates, Nimko
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="row ml-5">
            <div className="col-md-3">
              <div>
                <img
                  src={instant1}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chocolates
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={instant2} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chips & Nimko
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={instant3} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Biscuits & Cookies
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={instant4} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Cold Drinks
              </h5>
            </div>
          </div>
        </div>
        {/* Instant Food */}
        {/* Frozen & Chilled */}
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "60px" }}
            >
              {/* <span>For You</span> */}
              <div>
                <h2>Frozen & Chilled</h2>
                <p style={{ color: "rgb(0 0 -1 / 0.54)" }}>
                  Burger Pattie, Nuggets, Kabab, Frozen Desserts
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="row ml-5">
            <div className="col-md-3">
              <div>
                <img
                  src={frozen1}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chocolates
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={frozen2} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chips & Nimko
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={frozen3} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Biscuits & Cookies
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={frozen4} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Cold Drinks
              </h5>
            </div>
          </div>
        </div>
        {/* Frozen & Chilled */}
        {/* Pan Shop */}
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "60px" }}
            >
              {/* <span>For You</span> */}
              <div>
                <h2>Pan Shop</h2>
                <p style={{ color: "rgb(0 0 -1 / 0.54)" }}>
                  Cigarettes, Cigars, Lighters, Mobile Cards
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="row ml-5">
            <div className="col-md-3">
              <div>
                <img
                  src={pan1}
                  alt=""
                  style={{ width: "80%", cursor: "pointer" }}
                />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chocolates
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={pan2} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chips & Nimko
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={pan3} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Biscuits & Cookies
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={pan4} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Cold Drinks
              </h5>
            </div>
          </div>
        </div>
        {/* Pan Shop */}
        {/* Pet Care */}
        <div className="container">
          <div className="main-title-tt">
            <div
              className="main-title-left"
              style={{ position: "relative", top: "30px", left: "60px" }}
            >
              {/* <span>For You</span> */}
              <div>
                <h2>Pet Care</h2>
                <p style={{ color: "rgb(0 0 -1 / 0.54)" }}>
                  Cat Food, Dog Food
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="row ml-5">
            <div className="col-md-3">
              <div>
                <Link to="spfc_ctrg">
                  <img
                    src={pet1}
                    alt=""
                    style={{ width: "80%", cursor: "pointer" }}
                  />
                </Link>
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chocolates
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={pet2} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Chips & Nimko
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={pet1} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Biscuits & Cookies
              </h5>
            </div>

            <div className="col-md-3">
              <div>
                <img src={pet2} alt="" style={{ width: "80%" }} />
              </div>
              <h5
                className="text-center mr-5 mt-2"
                style={{
                  position: "relative",
                  right: "15px",
                  color: "rgb(0 0 -1 / 0.54)",
                  cursor: "pointer",
                }}
              >
                Cold Drinks
              </h5>
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        {/* Pet Care */}
        <section>
          <GSFooter />
        </section>
      </Fragment>
    );
  }
}

export default Home;
