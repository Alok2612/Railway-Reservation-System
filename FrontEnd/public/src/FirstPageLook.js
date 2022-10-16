import React from 'react'
import PnrSearch from './components/SearchTrain/PnrSearch';
import SearchTrainForm from './components/SearchTrain/SearchTrainForm';
import img1 from "./img/place-01.jpg";
import img2 from "./img/place-02.jpg";
import img3 from "./img/place-03.jpg";
import img4 from "./img/place-04.jpg";
import logo from "./img/Rlogo.png";
import "./App.css"




 const FirstPageLook = () => {
  return (
    <div>
    <section className="banner" id="top">
        <div className="container">
            <div className="row">
                  <div className="col-md-5"> 
                    <div style={{marginRight: "10px"}} className="left-side">
                        <div class="logo">
                             <img src={logo} alt="Flight Template"/> 
                        </div> 
                        <div >
                            <h1 style={{color: "yellow", fontSize: "75px" ,fontStretch: "extra-condensed" }}>Railway</h1>
                            </div>
                        <div className="tabs-content">
                            <ul className='social-links'>
                              <PnrSearch/> 
                            </ul>
                        </div>
                        <div className="page-direction-button">
                            <a href="/Contact"><i class="phone volume icon"></i>Contact Us Now</a>
                        </div>
                    </div>
                </div> 
                <div  style={{marginLeft: "150px"}} className="col-md-5 col-md-offset-1">
                    <section id="first-tab-group" className="tabgroup">
                        <div id="tab1">
                            <div style={{width: "110%"}} className="submit-form">
                                <h4>Check availability for <em>Train</em>:</h4>
                                <form  id="form-submit" >
                                    <SearchTrainForm/>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>

{/* from here there is a toolplate for which I am going to work now */}

<section className="services">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="service-item first-service">
                        <div className="service-icon"></div>
                        <h4>Easy Tooplate</h4>
                        <p>Reserve your railway tickets with us! Check the train schedule before you leave.</p>
                        <a/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-item second-service">
                        <div className="service-icon"></div>
                        <h4>Unique Ideas</h4>
                        <p>Stay at the best hotels under our flagship. Enjoy fresh and healthy food with every train journey.</p>
                        <a/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-item third-service">
                        <div className="service-icon"></div>
                        <h4>Best Support</h4>
                        <p> Visit the heritage sights . For any issues contact us and we will get back to you at the
              earliest</p>
                        <a/>
                    </div>
                </div>
            </div>
        </div>
    </section>




{/* this is for the creating the view of the landing page showing some beautiful places
<section id="most-visited">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">
                        <h2>Most Visited Places</h2>
                    </div>
                </div>
                <div class="col-md-12">Name
                    <div id="owl-mostvisited" class="owl-carousel owl-theme">
                        <div class="item col-md-12">
                            <div class="visited-item">
                                <img src={img1} alt=""/>
                                <div class="text-content">
                                    <h4>River Views</h4>
                                    <span>New York</span>
                                </div>
                            </div>
                        </div>
                        <div class="item col-md-12">
                            <div class="visited-item">
                                <img src={img2} alt=""/>
                                <div class="text-content">
                                    <h4>Lorem ipsum dolor</h4>
                                    <span>Tokyo</span>
                                </div>
                            </div>
                        </div>
                        <div class="item col-md-12">
                            <div class="visited-item">
                                <img src={img3} alt=""/>
                                <div class="text-content">
                                    <h4>Proin dignissim</h4>
                                    <span>Paris</span>
                                </div>
                            </div>
                        </div>
                        <div class="item col-md-12">
                            <div class="visited-item">
                                <img src={img4} alt=""/>
                                <div class="text-content">
                                    <h4>Fusce sed ipsum</h4>
                                    <span>Hollywood</span>
                                </div>
                            </div>
                        </div>
                        <div class="item col-md-12">
                            <div class="visited-item">
                                <img src={img3} alt=""/>
                                <div class="text-content">
                                    <h4>Vivamus egestas</h4>
                                    <span>Tokyo</span>
                                </div>
                            </div>
                        </div>
                        <div class="item col-md-12">
                            <div class="visited-item">
                                <img src={img2} alt=""/>
                                <div class="text-content">
                                    <h4>Aliquam elit metus</h4>
                                    <span>New York</span>
                                </div>
                            </div>
                        </div>
                        <div class="item col-md-12">
                            <div class="visited-item">
                                <img src={img1} alt=""/>
                                <div class="text-content">
                                    <h4>Phasellus pharetra</h4>
                                    <span>Paris</span>
                                </div>
                            </div>
                        </div>
                        <div class="item col-md-12">
                            <div class="visited-item">
                                <img src={img2}alt=""/>
                                <div class="text-content">
                                    <h4>In in quam efficitur</h4>
                                    <span>Hollywood</span>
                                </div>
                            </div>
                        </div>
                        <div class="item col-md-12">
                            <div class="visited-item">
                                <img src={img3} alt=""/>
                                <div class="text-content">
                                    <h4>Sed faucibus odio</h4>
                                    <span>NEW YORK</span>
                                </div>
                            </div>
                        </div>
                        <div class="item col-md-12">
                            <div class="visited-item">
                                <img src={img4} alt=""/>
                                <div class="text-content">
                                    <h4>Donec varius porttitor</h4>
                                    <span>Tokyo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}





   
</div>
  )
}

export default FirstPageLook;
