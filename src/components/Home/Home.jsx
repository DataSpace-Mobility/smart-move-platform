import React from 'react';

import './Home.scss';

import Hero from './hero.svg'
import PartnerLogos from './partner-logos.png'
import Timeline from './timeline.svg'
import Logo from './smart-move-logo.svg'

function Home() {
    return(
        <section className="Home">
            <section className="Header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 social-media extra-padding">1</div>
                        <div className="col-md-8"></div>
                        <div className="col-md-2 reg-link extra-padding"><a href="https://hack.dataspace.mobi">REGISTRATION</a></div>
                    </div>
                    <div className="row bottom-bar">
                        <div className="col-md-12">
                            <ul>
                                <li><a href="/">HOME</a></li>
                                <li><a href="/">GUIDELINES</a></li>
                                <li><a href="/">JURY</a></li>
                                <li><a href="/">WINNERS</a></li>
                                <li><a href="/">PARTNERS</a></li>
                                <li><a href="/">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={Hero} alt=""/>
                        </div>
                        <div className="col-md-7 hero-text">
                            <h1>JOIN THE GLOBAL CALL TO REIMAGINE MOBILITY IN INDIAN CITIES</h1>
                            <img src={PartnerLogos} alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about">
                <div className="container">
                    <p>Do you think you can solve India’s most complex urban mobility challenges? Let’s bring your ideas from the drawing board to reality! </p>
                    <p>Collaborate with multidisciplinary teams and co-create data-powered sustainable digital solutions to reimagine the way we walk, run, cycle, ride, drive and transit through our cities. </p>
                    <p>Keep in mind the principles of Atma Nirbhar Bharat, Digital India and DataSmart Cities to unlock innovation through co-creation. </p>
                    <p>SMART MOVE Innovative Urban Mobility Challenge is an initiative by the Ministry of Housing and Urban Affairs supported by the Smart Cities Mission, the National Institute of Urban Affairs and GIZ India. </p>
                
                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/daV9J5zhftw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

            <section className="invite-button">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 compete">
                            <button className="compete-text">COMPETE IN THE CHALLENGE</button>
                        </div>
                        <div className="col-md-6 data-partner">
                            <button className="data-partner-text">BECOME A DATA PARTNER</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="unlock container">
                <div className="heading">
                    <h1>UNLOCK INNOVATION</h1>
                </div>

                <div className="row unlock-item">
                    <div className="col-md-4">
                        <div className="heading-box heading-box-yellow">
                            <h1 class="big">1</h1>
                            <h1>RESTORING PUBLIC TRANSPORT RIDERSHIP</h1>
                        </div>
                    </div>
                    <div className="col-md-8 align-left">
                        <p className="themes">COVID-19 recovery</p>
                        <p className="themes">Cost-effective solutions</p>
                        <p>Never waste a crisis. Innovate with tech-driven solutions to leapfrog today’s transport systems into the post-pandemic era. Keep in mind the need to remain cost-effective while also fulfilling every commuter’s aspiration for safer public transit.</p>
                    </div>
                </div>

                <div className="row unlock-item">
                    <div className="col-md-8 align-right">
                        <p className="themes">Multi-modal integration</p>
                        <p className="themes">Sustainable transport modes</p>
                        <p>Build data-powered solutions to reimagine our streets equitably with adequate space for pedestrians, cyclists and other paratransit modes. Follow through with a holistic plan to ensure multi-modal integration and shift towards sustainable transport.</p>
                    </div>
                    <div className="col-md-4">
                        <div className="heading-box heading-box-blue">
                            <h1 class="big">2</h1>
                            <h1>ACHIEVING SUSTAINABLE TRANSPORT AND RESILIENCE</h1>
                        </div>
                    </div>
                </div>

                <div className="row unlock-item">
                    <div className="col-md-4">
                        <div className="heading-box heading-box-red">
                            <h1 class="big">3</h1>
                            <h1>EQUITY IN MOBILITY</h1>
                        </div>
                    </div>
                    <div className="col-md-8 align-left">
                        <p className="themes">Gender and safety</p>
                        <p className="themes">Inclusivity and efficiency improvement</p>
                        <p>The city is for one and all. Look at urban mobility through the lens of the differently-abled, women and children, the young and the old, the rich and the poor, and ideate for safer, more inclusive and efficient transportation.</p>
                    </div>
                </div>

            </section>

            <section className="reward">
                <div className="container">
                    <div className="heading heading-yellow heading-center">
                        <h1>REWARDS AND RECOGNITION</h1>
                    </div>
                    <br/>
                    <p>Rewards worth</p>
                    <h1 className="prize-money"><span>₹</span> 20,00,000</h1>
                    <p>The top 3 proposals will be provided contracts jointly worth ₹ 20,00,000 with a minimum contract value of ₹ 5,00,000. Additionally, the winning teams will have an opportunity to present their solution to Smart Cities Mission, Government of India. </p>
                </div>
            </section>

            <section className="timeline">
                <div className="container">
                    <div className="heading heading-black heading-center">
                        <h1>JOURNEY</h1>
                    </div>
                    <img src={Timeline} alt=""/>
                </div>
            </section>


            <section className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={Logo} alt=""/>
                        </div>
                        <div className="col-md-6">
                            <small>For more details, contact us at: <b>smartmove@niua.org</b></small>
                            <small>National Institute of Urban Affairs, 1st and 2nd Floor, Core 4B, India Habitat Centre, Lodhi Road, New Delhi</small>
                            <small>The SMART MOVE Challenge is a part of the Indian-German Green Urban Mobility Partnership</small>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </section>


            
        </section>
    )
}

export default Home; 