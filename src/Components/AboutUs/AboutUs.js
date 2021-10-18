import React, { Component, Fragment } from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css"
import GSHeader from "../GSHeader/GSHeader"
import GSFooter from "../GSFooter/GSFooter"
import Logo1 from "../../images/team/img-1.jpg"
import Aboutsvg from "../../images/about.svg"
import Line from "../../images/line.svg"



class AboutUs extends Component {
   
    render() {
        var settings={
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            // speed: 500,
            slidesToShow: 4,
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
                breakpoint: 1411,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 1098,
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
                breakpoint: 860,
                settings: {
                  slidesToShow: 2,
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
        }
        return (
            <Fragment>              
              <section>
                  <header>
                    <GSHeader />
                  </header>
                  {/* slider sec */}
                  {/* slider sec */}
                  {/* About us main banner starts */}
                <div className="wrapper">
                    <div className="default-dt">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                            <div className="title129">
                                <h2>About Us</h2>
{/* <h2>About Us</h2> */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* About us main banner ends */}

                    {/* About Details With Image Section starts */}
                        <div className="life-gambo">
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-6">
                                <div className="default-title left-text">
                                <h2>About</h2>
                                <p>Customers Deserve Better</p>
                                <img src={Line} alt="" />
                                </div>
                                <div className="about-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sodales sapien. Sed pellentesque, quam in ornare tincidunt, magna augue placerat nunc, ut facilisis nibh ipsum non ipsum. Cras ac eros non neque viverra consequat sed at est. Fusce efficitur, lacus nec dignissim tincidunt, diam sapien rhoncus neque, at tristique sapien nibh sed neque. Proin in neque in purus luctus facilisis. Donec viverra ligula quis lorem viverra consequat. Aliquam condimentum id enim volutpat rutrum. Donec semper iaculis convallis. Praesent quis elit eget ligula facilisis mattis. Praesent sed euismod dui. Suspendisse imperdiet vel quam nec venenatis. Suspendisse dictum blandit quam, vitae auctor enim gravida et. Sed id dictum nibh. Proin egestas massa sit amet tincidunt aliquet.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-img">
                                <img src={Aboutsvg} alt="" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div> <br/> <br/>
                        {/* About Details With Image Section ends */}

                        {/* About Team seection starts */}
                            <div className="life-gambo">
                            <div className="container">
                                <div className="row">
                                <div className="col-lg-12">
                                <div className="default-title">
                                  <h2>Our Team</h2>
                                    <p>Teamwork Makes the Dream Work</p>
                                  <img src={Line} alt="" />
                                </div> <br/> <br/>

                                <Slider {...settings}>
                                 <div>
                                    <div className="item">
                                    <div className="team-item">
                                        <div className="team-img">
                                        <img src={Logo1} alt="" />
                                        </div>
                                        <h4>Name</h4>
                                        <span>CEO &amp; Co-Founder</span>
                                    </div>
                                    </div>
                                  </div> 
                                  
                                  <div>
                                    <div className="item">
                                    <div className="team-item">
                                        <div className="team-img">
                                        <img src={Logo1} alt="" />
                                        </div>
                                        <h4>Name</h4>
                                        <span>CEO &amp; Co-Founder</span>
                                    </div>
                                    </div>
                                  </div>

                                  <div>
                                    <div className="item">
                                    <div className="team-item">
                                        <div className="team-img">
                                        <img src={Logo1} alt="" />
                                        </div>
                                        <h4>Name</h4>
                                        <span>CEO &amp; Co-Founder</span>
                                    </div>
                                    </div>
                                  </div>

                                  <div>
                                    <div className="item">
                                    <div className="team-item">
                                        <div className="team-img">
                                        <img src={Logo1} alt="" />
                                        </div>
                                        <h4>Name</h4>
                                        <span>CEO &amp; Co-Founder</span>
                                    </div>
                                    </div>
                                  </div>

                                  <div>
                                    <div className="item">
                                    <div className="team-item">
                                        <div className="team-img">
                                        <img src={Logo1} alt="" />
                                        </div>
                                        <h4>Name</h4>
                                        <span>CEO &amp; Co-Founder</span>
                                    </div>
                                    </div>
                                  </div>

                                  <div>
                                    <div className="item">
                                    <div className="team-item">
                                        <div className="team-img">
                                        <img src={Logo1} alt="" />
                                        </div>
                                        <h4>Name</h4>
                                        <span>CEO &amp; Co-Founder</span>
                                    </div>
                                    </div>
                                  </div>

                                  

                              
      
      {/* <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
    </Slider>

                                    {/* <div className="default-title">
                                    <h2>Our Team</h2>
                                    <p>Teamwork Makes the Dream Work</p>
                                    <img src={Line} alt="" />
                                    </div>
                                    <div className="dd-content">
                                    <div className="owl-carousel team-slider owl-theme">
                                        <div className="item">
                                        <div className="team-item">
                                            <div className="team-img">
                                            <img src={Logo1} alt="" />
                                            </div>
                                            <h4>Name</h4>
                                            <span>CEO &amp; Co-Founder</span>
                                        </div>
                                        </div>
                                        <div className="item">
                                        <div className="team-item">
                                            <div className="team-img">
                                            <img src={Logo1} alt="" />
                                            </div>
                                            <h4>Name</h4>
                                            <span>CTO &amp; Senior Developer</span>
                                        </div>
                                        </div>
                                        <div className="item">
                                        <div className="team-item">
                                            <div className="team-img">
                                            <img src={Logo1} alt="" />
                                            </div>
                                            <h4>Name</h4>
                                            <span>HR Manager</span>
                                        </div>
                                        </div>
                                        <div className="item">
                                        <div className="team-item">
                                            <div className="team-img">
                                            <img src={Logo1} alt="" />
                                            </div>
                                            <h4>Name</h4>
                                            <span>Senior Sales Manager</span>
                                        </div>
                                        </div>
                                    </div>
                                    </div> */}
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* About Team seection ends */}
                     </div>

                     <footer>
                         <GSFooter />
                     </footer>
                </section>
            </Fragment>
        );
    }
}

export default AboutUs;
