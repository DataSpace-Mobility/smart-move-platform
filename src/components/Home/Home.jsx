import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Home.scss';

import Hero from './hero.svg'
import PartnerLogos from './partner-logos.png'
import Timeline from './timeline.svg'

function Home() {
    return(
        <section className="Home">
            
            <Header/>

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
                
                    <iframe width="100%" height="500px" title="Launch Video" src="https://www.youtube.com/embed/vwHQo5ywPCo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

                <p className="align-left">Calling all creatives, techies, entrepreneurs and philosophers! Put on your thinking caps, ideate, innovate and share with us a brief concept note on any of the following themes. </p>

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


            <Footer/>


            
        </section>
    )
}

export default Home; 