import React, { Component, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./OurBrands"
import "./Loader.css"
import GSHeader from "../GSHeader/GSHeader"
import GSFooter from "../GSFooter/GSFooter"
import BrandCmp from './BrandCmp'

// import ProductFormat from '../Layout/ProductFormat';

class OurBrands extends Component {
    constructor(){
        super();
        this.state={
            brands:null
        }
    }
    componentDidMount(){
        fetch('/api/web/brand')
      .then(response => response.json())
      .then(data => this.setState({ brands:data.brands }));
    }
    render() {
        return this.state.brands === null ? 
        // main div for loading starts
        <div className="main-div">
            <div className="loader">
                <span style={{'--i':'1'}}></span>
                <span style={{'--i':'2'}}></span>
                <span style={{'--i':'3'}}></span>
                <span style={{'--i':'4'}}></span>
                <span style={{'--i':'5'}}></span>
                <span style={{'--i':'6'}}></span>
                <span style={{'--i':'7'}}></span>
                <span style={{'--i':'8'}}></span>
                <span style={{'--i':'9'}}></span>
                <span style={{'--i':'10'}}></span>
                <span style={{'--i':'11'}}></span>
                <span style={{'--i':'12'}}></span>
                <span style={{'--i':'13'}}></span>
                <span style={{'--i':'14'}}></span>
                <span style={{'--i':'15'}}></span>
                <span style={{'--i':'16'}}></span>
                <span style={{'--i':'17'}}></span>
                <span style={{'--i':'18'}}></span>
                <span style={{'--i':'19'}}></span>
                <span style={{'--i':'20'}}></span>
            </div>
        </div> :(
            <Fragment>
                <section>
                    <header>
                        <GSHeader />
                    </header>
                </section>

                <section className="header6 text-decoration-none text-center" id="header6-2n">
                    <div className="container align-left">
                        <div className="row justify-content-center">
                        <div className="media-container-column mbr-white col-md-10">
                            <h1 className="mbr-section-title align-center pb-3 mbr-fonts-style" style={{'position':'relative','top':'200px'}}>Clients &amp; Partners</h1> 
                        </div>
                        </div>
                    </div> 
                </section>

                <section className="features3 cid-qKT6knwV2G text-center" id="clients2-2p" style={{'position':'relative','top':'200px'}}>
                    <div className="container mb-4">
                        <div className="media-container-row">
                        <div className="col-12 align-center">
                            <h2 className="mbr-section-title pb-2 mbr-fonts-style ">
                             Our Partners
                            </h2>
                            <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style display-7">
                            Clients for Our Business
                            </h3>
                         
                                                     
                        </div>
                        </div>
                    </div>
                 
                    <div className="container">
                        <div className="row align-center justify-content-center">
                            {
                                this.state.brands ?
                                this.state.brands.map((brand)=>
                                <div className="p-3 col-12 col-md-6 col-lg-3" key={brand.id}>
                                <BrandCmp name={brand.name} image={brand.image} id={brand.id}/>
                                </div>
                          
                                )
                                :
                                null
                            }
                        </div>
                     </div>
                       
                
                    
                       
                  </section>

                  <section>
                      <footer style={{'position':'relative','top':'100px'}}>
                          <GSFooter />
                      </footer>
                  </section>


            </Fragment>
        );
    }
}

export default OurBrands;
